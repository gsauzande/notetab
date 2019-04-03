<template>
  <div class="editor">
    <div contenteditable="true" @keyup="onKeyUp" ref="myText" :class="currentFont || ''"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TextEditor",
  data: function() {
    return {
      markdown: ""
    };
  },
  computed: mapState(["currentFont"]),
  methods: {
    onKeyUp() {
      this.$store.dispatch("setMarkdown", this.$refs.myText.innerHTML);
    }
  }
};
</script>
<style scoped>
.editor {
  float: left;
  height: 100vh;
  width: 95%;
  background: white;
}
.editor div {
  width: 100%;
  height: 100vh;
  background-color: #f4f2f0;
  border: none;
  padding: 5%;
  font-size: 14px;
}
.editor div:focus {
  outline: none;
  border: none;
}
</style>


