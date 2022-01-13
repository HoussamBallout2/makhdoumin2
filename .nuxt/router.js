import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2b3b646a = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _c6595c06 = () => interopDefault(import('../pages/chapterfive/index.vue' /* webpackChunkName: "pages/chapterfive/index" */))
const _885e311e = () => interopDefault(import('../pages/chapterfour/index.vue' /* webpackChunkName: "pages/chapterfour/index" */))
const _335c4a89 = () => interopDefault(import('../pages/chapterthree/index.vue' /* webpackChunkName: "pages/chapterthree/index" */))
const _12490c92 = () => interopDefault(import('../pages/chaptertwo/index.vue' /* webpackChunkName: "pages/chaptertwo/index" */))
const _bd7eb444 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _22328fe6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3f0f8048 = () => interopDefault(import('../pages/film/index.vue' /* webpackChunkName: "pages/film/index" */))
const _2beb1175 = () => interopDefault(import('../pages/team/index.vue' /* webpackChunkName: "pages/team/index" */))
const _fc65c99e = () => interopDefault(import('../pages/trailer/index.vue' /* webpackChunkName: "pages/trailer/index" */))
const _7d959348 = () => interopDefault(import('../pages/chapterthree/index copy.vue' /* webpackChunkName: "pages/chapterthree/index copy" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2b3b646a,
    name: "about___ar"
  }, {
    path: "/chapterfive",
    component: _c6595c06,
    name: "chapterfive___ar"
  }, {
    path: "/chapterfour",
    component: _885e311e,
    name: "chapterfour___ar"
  }, {
    path: "/chapterthree",
    component: _335c4a89,
    name: "chapterthree___ar"
  }, {
    path: "/chaptertwo",
    component: _12490c92,
    name: "chaptertwo___ar"
  }, {
    path: "/contact",
    component: _bd7eb444,
    name: "contact___ar"
  }, {
    path: "/en",
    component: _22328fe6,
    name: "index___en"
  }, {
    path: "/film",
    component: _3f0f8048,
    name: "film___ar"
  }, {
    path: "/team",
    component: _2beb1175,
    name: "team___ar"
  }, {
    path: "/trailer",
    component: _fc65c99e,
    name: "trailer___ar"
  }, {
    path: "/chapterthree/index%20copy",
    component: _7d959348,
    name: "chapterthree-index copy___ar"
  }, {
    path: "/en/about",
    component: _2b3b646a,
    name: "about___en"
  }, {
    path: "/en/chapterfive",
    component: _c6595c06,
    name: "chapterfive___en"
  }, {
    path: "/en/chapterfour",
    component: _885e311e,
    name: "chapterfour___en"
  }, {
    path: "/en/chapterthree",
    component: _335c4a89,
    name: "chapterthree___en"
  }, {
    path: "/en/chaptertwo",
    component: _12490c92,
    name: "chaptertwo___en"
  }, {
    path: "/en/contact",
    component: _bd7eb444,
    name: "contact___en"
  }, {
    path: "/en/film",
    component: _3f0f8048,
    name: "film___en"
  }, {
    path: "/en/team",
    component: _2beb1175,
    name: "team___en"
  }, {
    path: "/en/trailer",
    component: _fc65c99e,
    name: "trailer___en"
  }, {
    path: "/en/chapterthree/index%20copy",
    component: _7d959348,
    name: "chapterthree-index copy___en"
  }, {
    path: "/",
    component: _22328fe6,
    name: "index___ar"
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
