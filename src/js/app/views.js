import Search from './models';
import { elements, inputs } from './base';
import * as templates from './templates';
import * as actions from './actions';

const state = {};

export const controlSearch = async () => {
  const query = inputs.get();

  if (query) {

    console.log(query);
    state.search = new Search(query);


    actions.disableForm(true);

    const loadId = 'loading';
    actions.initLoading(elements.cardDeck, loadId);

    await state.search.flightInformation();
    console.log('stateData', state.search.data);

    actions.finishLoading(`#${loadId}`);

    actions.disableForm(false);

    // TODO: fazer timedate do card
    actions.loadResults(12, state.search.data, Date.now());
  };

};
