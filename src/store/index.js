import Vue from "vue";
import Vuex from "vuex";
import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    markup: "",
    currentFont: ""
  },
  actions: {
    setMarkdown(context, payload) {
      context.commit("SET_MARKUP", payload);
    },
    setCurrentFont(context, payload) {
      context.commit("SET_CURRENT_FONT", payload);
    }
  },
  mutations: {
    SET_MARKUP(state, payload) {
      state.markup = payload;
    },
    SET_CURRENT_FONT(state, payload) {
      state.currentFont = payload;
    }
  },
  getters: {
    markup: state => {
      return state.markup;
    }
  }
});
