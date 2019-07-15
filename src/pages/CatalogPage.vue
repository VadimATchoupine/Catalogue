<template>
  <q-page class="q-pa-sm">
    <!-- MODE AND SEARCH -->
    <!-- FIXME:TODO: split by components -->
    <div class="row">

      <!-- 1. Mode button section -->
      <div class="q-px-sm">
        <!-- 1.a. Layout Mode Button - Table -->
        <q-btn
          flat
          size="xl"
          color="primary"
          icon="view_module"
          v-if=" catalogModeButton == 'grid' "
          v-on:click="toggleGridMode"
        />
        <!-- 1.b. Layout Mode Button - Grid -->
        <q-btn
          flat
          size="xl"
          color="primary"
          icon="view_list"
          v-if=" catalogModeButton == 'table' "
          v-on:click="toggleTableMode"
        />
      </div>

      <!-- 2. Search section -->
      <div class="col">
        <q-search
          v-model="searchModelCatalog"
          align="left"
          icon="search"
          color="primary"
          float-label="Поиск документа"
          placeholder="Введите название документа"
          @show="test1"
          @hide="test2"
          @escape-key="test3"
        />
      </div>
    </div>

    <!-- BREADCRUMBS AND TABLEGRID -->
    <the-breadcrumbs/>
    <the-table-grid/>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import TheBreadcrumbs from '../components/TheBreadcrumbs.vue'
import TheTableGrid from '../components/TheTableGrid.vue'

export default {
  name: 'PageCatalog',
  computed: {
    searchModelCatalog: {
      get () { return this.$store.state.catalog.searchModelCatalog },
      set (payload) { this.$store.commit('catalog/updateSearchModelCatalog', payload) }
    },
    ...mapGetters('catalog', [
      'catalogModeButton'
    ])
  },
  methods: {
    // 1. STATUS: stable
    toggleTableMode: function () {
      this.$store.commit('catalog/toggleTableMode')
    },
    // 2. STATUS: stable
    toggleGridMode: function () {
      this.$store.commit('catalog/toggleGridMode')
    },
    // X. TEST SECTION
    // TODO:FIXME:
    test1: function () {
      console.log('hi')
    },
    test2: function () {
      console.log('buy')
    },
    test3: function () {
      console.log('cya')
    }
  },
  components: {
    TheBreadcrumbs,
    TheTableGrid
  }
}
</script>
