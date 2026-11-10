import {
  parseFilterValues,
  filterItems,
  sortItems,
  paginateItems,
  isInvertedDateRange,
  swapViewClasses,
  type ListItemRecord,
} from "../utils/list.ts";
import { scrollBehavior } from "./page-lifecycle.ts";

// ── Shared list-manager module ──
// Provides filter, sort, paginate, and view-toggle logic
// used by both ProjectsManager and BlogManager.

export interface ListManagerConfig {
  containerId: string;
  cardSelector: string;
  searchInputId: string;
  sortSelectId: string;
  filterBtnSelector: string;
  filterAttr: string;
  gridBtnId: string;
  listBtnId: string;
  noResultsId: string;
  paginationId: string;
  itemsPerPage?: number;

  // CSS class sets for grid/list view toggling
  gridContainerClass: string;
  listContainerClass: string;
  gridCardClass: string;
  listCardClass: string;
  gridFigureClass: string;
  listFigureClass: string;
  gridBodyClass: string;
  listBodyClass: string;
  gridFooterClass: string;
  listFooterClass: string;

  // Selectors for card child elements
  figureSelector: string;
  bodySelector: string;
  footerSelector: string;

  // Optional: featured items always first (default when sorting by relevance)
  hasFeatured?: boolean;

  // Optional: date range filtering elements
  dateRangeSelectId?: string;
  customDateContainerId?: string;
  startDateInputId?: string;
  endDateInputId?: string;
  dateErrorId?: string;
}

