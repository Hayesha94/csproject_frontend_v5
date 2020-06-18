import articles from '@/services/Articles.js';

export const namespaced = true;

export const state = {
  articles: [],
}

export const getters = {
  //
}

export const mutations = {
  SET_ARTICLES(state, article) {
    state.articles.push(article);
  }
}

export const actions = {
    store_articles({commit}, article) {
      return articles.storeArticles(article)
        .then( data => {
          commit('SET_ARTICLES', article);
          console.log('[*] store_articles', data.response);
          return true;
        })
        .catch( error => {
          console.log('[!] store_articles', error);
          return false;
      })
    }
}