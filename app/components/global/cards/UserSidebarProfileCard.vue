<template lang="pug">
	div.sidebar-header
		// b-button.sidebarCollapse.btn-sm(href="#!" v-b-tooltip.hover title="Cerrar menu") &times;
		div
			b-button-toolbar(aria-label='Toolbar with button groups and dropdown menu')
				b-button-group(size="sm")
					b-button.sidebarCollapse#sidebarCollapse(
						href="#!" v-b-tooltip.hover title="Cerrar menu"
					)
						i.material-icons.float-left.aling-middle.vertical-align close

		h1.h3.text-center.pt-3 Prueba Técnica DFS
</template>
<script>
export default {
	mounted() {

	}
}
</script>
<style>

</style>