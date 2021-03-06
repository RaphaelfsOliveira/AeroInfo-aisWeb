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
    actions.addLoadingMsg(elements.cardDeck, 'loading', loadId);

    await state.search.flightLetters();
    await state.search.sunriseSunset();
    await state.search.meteorology();

    if (state.search.dataLetters.length) {
      actions.loadResults(6, state.search.dataMeteorology, 'cardMeteorology');
      actions.loadResults(6, state.search.dataSunriseSunset, 'cardSunriseSunset');
      actions.loadResults(4, state.search.dataLetters, 'cardLetter');
    } else {
      actions.addLoadingMsg(elements.cardDeck, 'alertError');
    }

    actions.finishLoading(`#${loadId}`);
    actions.disableForm(false);
  };
};
