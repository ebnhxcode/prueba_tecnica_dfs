import Vue from 'vue'
import { decode, parsePath, withoutBase, withoutTrailingSlash, normalizeURL } from 'ufo'

import { getMatchedComponentsInstances, getChildrenComponentInstancesUsingFetch, promisify, globalHandleError, urlJoin, sanitizeComponent } from './utils'
import NuxtError from './components/nuxt-error.vue'
import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

import '../static/global/css/global.css'

import '../static/global/css/extra-styles.css'

import '../assets/global/scss/global-bootstrap-overrides.scss'

import '../node_modules/material-design-icons/iconfont/material-icons.css'

import '../node_modules/prismjs/themes/prism.css'

import _b87a4eb6 from '../layouts/codegrown/footers/AsideFooter.vue'
import _af99827c from '../layouts/codegrown/footers/MainFooter.vue'
import _19d9bda6 from '../layouts/codegrown/headers/MainHeader.vue'
import _77a441a5 from '../layouts/codegrown/mains/Main.vue'
import _6f6c098b from '../layouts/default.vue'
import _087b316f from '../layouts/franbeauty/footers/MainFooter.vue'
import _7a21b053 from '../layouts/franbeauty/headers/MainHeader.vue'
import _190c3152 from '../layouts/franbeauty/mains/Main.vue'
import _2dea1f86 from '../layouts/global/footers/AsideFooter.vue'
import _288717c1 from '../layouts/global/footers/MainFooter.vue'
import _cba4d2b6 from '../layouts/global/headers/MainHeader.vue'
import _a5f6ecb8 from '../layouts/global/mains/Main.vue'
import _1552797e from '../layouts/zenko/footers/AsideFooter.vue'
import _13a0c26e from '../layouts/zenko/footers/MainFooter.vue'
import _67d61dad from '../layouts/zenko/headers/MainHeader.vue'
import _1a0898ac from '../layouts/zenko/mains/Main.vue'

const layouts = { "_codegrown/footers/AsideFooter": sanitizeComponent(_b87a4eb6),"_codegrown/footers/MainFooter": sanitizeComponent(_af99827c),"_codegrown/headers/MainHeader": sanitizeComponent(_19d9bda6),"_codegrown/mains/Main": sanitizeComponent(_77a441a5),"_default": sanitizeComponent(_6f6c098b),"_franbeauty/footers/MainFooter": sanitizeComponent(_087b316f),"_franbeauty/headers/MainHeader": sanitizeComponent(_7a21b053),"_franbeauty/mains/Main": sanitizeComponent(_190c3152),"_global/footers/AsideFooter": sanitizeComponent(_2dea1f86),"_global/footers/MainFooter": sanitizeComponent(_288717c1),"_global/headers/MainHeader": sanitizeComponent(_cba4d2b6),"_global/mains/Main": sanitizeComponent(_a5f6ecb8),"_zenko/footers/AsideFooter": sanitizeComponent(_1552797e),"_zenko/footers/MainFooter": sanitizeComponent(_13a0c26e),"_zenko/headers/MainHeader": sanitizeComponent(_67d61dad),"_zenko/mains/Main": sanitizeComponent(_1a0898ac) }

export default {
  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [templateEl])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      h(NuxtBuildIndicator),
      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: '',

    nbFetching: 0
    }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this

    if (process.client) {
      // add to window so we can listen when ready
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  async mounted () {
    this.$loading = this.$refs.loading
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    },

    isFetching () {
      return this.nbFetching > 0
    },

    isPreview () {
      return Boolean(this.$options.previewData)
    },
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context))
        }
        if (page.$fetch) {
          p.push(page.$fetch())
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch())
          }
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail(error)
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },
    errorChanged () {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err)
          }
          if (this.$loading.finish) {
            this.$loading.finish()
          }
        }

        let errorLayout = (NuxtError.options || NuxtError).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context)
        }

        this.setLayout(errorLayout)
      }
    },

    setLayout (layout) {
      if(layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.')
      }

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    },
  },

  components: {
    NuxtLoading
  }
}
