<template>
  <div class="sidebar">
    <modals-container/>
    <div class="logo">
      <img src="@/assets/images/app_logo_big.png" alt="writend logo">
    </div>
    <div
      :class="{highlight:isHighlighted('fonts')}"
      class="settings-option"
      id="fonts"
      @click="handleClick('Fonts')"
    >
      <img src="@/assets/images/typographic-button.png" class="settings-option-icon">
    </div>
    <div
      :class="{highlight:isHighlighted('shortcuts')}"
      class="settings-option"
      id="shortcuts"
      @click="handleClick('Shortcuts')"
    >
      <img src="@/assets/images/doubts-button.png" class="settings-option-icon">
    </div>
    <div
      :class="{highlight:isHighlighted('markdown-export')}"
      class="settings-option"
      id="markdown-export"
      @click="onMarkdownClick"
    >
      <img src="@/assets/images/md_small.png" class="settings-option-icon">
    </div>
  </div>
</template>
<script>
import MarkdownModal from "./MarkdownModal.vue";
export default {
  name: "Sidebar",
  components: { MarkdownModal },
  data: function() {
    return {
      selectedSetting: null
    };
  },
  computed: {},
  methods: {
    isHighlighted: function(settingsOption) {
      if (!this.selectedSetting) return "";
      return settingsOption === this.selectedSetting.toLowerCase()
        ? true
        : false;
    },
    onMarkdownClick: function(markdown) {
      this.$modal.show(MarkdownModal, {}, { height: "auto", top: "20vh" });
    },
    handleClick(clickedSetting) {
      if (this.selectedSetting === clickedSetting) {
        this.selectedSetting = null;
        this.$emit("settingsClick", null);
      } else {
        this.selectedSetting = clickedSetting;
        this.$emit("settingsClick", clickedSetting);
      }
    }
  }
};
</script>
<style scoped>
.sidebar {
  float: left;
  height: 100vh;
  width: 5vw;
  color: white;
  background: #ffffff;
  margin-left: 4px;
}
.logo img {
  height: 25px;
  width: 25px;
  margin: 0 auto;
}
.logo {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
}

.option-icon {
  margin: 0 auto;
}
.settings-option-icon {
  width: 25px;
}
.highlight {
  opacity: 1 !important;
  background: #ffffff;
  box-shadow: 1px 3px 2px -2px rgba(0, 0, 0, 0.75);
}

.settings-option:hover {
  cursor: pointer;
  background: #ffffff;
  opacity: 1 !important;
}
.black {
  color: #000000;
}
.settings-option {
  height: 50px;
  display: flex;
  margin-left: -4px;
  justify-content: center;
  align-items: center;
  opacity: 0.1;
}
</style>

