<template>
  <div>
    <!-- 1. MODAL - ACCESS LEVEL -->
    <the-access-level-modal/>

    <!-- 2.a. TABLE MODE -->
    <div v-if=" catalogLayout === 'table' ">

      <q-table
        v-bind:title="tableTitle"
        v-bind:data="tableContent"
        v-bind:columns="columns"
        v-bind:pagination="pagination"
        v-bind:filter="searchModelCatalog"
        v-bind:selection="selection"
        v-bind:selected.sync="selectedTableRows"
        row-key="id"
        grid
      >

        <template slot="top-selection" slot-scope="props">
          <q-btn color="secondary" flat label="Action 1" class="q-mr-sm" />
          <q-btn color="secondary" flat label="Action 2" />
          <div class="col" />
          <q-btn color="negative" flat round icon="delete" @click="showNotificationOne" />
        </template>

        <q-tr
          slot="body"
          slot-scope="props"
          v-bind:props="props"
          height="70px"
          v-on:mouseenter.native.self="testingEvent1(props.row)"
          v-on:mouseleave.native.self="testingEvent2(props.row)"
        >

          <q-td auto-width>
            <q-checkbox color="primary" v-model="props.selected" />
          </q-td>

          <q-td
            v-for="col in props.cols"
            v-bind:key="col.name"
            v-bind:props="props"
          >

            <span v-if=" col.value !== 'folder' && col.value !== 'insert_drive_file' " class="non-selectable">
              {{ col.value }}
            </span>
            <span v-if=" col.value === 'folder' ">
              <q-icon
                class="cursor-pointer"
                v-on:click.native="rowClick(props.row)"
                v-on:dblclick.native="rowDblClick(props.row)"
                name="folder"
                color="primary"
                size="2.5rem"
              />
            </span>
            <span v-if=" col.value === 'insert_drive_file' ">
              <q-icon
                class="cursor-pointer"
                v-on:click.native="rowClick(props.row)"
                v-on:dblclick.native="rowDblClick(props.row)"
                name="insert_drive_file"
                color="primary"
                size="2.5rem"
              />
            </span>
          </q-td>

          <!-- TODO:FIXME: do a specific selection -->
          <q-td
            v-if="isActive"
            auto-width
          >
            <q-icon
              v-if="markedAsFavorite(props.row)"
              v-bind:props="props"
              class="cursor-pointer"
              v-on:click.native="markFavorites(props.row)"
              v-bind:color="colorFavorite"
              size="1.3rem"
              name="star" />
            <q-icon
              v-else
              v-bind:props="props"
              class="cursor-pointer"
              v-on:click.native="markFavorites(props.row)"
              color="primary"
              size="1.3rem"
              name="star_border" />
          </q-td>

          <q-td auto-width>
            <q-btn
              flat round dense
              color="primary"
              icon="more_horiz"
            >
              <q-popover
                self="top middle"
                anchor="bottom left"
              >
                <q-list link>
                  <q-item v-close-overlay v-on:click.native="accessLevelModal = !accessLevelModal">Поделиться</q-item>
                  <q-item v-close-overlay v-on:click.native="showNotificationOne">Скачать</q-item>
                  <q-item v-close-overlay v-on:click.native="showNotificationOne">Удалить</q-item>
                </q-list>
              </q-popover>
            </q-btn>
          </q-td>
        </q-tr>
      </q-table>
    </div>

    <!-- 2.b. GRID MODE -->
    <div v-if=" catalogLayout === 'grid' ">

      <q-table
        grid
        hide-header
        v-bind:data="tableContent"
        v-bind:columns="columns"
        v-bind:selection="selection"
        v-bind:selected.sync="selectedCardItems"
        row-key="id"
      >
        <div
          slot="item"
          slot-scope="props"
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 transition-generic"
          v-bind:style=" props.selected ? 'transform: scale(0.95);' : '' "
        >

          <q-card
            class="transition-generic cursor-pointer"
            v-bind:class=" props.selected ? 'bg-grey-2' : '' "
            v-on:click.native=" props.selected = !props.selected "
          >

            <q-card-title class="relative-position">
              {{ props.row.label }}
            </q-card-title>

            <q-card-separator />

            <q-card-main class="q-pa-none">
              <q-list no-border>
                <q-item
                  v-for=" col in props.cols.filter(col => col.name !== 'desc') "
                  v-bind:key="col.name"
                >
                  <q-item-main>
                    <q-item-tile>{{ col.label }}</q-item-tile>
                  </q-item-main>
                  <q-item-side>
                    <q-item-tile>{{ col.value }}</q-item-tile>
                  </q-item-side>
                </q-item>
              </q-list>
            </q-card-main>
          </q-card>
        </div>
      </q-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheAccessLevelModal from './TheAccessLevelModal.vue'

