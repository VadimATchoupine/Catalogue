<template>
    <div class="q-pa-sm">

      <q-input
        v-model="filter"
        float-label="Поиск документа"
      />

      <q-tree
        color="primary"
        node-key="id"
        v-bind:nodes="treeContent"
        v-bind:selected.sync="selectedTreeNode"
        v-bind:filter="filter"
      />

    </div>
</template>

<script>
export default {
  data: function () {
    return {
      // TODO:FIXME: transfer to global storage
      filter: ''
    }
  },
  computed: {
    // TODO:FIXME: use helper or state
    // 1. STATUS: stable
    treeContent: function () {
      return this.$store.getters['catalog/treeContent']
    },
    // 2. STATUS: stable
    searchModelTree: {
      get () { return this.$store.getters['catalog/searchModelTree'] },
      set (payload) { this.$store.commit('catalog/updateSearchModelTree', payload) }
    },
    // 3. STATUS: stable
    selectedTreeNode: {
      get () { return this.$store.getters['catalog/selectedTreeNode'] },
      set (selectedNodeId) { this.$store.commit('catalog/updateSelectedTreeNode', selectedNodeId) }
    }
  }
}
</script>
