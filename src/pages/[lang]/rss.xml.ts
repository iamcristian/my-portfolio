import type { APIRoute } from "astro";
import { getLocaleStaticPaths } from "../../config/paths";
import { getLang } from "../../i18n/utils";
import { createFeed } from "../../utils/feed";

export const getStaticPaths = getLocaleStaticPaths;
export const GET: APIRoute = ({ params }) => createFeed(getLang(params.lang));
