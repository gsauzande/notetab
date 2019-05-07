<template>
  <div class="editor">
    <span>__</span>
    <div contenteditable="true" @keyup="onKeyUp" ref="myText" :class="currentFont || ''"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TextEditor",
  mounted: function() {
    this.$refs.myText.focus();
  },
  data: function() {
    return {
      filename: `writend_${Date.now().toString()}`
    };
  },
  computed: mapState(["currentFont", "text", "currentFilename"]),
  methods: {
    onKeyUp() {
      this.$store.dispatch("setText", this.$refs.myText.innerHTML);
      // Save current text in storage
      localStorage.removeItem(this.filename);
      localStorage.setItem(this.filename, this.$refs.myText.innerHTML);
      this.$emit("typing");
    }
  }
};
</script>
<style scoped>
.editor {
  position: relative;
  float: left;
  height: 100vh;
  width: auto;
  min-width: 10vw;
  max-width: 60%;
  background: white;
  padding-left: 2% !important;
  padding-top: 2%;
}
.editor div {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  color: #000000;
  border: none;
  font-size: 14px;
}
.editor div:focus {
  outline: none;
  border: none;
}
</style>


