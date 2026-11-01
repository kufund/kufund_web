# Brand domain redirect pages

Copy all files from the matching directory, including `.nojekyll`, into the root of each GitHub repository:

- `wuquant.com/` to the WuQuant repository
- `alphadeer.com/` to the AlphaDeer repository

In each repository, select the publishing branch and `/(root)` under Settings > Pages. Set the custom domain to `wuquant.com` or `alphadeer.com`, then configure DNS to point to GitHub Pages and enable HTTPS after DNS verification.

The pages immediately redirect to `https://kufund.com/`, with a meta refresh and a manual link as fallbacks. `404.html` also redirects old or unknown paths to the homepage. The source path, query string, and fragment are not forwarded.

This is a browser-side redirect, not an HTTP 301. For a permanent HTTP redirect, use a forwarding feature from the domain provider or a proxy service. These files are independent of the main site build and do not replace the KuFund website.
