// Local-only static preview with the production security headers. Not a deployment server.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("dist");
const config = JSON.parse(await readFile("vercel.json", "utf8"));
const headers = Object.fromEntries(
  config.headers[0].headers.map(({ key, value }) => [key, value]),
);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".pdf": "application/pdf",
  ".webmanifest": "application/manifest+json",
};
createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://127.0.0.1");
    if (url.pathname === "/") {
      response.writeHead(308, { ...headers, Location: "/en/" });
      return response.end();
    }
    let file = path.resolve(root, "." + decodeURIComponent(url.pathname));
    if (!file.startsWith(root + path.sep)) {
      response.writeHead(400);
      return response.end();
    }
    let status = 200;
    try {
      if ((await stat(file)).isDirectory())
        file = path.join(file, "index.html");
      await stat(file);
    } catch {
      file = path.join(root, "404.html");
      status = 404;
    }
    const body = await readFile(file);
    response.writeHead(status, {
      ...headers,
      "Content-Type": types[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    response.writeHead(400);
    response.end();
  }
}).listen(4354, "127.0.0.1", () =>
  console.log("Secure preview: http://127.0.0.1:4354/en/"),
);
