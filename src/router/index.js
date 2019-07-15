import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // FIXME:TODO:
  // Global hook:
  // Router.afterEach((to, from) => {
  //   // this.$rootStore.commit('catalog/updateFromRoute', from.name)
  //   // this.$rootStore.commit('catalog/updateToRoute', to.name)
  //   const x = from.name
  //   const y = to.name
  //   console.log('!!!!! debug msg router/index.js afterEach hook: frompath: ' + x + ' topath: ' + y)
  // })

  return Router
}
