# Unstable Universe Notes

A Material for MkDocs site with detailed notes on every Unstable Universe episode, character, place,
faction, event, arc and mechanic, built from the Obsidian vault.

## Preview locally

```bash
python -m venv .venv
.venv\Scripts\activate          # Windows (macOS/Linux: source .venv/bin/activate)
pip install -r requirements.txt
mkdocs serve
```

Then open http://127.0.0.1:8000.

## Build

```bash
mkdocs build --strict
```

The output goes to `site/`.

## GitHub Pages

The site is published at https://that1guy005.github.io/Unstable-Wiki/.

`.github/workflows/pages.yml` builds the site with `mkdocs build --strict` and deploys it on every push to
`main` (you can also run it by hand from the **Actions** tab).

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

If you rename the repository or move it to another account, update `site_url`, `repo_url` and `repo_name`
in `mkdocs.yml`.

## Notes

- Mermaid diagrams, Vega-Lite charts, the link graph (vis-network) and table sorting load their
  JavaScript from public CDNs (jsDelivr, unpkg), so they need an internet connection.
- Episode thumbnails are loaded from YouTube and character/place images from the Unstable Universe
  Wiki; neither is stored in this repository.
