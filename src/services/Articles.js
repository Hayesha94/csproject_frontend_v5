import API from '@/services/Service.js';
import CSRF from '@/services/CSRF.js';

export default {
  async storeArticles(article) {
    await CSRF.getCSRFToken()
    return API.post('/articles', JSON.stringify(article));
  }
}