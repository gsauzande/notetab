<template>
  <div class="drawer">
    <Box class="box" :pose="isVisible ? 'visible' : 'hidden'"/>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Drawer",
  data: () => ({ isVisible: false }),
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
  width: 15%;
  background: #ffffff;
  overflow: hidden;
  padding-left: 20px;
  z-index: 99;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.19), 0 0px 1px rgba(0, 0, 0, 0.23);
}
</style>


