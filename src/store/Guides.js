import guide from '@/services/Guides.js';

export const namespaced = true;

export const state = {
	guides: [],
	guidesByRegion: [],
}

export const getters = {
	guides(state) {
    if (state.guides) {
      return state.guides;
    }
  },
  guidesByRegion(state) {
    if (state.guidesByRegion) {
      return state.guidesByRegion;
    }
  },
}

export const mutations = {
	SET_GUIDES(state, response) {
		if (response) {
			state.guides = response;
		}
	},
	SET_GUIDES_REGION(state, response) {
		if (response) {
			state.guidesByRegion = response;
		}
	},
}

export const actions = {
	get_all_guides({commit}) {
		return guide.allGuides()
			.then( response => {
				console.log('[*] get_all_guides', response.data);
				commit('SET_GUIDES', response.data);
			})
			.catch( error => {
				console.log('[!] get_all_guides', error);
		})
	},

	get_guides_by_destination( {commit}, payload) {
    return guide.getGuidesByRegion(payload)
      .then( response => {
        console.log('[*] get_guides_by_destination', response.data);
        commit('SET_GUIDES_REGION', response.data);
      })
      .catch( error => {
        console.log('[!] get_guides_by_destination', error);
      })
	},
}