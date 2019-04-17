<template>
  <div id="app">
    <transition name="fade">
      <drawer v-if="settingsComponent">
        <component :is="settingsComponent"></component>
      </drawer>
    </transition>
    <sidebar @settingsClick="handleClick"></sidebar>
    <text-editor @typing="toggleText"></text-editor>
    <div class="saving" v-show="showText">Saving...</div>
  </div>
</template>

<script>
import TextEditor from "./components/TextEditor.vue";
import Sidebar from "./components/Sidebar.vue";
import Drawer from "./components/Drawer.vue";
import Fonts from "./components/Fonts.vue";
import SavedFiles from "./components/SavedFiles.vue";

export default {
  name: "app",
  components: {
    TextEditor,
    Sidebar,
    Drawer,
    Fonts,
    SavedFiles
  },
  data() {
    return {
      showText: false,
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
    },
    toggleText() {
      this.showText = !this.showText;
      setTimeout(() => {
        this.showText = !this.showText;
      }, 1000);
    }
  }
};
</script>

<style>
body {
  background: #ffffff;
  margin: 0px;
  overflow: hidden;
  color: #314659;
  --blue-1: #e6f7ff;
  --blue-2: #bae7ff;
  --blue-3: #91d5ff;
  --blue-4: #69c0ff;
  --blue-5: #40a9ff;
  --blue-6: #1890ff;
  --blue-7: #096dd9;
  --blue-8: #0050b3;
  --blue-9: #003a8c;
  --blue-10: #002766;
}
#app {
  font-family: OpenSans, Helvetica, Arial, sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
.drawer-title {
  font-size: 25pt;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;
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
.saving {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 10pt;
  opacity: 0.5;
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
