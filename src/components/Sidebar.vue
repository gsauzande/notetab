<template>
  <div class="sidebar">
    <modals-container/>
    <div
      :class="{highlight:isHighlighted('fonts')}"
      class="settings-option"
      id="fonts"
      @click="handleClick('Fonts')"
    >
      <img src="@/assets/images/typographic-button.png" class="settings-option-icon">
    </div>
    <div
      :class="{highlight:isHighlighted('markdown-export')}"
      class="settings-option"
      id="markdown-export"
      @click="onMarkdownClick"
    >
      <img src="@/assets/images/md_small.png" class="settings-option-icon">
    </div>
    <div :class="{highlight:isHighlighted('saved-files')}" class="settings-option" id="saved-files">
      <img src="@/assets/images/cut-button-1.png" class="settings-option-icon">
    </div>
    <div :class="{highlight:isHighlighted('about')}" class="settings-option" id="about">
      <img src="@/assets/images/doubts-button.png" class="settings-option-icon">
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
      if (this.selectedSetting) {
        this.selectedSetting = null;
        this.$emit("settingsClick", clickedSetting);
      } else {
        console.log("end", this.selectedSetting);
        // Highlight the selected setting, all others keep the same opacity
        // Remove shadows from side bar and keep it only on the selected option on the right, bottom and top
        // Put shadow on the sidebar thing
        this.$emit("settingsClick", clickedSetting);
        this.selectedSetting = clickedSetting;
      }
    }
  }
};
</script>
<style scoped>
.sidebar {
  float: left;
  height: 100vh;
  width: 5%;
  color: white;
  background: #f3f2f0;
  margin-left: 4px;
}

.option-icon {
  margin: 0 auto;
}
.settings-option-icon {
  width: 25px;
}
.highlight {
  opacity: 1 !important;
  background: #ffefd0;
  box-shadow: 1px 3px 2px -2px rgba(0, 0, 0, 0.75);
}

.settings-option:hover {
  cursor: pointer;
  background: #ffefd0;
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

