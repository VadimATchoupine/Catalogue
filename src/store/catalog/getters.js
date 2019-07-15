// 1. Target state data:
// 1.1. STATUS: stable
export function treeContent (state) {
  return state.treeContent
}
// 1.2. STATUS: unstable / unfinished
export function tableContent (state, getters) {
  if (state.selectedTreeNode === null) {
    return state.treeContent.map((item) => ({ id: item.id, icon: item.icon, label: item.label, isParent: item.isParent }))
  } else {
    return state.tableContent
  }
}
// 1.3. STATUS: stable / Q&A - is it acceptable?
export function tableTitle (state) {
  return state.tableTitle
}

// 2. Feedback state data:
// 2.1. STATUS: stable
export function selectedTreeNode (state) {
  return state.selectedTreeNode
}
// 2.2. STATUS: stable
export function selectedTableItem (state) {
  return state.selectedTableItem
}
// 2.3. STATUS: unstable
export function selectedTableRows (state) {
  return state.selectedTableRows
}
// 2.4. STATUS: untested
export function expandedTreeNode (state) {
  return state.expandedTreeNode
}

// 3. Search modal window state data:
// 3.1. STATUS: stable
export function searchModelTree (state) {
  return state.searchModelTree
}
// 3.2. STATUS: stable
export function searchModelCatalog (state) {
  return state.searchModelCatalog
}

// 4. Breadcrumb navigation state component data:
// 4.1. STATUS: stable
export function breadcrumbsList (state) {
  return state.breadcrumbsList
}
// 4.2. STATUS: stable
export function breadcrumb (state) {
  return state.breadcrumb
}
// 4.3. STATUS: stable
export function catalogBackButton (state) {
  // if (state.breadcrumbsList)
  return state.catalogBackButton
}

// 5. Catalog layout state data:
// 5.1. STATUS: stable
export function catalogLayout (state) {
  return state.catalogLayout
}
// 5.2. STATUS: stable
export function catalogModeButton (state) {
  return state.catalogModeButton
}

// 6.
// 6.1.
export function fromRoute (state) {
  return state.fromRoute
}
// 6.2.
export function toRoute (state) {
  return state.toRoute
}
