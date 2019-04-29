<template>
  <div class="drawer">
    <Box class="box" :pose="isVisible ? 'visible' : 'hidden'"/>
    <slot></slot>
  </div>
</template>
<script>
import posed from "vue-pose";
export default {
  name: "Drawer",
  data: () => ({ isVisible: false }),
  props: {
    currentSettingsComponent: {
      type: Object,
      default: null
    }
  },
  components: {
    Box: posed.div({
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    })
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
  /* background: green; */
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.19), 0 0px 1px rgba(0, 0, 0, 0.23);
}
</style>


