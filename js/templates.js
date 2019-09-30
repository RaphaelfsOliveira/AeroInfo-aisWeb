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
