// 1. Target data mutations:
// 1.1. STATUS: stable
export function treeContent (state, payload) {
  state.treeContent = payload
}
// 1.2. STATUS: stable
export function updateTableContent (state, payload) {
  state.tableContent = payload
}
// 1.3. STATUS: stable
export function updateTableTitle (state, payload) {
  state.tableTitle = payload
}

// 2. Feedback data mutations:
// 2.1. STATUS: stable
export function updateSelectedTreeNode (state, payload) {
  state.selectedTreeNode = payload
}
// 2.2. STATUS: stable
export function updateSelectedTableItem (state, payload) {
  state.selectedTableItem = payload
}
// 2.3. STATUS: unstable
export function updateSelectedTableRows (state, payload) {
  state.selectedTableRows = payload
}
// 2.4. STATUS: untested
// export function pushItemExpandedTreeNode (state, payload) {
//   state.expandedTreeNode.push(payload)
// }
// // 2.5. STATUS: untested
// export function clearExpandedTreeNode (state) {
//   state.expandedTreeNode = []
// }

// 3. Search Model mutations:
// 3.1. STATUS: stable
export function updateSearchModelTree (state, payload) {
  state.searchModelTree = payload
}
// 3.2. STATUS: stable
export function updateSearchModelCatalog (state, payload) {
  state.searchModelCatalog = payload
}

// 4. Breadcrumb navigation mutations:
// 4.1.a STATUS: stable
export function pushItemBreadcrumbsList (state, payload) {
  state.breadcrumbsList.push(payload)
}
// 4.1.b STATUS: stable
export function popItemBreadcrumbsList (state) {
  state.selectedTreeNode = state.breadcrumbsList.pop().id
}
// 4.1.c STATUS: stable
export function updateBreadcrumbList (state, payload) {
  state.breadcrumbsList = state.breadcrumbsList.slice(0, payload + 1)
}
// 4.1.d STATUS: unstable / unfinished / DO NOT NEED IT
export function clearBreadcrumbsList (state) {
  state.breadcrumbsList = []
}
// 4.2. STATUS: unstable / unfinished
export function updateBreadcrumb (state, payload) {
  state.breadcrumb = payload
}
// 4.3. STATUS: unstable / unfinished
export function updateCatalogBackButtonStatus (state, payload) {
  state.catalogBackButton = payload
}

// 5. Catalog layout mutations:
// 5.1. STATUS: stable
export function toggleTableMode (state) {
  state.catalogLayout = 'table'
  state.catalogModeButton = 'grid'
}
// 5.2. STATUS: stable
export function toggleGridMode (state) {
  state.catalogLayout = 'grid'
  state.catalogModeButton = 'table'
}

// 6. Access level modal window mutations:
// 6.1. STATUS: stable
export const toggleAccessLevelModal = (state, payload) => {
  state.accessLevelModal = payload
}

// 7. Routing data mutations:ß
// 7.1. STATUS: unfinisherd / unstable
export function updateFromRoute (state, payload) {
  state.fromRoute = payload
}
// 7.2. STATUS: unfinisherd / unstable
export function updateToRoute (state, payload) {
  state.toRoute = payload
}
