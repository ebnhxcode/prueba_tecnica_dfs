<template lang="pug">
	div.pt-5
		h1.h3 {{ title }}
		h2.h6 {{ subtitle }}
		hr
		div(v-show="menuopts.length === 0")
			.text-center No hay registros disponibles.

		b-card-group(columns)
			b-card(class="text-center" v-for="menuopt,idx in menuopts" :key="idx")
				i.material-icons.aling-middle.vertical-align.px-0(style="font-size: 5em;") {{ menuopt.icon }}
				h1.h4 {{ menuopt.title }}
				h2.h6.text-justify {{ menuopt.subtitle }}
				nuxt-link.btn.btn-sm.btn-block.btn-light(:to="{name: menuopt.route}") {{ menuopt.btntext }}
</template>
<script>
export default {
	props: ['menuopts', 'title', 'subtitle'],
	data() {
		return {}
	}
}
</script>
<style>
</style>