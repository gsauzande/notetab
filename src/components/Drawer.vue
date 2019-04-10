<template>
  <div class="drawer">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Drawer",
  props: {
    currentSettingsComponent: {
      type: Object,
      default: null
    }
  }
};
</script>
<style scoped>
.drawer {
  float: left;
  height: 100vh;
  width: 20%;
  color: black;
  background: #f3f2f0;
  overflow: hidden;
  padding-left: 20px;
  z-index: 99;
  /* background: green; */
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.19), 0 0px 1px rgba(0, 0, 0, 0.23);
}
</style>


