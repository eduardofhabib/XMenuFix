function reorderMenu() {
  const container = document.querySelector('[data-testid="Dropdown"]');
  if (!container) return;

  const items = Array.from(container.querySelectorAll(':scope > [role="menuitem"]'));
  if (items.length < 2) return;

  const alreadyReordered = container.dataset.xReordered;
  if (alreadyReordered === String(items.length)) return;

  container.insertBefore(items[1], items[0]);

  container.dataset.xReordered = String(items.length);
}

let debounceTimer;
const observer = new MutationObserver(() => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(reorderMenu, 50);
});

observer.observe(document.body, { childList: true, subtree: true });
reorderMenu();
