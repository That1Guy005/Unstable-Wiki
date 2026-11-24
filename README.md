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

## GitLab Pages

`.gitlab-ci.yml` builds the site into `public/` on the default branch. Set `site_url` in `mkdocs.yml`
to the Pages URL (for example `https://<namespace>.gitlab.io/<project>/`) once you know it.

## Notes

- Mermaid diagrams, Vega-Lite charts, the link graph (vis-network) and table sorting load their
  JavaScript from public CDNs (jsDelivr, unpkg), so they need an internet connection.
- Episode thumbnails are loaded from YouTube and character/place images from the Unstable Universe
  Wiki; neither is stored in this repository.
