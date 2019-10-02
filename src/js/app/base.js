export const elements = {
  searchForm: document.querySelector('#searchIcaoCode'),
  searchInput: document.querySelector('#inputCodigoICAO'),
  cardDeck: document.querySelector('.card-here'),
  buttonSearch: document.querySelector('.btn-raised'),
};

export const inputs = {
  get: () => elements.searchInput.value,
}
