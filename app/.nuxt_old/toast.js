import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {"position":"top-center"})

const globals = [{"name":"success_created_attachments","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":3000}},{"name":"success_edited_attachment","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":3000}},{"name":"success_destroy_attachments","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":3000}},{"name":"success_created_release","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":3000}},{"name":"success_edited_release","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":3000}},{"name":"success_destroy_release","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":1500}},{"name":"success_destroy_file_release","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":1500}},{"name":"success_created_new","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":3000}},{"name":"success_edited_new","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":3000}},{"name":"success_destroy_new","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":1500}},{"name":"success_created_inclusion","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":3000}},{"name":"success_edited_inclusion","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":3000}},{"name":"success_destroy_inclusion","message":(message) => message.message,"options":{"type":"success","theme":"toasted-primary","duration":1500}},{"name":"success_authentication","message":"Inicio de sesión exitoso","options":{"type":"success","theme":"toasted-primary","duration":5000}},{"name":"error_authentication","message":"Ocurrió un problema durante el inicio de sesión.","options":{"type":"error","theme":"toasted-primary","duration":3000}},{"name":"success_join_form","message":"¡Gracias!, nos pondremos en contacto contigo una vez que validemos la información.","options":{"type":"success","theme":"toasted-primary","duration":5000}}]
if(globals) {
  globals.forEach(global => {
    Vue.toasted.register(global.name, global.message, global.options)
  })
}

export default function (ctx, inject) {
  inject('toast', Vue.toasted)
}
