import Vue from 'vue'
import { mapGetters } from 'vuex'

/**
 * No se les antepone nombre (namespace) de fichero porque lo hace desde el store/index.js
 */
const Validation = {
  install (Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          user: 'user',
          authenticated: 'authenticated'
        })
      }
    })
  }
}

Vue.use(Validation)
