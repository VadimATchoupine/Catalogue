<template>
    <!-- TODO:FIXME: will be rewrited from scratch -->
    <div class="q-pa-sm">
      <!-- MAIN EXPLORER -->
      <div class="container">
        <!-- FOULDERS -->
        <div v-for="(docs, index) in currentFolder" v-if="docs.isParent"
            v-bind:key="docs.id"
            v-bind:index="index"
            v-on:click="sendSelectedItemId(docs)" >
            {{docs.label}}
        </div>
        <!-- FILES -->
        <div v-for="(docs, index) in currentFolder" v-if="!docs.isParent"
            v-bind:key="docs.id"
            v-bind:index="index"
            v-on:click="sendSelectedFileId(docs)"
            style="background-color: #ffe6ff">
            {{docs.label}}
        </div>
      </div>
      <hr>
      <!-- SUBFOLDER EXPLORER -->
      <div class="container">
        <div style="background-color: #ffe6e6" v-if="goBackButton" v-on:click="goBack"> GO BACK BTN </div>
        <div v-for="(docs, index) in currentSubFolderObj.children" v-if="docs.isParent"
            v-bind:key="docs.id"
            v-bind:index="index"
            v-on:click="sendSelectedSubItemId(docs)" >
            {{docs.label}}
        </div>
        <div v-for="(docs, index) in currentSubFolderObj.children" v-if="!docs.isParent"
            v-bind:key="docs.id"
            v-bind:index="index"
            v-on:click="sendSelectedFileId(docs)"
            style="background-color: #ffe6ff" >
            {{docs.label}}
        </div>
      </div>
      <!--
      <button v-on:click="testFunction">CLICK</button>
      <button v-on:click="testFunctionThree">TEST THREE CLICK</button>
      <button v-on:click="SelectedSubFolder">TWOCLICK</button>
      -->
    </div>
</template>

<script>
import TheHelpCenterSubDocument from './TheHelpCenterSubDocument.vue'
var helpCenter = require('../shares/helpCenter')

