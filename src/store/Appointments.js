import appointment from '@/services/Appointments.js';

export const namespaced = true;

export const state = {

  appointments: [],

  appointment: {
    inviter: {
      user_id: '',
      participants: {
        adults: '',
        children: '',
        user_id: [],
      },
      interests: [],
      locations: [],
    },
    guide: [],
    name: '',
    description: '',
    notes: '',
    start: '',
    end: '',
  },
}

export const getters = {
  getInterests(state) {
    if (state.appointment.inviter.interests) {
      return state.appointment.inviter.interests;
    } else {
      return false;
    }
  },

  getGuide(state) {
    if (state.appointment.guide) {
      return state.appointment.guide;
    } else {
      return false;
    }
  },

  getAppointments(state) {
    if (state.appointments) {
      return state.appointments;
    }
  },
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

  SET_LOCATIONS(state, locations) {
    state.appointment.inviter.locations = locations;
  },

  SET_GUIDE(state, guide) {
    state.appointment.guide = guide;
  },

  SET_APPOINTMENTS(state, payload) {
    state.appointments = payload;
  },

  SET_APPOINTMENT(state, payload) {
    state.appointments.push(payload);
  },

  SET_NAME(state, payload) {
    state.appointment.name = payload;
  },

  SET_DESCRIPTION(state, payload) {
    state.appointment.description = payload;
  },
  
  SET_NOTES(state, payload) {
    state.appointment.notes = payload;
  },

  SET_DATE_START(state, payload) {
    state.appointment.start = payload;
  },
  
  SET_DATE_END(state, payload) {
    state.appointment.end = payload;
  },

  CLEAR_APPOINTMENT(state) {
    state.appointment.inviter.user_id = '';
    state.appointment.inviter.participants.adults = '';
    state.appointment.inviter.participants.childern = '';
    state.appointment.inviter.interests = [];
    state.appointment.inviter.locations = [];
    state.appointment.guide = [];
    state.appointment.name = '';
    state.appointment.description = '';
    state.appointment.notes = '';
  }
}

export const actions = {
  submit_appointment( {commit}) {
    return appointment.submitAppointment(state.appointment)
      .then( response => {
        this.dispatch('Snackbar/set_snackbar', {
          text: 'Congrats, Appointment made successfully',
          color: 'success'
        });
        commit('SET_APPOINTMENT', response.data);
        commit('CLEAR_APPOINTMENT');
      })
      .catch( error => {
        this.dispatch('Snackbar/set_snackbar', {
          text: error,
          color: 'red',
        })
      })
  },

  get_appointments( {commit}) {
    return appointment.getAppointments()
      .then( response => {
        console.log('[*] get_appointments', response.data);
        commit('SET_APPOINTMENTS', response.data);
      })
      .catch( error => {
        console.log('[!] get_appointments', error);
    })
  },

  get_appointments_by_id( {commit}, payload) {
    return appointment.getAppointmentsById(payload)
      .then( response => {
        console.log('[*] get_appointments', response.data);
        commit('SET_APPOINTMENTS', response.data);
      })
      .catch( error => {
        console.log('[!] get_appointments', error);
    })
  },

  update_appointment({commit}, payload) {
    return appointment.updateAppointment(payload)
      .then( response => {
        commit('SET_APPOINTMENTS', response.data);
      })
  }
}