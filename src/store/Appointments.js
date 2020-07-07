export const namespaced = true;

export const state = {

  appointment: {
    inviter: {
      user_id: '',
      participants: {
        adults: '',
        childern: '',
        user_id: [],
      },
      interests: [],
      destinations: [],
    },
    guide_id: '',
  },
}

export const getters = {
    //
}

export const mutations = {

  SET_USER_ID(state, id) {
    state.appointment.inviter.user_id = id;
  },

  SET_PARTICIPANTS_ADULTS(state, count) {
    state.appointment.inviter.participants.adults = count;
  },

  SET_PARTICIPANTS_CHILDREN(state, count) {
    state.appointment.inviter.participants.childern = count;
  },

  SET_INTERESTS(state, interests) {
    state.appointment.inviter.interests = interests;
  },

  SET_DESTINATIONS(state, destinations) {
    state.appointment.inviter.destinations = destinations;
  },

  SET_LOCATIONS(state, locations) {
    state.appointment.inviter.locations = locations;
  },

  SET_ACTIVITIES(state, activities) {
    state.appointment.inviter.activities = activities;
  },

  SET_GUIDE_ID(state, id) {
    state.appointment.guide_id = id;
  },
}

export const actions = {
    //
}