<template>
  <div class="shadow">
    <v-dialog/>
    <div class="drawer-title">Saved Files</div>
    <div class="fonts-container">
      <div v-for="(filename, index) in savedFiles" :key="index" class="file">
        <span @click="loadSavedFile(filename)" class="filename">{{filename}}</span>

        <img src="@/assets/images/remove-file.png" @click="deleteFile(filename)" class="action-img">
        <!-- <img src="@/assets/images/upload-button.png" class="action-img"> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "SavedFiles",
  data: function() {
    return {
      savedFiles: Object.keys(localStorage).filter(key =>
        key.includes("writend")
      )
    };
  },
  computed: mapState(["currentFilename"]),
  methods: {
    loadSavedFile(filename) {
      this.$store.dispatch("setCurrentFilename", filename);
      this.$store.dispatch("setText", localStorage.getItem(filename));
    },
    deleteFile(filename) {
      this.$modal.show("dialog", {
        title: "Deleting File",
        text: `Are you sure you want to delete ${filename}?`,
        buttons: [
          {
            title: "Yes",
            handler: () => {
              localStorage.removeItem(filename);
              this.savedFiles = this.savedFiles.filter(
                file => file !== filename
              );
              this.$modal.hide("dialog");
            }
          },
          {
            title: "Close"
          }
        ]
      });
    },
    isCurrentFile(filename) {
      return this.currentFilename === filename;
    }
  }
};
</script>
<style scoped>
.file {
  padding: 10px;
  background: white;
  margin-top: 5px;
  width: 100%;
  height: auto;
  overflow: hidden;
  cursor: pointer;
  font-size: 10pt;
}
.filename {
  display: block;
  float: left;
  margin-right: 10px;
  width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.action-img {
  float: left;
  height: 15px;
  margin-right: 5% !important;
}
.file:hover {
  background: var(--blue-1, grey);
  color: var(--blue-6, grey);
}
</style>


