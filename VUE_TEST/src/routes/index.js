import Vue from 'vue'
import VueRouter from 'vue-router'


/**
 * Importante especificarlo, de lo contrario
 * Vue no podrá hacer uso de la instancia que
 * maneja las rutas en el frontend.
 */
Vue.use(VueRouter)

import Login from '../views/Login'
import Users from '../views/Users'

const routes = [
    {
        path:"/", //  LE INDICO QUE RUTA ES ESTA
        name: "login", // OPCIONALMENTE LE PUEDO DAR UN NOMBRE
        component: Login //OBLIGATORIAMENTE LE INDICO QUE COMPONENTE MOSTRAR EN DICHA RUTA
    },
    {
        path:"/users", //  LE INDICO QUE RUTA ES ESTA
        name: "users", // OPCIONALMENTE LE PUEDO DAR UN NOMBRE
        component: Users //OBLIGATORIAMENTE LE INDICO QUE COMPONENTE MOSTRAR EN DICHA RUTA
    }
]

const router = new VueRouter(
    {
        routes,
        history:true
    }
)

export default router