document$.subscribe(function () {
  document.querySelectorAll(".uu-sortable table").forEach(function (table) {
    if (!table.dataset.sortable) { new Tablesort(table); table.dataset.sortable = "1"; }
  });
});
