import API from '@/services/Service.js';
import CSRF from '@/services/CSRF.js';

export default {
  async follows(payload) {
    await CSRF.getCSRFToken();
    return API.post('/follows', JSON.stringify(payload));
  },

  async getFollowsById(payload) {
    await CSRF.getCSRFToken();
    return API.post('/followsbyid', JSON.stringify(payload));
  },

}