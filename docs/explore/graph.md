---
title: Link graph
description: An interactive map of how every note links to every other.
hide:
- toc
---

# Link graph

Every page is a dot and every link between pages is a line, like Obsidian’s graph view. Drag to move, scroll to zoom, hover for the name, and click a dot to open its page. Bigger dots have more links. Episodes are hidden at first because there are so many; tick **Episode** to add them.

<div id="uu-graph-controls" class="uu-graph-controls">
  <input id="uu-graph-search" type="search" placeholder="Find a page…" list="uu-graph-list">
  <datalist id="uu-graph-list"></datalist>
  <span id="uu-graph-filters"></span>
</div>
<div id="uu-graph"><p class="uu-graph-loading">Loading graph…</p></div>

<script src="https://unpkg.com/vis-network@9.1.9/standalone/umd/vis-network.min.js"></script>
<script src="../../assets/data/graph-data.js"></script>
<script src="../../assets/js/graph.js"></script>
