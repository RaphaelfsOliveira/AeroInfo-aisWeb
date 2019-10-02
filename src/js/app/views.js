import Search from './models';
import { elements, inputs } from './base';
import * as templates from './templates';

const state = {};

export const controlSearch = async () => {
  const query = inputs.get();

  if (query) {

    console.log(query);
    state.search = new Search(query);

    const loadId = 'loading';
    initLoading(elements.cardDeck, loadId);

    await state.search.flightInformation();
    console.log('stateData', state.search.data);

    finishLoading(`#${loadId}`);

    loadResults(12, state.search.data);
  };

};

const loadResults = (cardSize, body) => {
  for (let i = 0; i < 1; i++) {
    elements.cardDeck.insertAdjacentHTML('afterbegin', templates.card(cardSize, body));
  }
};

const initLoading = (parent, elementId) => {
  parent.insertAdjacentHTML('afterbegin', templates.loading(elementId));
};

const finishLoading = elementId => {
  document.querySelector(elementId).remove()
};
