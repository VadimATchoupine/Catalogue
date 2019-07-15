<template>
  <q-layout
    view="lHh Lpr fFf"
    container
    class="full-width window-height"
  >
    <q-layout-drawer
      side="left"
      v-model="drawerLeft"
      v-bind:overlay="drawerLeftOverlay"
      v-bind:behavior="drawerLeftBehavior"
      v-bind:breakpoint="drawerLeftBreakpoint"
      v-bind:width="400"
      content-class="bg-grey-1"
    >
      <router-view name="sidenav"/>
    </q-layout-drawer>
    <q-page-container>
      <router-view name="page"/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'CatalogNestedLayout',
  computed: {
    // 1. STATUS: stable
    drawerLeft: {
      get () { return this.$store.getters['layout/drawerLeft'] },
      set (val) { this.$store.commit('layout/toggleDrawerLeft', val) }
    },
    // 2. STATUS: stable
    drawerLeftOverlay: {
      get () { return this.$store.state.layout.drawerLeftOverlay },
      set (val) { this.$store.commit('layout/setDrawerLeftOverlay', val) }
    },
    // 3. STATUS: stable
    drawerLeftBehavior: {
      get () { return this.$store.state.layout.drawerLeftBehavior },
      set (val) { this.$store.commit('layout/setDrawerLeftBehavior', val) }
    },
    // 4. STATUS: stable
    drawerLeftBreakpoint: {
      get () { return this.$store.state.layout.drawerLeftBreakpoint },
      set (val) { this.$store.commit('layout/setDrawerLeftBreakpoint', val) }
    }
  },
  methods: {
    openDrawer: function () {
      this.drawerLeftNested = !this.drawerLeftNested
    }
  }
}
</script>
