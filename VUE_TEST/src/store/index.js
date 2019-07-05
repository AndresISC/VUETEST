import Vuex from 'vuex'
import Vue from 'vue'

/**
 * Importante especificarlo, de lo contrario
 * Vue no podrá hacer uso del store que vuex crea.
 */
Vue.use(Vuex)

/**
 * La forma de importar un módulo debe seguir el siguiente formato.
 * 
 * import module_name from './view_name/'
 * 
 * Dentro de cada directorio ./view_name/ se pretende que haya un
 * archivo index que nos sirva directamente toda la estructura del módulo.
 * 
 *  · state
 *  · mutations
 *  · actions
 *  · getters
 * 
 */

 import login from './login'

const store = new Vuex.Store({
    modules:{
        login
    }
})

export default store