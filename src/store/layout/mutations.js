// I. LANDING LAYOUT MUTATIONS:
// TODO:

// II. CATALOG LAYOUT MUTATIONS:
// 2.1. ControlPanel
// STATUS: not tested
// Note: Quasar API
export const toggleControlPanel = (state, opened) => {
  state.controlPanel = opened
}
// STATUS: not tested
export const setControlPanelOverlay = (state, val) => {
  state.controlPanelOverlay = val
}
// STATUS: not tested
export const setControlPanelBehavior = (state, val) => {
  state.controlPanelBehavior = val
}
// STATUS: not tested
export const setControlPanelBreakpoint = (state, val) => {
  state.controlPanelBreakpoint = val
}

// 2.2 drawerLeft
// STATUS: not tested
// Note: Quasar API
export const toggleDrawerLeft = (state, opened) => {
  state.drawerLeft = opened
}
export const toggleDrawerLeftNat = (state) => {
  state.drawerLeft = !state.drawerLeft
}
// STATUS: not tested
export const setDrawerLeftOverlay = (state, val) => {
  state.drawerLeftOverlay = val
}
// STATUS: not tested
export const setDrawerLeftBehavior = (state, val) => {
  state.drawerLeftBehavior = val
}
// STATUS: not tested
export const setDrawerLeftBreakpoint = (state, val) => {
  state.drawerLeftBreakpoint = val
}
// 2.3. TODO: other elements

// III. SETTINGS LAYOUT MUTATIONS:
// 3.1. STATUS: stable
// Note: Quasar API
export const toggleSettingsDrawerLeft = (state, opened) => {
  state.layoutSettingsDrawerLeft = opened
}
// STATUS: not tested
export const setSettingsDrawerLeftOverlay = (state, val) => {
  state.settingsDrawerLeftOverlay = val
}
// STATUS: not tested
export const setSettingsDrawerLeftBehavior = (state, val) => {
  state.setSettingsDrawerLeftBehavior = val
}
// STATUS: not tested
export const setSettingsDrawerLeftBreakpoint = (state, val) => {
  state.setSettingsDrawerLeftBreakpoint = val
}
