<template lang="pug">
	//div#content(class="container-fluid")
	div
		div
			b-jumbotron#section-0.jumbotron-hero(header='' lead='' fluid style="background-color: #FFF;" text-variant="dark")
				div.pt-5.mt-0(style="min-height: 80vh !important;")
					b-row(align-v="center")

						b-col(cols="*" sm="12" md="12")
							b-img.rounded-semicircle(
								src="~/static/global/img/gobdigital.png"
								fluid
								center
								width="280"
								blank-color="#000"
							)
							br
							h1.text-center Prueba técnica desarrollador fullstack
							h3.h6.text-center.pt-4 Gobierno Digital



		div
			div.container#section-1.pt-5
				b-row(style="min-height: 85vh !important;")
					b-col.my-3(cols="*" sm="12" md="12")
						div
							div.card-body
								menu-card-option(
									title="Menú"
									subtitle="Funciones disponbiles de la aplicación."
									:menuopts="staticpages"
								)

</template>
<script>
import MenuCardOption from '@/components/global/cards/MenuCardOption.vue'
export default {
	// middleware: 'auth',
	layout: 'global/mains/Main',
	components: {
		MenuCardOption
	},
  head () {
    return {
      title: 'Home',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { hid: 'description', name: 'description', content: 'Home page' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
	data () {
		return {

			staticpages: [
				{
					route: 'metros',
					title: 'Listado de Metros',
					subtitle: 'Desarrollo del ejercicio.',
					icon: 'dashboard',
					btntext: 'Ingresar'
				},

			],

		}
	},
	mounted () {

	},
	methods: {

	}
}
</script>
