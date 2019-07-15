// I. Imported Shared data:
var documents = require('../../shares/documents')

// II. Exported data:
export default {
  // 1. Target state data:
  treeContent: documents.map(a => ({...a})), // FIXME: NB#1. deep clone w/o links to initial array of objects
  tableContent: [],
  tableTitle: 'Main Folder', // initial value FIXME:

  // 2. Feedback state data:
  selectedTreeNode: null,
  selectedTableItem: null,
  selectedTableRows: [],
  // expandedTreeNode: [],

  // 3. Search modal window state data:
  searchModelTree: '',
  searchModelCatalog: '',

  // 4. Breadcrumb navigation state component data:
  // TODO:FIXME:
  breadcrumbsList: [{id: '', label: 'Main Folder'}], // FIXME: initial value
  breadcrumb: null,
  catalogBackButton: false,

  // 5. Catalog layout state data:
  catalogLayout: 'table',
  catalogModeButton: 'grid',

  // 6. Access level modal window state data:
  accessLevelModal: false,
  // TODO:FIXME: add all additional data from component

  // 7. History data:
  // TODO:FIXME:
  fromRoute: null,
  toRoute: null

}
