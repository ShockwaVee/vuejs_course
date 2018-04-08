import * as types from './mutation-types'

export const mutations = {
  [types.INIT_JOKES](state, payload) {
    let length = 'short';
    if(payload.length < 44) length = 'short';
    if(payload.length >= 44 && payload.length < 88) length = 'medium';
    if(payload.length >= 88) length = 'long';
    state.jokes.push({quote: payload, length: length})
  },
  [types.ADD_10_JOKES](state, payload){
    state.jokes.push(...payload)
  },
  [types.REMOVE_JOKE](state, index){
    state.jokes.splice(index, 1)
  }
}
