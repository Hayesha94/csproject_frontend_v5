import API from '@/services/Service.js';
import CSRF from '@/services/CSRF.js';

export default {
  async getReviews(payload) {
    await CSRF.getCSRFToken();
    return API.post('/reviews', JSON.stringify(payload));
  },

  async storeReview(payload) {
    await CSRF.getCSRFToken();
    return API.post('/storereview', JSON.stringify(payload));
  }

}