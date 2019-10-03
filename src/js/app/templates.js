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

export const cardSunriseSunset = (size, info, timeDate) => {
  return `
  <div class="col-sm-${size}">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          Aeroporto ${info.aero}
          <i class="material-icons icon-image-preview">airplanemode_active</i>
        </h5>
        <p class="card-text">
          NASCER / POR DO SOL
          <div class="row text-center">
            <div class="col-sm-6 suninfo">
              <label class="sun-text">${info.sunrise}</label>
              <i class="material-icons icon-image-preview sun-icon">brightness_5</i>
            </div>
            <div class="col-sm-6 suninfo">
              <label class="sun-text">${info.sunset}</label>
              <i class="material-icons icon-image-preview sun-icon">brightness_4</i>
            </div>
          </div>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">last update ${timeDate}</small>
      </div>
    </div>
  </div>`
};

export const cardMeteorology = (size, info, timeDate) => {
  return `
  <div class="col-sm-${size}">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          Meteorologia
          <i class="material-icons icon-image-preview">cloud</i>
        </h5>
        <p class="card-text">
          <div class="row metar-taf">
            <b>METAR</b>
            <label class="info-met">${info.metar}</label>
          </div>
          <div class="row metar-taf">
            <b>TAF</b>
            <label class="info-met">${info.taf}</label>
          </div>
        </p>
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

export const alertError = elementId => {
  return `
  <div class="col-sm-12 text-center" id="${elementId}">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Desculpe...</strong> Não existem aeroportos com esse código.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>`;
}
