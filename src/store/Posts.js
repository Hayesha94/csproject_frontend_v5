import posts from '@/services/Posts.js';

export const namespaced = true;

export const state = {
  posts: '',
}

export const getters = {
  posts(state) {
    if (state.posts) {
      return state.posts;
    }
  }
}

export const mutations = {
  SET_POSTS(state, data) {
    state.posts = data;
  }
}

export const actions = {
  get_posts({commit}) {
    return posts.getAllPosts()
      .then( response => {
        console.log('[*] get_posts', response.data);
        commit('SET_POSTS', response.data);
        return true;
      })
      .catch( error => {
        console.log('[!] get_posts', error);
        return false;
    })
  },

  get_posts_by_id({commit}, payload) {
    return posts.getPostsById(payload)
      .then( response => {
        commit('SET_POSTS', response.data);
        console.log('[*] get_posts_by_id', response.data);
      })
      .catch( error => {
        console.log('[!] get_posts_by_id', error);
    })
  }
}