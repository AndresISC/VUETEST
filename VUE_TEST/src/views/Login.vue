<template>
    <div class="container">
        <div class="card-container">
            <h4>
                {{ loginMessage }}
            </h4>
            <LoginCard/>
        </div>
    </div>
</template>

<script>

import LoginCard from '../components/login/LoginCard'

export default {
    components:{
        LoginCard
    },
    data(){
        return {
            loginMessage: "Bienvenido"
        }
    }
}
</script>

<style>

.container {
    display: inline;
}

.card-container {
    display: table-cell;
    background: lightgray;
    margin: 5px;
    padding: 5px;
    border: 1px;
    border-radius: 5px;
}

</style>
