// http://ron-swanson-quotes.herokuapp.com/v2/quotes

import * as types from './mutation-types'

export const initJokes = ({
  commit
}) => {
  fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes', {
      method: 'GET'
    }).then(response => response.json())
    .then(json => commit(types.INIT_JOKES, ...json));
}

export const add10Jokes = ({
  commit
}) => {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes/10', {
      method: 'GET'
    }).then(response => response.json())
    .then(json => commit(types.ADD_10_JOKES, json));

}

export const removeJoke = ({commit}, index) => {
  commit(types.REMOVE_JOKE, index);
};
