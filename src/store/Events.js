import events from '@/services/Events.js';

export const namespaced = true;

export const state = {
  events: [],
  registered_events: [],
}

export const getters = {
  isRegistered: (state) => (id) => {
    return state.registered_events.find( event => event === id);
  }
}

export const mutations = {
  SET_EVENTS(state, event) {
    state.events.push(event);
  },

  SET_REGISTERED_EVENTS(state, data) {
    if (data) {
      const eventList = data.map(function (events) {
        return events.pivot.event_id;
      })
      state.registered_events = eventList;
      localStorage.setItem('events_registered', JSON.stringify(eventList));
    }
  },
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
  },

  register_to_event({commit}, data) {
    return events.registerToEvent(data)
      .then( response => {
        console.log('[*] register_to_event', response.data);
        commit('SET_REGISTERED_EVENTS', response.data);
        return true;
      })
      .catch( error => {
        console.log('[!] register_to_event', error);
        return false;
    })
  },

  get_registered_events({commit}, tourist_id) {
    return events.getRegisteredEvents(tourist_id)
      .then( response => {
        console.log('[*] get_registered_events', response.data);
        commit('SET_REGISTERED_EVENTS', response.data);
      })
      .catch ( error => {
        console.log('[!] get_registered_events', error);
    });
  }
}