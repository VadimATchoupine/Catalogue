<template>
    <!-- Breadcrumbs - Quasar lirary -->
    <q-breadcrumbs
      class="q-pa-md"
      separator=">"
      active-color="light"
      color="primary"
    >
      <q-breadcrumbs-el
        v-for='(breadcrumb, index) in breadcrumbsList'
        v-bind:key='index'
        class="cursor-pointer text-weight-light"
        v-on:click.native='breadcrumbItemHandler(breadcrumb, index)'
      >
        {{breadcrumb.label}}
      </q-breadcrumbs-el>
    </q-breadcrumbs>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('catalog', [
      'breadcrumbsList',
      'breadcrumb',
      'catalogBackButton'
    ])
  },
  methods: {
    // 1.
    breadcrumbItemHandler: function (breadcrumb, index) {
      /*
      // 0.1 test - feedback:
      console.log('dbg msg 1 id: ' + breadcrumb.id)
      console.log('dbg msg 2 label: ' + breadcrumb.label)
      console.log('dbg msg 3 index: ' + index)
      // 0.2 test - status:
      console.log('dbg msg 4 router: ' + this.$route.path)
      console.log('dbg msg 5 tree node: ' + this.$store.getters['catalog/selectedTreeNode'])
      console.log('dbg msg 6 table item: ' + this.$store.getters['catalog/selectedTableItem'])
      console.log('dbg msg 7 catalogBackButton status: ' + this.$store.getters['catalog/catalogBackButton'])
      console.log('dbg msg 8 breadcrumbsList: ' + this.$store.getters['catalog/breadcrumbsList'])
      console.log('dbg msg 9 breadcrumb: ' + this.$store.getters['catalog/breadcrumb'])
      */
      if (index) {
      // 1. update router:
        if (!breadcrumb.isParent) {
          console.log('scenario 1')
          this.$router.push({ name: 'nestedDocument', params: { did: breadcrumb.id } }) // UNSTABLE
        } else if (breadcrumb.isParent) {
          console.log('scenario 2')
          this.$router.push({ name: 'folder', params: { fid: breadcrumb.id } }) // UNSTABLE
        }
        // 2. update selectedTreeNode:
        this.$store.commit('catalog/updateSelectedTreeNode', breadcrumb.id)
        // 3. update selectedTableItem:
        this.$store.commit('catalog/updateSelectedTableItem', breadcrumb.id)
        // 4. update catalogBackButton:
        // пускай сама себя отслеживает следит за индексом или содержанием в массиве бредкрамба и в зависимости от этого будет активная или неактивная
        // 5. update breadcrumbsList:
        this.$store.commit('catalog/updateBreadcrumbList', index)
        // 6. update breadcrumb:
        this.$store.commit('catalog/updateBreadcrumb', breadcrumb)
      } else {
        console.log('Refreshed')
        this.$router.go({name: 'catalog'})
      }
    },
    // LEGACY:
    // 1.
    findObjWithSelectedId: function (arrObj) {
      const result = []
      for (const subObj in arrObj) {
        const value = arrObj[subObj]
        if (value.id === this.selectedTreeNode) {
          this.$store.commit('catalog/updateTableTitle', value.label)
          this.selectedItemContent = value.children
          this.$store.commit('catalog/updateTableContent', value.children)
        } else if (typeof value === 'object') {
          result.push(this.findObjWithSelectedId(value))
        }
      }
      return this.selectedItemContent
    },
    // 2. even handler - click at folders in main area
    updateCurrentFoulder: function (docs) {
      this.breadcrumb = this.selected // NB: stupid way to do a go back button
      this.addBreadcrumb(docs)
      this.goBackBtn = false
      this.selected = docs.id
      // console.log('[DEBUG MSG 2]: selected ID from main area: ' + this.selected)
      this.findObjWithSelectedId(this.documents)
    },
    reviewFile: function (docs) {
      this.selectedFile = docs.id
      this.goBackBtn = true // NB: stupid way to do a go back button
      console.log('[DEBUG MSG]: selected ID of a file from main area: ' + this.selectedFile) // NB: fetch data from uri
    }
  },
  watch: {
    // breadcrumbsList: function () {
    //   if (this.selectedTreeNode) {
    //     this.$store.commit('catalog/zeroBreadcrumbsList')
    //   }
    // }
  }
}
</script>
