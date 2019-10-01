import Search from './models';
import { elements, inputs } from './base';
import * as templates from './templates';

const state = {};

export const controlSearch = async () => {
  const query = inputs.get();

  if (query) {
    state.search = new Search(query);

    await state.search.flightInformation();
    console.log(state.search.data);

    loadResults(12, state.search.data);

  };

};


const loadResults = (cardSize, body) => {
  for (let i = 0; i < 1; i++) {
    elements.cardDeck.insertAdjacentHTML('afterbegin', templates.card(cardSize, body));
  }
};
