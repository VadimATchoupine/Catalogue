<template>
  <!-- <aside id="sidenav"> -->
  <aside>
    <the-control-panel-content/>
  </aside>
</template>

<script>

import TheControlPanelContent from './TheControlPanelContent.vue'
export default {
  components: {
    TheControlPanelContent
  }
}
</script>

<style scoped>
#sidenav {
  width: 100px;
  overflow-x: hidden;
  padding-top: 0;
  height: 100%; /* 100% Full-height */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
}
</style>
