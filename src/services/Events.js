import API from '@/services/Service.js';
import CSRF from '@/services/CSRF.js';

export default {
  async storeEvents(events) {
    await CSRF.getCSRFToken()
    return API.post('/events', JSON.stringify(events));
  }
}