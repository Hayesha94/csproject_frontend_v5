import API from '@/services/Service.js';
import CSRF from '@/services/CSRF.js';

export default {
  async allGuides() {
    await CSRF.getCSRFToken();
    return API.get('/guides');
  },

  async getGuidesByRegion(payload) {
    await CSRF.getCSRFToken();
    return API.post('/guidesbydestination', JSON.stringify(payload));
  }
}