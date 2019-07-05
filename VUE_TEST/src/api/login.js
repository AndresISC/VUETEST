
const login = (data) => 
    window.axios.post('api/login',data)

export default {
    login
}