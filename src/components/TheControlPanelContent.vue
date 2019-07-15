<template>
  <q-list no-border>

    <!-- 1. BUTTONS SEGMENT -->
    <!-- 1.1. Go Back Button -->
    <q-btn
      flat
      round
      size="lg"
      color="primary"
      icon="arrow_back"
      v-on:click="catalogBackButtonHandler"
    />

    <!-- 1.2. Left Drawer Button -->
    <q-btn
      flat
      round
      size="lg"
      color="primary"
      icon="vertical split"
      v-on:click="drawerLeft = !drawerLeft"
    />

  </q-list>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // 1. STATUS: stable
    drawerLeft: {
      get () { return this.$store.state.layout.drawerLeft },
      set (val) { this.$store.commit('layout/toggleDrawerLeft', val) }
    },
    // 2. STATUS: unstable
    // FIXME:
    catalogBackButton: function () {
      return this.$store.getters['catalog/catalogBackButton']
    },
    // 3. STATUS: stable / unfinished
    // TODO:
    ...mapGetters('catalog', [
      'breadcrumbsList',
      'breadcrumb'
    ])
  },
  methods: {
    // 1. STATUS: unstable
    // FIXME:TODO:
    catalogBackButtonHandler: function () {
      // 1. update router:
      // if (!breadcrumb.isParent) {
      //   console.log('scenario 1')
      //   this.$router.push({ name: 'nestedDocument', params: { did: breadcrumb.id } }) // UNSTABLE
      // } else if (breadcrumb.isParent) {
      //   console.log('scenario 2')
      //   this.$router.push({ name: 'folder', params: { fid: breadcrumb.id } }) // UNSTABLE
      // }

      // 2. update selectedTreeNode:
      // this.$store.commit('catalog/updateSelectedTreeNode', this.breadcrumb.id)

      // 3. update selectedTableItem:
      // this.$store.commit('catalog/updateSelectedTableItem', this.breadcrumb.id)

      // 4. update catalogBackButton:
      // пускай сама себя отслеживает следит за индексом или содержанием в массиве бредкрамба и в зависимости от этого будет активная или неактивная

      // 5. update breadcrumbsList:
      // this.$store.commit('catalog/updateBreadcrumbList', index)

      // 6. update breadcrumb:
      // this.$store.commit('catalog/updateBreadcrumb', this.breadcrumb)
      // this.$store.commit('catalog/popItemBreadcrumbsList')
      this.$router.back()
      // this.$router.go(-1)
      // window.history.back()

      // 1. Other:
      // 1. pop breadcrumbList & update selectedTreeNode:
      // 2. change breadcrumb:
      // 3. update tableContent and tableTitle:
      // this.$store.commit('catalog/updateSelectedTreeNode', row.id)
      // 4. update route:
      // this.$router.go(-1)
      // ... (try to do it with router) "$router.push('/')"
    }
  }
  // FIXME:TODO: STATUS: unstable
  // watch: {
  //   breadcrumbsList: function () {
  //     if ((Object.keys(this.breadcrumbsList).length) === 1) {
  //       this.$store.commit('catalog/updateCatalogBackButtonStatus', false)
  //     }
  //   }
  // }
}
</script>
