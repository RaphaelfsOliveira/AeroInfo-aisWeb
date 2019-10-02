export const cardLetter = (size, letter, timeDate) => {
  return `
  <div class="col-sm-${size}">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          Carta ${letter.tipo}
          <i class="material-icons icon-image-preview">map</i>
        </h5>
        <p class="card-text"><a href="${letter.link}">${letter.nome}</a></p>
      </div>
      <div class="card-footer">
        <small class="text-muted">last update ${timeDate}</small>
      </div>
    </div>
  </div>`
};

export const cardImage = (size, body, timeDate) => {
  return `
  <div class="col-sm-${size}">
    <div class="card">
      <img class="card-img-top" src="img/288_180.svg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">
          Carta
          <i class="material-icons icon-image-preview">map</i>
        </h5>
        <p class="card-text">${body}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">last update ${timeDate}</small>
      </div>
    </div>
  </div>`
};

export const loading = elementId => {
  return `
  <div class="col-sm-12 text-center" id="${elementId}">
    <div class="lds-dual-ring"></div>
  </div>`
};
