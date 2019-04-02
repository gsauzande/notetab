<template>
  <div class="sidebar">
    <modals-container/>
    <div class="settings-option" id="fonts" @click="handleClick('Fonts')">
      <img src="@/assets/images/typographic-button.png" class="settings-option-icon">
    </div>
    <div class="settings-option" id="markdown-export" @click="onMarkdownClick">
      <img src="@/assets/images/md_small.png" class="settings-option-icon">
    </div>
    <div class="settings-option" id="saved-files">
      <img src="@/assets/images/cut-button-1.png" class="settings-option-icon">
    </div>
    <div class="settings-option" id="about">
      <img src="@/assets/images/doubts-button.png" class="settings-option-icon">
    </div>
  </div>
</template>
<script>
import MarkdownModal from "./MarkdownModal.vue";
export default {
  name: "Sidebar",
  components: { MarkdownModal },
  methods: {
    onMarkdownClick: function(markdown) {
      this.$modal.show(MarkdownModal, {}, { height: "auto", top: "20vh" });
    },
    handleClick(clickedSetting) {
      this.$emit("settingsClick", clickedSetting);
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
  opacity: 0.1;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.19), 0 0px 1px rgba(0, 0, 0, 0.23);
}
.sidebar:hover {
  opacity: 1;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.19), 0 0px 6px rgba(0, 0, 0, 0.23);
}
.option-icon {
  margin: 0 auto;
}
.settings-option-icon {
  width: 25px;
}

.settings-option:hover {
  cursor: pointer;
  background: #ffefd0;
}
.black {
  color: #000000;
}
.settings-option {
  border-bottom: 1px solid grey;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

