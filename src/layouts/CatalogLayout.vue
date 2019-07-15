<template>
  <q-layout view="lHr LpR lFf">

    <!-- 1. HEADER -->
    <q-layout-header>
      <the-layout-header/>
    </q-layout-header>

    <!-- 2. CONTROL PANEL -->
    <q-layout-drawer
      side="left"
      v-model="controlPanel"
      v-bind:overlay="controlPanelOverlay"
      v-bind:behavior="controlPanelBehavior"
      v-bind:breakpoint="controlPanelBreakpoint"
      v-bind:width="controlPanelWidth"
      content-class="bg-white"
    >
      <the-control-panel-content/>
    </q-layout-drawer>

    <!-- 3. NESTED LAYOUT -->
    <q-page-container>
      <router-view name="nestedLayout"/>
    </q-page-container>

    <!-- 4. FOOTER -->
    <q-layout-footer>
      <q-toolbar
        color="primary"
        style="min-height: 5px;"
        class="shadow-up-1"
      >
        <q-toolbar-title/>
      </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import TheLayoutHeader from '../components/TheLayoutHeader.vue'
import TheControlPanelContent from '../components/TheControlPanelContent.vue'

export default {
  name: 'CatalogLayout',
  data: function () {
    return {
      controlPanelWidth: 60
    }
  },
  computed: {
    // 1. STATUS: stable
    controlPanel: {
      get () { return this.$store.state.layout.controlPanel },
      set (val) { this.$store.commit('layout/toggleControlPanel', val) }
    },
    // 2. STATUS: stable
    controlPanelOverlay: {
      get () { return this.$store.state.layout.controlPanelOverlay },
      set (val) { this.$store.commit('layout/setControlPanelOverlay', val) }
    },
    // 3. STATUS: stable
    controlPanelBehavior: {
      get () { return this.$store.state.layout.controlPanelBehavior },
      set (val) { this.$store.commit('layout/setControlPanelBehavior', val) }
    },
    // 4. STATUS: stable
    controlPanelBreakpoint: {
      get () { return this.$store.state.layout.controlPanelBreakpoint },
      set (val) { this.$store.commit('layout/setControlPanelBreakpoint', val) }
    },

    // 5. STATUS: stable
    drawerLeft: {
      get () { return this.$store.getters['layout/drawerLeft'] },
      set (val) { this.$store.commit('layout/toggleDrawerLeft', val) }
    },
    // 6. STATUS: stable
    drawerLeftOverlay: {
      get () { return this.$store.state.layout.drawerLeftOverlay },
      set (val) { this.$store.commit('layout/setDrawerLeftOverlay', val) }
    },
    // 7. STATUS: stable
    drawerLeftBehavior: {
      get () { return this.$store.state.layout.drawerLeftBehavior },
      set (val) { this.$store.commit('layout/setDrawerLeftBehavior', val) }
    },
    // 8. STATUS: stable
    drawerLeftBreakpoint: {
      get () { return this.$store.state.layout.drawerLeftBreakpoint },
      set (val) { this.$store.commit('layout/setDrawerLeftBreakpoint', val) }
    }
  },
  components: {
    TheLayoutHeader,
    TheControlPanelContent
  }
}
</script>
