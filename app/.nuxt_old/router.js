import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c018f1fe = () => interopDefault(import('../pages/codegrown/index.vue' /* webpackChunkName: "pages/codegrown/index" */))
const _e190b9d0 = () => interopDefault(import('../pages/franbeauty/index.vue' /* webpackChunkName: "pages/franbeauty/index" */))
const _b18fac7c = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _52a8dfbc = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _3f34b107 = () => interopDefault(import('../pages/recordmusic/index.vue' /* webpackChunkName: "pages/recordmusic/index" */))
const _d8480bcc = () => interopDefault(import('../pages/zenko/index.vue' /* webpackChunkName: "pages/zenko/index" */))
const _4d56e0c1 = () => interopDefault(import('../pages/codegrown/faqs/index.vue' /* webpackChunkName: "pages/codegrown/faqs/index" */))
const _4e1719fa = () => interopDefault(import('../pages/codegrown/home/index.vue' /* webpackChunkName: "pages/codegrown/home/index" */))
const _ddcdc38c = () => interopDefault(import('../pages/codegrown/privacy/index.vue' /* webpackChunkName: "pages/codegrown/privacy/index" */))
const _c8f2e98e = () => interopDefault(import('../pages/codegrown/terms/index.vue' /* webpackChunkName: "pages/codegrown/terms/index" */))
const _02da54e2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/codegrown",
    component: _c018f1fe,
    name: "codegrown"
  }, {
    path: "/franbeauty",
    component: _e190b9d0,
    name: "franbeauty"
  }, {
    path: "/home",
    component: _b18fac7c,
    name: "home"
  }, {
    path: "/login",
    component: _52a8dfbc,
    name: "login"
  }, {
    path: "/recordmusic",
    component: _3f34b107,
    name: "recordmusic"
  }, {
    path: "/zenko",
    component: _d8480bcc,
    name: "zenko"
  }, {
    path: "/codegrown/faqs",
    component: _4d56e0c1,
    name: "codegrown-faqs"
  }, {
    path: "/codegrown/home",
    component: _4e1719fa,
    name: "codegrown-home"
  }, {
    path: "/codegrown/privacy",
    component: _ddcdc38c,
    name: "codegrown-privacy"
  }, {
    path: "/codegrown/terms",
    component: _c8f2e98e,
    name: "codegrown-terms"
  }, {
    path: "/",
    component: _02da54e2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
