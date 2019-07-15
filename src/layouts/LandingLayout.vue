<template>
  <q-layout view="hHh lpr lFr">
    <!-- 1. Header -->
    <q-layout-header>
      <the-landing-header/>
    </q-layout-header>
    <!-- 4. Page Content and Router | sub-routes get injected here: -->
    <q-page-container>
      <router-view/>
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
import TheLandingHeader from '../components/TheLandingHeader.vue'

export default {
  name: 'LandingLayout',
  components: {
    TheLandingHeader
  }
}
</script>
