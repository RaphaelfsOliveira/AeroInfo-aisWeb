import { elements } from './base';
import * as templates from './templates';

export const loadResults = (cardSize, body) => {
  for (let i = 0; i < 1; i++) {
    elements.cardDeck.insertAdjacentHTML('afterbegin', templates.card(cardSize, body));
  }
};
