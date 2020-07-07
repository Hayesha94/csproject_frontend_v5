import API from '@/services/Service.js';
import CSRF from '@/services/CSRF.js';

export default {

  async all() {
    await CSRF.getCSRFToken();
    return API.get('destinations');
  },

  async getDestinationsByPreferance(payload) {
    await CSRF.getCSRFToken();
    return API.post('filterdestinationsbypreferance', JSON.stringify(payload));
  },

  async getDestinations() {
    await CSRF.getCSRFToken();
    return API.get('destinations');
  },

  async getCategories() {
    await CSRF.getCSRFToken();
    return API.get('categories');
  }
}