export function initListManager(
  config: ListManagerConfig,
  signal: AbortSignal,
) {
  const {
    containerId,
    cardSelector,
    searchInputId,
    sortSelectId,
    filterBtnSelector,
    filterAttr,
    gridBtnId,
    listBtnId,
    noResultsId,
    paginationId,
    itemsPerPage = 10,
    gridContainerClass,
    listContainerClass,
    gridCardClass,
    listCardClass,
    gridFigureClass,
    listFigureClass,
    gridBodyClass,
    listBodyClass,
    gridFooterClass,
    listFooterClass,
    figureSelector,
    bodySelector,
    footerSelector,
    hasFeatured = false,
    dateRangeSelectId,
    customDateContainerId,
    startDateInputId,
    endDateInputId,
    dateErrorId,
  } = config;

  const container = document.getElementById(containerId);
  const noResults = document.getElementById(noResultsId);
  const paginationControls = document.getElementById(paginationId);
  const allCards = Array.from(
    container?.querySelectorAll(cardSelector) || [],
  ) as HTMLElement[];

  const records: ListItemRecord<HTMLElement>[] = allCards.map((card) => ({
    item: card,
    name: card.dataset.name || "",
    description: card.dataset.description || "",
    tech: card.dataset.tech || "",
    tags: card.dataset.tags || "",
    filterValues: parseFilterValues(card.getAttribute(filterAttr) || ""),
    featured: card.dataset.featured === "true",
    date: card.dataset.date || "",
  }));

  const searchInput = document.getElementById(
    searchInputId,
  ) as HTMLInputElement | null;
  const sortSelect = document.getElementById(
    sortSelectId,
  ) as HTMLSelectElement | null;
  const filterButtons = document.querySelectorAll(
    filterBtnSelector,
  ) as NodeListOf<HTMLElement>;
  const gridBtn = document.getElementById(gridBtnId);
  const listBtn = document.getElementById(listBtnId);

  const dateRangeSelect = dateRangeSelectId
    ? (document.getElementById(dateRangeSelectId) as HTMLSelectElement | null)
    : null;
  const customDateContainer = customDateContainerId
    ? document.getElementById(customDateContainerId)
    : null;
  const startDateInput = startDateInputId
    ? (document.getElementById(startDateInputId) as HTMLInputElement | null)
    : null;
  const endDateInput = endDateInputId
    ? (document.getElementById(endDateInputId) as HTMLInputElement | null)
    : null;
  const dateErrorEl = dateErrorId ? document.getElementById(dateErrorId) : null;

  const initialParams = new URL(location.href).searchParams;
  const defaultSort = sortSelect ? sortSelect.value : "date-desc";
  let currentView = "grid";
  let currentFilter = initialParams.get("filter") || "all";
  let currentSort = initialParams.get("sort") || defaultSort;
  if (sortSelect && initialParams.get("sort")) {
    const hasOption = Array.from(sortSelect.options).some(
      (opt) => opt.value === currentSort,
    );
    if (hasOption) sortSelect.value = currentSort;
    else currentSort = defaultSort;
  }
  let searchQuery = initialParams.get("q")?.trim() || "";
  if (searchInput) searchInput.value = searchQuery;
  const initialPage = Number.parseInt(initialParams.get("page") || "1", 10);
  let currentPage =
    Number.isFinite(initialPage) && initialPage > 0 ? initialPage : 1;

  if (currentFilter !== "all" && filterButtons.length > 0) {
    filterButtons.forEach((other) => {
      const btnVal = other.dataset.tag || other.dataset.category || "all";
      const active = btnVal.toLowerCase() === currentFilter.toLowerCase();
      other.classList.toggle("btn-neutral", active);
      other.classList.toggle("active", active);
      other.classList.toggle("btn-outline", !active);
      other.setAttribute("aria-pressed", String(active));
    });
  }

  let currentDateRange = dateRangeSelect ? dateRangeSelect.value : "all";
  let customStartDate = startDateInput ? startDateInput.value : "";
  let customEndDate = endDateInput ? endDateInput.value : "";

  if (!container || !paginationControls) return;

  function syncUrlState() {
    const url = new URL(location.href);
    if (searchQuery) url.searchParams.set("q", searchQuery);
    else url.searchParams.delete("q");

    if (currentFilter && currentFilter !== "all")
      url.searchParams.set("filter", currentFilter);
    else url.searchParams.delete("filter");

    if (currentSort && currentSort !== defaultSort)
      url.searchParams.set("sort", currentSort);
    else url.searchParams.delete("sort");

    if (currentPage > 1) url.searchParams.set("page", String(currentPage));
    else url.searchParams.delete("page");

    history.replaceState(history.state, "", url);
  }

  // ── View Toggle ──
  function updateViewLayout() {
    if (!container || !gridBtn || !listBtn) return;
    gridBtn.setAttribute("aria-pressed", String(currentView === "grid"));
    listBtn.setAttribute("aria-pressed", String(currentView === "list"));

    if (currentView === "grid") {
      gridBtn.classList.add("btn-active");
      listBtn.classList.remove("btn-active");
      swapViewClasses(container, gridContainerClass, listContainerClass);
      allCards.forEach((card) => {
        swapViewClasses(card, gridCardClass, listCardClass);
        swapViewClasses(
          card.querySelector(figureSelector),
          gridFigureClass,
          listFigureClass,
        );
        swapViewClasses(
          card.querySelector(bodySelector),
          gridBodyClass,
          listBodyClass,
        );
        swapViewClasses(
          card.querySelector(footerSelector),
          gridFooterClass,
          listFooterClass,
        );
      });
    } else {
      listBtn.classList.add("btn-active");
      gridBtn.classList.remove("btn-active");
      swapViewClasses(container, listContainerClass, gridContainerClass);
      allCards.forEach((card) => {
        swapViewClasses(card, listCardClass, gridCardClass);
        swapViewClasses(
          card.querySelector(figureSelector),
          listFigureClass,
          gridFigureClass,
        );
        swapViewClasses(
          card.querySelector(bodySelector),
          listBodyClass,
          gridBodyClass,
        );
        swapViewClasses(
          card.querySelector(footerSelector),
          listFooterClass,
          gridFooterClass,
        );
      });
    }
  }

  function updateDateValidationUI(inverted: boolean) {
    for (const input of [startDateInput, endDateInput]) {
      if (!input) continue;
      if (inverted) {
        input.setAttribute("aria-invalid", "true");
        input.classList.add("input-error");
      } else {
        input.removeAttribute("aria-invalid");
        input.classList.remove("input-error");
      }
    }
    dateErrorEl?.classList.toggle("hidden", !inverted);
  }

  function processItems() {
    if (!container || !noResults || !paginationControls) return;

    const inverted = isInvertedDateRange(
      currentDateRange,
      customStartDate,
      customEndDate,
    );
    updateDateValidationUI(inverted);

    const matching = filterItems(records, {
      query: searchQuery,
      filter: currentFilter,
      dateRange: currentDateRange,
      startDate: customStartDate,
      endDate: customEndDate,
      hasFeatured,
    });
    const sorted = sortItems(
      matching,
      currentSort,
      hasFeatured,
      document.documentElement.lang,
    );
    const orderedCards = sorted.map((entry) => entry.item);

    allCards.forEach((card) => {
      card.hidden = true;
    });
    // Reorder the DOM, so keyboard/screen-reader order matches the visual order.
    orderedCards.forEach((card) => container.append(card));
    noResults.classList.toggle("hidden", orderedCards.length !== 0);

    const {
      pageItems,
      currentPage: nextPage,
      totalPages,
    } = paginateItems(orderedCards, currentPage, itemsPerPage);
    currentPage = nextPage;
    pageItems.forEach((card) => {
      card.hidden = false;
    });
    renderPagination(totalPages);

    const status = document.getElementById("list-status");
    if (status) {
      status.textContent = inverted
        ? status.dataset.invalidRange || noResults.textContent
        : orderedCards.length
          ? `${orderedCards.length} ${status.dataset.label || "results"}`
          : noResults.textContent;
    }
  }

  function renderPagination(totalPages: number) {
    if (!paginationControls || !container) return;
    const hadFocus = paginationControls.contains(document.activeElement);
    paginationControls.replaceChildren();
    if (totalPages <= 1) return;
    const addButton = (
      text: string,
      page: number,
      label: string,
      disabled = false,
    ) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "join-item btn btn-sm";
      button.textContent = text;
      button.disabled = disabled;
      button.setAttribute("aria-label", label);
      if (text === String(currentPage)) {
        button.setAttribute("aria-current", "page");
        button.classList.add("btn-active", "btn-primary");
      }
      // The discarded pagination buttons are garbage collectible after replaceChildren.
      button.addEventListener("click", () => {
        currentPage = page;
        syncUrlState();
        processItems();
        container.scrollIntoView({
          behavior: scrollBehavior(),
          block: "start",
        });
      });
      paginationControls.append(button);
    };
    addButton(
      "«",
      currentPage - 1,
      paginationControls.dataset.previous || "Previous page",
      currentPage === 1,
    );
    for (let page = 1; page <= totalPages; page++)
      addButton(
        String(page),
        page,
        `${paginationControls.dataset.page || "Page"} ${page}`,
      );
    addButton(
      "»",
      currentPage + 1,
      paginationControls.dataset.next || "Next page",
      currentPage === totalPages,
    );
    if (hadFocus)
      paginationControls
        .querySelector<HTMLButtonElement>('[aria-current="page"]')
        ?.focus({ preventScroll: true });
  }

  const reset = () => {
    currentPage = 1;
    syncUrlState();
    processItems();
  };
  let timer: number;
  signal.addEventListener("abort", () => window.clearTimeout(timer), {
    once: true,
  });
  searchInput?.addEventListener(
    "input",
    () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (signal.aborted) return;
        searchQuery = searchInput.value.trim();
        reset();
      }, 200);
    },
    { signal },
  );
  sortSelect?.addEventListener(
    "change",
    () => {
      currentSort = sortSelect.value;
      reset();
    },
    { signal },
  );
  dateRangeSelect?.addEventListener(
    "change",
    () => {
      currentDateRange = dateRangeSelect.value;
      customDateContainer?.classList.toggle(
        "hidden",
        currentDateRange !== "custom",
      );
      if (currentDateRange === "custom") {
        customDateContainer?.classList.add("flex");
      } else {
        customDateContainer?.classList.remove("flex");
      }
      reset();
    },
    { signal },
  );
  startDateInput?.addEventListener(
    "input",
    () => {
      customStartDate = startDateInput.value;
      reset();
    },
    { signal },
  );
  endDateInput?.addEventListener(
    "input",
    () => {
      customEndDate = endDateInput.value;
      reset();
    },
    { signal },
  );
  filterButtons.forEach((button) =>
    button.addEventListener(
      "click",
      () => {
        currentFilter = button.dataset.tag || button.dataset.category || "all";
        filterButtons.forEach((other) => {
          const active = other === button;
          other.classList.toggle("btn-neutral", active);
          other.classList.toggle("active", active);
          other.classList.toggle("btn-outline", !active);
          other.setAttribute("aria-pressed", String(active));
        });
        reset();
      },
      { signal },
    ),
  );
  gridBtn?.addEventListener(
    "click",
    () => {
      currentView = "grid";
      updateViewLayout();
    },
    { signal },
  );
  listBtn?.addEventListener(
    "click",
    () => {
      currentView = "list";
      updateViewLayout();
    },
    { signal },
  );
  customDateContainer?.classList.toggle(
    "hidden",
    currentDateRange !== "custom",
  );
  updateViewLayout();
  processItems();
}
