export const elements = {
  searchForm: document.querySelector('#searchIcaoCode'),
  searchInput: document.querySelector('#inputCodigoICAO'),
  cardDeck: document.querySelector('.card-here'),
};

export const inputs = {
  get: () => elements.searchInput.value,
}
