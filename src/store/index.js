import Vue from "vue";
import Vuex from "vuex";
import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    markup: ""
  },
  actions: {
    setMarkdown(context, payload) {
      context.commit("SET_MARKUP", payload);
    }
  },
  mutations: {
    SET_MARKUP(state, payload) {
      state.markup = payload;
    }
  },
  getters: {
    markup: state => {
      return state.markup;
    }
  }
});
