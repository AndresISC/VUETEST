import loginAPI from '../../api/login'
import * as types from '../types'

const namespaced = true

const state = {
    token:"",
    status:""
}

const mutations = {
    [types.SET_TOKEN]:(state, token) => {
        state.token = token
        state.status = ""
    },
    [types.SET_STATUS]:(state, status) => {
        state.status = status
    },
    [types.CLEAR_STATE]:(state) => {
        state = { status:"", token:"" }
    }
}

const actions = {
    initialize(context){
        context.commit(types.CLEAR_STATE)
    },
    async login(context, credentials){
        try{
            const response = await loginAPI.login(credentials)
            context.commit(types.SET_TOKEN, response.data.token)
        }catch(e){
            context.commit(types.SET_STATUS, e.response.data.error)
        }
    }
}

const getters = {
    getStatus: e => e.status,
}

export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
}