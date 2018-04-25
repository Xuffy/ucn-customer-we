import Vue from 'vue';
import Vuex from 'vuex';
import * as type from './types';

Vue.use(Vuex);

const state = {
  quickLink: {
    draft: false,
    log: false,
    recycleBin: false,
    show: false,
    list: [],
  },
  layout: {
    hideMenu: false,
  },
  messageBoard: {
    show: true,
    code: null
  }
};

const actions = {};

const mutations = {};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
