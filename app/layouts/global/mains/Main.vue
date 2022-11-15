<template lang="pug">
	div
		main-header
		main#main.wrapper.main
			nuxt
		main-footer
</template>

<script>

import MainHeader from '@/layouts/global/headers/MainHeader.vue'
import MainFooter from '@/layouts/global/footers/MainFooter.vue'

export default {
	head () {
    return {
      title: 'Prueba Técnica',
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css?family=Roboto:300&display=swap"
				},
			]
    }
  },

	components: {
		MainHeader,
		MainFooter
	},
	mounted() {

	}
}

</script>

<style>

</style>