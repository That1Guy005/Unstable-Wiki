/* Click a diagram or chart to open it in an overlay with - / + zoom buttons; scroll to look around when zoomed in.
   Works on Mermaid diagrams (.mermaid) and Vega-Lite charts (.vegalite) on every page.
   The link graph gets a full-screen button. */
(function () {
  var SEL = '.md-typeset .mermaid, .md-typeset .vegalite';
  var STEPS = [0.25, 0.33, 0.5, 0.67, 0.75, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5];
  var overlay, body, holder, label, current = null, zoom = 1;

  function buildOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'uu-lb';
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="uu-lb-panel" role="dialog" aria-modal="true" aria-label="Enlarged view">' +
      '<div class="uu-lb-bar">' +
      '<button type="button" class="uu-lb-btn" data-z="out" title="Zoom out" aria-label="Zoom out">&minus;</button>' +
      '<span class="uu-lb-pct" aria-live="polite">100%</span>' +
      '<button type="button" class="uu-lb-btn" data-z="in" title="Zoom in" aria-label="Zoom in">+</button>' +
      '<button type="button" class="uu-lb-btn uu-lb-text" data-z="fit" title="Fit to the window">Fit</button>' +
      '<button type="button" class="uu-lb-btn uu-lb-close" data-z="close" title="Close (Esc)" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="uu-lb-body"><div class="uu-lb-holder"></div></div>' +
      '</div>';
    document.body.appendChild(overlay);
    body = overlay.querySelector('.uu-lb-body');
    holder = overlay.querySelector('.uu-lb-holder');
    label = overlay.querySelector('.uu-lb-pct');

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) { close(); return; }            // click on the dark backdrop
      var b = e.target.closest('[data-z]'); if (!b) return;
      if (b.dataset.z === 'in') step(1);
      if (b.dataset.z === 'out') step(-1);
      if (b.dataset.z === 'fit') setZoom(fitZoom());
      if (b.dataset.z === 'close') close();
    });
    document.addEventListener('keydown', function (e) {
      if (!current) return;
      if (e.key === 'Escape') close();
      else if (e.key === '+' || e.key === '=') step(1);
      else if (e.key === '-') step(-1);
    });
  }

  function fitZoom() {
    var w = current.w, h = current.h, cs = getComputedStyle(body);
    var padX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight) + 2;
    var padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom) + 2;
    var z = Math.min((body.clientWidth - padX) / w, (body.clientHeight - padY) / h);
    return Math.max(0.25, Math.min(z, 3));
  }
  function setZoom(z) {
    // keep the point in the middle of the view in the middle after zooming
    var cx = (body.scrollLeft + body.clientWidth / 2) / zoom, cy = (body.scrollTop + body.clientHeight / 2) / zoom;
    zoom = z;
    holder.style.zoom = z;
    label.textContent = Math.round(z * 100) + '%';
    body.scrollLeft = cx * z - body.clientWidth / 2;
    body.scrollTop = cy * z - body.clientHeight / 2;
  }
  function step(dir) {
    var i, z = zoom;
    if (dir > 0) { for (i = 0; i < STEPS.length; i++) if (STEPS[i] > z + 0.001) return setZoom(STEPS[i]); }
    else { for (i = STEPS.length - 1; i >= 0; i--) if (STEPS[i] < z - 0.001) return setZoom(STEPS[i]); }
  }

  function open(wrap) {
    var el = wrap.querySelector('.mermaid, .vegalite'); if (!el) return;
    if (!overlay) buildOverlay();
    var r = el.getBoundingClientRect();
    var ph = document.createElement('div');                      // keeps the page from jumping while the chart is away
    ph.className = 'uu-lb-placeholder'; ph.style.height = r.height + 'px';
    wrap.insertBefore(ph, el);
    el.style.width = r.width + 'px';
    holder.appendChild(el);
    holder.classList.toggle('uu-lb-light', !!wrap.closest('.uu-mm-card'));
    current = { el: el, wrap: wrap, ph: ph, w: r.width, h: r.height, focus: document.activeElement };
    overlay.hidden = false;
    document.documentElement.classList.add('uu-lb-open');
    zoom = 1; holder.style.zoom = 1;
    setZoom(fitZoom());
    body.scrollLeft = 0; body.scrollTop = 0;
    overlay.querySelector('[data-z="in"]').focus();
  }
  function close() {
    if (!current) return;
    holder.style.zoom = 1;
    current.wrap.insertBefore(current.el, current.ph);
    current.ph.remove(); current.el.style.width = '';
    overlay.hidden = true;
    document.documentElement.classList.remove('uu-lb-open');
    if (current.focus && current.focus.focus) current.focus.focus();
    current = null;
  }

  function enhance() {
    document.querySelectorAll(SEL).forEach(function (el) {
      if (el.closest('.uu-zoomable') || el.closest('.uu-lb')) return;
      var wrap = document.createElement('div');
      wrap.className = 'uu-zoomable';
      wrap.title = 'Click to enlarge';
      el.parentNode.insertBefore(wrap, el);
      wrap.appendChild(el);
      var btn = document.createElement('button');                 // keyboard / screen-reader way in
      btn.type = 'button'; btn.className = 'uu-zoom-btn';
      btn.setAttribute('aria-label', 'Enlarge'); btn.title = 'Enlarge';
      btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 3a6.5 6.5 0 0 1 5.2 10.4l5.4 5.4-1.4 1.4-5.4-5.4A6.5 6.5 0 1 1 9.5 3m0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M9 7h1v2h2v1h-2v2H9v-2H7V9h2z"/></svg>';
      wrap.appendChild(btn);
      wrap.addEventListener('click', function (e) {
        // leave the chart's own menu and links alone
        if (e.target.closest('a, summary, details, .vega-actions')) return;
        open(wrap);
      });
    });
    // Link graph: full-screen button
    var g = document.getElementById('uu-graph'), c = document.getElementById('uu-graph-controls');
    if (g && c && !document.getElementById('uu-graph-full') && g.requestFullscreen) {
      var box = document.createElement('div');
      box.id = 'uu-graph-box';
      c.parentNode.insertBefore(box, c);
      box.appendChild(c); box.appendChild(g);
      var fb = document.createElement('button');
      fb.type = 'button'; fb.id = 'uu-graph-full'; fb.className = 'uu-graph-full';
      fb.textContent = 'Full screen';
      fb.addEventListener('click', function () {
        if (document.fullscreenElement) document.exitFullscreen(); else box.requestFullscreen();
      });
      document.addEventListener('fullscreenchange', function () {
        fb.textContent = document.fullscreenElement === box ? 'Exit full screen' : 'Full screen';
      });
      c.appendChild(fb);
    }
  }

  function start() {
    enhance();
    // Mermaid and Vega render after the page loads, so also catch elements that appear later
    var target = document.querySelector('.md-content') || document.body;
    new MutationObserver(function () { enhance(); }).observe(target, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
