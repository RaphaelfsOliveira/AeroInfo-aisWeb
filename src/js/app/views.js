import Search from './models';
import { elements, inputs } from './base';
import * as templates from './templates';
import * as actions from './actions';

const state = {};

export const controlSearch = async () => {
  const query = inputs.get();

  if (query) {
    state.search = new Search(query);

    actions.disableForm(true);
    actions.clearResults();

    const loadId = 'loading';
    actions.initLoading(elements.cardDeck, loadId);

    await state.search.flightLetters();
    await state.search.sunriseSunset();
    await state.search.meteorology();

    actions.finishLoading(`#${loadId}`);
    actions.disableForm(false);

    actions.loadResults(6, state.search.dataMeteorology, 'cardMeteorology');
    actions.loadResults(6, state.search.dataSunriseSunset, 'cardSunriseSunset');
    actions.loadResults(4, state.search.dataLetters, 'cardLetter');
  };

};
