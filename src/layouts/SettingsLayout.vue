<template>
  <q-layout view="hHh Lpr fFf">

    <!-- 1. Header -->
    <q-layout-header>
      <the-layout-header/>
    </q-layout-header>

    <!-- 2. Drawer - Left Side -->
    <q-layout-drawer
      side="left"
      v-model="settingsDrawerLeft"
      v-bind:overlay="settingsDrawerLeftOverlay"
      v-bind:behavior="settingsDrawerLeftBehavior"
      v-bind:breakpoint="settingsDrawerLeftBreakpoint"
      v-bind:width="settingsDrawerLeftWidth"
    >
      <!-- 2.1. Router | sub-router get injected here: -->
      <router-view name="sidenav"/>
    </q-layout-drawer>

    <!-- 3. Page Content and Router | sub-routes get injected here: -->
    <q-page-container>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
        v-bind:duration="500"
        v-on:leave="resetScroll"
      >
        <router-view/>
      </transition>
    </q-page-container>

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

export default {
  name: 'SettingsLayout',
  data: function () {
    return {
      settingsDrawerLeftWidth: 400
    }
  },
  computed: {
    // 1. STATUS: stable
    settingsDrawerLeft: {
      get () { return this.$store.state.layout.settingsDrawerLeft },
      set (val) { this.$store.commit('layout/toggleSettingsDrawerLeft', val) }
    },
    // 2. STATUS: stable
    settingsDrawerLeftOverlay: {
      get () { return this.$store.state.layout.settingsDrawerLeftOverlay },
      set (val) { this.$store.commit('layout/setSettingsDrawerLeftOverlay', val) }
    },
    // 7. STATUS: stable
    settingsDrawerLeftBehavior: {
      get () { return this.$store.state.layout.settingsDrawerLeftBehavior },
      set (val) { this.$store.commit('layout/setSettingsDrawerLeftBehavior', val) }
    },
    // 8. STATUS: stable
    settingsDrawerLeftBreakpoint: {
      get () { return this.$store.state.layout.settingsDrawerLeftBreakpoint },
      set (val) { this.$store.commit('layout/setSettingsDrawerLeftBreakpoint', val) }
    }
  },
  methods: {
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    }
  },
  components: {
    TheLayoutHeader
  }
}
</script>
