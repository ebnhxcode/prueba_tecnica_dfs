<template lang="pug">
  //- #content.container-fluid()
  #content.container-fluid()
    .row
      .col-xs-12.col-sm-12.col-md-12.col-lg-12
        section
          header
            h1.pt-3 Listado de Metros de Santiago
            b-row
              b-col(md="6")
                b-form-group(label="Filtrar por Código de Línea")
                  b-form-select(v-model="linea" :options="lineas" @change="filterByLinea")
              b-col(md="6")
                b-form-group(label="Filtrar por Comuna")
                  b-form-select(v-model="comuna" :options="comunas" @change="filterByComuna")

        section.mb-2
          b-button-group
            b-button(
                class=''
                type='button'
                variant='danger'
                @click.prevent='startPage()'
              ) Inicio
            b-button(
              class=''
              type='button'
              variant='secondary'
              :disabled="back"
              @click.prevent='backPage()'
            ) Ver Anterior {{ (this.prev_records.length > 0 && (this.next_records.length != this.prev_records.length)) ? '(-' + this.prev_records.length + ')' : '(0)'}}
            b-button(
              class=''
              type='button'
              variant='primary'
              :disabled="next || (this.next_records.length == 0)"
              @click.prevent='nextPage()'
            ) Ver Siguiente (+{{ (this.pagination > this.next_records.length) ? this.next_records.length : this.pagination }})


        section.bg-secondary(style='max-height: 550px;min-height: 600px;overflow-y: scroll;border-radius: 5px;')

          div.m-4(v-if="records.length <= 0")
            span No se encontraron más resultados ({{ records.length }})

          div.m-4(v-else)

            loader(v-if="isLoading")

            b-card(
              v-else
              v-for='r,k in records'
              :key="r['_id']"
              class='d-flex flex-column mb-4'
              title=''
              sub-title=''
              tag='article'
              img-alt='Imagen del Metro'
              img-right
            )

              b-card-body
                b-img(
                  src='~/static/global/img/metrobilbao.png'
                  height='132'
                  width='132'
                  alt='Right image'
                  v-bind='mainProps'
                  rounded
                  right
                )
                b-card-title {{ r['_id'] }} · {{ r['NOMBRE FANTASIA'] }}
                b-card-sub-title {{ `${r['DIRECCION']}, ${r['COMUNA']}` }}

                //- pre {{ r }}

                //- b-card-text
                  | Some quick example text to build on the card title and make up the bulk of the card&apos;s
                  | content.
                small Código de Línea: {{ r['CODIGO'] }}
                //- b-card-text()

                //- b-button.float-right(type='reset' variant='danger') Limpiar Campos

                b-form.pt-3()
                  b-button(
                    v-b-modal="'my-modal' + r['_id']"
                    class='mt-auto'
                    type='button'
                    variant='primary'
                  ) Ver Horarios

                  b-modal(
                    :id="'my-modal' + r['_id']"
                    title="Horarios de Atención"
                    ok-only
                  ) {{ r['HORARIO REFERENCIAL'] }}



