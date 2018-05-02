import Vue from 'vue';
import Vuex from 'vuex';
import * as type from './types';

Vue.use(Vuex);

const state = {
  quickLink: {
    draft: {
      show: false,
      url: '',
      params: {}
    },
    recycleBin: {
      show: false,
      url: '',
      params: {}
    },
    log: false,
    show: false,
    list: [],
  },
  layout: {
    hideMenu: false,
    paddingRight: 0
  },
  /*messageBoard: {
    show: true,
    code: null
  }*/
};

const actions = {};

const mutations = {
  setDraft(state, params = {}) {
    state.quickLink.draft = _.extend(state.quickLink.draft, params);
  },
  setRecycleBin(state, params = {}) {
    state.quickLink.recycleBin = _.extend(state.quickLink.recycleBin, params);
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
