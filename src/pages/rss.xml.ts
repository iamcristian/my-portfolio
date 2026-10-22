import { createFeed } from "../utils/feed";

// Static hosts need actual XML here, not an HTML redirect page.
export const GET = () => createFeed("en");
