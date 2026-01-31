// OpenNext config for Cloudflare - Using static export mode
// Note: This project uses `output: "export"` in next.config.ts for static site generation
// R2 incremental cache is disabled as it's not needed for static exports

import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

export default defineCloudflareConfig({
	// No incremental cache needed for static export
	// Static files are served directly from Cloudflare Pages
});
