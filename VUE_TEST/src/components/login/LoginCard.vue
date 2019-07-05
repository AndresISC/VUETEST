<template>
    <div>

        <div class="login-input">
            <input 
                v-model="credentials.email"
                type="text" 
                id="email"
            />
            <label 
                class="login-label"
                for="email"
            >
                Email
            </label>
        </div>

        <!-- <CustomInput 
            id="email"
            label="Email"
            v-model="credentials.email"
        /> -->

        <div class="login-input">
            <input 
                v-model="credentials.password"
                type="text" 
                id="password"
            />
            <label 
                class="login-label"
                for="password"
            >
                Contraseña
            </label>
        </div>

        <div>
            <button 
                class="login-button"
                @click="loginAttempt"
            >
                Iniciar sesión
            </button>
        </div>

        <div 
            v-if="getStatus.length > 0" 
            class="status"
        >
            {{ getStatus }}
        </div>
        
    </div>
</template>

<script>

import CustomInput from './CustomInput'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers("login")

export default {
    components:{
        CustomInput
    },
    data(){
        return {
            credentials:{
                email:"",
                password:""
            }
        }
    },
    mounted(){
        console.log("Ejecutando inicializacion")
        this.initialize()
    },
    watch:{
        token:{
            handler(value){
                if (value.length>0)
                    this.$router.push({name:'users'})
            }
        },
        credentials:{ 
            handler(valor){
                console.log(valor)
            },
            deep:true
        }
    },
    computed:{
        ...mapGetters([
            'getStatus'
        ]),
        ...mapState([
            'token'
        ])
    },
    methods:{
        ...mapActions([
            'login',
            'initialize'
        ]),
        loginAttempt(){
            this.login(this.credentials)
        }
    }
}
</script>

<style>

.status{
    font-size: 18px;
    font-variant: small-caps;
    font-weight: bold;
    color: orange;
    background: black;
    border-radius:5px;
    margin-top: 5px;
    padding: 5px;
}

.login-input{
    margin: 5px;
    padding: 5px;
    border: 1px;
    border-radius: 5px;
    width: min-content;
    background: lightcyan;
}

.login-button {
    width: 100%;
}
</style>
