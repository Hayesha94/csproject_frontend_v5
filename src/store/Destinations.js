import destinations from '@/services/Destinations.js';
export const namespaced = true;

export const state = {
  destinations: null,
  categories: null,
  preferred_destinations: null,
}

export const getters = {
  destinations(state) {
    if (state.destinations) {
      return state.destinations;
    }
  },
  categories(state) {
    if (state.categories) {
      return state.categories;
    }
  },
  getDestinationById: (state) => (id) => {
    return state.destinations.find(destination => destination.id === id)
  },
  preDestinations(state) {
    if (state.preferred_destinations) {
      return state.preferred_destinations;
    }
  },
}

export const mutations = {
  SET_DESTINATIONS(state, data) {
    if (data) {
      state.destinations = data;
    }
  },

  SET_PREFERRED_DESTINATIONS(state, payload) {
    state.preferred_destinations = payload;
  },

  SET_CATEGORIES(state, payload) {
    state.categories = payload;
  }
}

export const actions = {
  get_destinations({commit}) {
    return destinations.getDestinations()
      .then( response => {
        console.log('[*] get_destinaions', response.data);
        commit('SET_DESTINATIONS', response.data);
      })
      .catch ( error => {
        console.log('[!] get_destinations', error);
    })
  },

  get_categories({commit}) {
    return destinations.getCategories()
      .then( response => {
        commit('SET_CATEGORIES', response.data);
      })
      .catch( error => {
        console.log('[!] get_categories', error);
      })
  },

  set_destinations_by_preferances({commit}, payload) {
    commit('SET_PREFERRED_DESTINATIONS', payload);
  }
}