// BASE
const elements = {
  searchForm: document.querySelector('#searchIcaoCode'),
  searchInput: document.querySelector('#inputCodigoICAO'),
}
// END BASE

// Models
// End Models

// Views
// End Views

// Actions
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log('testeee', e);
  console.log(elements.searchInput);
  console.log(elements.searchInput.value);
});
// End Actions

// Settings
// End Settings
