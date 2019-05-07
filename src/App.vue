<template>
  <div id="app">
    <slideshow></slideshow>
    <drawer v-if="settingsComponent">
      <component :is="settingsComponent"></component>
    </drawer>
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
import Slideshow from "./components/Slideshow.vue";
import Shortcuts from "./components/Shortcuts.vue";

export default {
  name: "app",
  components: {
    TextEditor,
    Sidebar,
    Drawer,
    Fonts,
    SavedFiles,
    Slideshow,
    Shortcuts
  },
  data() {
    return {
      showText: false,
      showWallpaper: true,
      settingsComponent: null
    };
  },
  methods: {
    handleClick(payload) {
      if (this.settingsComponent) {
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
</style>
