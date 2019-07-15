import Vue from 'vue' // (#1)
import Vuex from 'vuex' // (#2)

// Imported modules: (#6)
import layout from './layout'
import catalog from './catalog'

Vue.use(Vuex) // (#3)

// (#10)
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) { // (#9)
  const Store = new Vuex.Store({ // (#4)
    modules: { // (#8)
      layout,
      catalog
    }
  })

  return Store // (#5)
}
