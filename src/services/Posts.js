import API from '@/services/Service.js';
import CSRF from '@/services/CSRF.js';

export default {
  async getAllPosts() {
    await CSRF.getCSRFToken();
    return API.get('/posts');
  },

  async getPostsById(payload) {
    await CSRF.getCSRFToken();
    return API.post('/postsbyid', JSON.stringify(payload));
  }
}