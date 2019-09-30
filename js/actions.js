elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(elements.searchInput.value);
  if (elements.searchInput.value) {
    loadResults(elements.searchInput.value);
  }
});
