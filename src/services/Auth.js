import API from '@/services/Service.js';
import CSRF from '@/services/CSRF.js';

export default {
  
  async register(data) {
    await CSRF.getCSRFToken();
    return API.post('/register', JSON.stringify(data));
  },

  async login(data) {
    await CSRF.getCSRFToken();
    return API.post('/login', JSON.stringify(data));
  },

  async logout() {
    await CSRF.getCSRFToken();
    return API.post('/logout');
  },
}