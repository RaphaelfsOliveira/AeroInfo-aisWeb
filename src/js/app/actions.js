import { elements } from './base';
import * as views from './views';
import * as templates from './templates';

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  views.controlSearch();
});

export const loadResults = (cardSize, results, template) => {
  results.forEach(result => {
    elements.cardDeck.insertAdjacentHTML('afterbegin', templates[template](cardSize, result, dateNow()));
  });
};

export const initLoading = (parent, elementId) => {
  parent.insertAdjacentHTML('afterbegin', templates.loading(elementId));
};

export const finishLoading = elementId => {
  document.querySelector(elementId).remove()
};

export const disableForm = status => {
  elements.buttonSearch.disabled = status;
  elements.searchInput.disabled = status;
}

export const dateNow = () => {
  const date = new Date();
  return date.toString().split('GMT')[0];
};
