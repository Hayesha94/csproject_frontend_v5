import API from '@/services/Service.js';
import CSRF from '@/services/CSRF.js';

export default {
  async storeEvents(events) {
    await CSRF.getCSRFToken();
    return API.post('/events', JSON.stringify(events));
  },

  async registerToEvent(data) {
    await CSRF.getCSRFToken();
    console.log('in service', data)
    return API.post('/registertoevent', JSON.stringify(data));
  },

  async getRegisteredEvents(tourist_id) {
    await CSRF.getCSRFToken();
    return API.post('/getregisteredevents', JSON.stringify(tourist_id));
  }
}