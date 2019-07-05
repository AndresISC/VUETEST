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
    /**
     * El estado nos guarda la información que
     * la aplicación está utilizando.
     * 
     * Funciona como nuestra fuente legítima 
     * de informacion para nuestra aplicación.
     */
    state:{
        nombre:",",
        apellido:""
    },
    /**
     * Las mutaciones, nos permiten modificar 
     * el estado, automaticamente el estado
     * que se esté usando en nuestra aplicación
     * se verá afectado por la ejecución
     * de las mutaciones.
     */
    mutations:{
        MUTACION1(estado, value){
            estado.nombre = value
        },
        MUTACION2(estado, value){
            estado.apellido = value
        }
    },
    /**
     * Las acciones nos permiten ejecutar
     * tareas asíncronas, que puedan afectar
     * el desempeño de la aplicación o
     * la experiencia de usuario en la interfaz.
     */
    actions:{
        funcion1(context){
            context.commit("MUTACION1", value)
            context.dispatch("funcion2", param)
        },
        funcion2(context, param){
            context.commit("MUTACION1", value)
        }
    },
    /**
     * Los getters son funciones que nos permiten
     * traer información del estado pero con 
     * algún formato/cálculo específico pero
     * sin afectar lo que hay contenido en el state.
     */
    getters:{
        getNombreCompleto(estado){
            return `${estado.nombre} ${estado.apellido}`
        }
    }
})

export default store