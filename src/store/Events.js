import events from '@/services/Events.js';

export const namespaced = true;

export const state = {
  events: [],
}

export const getters = {
    //
}

export const mutations = {
    SET_EVENTS(state, event) {
      state.events.push(event);
    }
}

export const actions = {
    store_events({commit}, event) {
      return events.storeEvents(event)
        .then( data => {
          commit('SET_EVENTS', event)
          console.log('[*] store_events', data.response);
          return true;
        })
        .catch( error => {
          console.log('[!] store_events', error);
          return false;
      })
    }
}