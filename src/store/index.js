import Vue from 'vue';
import Vuex from 'vuex';
import * as type from './types';

Vue.use(Vuex);

const state = {
  quickLink: {
    show: false,
    list: [],
  },
  layout: {
    hideMenu: false,
  }
};

const actions = {};

const mutations = {};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
