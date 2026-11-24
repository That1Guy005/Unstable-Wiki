/* Enlarge diagrams and charts in an overlay with zoom and pan, and give the link graph a full-screen button.
   Works on Mermaid diagrams (.mermaid) and Vega-Lite charts (.vegalite) on every page. */
(function () {
  var SEL = '.md-typeset .mermaid, .md-typeset .vegalite';
  var overlay, stage, inner, current = null, view = { s: 1, x: 0, y: 0 };

  function buildOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'uu-zoom-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Enlarged view');
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="uu-zoom-bar">' +
      '<button type="button" data-z="in" title="Zoom in" aria-label="Zoom in">+</button>' +
      '<button type="button" data-z="out" title="Zoom out" aria-label="Zoom out">&minus;</button>' +
      '<button type="button" data-z="fit" title="Fit to screen">Fit</button>' +
      '<span class="uu-zoom-hint">Scroll to zoom, drag to move, Esc to close</span>' +
      '<button type="button" data-z="close" title="Close (Esc)" aria-label="Close">&times;</button>' +
      '</div><div class="uu-zoom-stage"><div class="uu-zoom-inner"></div></div>';
    document.body.appendChild(overlay);
    stage = overlay.querySelector('.uu-zoom-stage');
    inner = overlay.querySelector('.uu-zoom-inner');

    overlay.querySelector('.uu-zoom-bar').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var r = stage.getBoundingClientRect();
      if (b.dataset.z === 'in') zoomAt(1.25, r.width / 2, r.height / 2);
      if (b.dataset.z === 'out') zoomAt(0.8, r.width / 2, r.height / 2);
      if (b.dataset.z === 'fit') fit();
      if (b.dataset.z === 'close') close();
    });
    stage.addEventListener('wheel', function (e) {
      e.preventDefault();
      var r = stage.getBoundingClientRect();
      zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });
    var drag = null;
    stage.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      drag = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y };
      stage.setPointerCapture(e.pointerId); stage.classList.add('uu-dragging');
    });
    stage.addEventListener('pointermove', function (e) {
      if (!drag) return;
      view.x = drag.vx + e.clientX - drag.x; view.y = drag.vy + e.clientY - drag.y; apply();
    });
    function endDrag() { drag = null; stage.classList.remove('uu-dragging'); }
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);
    document.addEventListener('keydown', function (e) {
      if (!current) return;
      if (e.key === 'Escape') close();
      if (e.key === '+' || e.key === '=') zoomAt(1.25, stage.clientWidth / 2, stage.clientHeight / 2);
      if (e.key === '-') zoomAt(0.8, stage.clientWidth / 2, stage.clientHeight / 2);
    });
  }

  function apply() { inner.style.transform = 'translate(' + view.x + 'px,' + view.y + 'px) scale(' + view.s + ')'; }
  function zoomAt(f, cx, cy) {
    var s = Math.min(Math.max(view.s * f, 0.1), 12);
    view.x = cx - (cx - view.x) * (s / view.s); view.y = cy - (cy - view.y) * (s / view.s); view.s = s; apply();
  }
  function fit() {
    var w = inner.offsetWidth, h = inner.offsetHeight, W = stage.clientWidth, H = stage.clientHeight;
    view.s = Math.min((W - 48) / w, (H - 48) / h, 4);
    view.x = (W - w * view.s) / 2; view.y = (H - h * view.s) / 2; apply();
  }

  function open(wrap) {
    var el = wrap.querySelector('.mermaid, .vegalite'); if (!el) return;
    if (!overlay) buildOverlay();
    var r = el.getBoundingClientRect();
    var ph = document.createElement('div');
    ph.className = 'uu-zoom-placeholder'; ph.style.height = r.height + 'px';
    wrap.insertBefore(ph, el);
    el.style.width = r.width + 'px';
    inner.appendChild(el);
    current = { el: el, wrap: wrap, ph: ph, focus: document.activeElement };
    overlay.hidden = false; document.documentElement.classList.add('uu-zoom-open');
    fit();
    overlay.querySelector('[data-z="close"]').focus();
  }
  function close() {
    if (!current) return;
    current.wrap.insertBefore(current.el, current.ph);
    current.ph.remove(); current.el.style.width = '';
    overlay.hidden = true; document.documentElement.classList.remove('uu-zoom-open');
    if (current.focus && current.focus.focus) current.focus.focus();
    current = null;
  }

  function enhance() {
    document.querySelectorAll(SEL).forEach(function (el) {
      if (el.closest('.uu-zoomable') || el.closest('.uu-zoom-overlay')) return;
      var wrap = document.createElement('div');
      wrap.className = 'uu-zoomable';
      el.parentNode.insertBefore(wrap, el);
      wrap.appendChild(el);
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'uu-zoom-btn';
      btn.title = 'Open larger (zoom and pan)';
      btn.innerHTML = '&#x2922; Enlarge';
      btn.addEventListener('click', function () { open(wrap); });
      wrap.appendChild(btn);
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
      fb.innerHTML = '&#x2922; Full screen';
      fb.addEventListener('click', function () {
        if (document.fullscreenElement) document.exitFullscreen(); else box.requestFullscreen();
      });
      document.addEventListener('fullscreenchange', function () {
        fb.innerHTML = document.fullscreenElement === box ? '&#x2715; Exit full screen' : '&#x2922; Full screen';
      });
      c.appendChild(fb);
    }
  }

  function start() {
    enhance();
    // Mermaid and Vega render after page load, so catch elements added later too
    var target = document.querySelector('.md-content') || document.body;
    new MutationObserver(function () { enhance(); }).observe(target, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