</template>
<script>
import AsideMenu from '@/components/global/asides/AsideMenu.vue'
import Loader from '@/components/global/loaders/Loader.vue'
export default {
  // middleware: 'auth',
  layout: 'global/mains/MainClean',
  components: {
    AsideMenu,
    Loader
  },
  head () {
    return {
      title: 'Metros',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { hid: 'description', name: 'description', content: 'Posts page' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  data () {
    return {
      back: true,
      next: false,
      offset: 0,
      linea: '',
      comuna: '',
      pagination: 50,
      lineas: [
        { value: null, text: 'Seleccione una Línea', selected: true },
        { value: 'L1', text: 'L1' },
        { value: 'L2', text: 'L2' },
        { value: 'L3', text: 'L3' },
        { value: 'L4', text: 'L4' },
        { value: 'L4A', text: 'L4A' },
        { value: 'L5', text: 'L5' },
        { value: 'L6', text: 'L6' },
      ],
      comunas: [
        { value: null, text: 'Seleccione una Comuna', disabled: true },
        { value: 'COMUNA', text: 'COMUNA' },
        { value: 'LO PRADO', text: 'LO PRADO' },
        { value: 'ESTACION CENTRAL', text: 'ESTACION CENTRAL' },
        { value: 'SANTIAGO', text: 'SANTIAGO' },
        { value: 'PROVIDENCIA', text: 'PROVIDENCIA' },
        { value: 'LAS CONDES', text: 'LAS CONDES' },
        { value: 'LA CISTERNA', text: 'LA CISTERNA' },
        { value: 'SAN MIGUEL', text: 'SAN MIGUEL' },
        { value: 'RECOLETA', text: 'RECOLETA' },
        { value: 'QUILICURA', text: 'QUILICURA' },
        { value: 'CONCHALI', text: 'CONCHALI' },
        { value: 'INDEPENDENCIA', text: 'INDEPENDENCIA' },
        { value: 'ÑUÑOA', text: 'ÑUÑOA' },
        { value: 'LA REINA', text: 'LA REINA' },
        { value: 'MACUL', text: 'MACUL' },
        { value: 'LA FLORIDA', text: 'LA FLORIDA' },
        { value: 'PUENTE ALTO', text: 'PUENTE ALTO' },
        { value: 'LA GRANJA', text: 'LA GRANJA' },
        { value: 'SAN RAMON', text: 'SAN RAMON' },
        { value: 'MAIPU', text: 'MAIPU' },
        { value: 'PUDAHUEL', text: 'PUDAHUEL' },
        { value: 'QUINTA NORMAL', text: 'QUINTA NORMAL' },
        { value: 'CERRILLOS', text: 'CERRILLOS' },
        { value: 'PEDRO AGUIRRE CERDA', text: 'PEDRO AGUIRRE CERDA' },
        { value: 'SAN JOAQUIN', text: 'SAN JOAQUIN' },
      ],
      isLoading: true,
      mainProps: { blankColor: '#777', width: 75, height: 75, class: 'm1' },
      records: {},
      next_records: {},
      prev_records: {},
    }
  },
  mounted() {
    this.nextRecords()
    // this.prevRecords()
  },
  async asyncData({ app, $axios, isDev, route, store, env, params, query, req, res, redirect, error, context }) {
    // const data = await $axios.$get('https://datos.gob.cl/api/3/action/datastore_search?resource_id=3d54e961-d81b-4507-aeee-7a433e00a9bf&offset=50&limit=50')
    const isLoading = false
    const pagination = 50
    const apidata = await $axios.$post('/api/v1/apidatosgob/ApiDatosGob', {
      offset: '0',
      linea: '',
      comuna: '',
    })
    const records = apidata.result.records
    // console.log('records: ' + records)

    return { records, isLoading, pagination }
  },
  methods: {
    async filterByLinea() {
      console.log('filter by linea')

      // this.comuna = ''

      this.isLoading = true
      this.offset = '0'

      const apidata = await this.$axios.$post('/api/v1/apidatosgob/ApiDatosGob', {
        offset: '0',
        linea: this.linea != '' ? this.linea : '',
        comuna: this.comuna != '' ? this.comuna : '',
      }).then((res) => {
        const records = res.result.records

        this.records = {}
        this.prev_records = {}
        this.next_records = {}
        this.records = records
        this.isLoading = false

        this.back = true
        this.next = false

        this.prevRecords()
        this.nextRecords()

        return {}
      })
      this.isLoading = false


      return {}
    },
    async filterByComuna() {
      console.log('filter by comuna')

      // this.linea = ''

      this.isLoading = true
      this.offset = '0'



      const apidata = await this.$axios.$post('/api/v1/apidatosgob/ApiDatosGob', {
        offset: '0',
        linea: this.linea != '' ? this.linea : '',
        comuna: this.comuna != '' ? this.comuna : '',
      }).then((res) => {
        const records = res.result.records

        this.records = {}
        this.prev_records = {}
        this.next_records = {}
        this.records = records
        this.isLoading = false

        this.back = true
        this.next = false

        this.prevRecords()
        this.nextRecords()

        return {}
      })
      this.isLoading = false


      return {}
    },
    async prevRecords() {
      const apidata = await this.$axios.$post('/api/v1/apidatosgob/ApiDatosGob', {
        offset: (this.offset != '0') ? this.pagination : '',
        linea: (this.linea != '' && this.linea != None) ? this.linea : '',
        comuna: (this.comuna != '' && this.comuna != None) ? this.comuna : '',
      }).then((res) => {

        const records = res.result.records
        this.prev_records = {}
        this.prev_records = records
        console.log('prev: ' + this.prev_records.length)
        console.log('pagination:' + this.pagination)
      })
      return {}
    },
    async nextRecords() {
      const apidata = await this.$axios.$post('/api/v1/apidatosgob/ApiDatosGob', {
        offset: this.offset + this.pagination,
        linea: this.linea != '' ? this.linea : '',
        comuna: this.comuna != '' ? this.comuna : '',
      }).then((res) => {
        const records = res.result.records
        this.next_records = {}
        this.next_records = records

        if (this.next_records == 0) {
          this.next = true
        } else {
          this.next = false
        }
        console.log('next: ' + this.next_records.length)
        console.log('pagination:' + this.pagination)
      })
      return {}
    },
    async startPage() {
      this.isLoading = true
      this.offset = '0'

      this.linea = ''
      this.comuna = ''


      const apidata = await this.$axios.$post('/api/v1/apidatosgob/ApiDatosGob', {
        offset: '0',
        linea: this.linea != '' ? this.linea : '',
        comuna: this.comuna != '' ? this.comuna : '',
      }).then((res) => {
        const records = res.result.records

        this.records = {}
        this.records = records
        this.isLoading = false

        this.back = true
        this.next = false

        this.linea = ''
        this.comuna = ''

        return {}
      })
      this.isLoading = false
      this.prevRecords()
      this.nextRecords()

      return {}
    },
    async backPage() {
      this.isLoading = true
      if (this.offset <= this.pagination) {
        this.offset = '0'
        this.back = true
      } else {
        this.offset -= this.pagination
      }

      this.prevRecords()
      this.nextRecords()

      const apidata = await this.$axios.$post('/api/v1/apidatosgob/ApiDatosGob', {
        offset: this.offset,
      }).then((res) => {
        const records = res.result.records
        this.records = {}
        this.records = records
        this.isLoading = false
        return {}
      })
      this.isLoading = false
      return {}
    },
    async nextPage() {
      this.isLoading = true
      if (this.offset != '0') {
        this.offset += this.pagination
      } else {
        this.offset = this.pagination
      }

      this.prevRecords()
      this.nextRecords()
      this.back = false

      const apidata = await this.$axios.$post('/api/v1/apidatosgob/ApiDatosGob', {
        offset: this.offset,
      }).then((res) => {
        const records = res.result.records
        this.records = {}
        this.records = records
        this.isLoading = false
        return {}
      })
      this.isLoading = false
      return {}
    },
    async onSubmit() {
      this.$toast.global.generating_ticket();
      // const data = await this.$axios.$get('testServer')
      console.log(this.qr_code)
      const data = await this.$axios.$post('getQR', {
          apiKey: this.form.apiKey,
          cmd: this.form.cmd,
          data: this.qr_code
      }).then((res) => {

        console.log(res)

        if (res['statusError']) {
          if (res.statusError == 101) {
            this.$toast.global.invalid_cmd()
            return
          }
          if (res.statusError == 102) {
            this.$toast.global.invalid_apikey()
            return
          }
          if (res.ans == 'Nack') {
            this.$toast.global.invalid_answer()
            return
          }
        }

        if (res.ans == 'ack') {
          this.$toast.global.ticket_generated()
          this.$toast.global.code_ticket_generated(this.qr_code)
          alert('Ticket generado con exito, codigo: ' + this.qr_code)
          return
        } else {
          this.$toast.global.generating_ticket_error()
          return
        }

      })

    },
    async onReset() {
      this.form = {
        apiKey: '',
        cmd: '',
        data: ''
      }
      this.$toast.global.form_restored();
    }
  }
}
</script>
<style>
/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}
</style>
