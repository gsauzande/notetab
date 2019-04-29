<template>
  <div class="markdown-container">
    <v-dialog style="color:#000000"/>
    <div class="title">Markdown export</div>
    <br>
    <div class="controls">
      <a
        :href="downloadUrl"
        :download="downloadFilename"
        ref="downloadLink"
        class="button"
        @click="saveMarkdown"
      >Save</a>
      <a
        href="javascript:void(0)"
        class="button"
        v-clipboard:copy="markdown"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >Copy</a>
    </div>
    <div class="text">{{ markdown }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import TurdownService from "turndown";
export default {
  name: "MarkdownModal",
  data: function() {
    return {
      turndown: new TurdownService(),
      markdown: "",
      downloadUrl: "javascript:void(0)",
      downloadFilename: `writend_${Date.now()}.md`
    };
  },
  computed: {
    ...mapState(["text"])
  },
  created() {
    this.markdown = this.turndown.turndown(this.text);
    let file = new Blob([this.markdown], { type: "text/markdown" });
    this.downloadUrl = URL.createObjectURL(file);
  },
  methods: {
    saveMarkdown() {},
    onCopy() {
      this.$modal.show("dialog", {
        title: "Copied!",
        text: "The text has been copied to your clipboard",
        buttons: [
          {
            title: "Close"
          }
        ]
      });
    },
    onError(e) {
      console.error(e);
      this.$modal.show("dialog", {
        title: "Error!",
        text: "Failed to copy text. Please try again or copy manually",
        buttons: [
          {
            title: "Close"
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.markdown-container {
  padding: 20px;
}
.title {
  color: black;
  font-size: 15pt;
}
.controls {
  width: 100%;
  height: auto;
}
.text {
  height: 40vh;
  width: 100%;
  box-shadow: inset 0px 1px 4px -1px rgba(0, 0, 0, 0.75);
  margin-top: 1vh;
  border-radius: 2px;
  box-sizing: border-box;
  color: #636363;
  font-size: 9pt;
  padding: 10px;
}
a.button {
  display: inline-block;
  padding: 0.7em 1.4em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 4px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: #ffffff;
  font-size: 9pt;
  background-color: var(--blue-6, blue);
  box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
  text-align: center;
  position: relative;
}
a.button:active {
  top: 0.1em;
}
@media all and (max-width: 30em) {
  a.button {
    display: block;
    margin: 0.4em auto;
  }
}
</style>