export default {
  data: function () {
    return {
      targetId: null,
      colorFavorite: 'yellow',
      isActive: false,
      routeName: null,
      selection: 'multiple',
      selectedFavoritesTableItems: [], // initial value
      selectedCardItems: [], // initial value
      // 2. Q-TABLE PROPS:
      // selectedTableRows: [],
      pagination: {
        sortBy: null, // String, column "name" property value
        descending: false,
        page: 1,
        rowsPerPage: 10
      },
      separator: 'horizontal',
      columns: [
        {
          name: 'icon',
          label: 'Тип файла',
          align: 'center',
          field: 'icon',
          sortable: true,
          style: 'width: 105px'
        },
        {
          name: 'label',
          label: 'Название файла',
          align: 'left',
          field: 'label',
          sortable: true,
          style: 'width: auto'
        }
      ]
    }
  },
  computed: {
    // 1. STATUS: stable
    accessLevelModal: {
      get () { return this.$store.state.catalog.accessLevelModal },
      set (payload) { this.$store.commit('catalog/toggleAccessLevelModal', payload) }
    },
    // 2. STATUS: unstable
    // TODO:
    prevRoute: function () {
      console.log('dbg msg - prevRoute happened')
      return this.$route.from
    },
    // 3. STATUS: unstable
    // TODO:
    nextRoute: function () {
      console.log('dbg msg - nextRoute happened')
      return this.$route.to
    },
    // TODO:
    routeActual: function () {
      return this.$route.name
    },
    // TODO:
    currentPath: function () {
      const routeLenght = this.$route.matched.lenght
      return this.$route.matched[routeLenght]
    },
    // TODO:
    selectedTableRows: {
      get () {
        return this.$store.getters['catalog/selectedTableRows']
      },
      set (payload) {
        this.$store.commit('catalog/updateSelectedTableRows', payload)
      }
    },
    // TODO:
    searchModelCatalog: {
      get () {
        return this.$store.getters['catalog/searchModelCatalog']
      },
      set (payload) {
        this.$store.commit('catalog/updateSearchModelCatalog', payload)
      }
    },
    ...mapGetters('catalog', [
      'selectedTreeNode',
      'selectedTableItem',
      'treeContent',
      'tableTitle',
      'tableContent',
      'catalogLayout',
      'breadcrumb',
      'fromRoute',
      'toRoute'
    ])
  },
  methods: {
    // 1. STATE: unstable / unfinished
    // TODO:FIXME: optimize
    findObjWithSelectedId: function (arrObj) {
      const result = []
      for (const subObj in arrObj) {
        const value = arrObj[subObj]
        if (value.id === this.selectedTreeNode) {
          this.$store.commit('catalog/updateTableTitle', value.label)
          this.$store.commit('catalog/updateTableContent', value.children)
        } else if (typeof value === 'object') {
          result.push(this.findObjWithSelectedId(value))
        }
      }
      return this.tableContent
    },
    // 2. STATE: untested / unfinished
    // updateExpandedTreeNode: function (arrObj, row) {
    //   const result = []
    //   const targetIdArray = []
    //   for (const subObj in arrObj) {
    //     const value = arrObj[subObj]
    //     if (value.id === this.row.id) {
    //       this.$store.commit('catalog/pushItemExpandedTreeNode', value.id)
    //       targetIdArray.push(value.id)
    //       if (targetIdArray) {
    //         console.log('msg 1')
    //         for (const i in targetIdArray) {
    //           this.updateExpandedTreeNode(arrObj, i)
    //         }
    //       } else {
    //         console.log('msg 2')
    //       }
    //     } else if (typeof value === 'object') {
    //       result.push(this.updateExpandedTreeNode(value))
    //     }
    //   }
    // },

    // 2. STATE: stable / unfinished
    rowClick: function (row) {
      this.$store.commit('catalog/updateSelectedTableItem', row.id)
      this.updateExpandedTreeNode(this.treeContent, row)
      console.log('msg 0')
    },

    // 3. STATE: unstable / unfinished
    // TODO:FIXME: to refact
    rowDblClick: function (row) {
      this.routeName = this.$route.name
      // 1. updated selectedTableItem:
      // < already done at rowClick >
      // 2. update tableContent and tableTitle:
      this.$store.commit('catalog/updateSelectedTreeNode', row.id)
      // 3. update route:
      if (!row.isParent) {
        // this.$router.push({ name: 'nestedDocument', params: { did: row.id } }) // UNSTABLE
        this.$router.push({ name: 'nestedDocument', params: { did: row.id } }) // UNSTABLE
        // FIXME: toggle out component with table
      } else if (row.isParent) {
        this.$router.push({ name: 'folder', params: { fid: row.id } }) // UNSTABLE
      }
      // 4. leave breadcrumbs and breadcrumnslist:
      this.$store.commit('catalog/updateBreadcrumb', row.id)
      this.$store.commit('catalog/pushItemBreadcrumbsList', { id: row.id, label: row.label, isParent: row.isParent })
      // 5. feedback to the Tree:
      this.$store.commit('catalog/pushItemExpandedTreeNode', row.id)
    },

    // 4.1. STATE: stable
    // TODO: add to global storage (NB: depends on business-logic)
    showNotificationOne () {
      this.$q.notify('<FEEDBACK TEST> Option selected')
    },
    // 4.2. STATE: stable
    // TODO: add to global storage (NB: depends on business-logic)
    showNotificationTwo () {
      this.$q.notify('Вы поделились данным документом')
    },

    // 5. STATE: stable
    // TODO: add to global storage (NB: depends on business-logic)
    markFavorites: function (row) {
      if (this.selectedFavoritesTableItems.find(item => item.id === row.id)) {
        this.selectedFavoritesTableItems.splice(this.selectedFavoritesTableItems.findIndex(function (i) {
          return i.id === row.id
        }), 1)
      } else {
        this.selectedFavoritesTableItems.push({id: row.id, label: row.label, isParent: row.isParent})
      }
    },

    // 6. STATE: stable
    // TODO: add to global storage (NB: depends on business-logic)
    // TODO:FIXME: difference between 5 and 6?
    markedAsFavorite: function (row) {
      if (this.selectedFavoritesTableItems.find(item => item.id === row.id)) {
        return true
      } else {
        return false
      }
    },

    // FIXME:
    // TEST SECTION:
    test1: function () {
      console.log('start msg : ' + this.prevRoute)
      console.log(this.nextRoute)
      console.log(this.$store.getters['catalog/breadcrumbsList'])
      console.log(this.$store.getters['catalog/breadcrumbsList'].lenght) // do not work in that way
      console.log(Object.keys(this.$store.getters['catalog/breadcrumbsList']).length)
    },
    test2: function () {
      window.history.back()
    },
    test3: function () {
      this.$router.back()
      // this.$router.go(-1)
    },
    testingEvent1: function (row) {
      this.isActive = true
    },
    testingEvent2: function (row) {
      this.isActive = false
    }
  },
  components: {
    TheAccessLevelModal
  },

  watch: {
    // 1.
    // STATUS: stable / TBU
    selectedTreeNode: function () {
      this.$store.commit('catalog/updateTableContent')
      this.findObjWithSelectedId(this.treeContent)
    }
  }
}
</script>
