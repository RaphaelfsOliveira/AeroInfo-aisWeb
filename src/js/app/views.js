import Search from './models';
import { elements, inputs } from './base';
import * as templates from './templates';
import * as actions from './actions';

const state = {};

export const controlSearch = async () => {
  // 1. As cartas disponíveis
  // 2. Os horários de nascer e pôr do sol de hoje
  // 3. A informação de TAF e METAR disponíveis
  // // TODO: COLOCAR A QUERY PARA PEGAR O CODIGO!!d

  const query = inputs.get();

  if (query) {

    console.log(query);
    state.search = new Search(query);


    actions.disableForm(true);

    const loadId = 'loading';
    actions.initLoading(elements.cardDeck, loadId);

    await state.search.flightLetters();
    // console.log('stateData', state.search.data);

    actions.finishLoading(`#${loadId}`);

    actions.disableForm(false);

    // TODO: fazer timedate do card
    actions.loadResults(4, state.search.dataLetters);
  };

};
