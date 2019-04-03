<template>
  <div>
    <h1>Fonts</h1>
    <div class="fonts-container">
      <div class="font righteous" @click="changeFont('righteous')">Notetab</div>
      <div class="font open-sans" @click="changeFont('open-sans')">Notetab</div>
      <div class="font pacifico" @click="changeFont('pacifico')">Notetab</div>
      <div class="font traveling-typewriter" @click="changeFont('traveling-typewriter')">Notetab</div>
      <div class="font ubuntu" @click="changeFont('ubuntu')">Notetab</div>
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
      this.$store.dispatch("setCurrentFont", fontName);
    }
  }
};
</script>
<style scoped>
.font {
  padding: 15px;
  background: white;
  margin-top: 5px;
  width: 80%;
  cursor: pointer;
  font-size: 15pt;
}

.font:hover {
  background: wheat;
}
</style>


