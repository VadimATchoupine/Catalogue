<template>
  <q-toolbar color="primary">
    <the-layout-header-toolbar-title/>
    <the-layout-header-toolbar-button-dropdown/>
  </q-toolbar>
</template>

<script>
import TheLayoutHeaderToolbarTitle from './TheLayoutHeaderToolbarTitle.vue'
import TheLayoutHeaderToolbarButtonDropdown from './TheLayoutHeaderToolbarButtonDropdown.vue'

export default {
  components: {
    TheLayoutHeaderToolbarTitle,
    TheLayoutHeaderToolbarButtonDropdown
  }
}
</script>
