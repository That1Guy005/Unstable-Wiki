/* Interactive link graph (vis-network). Data comes from assets/data/graph-data.js. */
(function () {
  var box = document.getElementById("uu-graph");
  if (!box) return;
  if (!window.vis || !window.UU_GRAPH) {
    box.innerHTML = '<p class="uu-graph-loading">The graph needs an internet connection to load its library.</p>';
    return;
  }
  var script = document.currentScript || document.querySelector('script[src*="assets/js/graph.js"]');
  var base = new URL("../../", script.src).href;        // site root
  var css = getComputedStyle(document.body);
  var fg = (css.getPropertyValue("--md-default-fg-color") || "#333").trim();
  var COLORS = {
    "Character": "#7e57c2", "Place": "#26a69a", "Faction": "#ef5350", "Mechanic": "#ffa726",
    "Event": "#42a5f5", "Arc": "#8d6e63", "Season": "#ec407a", "Episode": "#78909c", "Side video": "#b0bec5"
  };
  var visible = {};
  Object.keys(COLORS).forEach(function (g) { visible[g] = !(g === "Episode" || g === "Side video"); });

  var groups = {};
  Object.keys(COLORS).forEach(function (g) {
    var c = COLORS[g];
    groups[g] = { shape: "dot", color: { background: c, border: c, highlight: { background: c, border: fg },
                  hover: { background: c, border: fg } }, font: { color: fg } };
  });
  var nodes = new vis.DataSet(window.UU_GRAPH.nodes);
  var edges = new vis.DataSet(window.UU_GRAPH.edges);
  var view = new vis.DataView(nodes, { filter: function (n) { return visible[n.group]; } });
  box.innerHTML = "";
  var net = new vis.Network(box, { nodes: view, edges: edges }, {
    groups: groups,
    nodes: { scaling: { min: 5, max: 42, label: { enabled: true, min: 11, max: 26, drawThreshold: 8, maxVisible: 30 } } },
    edges: { color: { color: "rgba(140,140,140,0.22)", highlight: "#7e57c2", hover: "#7e57c2" }, smooth: false, width: 0.6 },
    physics: { solver: "forceAtlas2Based", forceAtlas2Based: { gravitationalConstant: -55, springLength: 90, avoidOverlap: 0.2 },
               stabilization: { iterations: 400, updateInterval: 50 } },
    interaction: { hover: true, tooltipDelay: 100, hideEdgesOnDrag: true }
  });
  function settle() { net.setOptions({ physics: { enabled: true } }); net.stabilize(300); }
  net.on("stabilizationIterationsDone", function () { net.setOptions({ physics: { enabled: false } }); });
  net.on("click", function (p) {
    if (p.nodes.length) { var n = nodes.get(p.nodes[0]); window.location.href = base + n.url; }
  });

  // type filters
  var f = document.getElementById("uu-graph-filters");
  Object.keys(COLORS).forEach(function (g) {
    var lab = document.createElement("label");
    lab.className = "uu-graph-filter";
    lab.innerHTML = '<input type="checkbox"' + (visible[g] ? " checked" : "") + '> <span class="uu-dot" style="background:' +
      COLORS[g] + '"></span>' + g;
    lab.querySelector("input").addEventListener("change", function (e) { visible[g] = e.target.checked; view.refresh(); settle(); });
    f.appendChild(lab);
  });

  // search
  var list = document.getElementById("uu-graph-list");
  var byTitle = {};
  window.UU_GRAPH.nodes.forEach(function (n) {
    byTitle[n.title.toLowerCase()] = n;
    var o = document.createElement("option"); o.value = n.title; list.appendChild(o);
  });
  document.getElementById("uu-graph-search").addEventListener("change", function (e) {
    var n = byTitle[e.target.value.toLowerCase()];
    if (!n) return;
    if (!visible[n.group]) {
      visible[n.group] = true; view.refresh(); settle();
      f.querySelectorAll("label").forEach(function (l) { if (l.textContent.trim() === n.group) l.querySelector("input").checked = true; });
    }
    setTimeout(function () { net.selectNodes([n.id]); net.focus(n.id, { scale: 1.4, animation: true }); }, 300);
  });
})();
