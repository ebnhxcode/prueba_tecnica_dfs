<template lang="pug">
	header.mb-0.sticky-top

		sidebar-profile

		b-navbar(toggleable='lg' type='dark' variant='dark')
			b-navbar-brand#sidebarMenu(href='#')
				i.material-icons.float-left.aling-middle.vertical-align.mx-1 linear_scale
			b-collapse#nav-collapse(is-nav='')
				b-navbar-nav
					b-nav-item(href='#section-0') Inicio
					b-nav-item(href='#section-1') Menú

</template>

<script>

import SidebarProfile from '@/components/global/sidebars/SidebarProfile.vue'

export default {
	components: {
		SidebarProfile
	},
	data() {
		return { }
	},
	mounted() {

		/* Sidebar implementation */
		const sidebarMenu = document.querySelector('#sidebarMenu')
		const sidebarCollapse = document.querySelector('#sidebarCollapse')
		const sidebar = document.querySelector('#sidebar')
		const main = document.querySelector('#main')

		sidebarMenu.addEventListener('click', () => {
			if (sidebar.classList.contains('hidden')) {
				sidebar.classList.add('active')
				sidebar.classList.remove('hidden')
			} else {
				sidebar.classList.add('hidden')
				sidebar.classList.remove('active')
			}
		})

		sidebarCollapse.addEventListener('click', () => {
			if (sidebar.classList.contains('active')) {
				sidebar.classList.remove('active')
				sidebar.classList.add('hidden')
			}
		})

		main.addEventListener('click', () => {
			if (sidebar.classList.contains('active')) {
				sidebar.classList.remove('active')
				sidebar.classList.add('hidden')
			}
		})

	},
	methods: {}
}
</script>
<style>
</style>
