import Vue from "vue";
import Vuex from "vuex";
import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    text: "",
    currentFont: "",
    currentFilename: ""
  },
  actions: {
    setText(context, payload) {
      context.commit("SET_TEXT", payload);
    },
    setCurrentFont(context, payload) {
      context.commit("SET_CURRENT_FONT", payload);
    },
    setCurrentFilename(context, payload) {
      context.commit("SET_CURRENT_FILENAME", payload);
    }
  },
  mutations: {
    SET_TEXT(state, payload) {
      state.text = payload;
    },
    SET_CURRENT_FONT(state, payload) {
      state.currentFont = payload;
    },
    SET_CURRENT_FILENAME(state, payload) {
      state.currentFilename = payload;
    }
  }
});
