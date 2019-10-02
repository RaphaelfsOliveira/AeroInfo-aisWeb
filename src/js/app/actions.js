import { elements } from './base';
import * as views from './views';
import * as templates from './templates';

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  views.controlSearch();
});

export const loadResults = (cardSize, body, timeDate) => {
  for (let i = 0; i < 1; i++) {
    elements.cardDeck.insertAdjacentHTML('afterbegin', templates.card(cardSize, body, timeDate));
  }
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
