<template>
  <div class="shadow">
    <div class="drawer-title">Fonts</div>
    <div class="fonts-container">
      <div class="font righteous" @click="changeFont('righteous')">
        writend
        <img
          src="@/assets/images/checkmark.png"
          class="checkmark-img"
          v-if="isCurrentFont('righteous')"
        >
      </div>
      <div class="font open-sans" @click="changeFont('open-sans')">
        writend
        <img
          src="@/assets/images/checkmark.png"
          class="checkmark-img"
          v-if="isCurrentFont('open-sans')"
        >
      </div>
      <div class="font pacifico" @click="changeFont('pacifico')">
        writend
        <img
          src="@/assets/images/checkmark.png"
          class="checkmark-img"
          v-if="isCurrentFont('pacifico')"
        >
      </div>
      <div class="font traveling-typewriter" @click="changeFont('traveling-typewriter')">
        writend
        <img
          src="@/assets/images/checkmark.png"
          class="checkmark-img"
          v-if="isCurrentFont('traveling-typewriter')"
        >
      </div>
      <div class="font ubuntu" @click="changeFont('ubuntu')">
        writend
        <img
          src="@/assets/images/checkmark.png"
          class="checkmark-img"
          v-if="isCurrentFont('ubuntu')"
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Fonts",
  computed: mapState(["currentFont"]),
  methods: {
    changeFont(fontName) {
      if (fontName === this.currentFont) {
        this.$store.dispatch("setCurrentFont", "");
      } else {
        this.$store.dispatch("setCurrentFont", fontName);
      }
    },
    isCurrentFont(fontName) {
      return this.currentFont === fontName;
    }
  }
};
</script>
<style scoped>
.font {
  padding: 15px;
  background: white;
  margin-top: 5px;
  width: 100%;
  cursor: pointer;
  font-size: 15pt;
}

.checkmark-img {
  display: block;
  float: right;
  height: 20px;
  margin-right: 10% !important;
  margin-top: 5px;
  /* margin: 0 auto; */
}
.font:hover {
  background: var(--blue-1, grey);
  color: var(--blue-6, grey);
}
</style>


