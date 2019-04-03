<template>
  <div id="app">
    <transition name="slide">
      <drawer v-show="settingsComponent">
        <component :is="settingsComponent"></component>
      </drawer>
    </transition>
    <sidebar @settingsClick="handleClick"></sidebar>
    <text-editor></text-editor>
  </div>
</template>

<script>
import TextEditor from "./components/TextEditor.vue";
import Sidebar from "./components/Sidebar.vue";
import Drawer from "./components/Drawer.vue";
import Fonts from "./components/Fonts.vue";

export default {
  name: "app",
  components: {
    TextEditor,
    Sidebar,
    Drawer,
    Fonts
  },
  data() {
    return {
      settingsComponent: null
    };
  },
  methods: {
    handleClick(payload) {
      if (!!this.settingsComponent) {
        this.settingsComponent = null;
      } else {
        this.settingsComponent = payload;
      }
    }
  }
};
</script>

<style>
body {
  background: #93806c1a;
  margin: 0px;
  overflow-x: hidden;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

@font-face {
  font-family: Righteous;
  src: url("assets/fonts/Righteous-Regular.ttf");
}
@font-face {
  font-family: OpenSans;
  src: url("assets/fonts/OpenSans-Regular.ttf");
}
@font-face {
  font-family: Pacifico;
  src: url("assets/fonts/Pacifico-Regular.ttf");
}
@font-face {
  font-family: TravelingTypewriter;
  src: url("assets/fonts/TravelingTypewriter.ttf");
}
@font-face {
  font-family: Ubuntu;
  src: url("assets/fonts/Ubuntu-Regular.ttf");
}
.righteous {
  font-family: Righteous !important;
}
.open-sans {
  font-family: OpenSans !important;
}
.pacifico {
  font-family: Pacifico !important;
}
.traveling-typewriter {
  font-family: TravelingTypewriter !important;
}
.ubuntu {
  font-family: Ubuntu !important;
}

.sidebar img {
  width: 16px;
  margin: 0 auto;
}

#settings-button {
  cursor: pointer;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
