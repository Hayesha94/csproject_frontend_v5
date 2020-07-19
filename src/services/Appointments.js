import API from '@/services/Service.js';
import CSRF from '@/services/CSRF.js';

export default {
  async submitAppointment(payload) {
    await CSRF.getCSRFToken();
    return API.post('appointments', JSON.stringify(payload));
  },

  async getAppointments() {
    await CSRF.getCSRFToken();
    return API.get('appointments');
  },

  async getAppointmentsById(payload) {
    await CSRF.getCSRFToken();
    return API.post('getappointmentsbyid', JSON.stringify(payload));
  },

  async updateAppointment(payload) {
    await CSRF.getCSRFToken();
    return API.post('updateappointment', JSON.stringify(payload));
  }
}