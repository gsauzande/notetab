<template>
  <div class="overlay" :style="background"></div>
</template>
<script>
import PhotoService from "@/services/PhotoService";
export default {
  name: "Slideshow",
  data: function() {
    return {
      photoService: new PhotoService(),
      background: {
        backgroundImage: "",
        objectFit: "cover"
      }
    };
  },
  mounted: function() {
    this.photoService.getCuratedPhoto().then(url => {
      console.warn("URL", url);
      const parsedURL = `url('${url}')`;
      this.background.backgroundImage = parsedURL;
    });
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
</style>

