<template lang="pug">
	div
		main-clean-header
		main#main.wrapper.main
			nuxt
		main-footer
</template>

<script>

import MainCleanHeader from '@/layouts/global/headers/MainCleanHeader.vue'
import MainFooter from '@/layouts/global/footers/MainFooter.vue'

export default {
	head () {
    return {
      title: 'Prueba Tecnica',
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
		MainCleanHeader,
		MainFooter
	},
	mounted() {

	}
}

</script>

<style>

</style>