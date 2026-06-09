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
}

export function initListManager(config: ListManagerConfig) {
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
  } = config;

  const container = document.getElementById(containerId);
  const noResults = document.getElementById(noResultsId);
  const paginationControls = document.getElementById(paginationId);
  const allCards = Array.from(
    document.querySelectorAll(cardSelector),
  ) as HTMLElement[];

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

  const dateRangeSelect = dateRangeSelectId ? (document.getElementById(dateRangeSelectId) as HTMLSelectElement | null) : null;
  const customDateContainer = customDateContainerId ? document.getElementById(customDateContainerId) : null;
  const startDateInput = startDateInputId ? (document.getElementById(startDateInputId) as HTMLInputElement | null) : null;
  const endDateInput = endDateInputId ? (document.getElementById(endDateInputId) as HTMLInputElement | null) : null;

  let currentView = "grid";
  let currentFilter = "all";
  let currentSort = sortSelect ? sortSelect.value : "date-desc";
  let searchQuery = "";
  let currentPage = 1;

  let currentDateRange = dateRangeSelect ? dateRangeSelect.value : "all";
  let customStartDate = startDateInput ? startDateInput.value : "";
  let customEndDate = endDateInput ? endDateInput.value : "";

  if (!container || !paginationControls) return;

  // ── View Toggle ──
  function updateViewLayout() {
    if (!container || !gridBtn || !listBtn) return;

    if (currentView === "grid") {
      gridBtn.classList.add("btn-active");
      listBtn.classList.remove("btn-active");
      container.className = gridContainerClass;
      allCards.forEach((card) => {
        card.className = gridCardClass;
        const fig = card.querySelector(figureSelector);
        if (fig) fig.className = gridFigureClass;
        const body = card.querySelector(bodySelector);
        if (body) body.className = gridBodyClass;
        const footer = card.querySelector(footerSelector);
        if (footer) footer.className = gridFooterClass;
      });
    } else {
      listBtn.classList.add("btn-active");
      gridBtn.classList.remove("btn-active");
      container.className = listContainerClass;
      allCards.forEach((card) => {
        card.className = listCardClass;
        const fig = card.querySelector(figureSelector);
        if (fig) fig.className = listFigureClass;
        const body = card.querySelector(bodySelector);
        if (body) body.className = listBodyClass;
        const footer = card.querySelector(footerSelector);
        if (footer) footer.className = listFooterClass;
      });
    }
  }

  // ── Filter + Sort + Paginate ──
  function processItems() {
    if (!container || !noResults || !paginationControls) return;

    // 1. Filter
    let filtered = allCards.filter((card) => {
      const filterValue = card.getAttribute(filterAttr) || "";
      const filterMatch =
        currentFilter === "all" ||
        filterValue.split(" ").includes(currentFilter.toLowerCase());

      const title = card.getAttribute("data-name") || "";
      const desc = card.getAttribute("data-description") || "";
      const extra =
        card.getAttribute("data-tech") || card.getAttribute("data-tags") || "";
      const searchMatch =
        !searchQuery ||
        title.includes(searchQuery) ||
        desc.includes(searchQuery) ||
        extra.includes(searchQuery);

      // Date range filter
      let dateMatch = true;
      if (dateRangeSelect) {
        const itemDateStr = card.getAttribute("data-date");
        if (itemDateStr) {
          const itemTime = new Date(itemDateStr).getTime();
          const now = new Date().getTime();
          
          if (currentDateRange === "yesterday") {
            dateMatch = itemTime >= now - 24 * 60 * 60 * 1000;
          } else if (currentDateRange === "week") {
            dateMatch = itemTime >= now - 7 * 24 * 60 * 60 * 1000;
          } else if (currentDateRange === "month") {
            dateMatch = itemTime >= now - 30 * 24 * 60 * 60 * 1000;
          } else if (currentDateRange === "year") {
            dateMatch = itemTime >= now - 365 * 24 * 60 * 60 * 1000;
          } else if (currentDateRange === "custom") {
            if (customStartDate) {
              const startTime = new Date(customStartDate + "T00:00:00").getTime();
              if (!isNaN(startTime) && itemTime < startTime) dateMatch = false;
            }
            if (customEndDate) {
              const endTime = new Date(customEndDate + "T23:59:59").getTime();
              if (!isNaN(endTime) && itemTime > endTime) dateMatch = false;
            }
          }
        }
      }

      return filterMatch && searchMatch && dateMatch;
    });

    // 2. Sort
    filtered.sort((a, b) => {
      // Relevance sort (featured first, then date descending)
      if (currentSort === "relevance" && hasFeatured) {
        const featA = a.getAttribute("data-featured") === "true" ? 1 : 0;
        const featB = b.getAttribute("data-featured") === "true" ? 1 : 0;
        if (featA !== featB) return featB - featA;
        
        // Within the same featured status, sort by date-desc
        const dateA = new Date(a.getAttribute("data-date") || "").getTime();
        const dateB = new Date(b.getAttribute("data-date") || "").getTime();
        return dateB - dateA;
      }

      // Pure date sorting or name sorting
      if (currentSort.startsWith("date")) {
        const dateA = new Date(a.getAttribute("data-date") || "").getTime();
        const dateB = new Date(b.getAttribute("data-date") || "").getTime();
        return currentSort === "date-desc" ? dateB - dateA : dateA - dateB;
      } else {
        const nameA = a.getAttribute("data-name") || "";
        const nameB = b.getAttribute("data-name") || "";
        return currentSort === "name-asc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      }
    });

    // 3. Hide all
    allCards.forEach((c) => c.classList.add("hidden"));

    // 4. Empty state
    if (filtered.length === 0) {
      noResults.classList.remove("hidden");
      paginationControls.innerHTML = "";
      return;
    }
    noResults.classList.add("hidden");

    // 5. Paginate
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

    paginated.forEach((c) => {
      c.classList.remove("hidden");
      container.appendChild(c);
    });

    renderPagination(totalPages);
  }

  function renderPagination(totalPages: number) {
    if (!paginationControls || !container) return;
    paginationControls.innerHTML = "";
    if (totalPages <= 1) return;

    const createBtn = (
      label: string,
      disabled: boolean,
      onClick: () => void,
    ) => {
      const btn = document.createElement("button");
      btn.className =
        "join-item btn btn-sm" + (disabled ? " btn-disabled" : "");
      btn.innerHTML = label;
      btn.addEventListener("click", onClick);
      return btn;
    };

    const scrollToTop = () =>
      window.scrollTo({ top: container!.offsetTop - 100, behavior: "smooth" });

    paginationControls.appendChild(
      createBtn("«", currentPage === 1, () => {
        if (currentPage > 1) {
          currentPage--;
          processItems();
          scrollToTop();
        }
      }),
    );

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.className = `join-item btn btn-sm ${i === currentPage ? "btn-active btn-primary" : ""}`;
      btn.innerText = i.toString();
      btn.addEventListener("click", () => {
        currentPage = i;
        processItems();
        scrollToTop();
      });
      paginationControls.appendChild(btn);
    }

    paginationControls.appendChild(
      createBtn("»", currentPage === totalPages, () => {
        if (currentPage < totalPages) {
          currentPage++;
          processItems();
          scrollToTop();
        }
      }),
    );
  }

  // ── Event Listeners ──

  // Debounced search
  let timer: number;
  searchInput?.addEventListener("input", (e) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      searchQuery = (e.target as HTMLInputElement).value.toLowerCase().trim();
      currentPage = 1;
      processItems();
    }, 300);
  });

  // Sort
  sortSelect?.addEventListener("change", (e) => {
    currentSort = (e.target as HTMLSelectElement).value;
    processItems();
  });

  // Date Range
  dateRangeSelect?.addEventListener("change", (e) => {
    currentDateRange = (e.target as HTMLSelectElement).value;
    if (currentDateRange === "custom") {
      customDateContainer?.classList.remove("hidden");
    } else {
      customDateContainer?.classList.add("hidden");
    }
    currentPage = 1;
    processItems();
  });

  startDateInput?.addEventListener("input", (e) => {
    customStartDate = (e.target as HTMLInputElement).value;
    currentPage = 1;
    processItems();
  });

  endDateInput?.addEventListener("input", (e) => {
    customEndDate = (e.target as HTMLInputElement).value;
    currentPage = 1;
    processItems();
  });

  // Filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => {
        b.classList.remove("btn-neutral", "active");
        b.classList.add("btn-outline");
      });
      btn.classList.add("btn-neutral", "active");
      btn.classList.remove("btn-outline");

      currentFilter =
        btn.getAttribute("data-tag") ||
        btn.getAttribute("data-category") ||
        "all";
      currentPage = 1;
      processItems();
    });
  });

  // View toggle
  gridBtn?.addEventListener("click", () => {
    if (currentView !== "grid") {
      currentView = "grid";
      updateViewLayout();
    }
  });
  listBtn?.addEventListener("click", () => {
    if (currentView !== "list") {
      currentView = "list";
      updateViewLayout();
    }
  });

  // Init custom date container visibility
  if (dateRangeSelect) {
    if (dateRangeSelect.value === "custom") {
      customDateContainer?.classList.remove("hidden");
    } else {
      customDateContainer?.classList.add("hidden");
    }
  }

  // Init
  updateViewLayout();
  processItems();
}
