// const puppeteer = require('puppeteer-core');

import { elements } from './base';
import * as views from './views';

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(elements.searchInput.value);
  if (elements.searchInput.value) {
    (async () => {
      const page = await fetch(
        'https://cors-anywhere.herokuapp.com/https://www.aisweb.aer.mil.br/?i=aerodromos&codigo=SBMT'
      );
      let data = await page.text();



      console.log(page);
      console.log(data);

      views.loadResults(elements.searchInput.value, data);
    })();

  }
});