export default {
  // OPTION - DATA
  data () {
    return {
      helpCenter: helpCenter, // improted original data
      currentFolder: helpCenter, // current folder initialization
      selectedItemId: null,
      selectedSubItemId: null,
      selectedFileId: null,
      goBackButton: false,
      currentSubFolderObj: {}, // rename it as current folder or current Sub Folder
      currentSubFolderContent: null
    }
  },
  // OPTION - METHODS
  methods: {
    // -1- rename
    sendSelectedItemId: function (docs) {
      this.selectedItemId = docs.id
      console.log('DEBUG MSG: selectedItemID: ' + this.selectedItemId)
      this.findObjWithId(this.helpCenter)
      console.log('DEBUG MSG: - called function \'findObjWithId\' and updated global obj \'currentSubFolderObj\'')
      console.log('DEBUG MSG: - currentSubFolderObj ID: ' + this.currentSubFolderObj.id)
    },
    // -2- rename
    sendSelectedSubItemId: function (docs) {
      this.selectedSubItemId = docs.id
      console.log('DEBUG MSG: selectedSubItemID: ' + this.selectedSubItemId)
      // need to update current folder
      this.refreshCurrentFolder(this.helpCenter)
      console.log('DEBUG MSG: - called function \'refreshCurrentFolder\' and updated global obj \'currentFolder\'')
      console.log('DEBUG MSG: - currentFolder initial object: ' + this.currentFolder[0] + this.helpCenter[0])
    },
    // -3- rename
    /*
    need to update that function - URI/URL
    */
    sendSelectedFileId: function (docs) {
      this.selectedFileId = docs.id
      console.log('DEBUG MSG: function need to be updated // selected file ID: ' + this.selectedFileId)
    },
    // -4-
    /*
    rename
    need to update that function - optimization
    */
    findObjWithId: function (arrObj) {
      const result = []
      for (const subObj in arrObj) {
        const value = arrObj[subObj]
        if (value.id === this.selectedItemId) {
          console.log('DEBUG MSG: we have a match: ' + value + ' prop ID: ' + value.id)
          this.currentSubFolderObj = value
          return this.currentSubFolderObj
        } else if (typeof value === 'object') {
          console.log('DEBUG MSG: next iteration ' + ' prop ID: ' + value.id)
          result.push(this.findObjWithId(value))
        }
      }
    },
    // -5-
    /*
    rename
    need to update that function - optimization
    */
    refreshCurrentFolder: function (arrObj) {
      const result = []
      for (const subObj in arrObj) {
        const value = arrObj[subObj]
        if (value.id === this.selectedSubItemId) {
          console.log('DEBUG MSG: we have a match: ' + value + ' prop ID: ' + value.id)
          this.currentSubFolderObj = value
          this.goBackButton = true
          return this.currentSubFolderObj
        } else if (typeof value === 'object') {
          console.log('DEBUG MSG: next iteration ' + ' prop ID: ' + value.id)
          result.push(this.refreshCurrentFolder(value))
        }
      }
    },
    // -6-
    goBack: function () {
      this.goBackButton = false
      this.findObjWithId(this.helpCenter)
    },
    // -7-
    /*
    showChildrensData: function (obj) {
      for (const subObj in obj) {
        const value = obj[subObj]
        if (value.hasOwnProperty('children')) {
          console.log('this obj has childrens')
          for (const i in value.c) {
            console.log('[msg] children id: ' + value.c[i].id + ' / children name: ' + value.c[i].name)
          }
        } else {
          console.log('this obj has no any childrens')
        }
      }
    }
    */
    updateCurrentSubFolder: function (obj) {
      for (const subObj in obj) {
        const value = obj[subObj]
        if (value.hasOwnProperty['children']) {
          console.log('debug msg 1: ' + ' currentFolder have childrens. ')
          for (const i in value.children) {
            console.log('debug msg 2: children id: ' + value.children[i].id + ' // children name: ' + value.children[i].label)
            return value.children[i].label
          }
        }
        // else {
        //   console.log('debug msg 3: ' + ' currentFolder do not have any childrens. ')
        // }
      }
    }
  },
  // OPTION - COMPUTED
  computed: {
    // -1-
    updatedCurrentFolder: function () {
      return this.currentFolder.filter(function (element) {
        if (element.hasOwnProperty('children')) {
          return element
        } else {
          return null && console.log('current folder do not have any folders in it - please check helpCenter.js')
        }
      })
    }
    // -2-
    /*
    updatedCurrentFolderContent: function () {
      return this.currentFolder.filter(function (element) {
        if (!element.hasOwnProperty('children')) {
          return element
        } else {
          return null && console.log('current folder do not have any files in it')
        }
      })
    },
    */
    // -3-
    /*
    updatedCurrentSubFolder: function () {
      return this.helpCenter[this.selectedFileId].filter(function (element) {
        if (element.hasOwnProperty('children')) {
          return element
        } else {
          return null && console.log('current folder do not have any folders in it - please check helpCenter.js')
        }
      })
    },
    */
    // -4-
    /*
    updatedCurrentSubFolder: function (currentFolder) {
      for (const subObj in currentFolder) {
        const value = currentFolder[subObj]
        if (value.hasOwnProperty['children']) {
          console.log('debug msg 1: ' + ' currentFolder have childrens. ')
          for (const i in value.children) {
            console.log('debug msg 2: children id: ' + value.children[i].id + ' // children name: ' + value.children[i].label)
            return value.children[i].label
          }
        } else {
          console.log('debug msg 3: ' + ' currentFolder do not have any childrens. ')
        }
      }
    }
    */
    // updatedCurrentFolder: function () {
    //   return this.currentFolder.filter(function (element) {
    //     if (element.hasOwnProperty('children')) {
    //       return element
    //     } else {
    //       return null && console.log('current folder do not have any folders in it - please check helpCenter.js')
    //     }
    //   })
    // },
    /*
    updatedCurrentSubFolder: function () {
      return this.updateCurrentSubFolder(this.helpCenter)
    }
    */
  },
  // OPTION - COMPONENT
  components: {
    TheHelpCenterSubDocument
  }
}
</script>

<style scoped>
/* .container {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}
.container > div {
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  flex-basis: 100px;
  margin: 2px;
  line-height: 100px;
  margin: 10px;
  text-align: center;
  background-color: #f1f1f1;
  font-size: 10px;
  cursor: pointer;
} */
.container {
  /* Grid Fallback */
  display: flex;
  flex-wrap: wrap;
  /* Supports Grid */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1em;
  /* color: whitesmoke; */
}
.container > div {
  /* Demo-Specific Styles */
  background: #ccdeff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  /* Flex Fallback */
  margin-left: 5px;
  margin-right: 5px;
  flex: 1 1 100px;
  cursor: pointer;
  font-size: 10px;
}
.container > div:hover {
  color: #ffe;
  background-color: #5488af;
}
</style>
