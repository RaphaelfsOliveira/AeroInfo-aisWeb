// BASE
const elements = {
  searchForm: document.querySelector('#searchIcaoCode'),
  searchInput: document.querySelector('#inputCodigoICAO'),
  cardDeck: document.querySelector('.card-here'),

}
// END BASE

// Models
// End Models

// Views
const loadResults = (cardSize) => {
  for (let i = 0; i < 1; i++) {
    elements.cardDeck.insertAdjacentHTML('afterbegin', card(cardSize));
  }
  // cardDeck.insertAdjacentHTML('afterbegin', card);
};
// End Views

// Actions
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(elements.searchInput.value);
  if (elements.searchInput.value) {
    loadResults(elements.searchInput.value);
  }
});
// End Actions

// Templates
const card = (size) => {
  return `
  <div class="col-sm-${size}">
    <div class="card">
      <img class="card-img-top" src="img/288_180.svg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">
          Cartas
          <i class="material-icons icon-image-preview">map</i>
        </h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>`
};

// End Templates

// Settings
// End Settings
