import { toasts } from './plugins/mixins/toasts'

export default {
	// mode: "pwa",
  // mode: "spa",
  // mode: "universal",
	ssr: true,
	// ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  static: {
    prefix: false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Prueba Tecnica DFS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=Roboto:300&display=swap"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Material+Icons"
				//href: "https://fonts.googleapis.com/icon?family=Material+Icons"
			}
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fd7e14" },
  // loading: { color: "#841a1a" },
  // loading: { color: "#fff" },
  /*
   ** Routing Preferences
   */
  router: {
    // linkExactActiveClass: "active",
		// base: '/prueba_tecnica_dfs.github.io/' // only for github pages router
    base: '/',
  },
  /*
   ** Global CSS
   */
  css: [

		// Se establece que se configuren los estilos para cada subproyecto
		// En esta seccion iran todos los estilos globales compartidos de Base
		// En static porque son archivos de estilo o imagen directos
		"~/static/global/css/global.css",
		"~/static/global/css/extra-styles.css",

		// En assets porque los compila webpack
		"~/assets/global/scss/global-bootstrap-overrides.scss",

		// Directos desde node_modules
		"material-design-icons/iconfont/material-icons.css",

  ],


	//...

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
		{ src: "~/plugins/mixins/toasts.js", ssr: true },
    /* Common/Global Local Plugin Components */
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    "@nuxtjs/auth",
		'@nuxt/content',
		"@nuxtjs/toast",
		'@nuxtjs/style-resources',
  ],

	//You will have to add this new object if it doesn't exist already
	// Se registran los estilos para cada subproyecto en caso que se requiera
	styleResources: {
		scss: [
			'~/assets/global/scss/*.scss',
		]
	},

	toast: toasts,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "http://localhost:5555/",
    // proxy: true
    // credentials: true,
  },

  proxy: {
    // '/api/v1': { target: 'API_URL', pathRewrite: {'^/api/v1': ''} }
    // '/api/v1': { target: 'http://localhost:5555/', pathRewrite: {'^/api/v1': ''}, changeOrigin: true }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
