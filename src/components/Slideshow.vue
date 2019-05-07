<template>
  <transition name="fade">
    <div class="overlay" :style="background" v-if="showWallpaper">
      <transition name="fade">
        <div class="prompt-text" v-if="showPrompt">
          <span>Start typing to remove the image...</span>
        </div>
      </transition>
      <div class="photo-description">
        <span>
          Photo by
          <a
            class="photographer-name"
            :href="photographerURL"
            target="_blank"
          >{{photographerName}}</a> via
          <a :href="pexelsURL" target="_blank">Pexels</a>
        </span>
      </div>
    </div>
  </transition>
</template>
<script>
import PhotoService from "@/services/PhotoService";
export default {
  name: "Slideshow",
  data: function() {
    return {
      photoService: new PhotoService(),
      photographerName: "Pexels",
      pexelsURL: "https://www.pexels.com/",
      photographerURL: "https://www.pexels.com/",
      showWallpaper: true,
      showPrompt: false,
      background: {
        backgroundImage: "",
        objectFit: "cover"
      }
    };
  },
  created: function() {
    window.addEventListener("keydown", this.onKeyUp);
    window.setTimeout(() => {
      this.showPrompt = true;
    }, 5000);
  },
  beforeDestroy: function() {
    window.removeEventListener("keydown", this.onKeyUp);
  },
  mounted: function() {
    this.photoService.getCuratedPhoto().then(image => {
      const parsedURL = `url('${image.src.landscape}')`;
      this.photographerName = image.photographer || "Pexels";
      this.photographerURL =
        image.photographer_url || "https://www.pexels.com/";
      this.background.backgroundImage = parsedURL;
    });

    // Start timer to
  },
  methods: {
    hide() {
      this.showWallpaper = !this.showWallpaper;
    },
    onKeyUp(e) {
      this.showWallpaper = false;
    }
  }
};
</script>
<style scoped>
.overlay {
  opacity: 0.9;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
}

.prompt-text {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.prompt-text span {
  color: #ffffff;
  text-shadow: 2px 2px #000000;
  font-size: 20pt;
  font-family: Pacifico;
}
.photo-description {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  padding: 20px;
  font-size: 10pt;
  text-shadow: 1px 1px #000000;
}
.photographer-name {
  text-decoration: none;
  color: #1890ff !important;
  cursor: pointer;
}

.photographer-name:hover {
  text-decoration: underline;
}

.photo-description a {
  text-decoration: none;
  color: #1890ff;
}
.photo-description a:hover {
  text-decoration: underline;
}
/* ================= TRANSITIONS ================== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

