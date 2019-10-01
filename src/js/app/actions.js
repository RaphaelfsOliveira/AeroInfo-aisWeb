import { elements } from './base';
import * as views from './views';

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  views.controlSearch();
});
