# Skylingoo Faridabad

A responsive, single-page website for Skylingoo's spoken-English classes in Sector 19, Faridabad. It uses plain HTML, CSS, JavaScript, and the existing photographs in `images/`; there is no build step or package dependency.

The live site is [https://lakshayraghav2607.github.io/skylingo-site/](https://lakshayraghav2607.github.io/skylingo-site/).

## Files

- `index.html` — page markup, styles, and small interactive behaviors.
- `images/` — the site's photos and logos. Keep this folder beside `index.html`; image paths are relative.
- `.nojekyll` — prevents GitHub Pages from running Jekyll.
- `.github/workflows/pages.yml` — publishes the repository root to GitHub Pages.

## Deploying updates

The existing GitHub Actions workflow deploys automatically when changes are pushed to `main`. Open a pull request against `main` and merge it to publish; you can follow the **Deploy static site to GitHub Pages** run in the repository's Actions tab. The workflow can also be started manually from Actions.

This repository and its Pages URL are already configured. Do not create a replacement repository or change the Pages source if you want to keep the current site address.

For Git operations over HTTPS, authenticate with `gh auth login` or Git Credential Manager. SSH authentication is also supported. Do not put access tokens in remote URLs, commits, or this repository. If a token is required for a separate automation, use a short-lived, fine-grained token with only the permissions and repository access it needs; avoid classic tokens with broad scopes.

## Updating content

Edit the HTML and image assets, then push your branch and merge the pull request. The deployment usually completes within a few minutes. The demo form validates the visitor's name and phone number, then opens a prefilled WhatsApp message; the visitor must still press send in WhatsApp. It does not submit data to a server.

## Site details

- Responsive layout with a mobile navigation menu and WhatsApp contact link.
- Google Fonts are loaded online; system fonts are used when they are unavailable.
- No analytics, cookies, or tracking scripts.
- Phone, WhatsApp, and Google Maps links are included in the page.
