<template>
    <div class="login-input">
        <input
            @input="dispararEvento"
            type="text" 
            :id="id"
        />
        <label 
            class="login-label"
            :for="id"
        >
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    props:['label','id'],
    methods:{
        dispararEvento(){
            this.$emit('input', this.$event)
        }
    }
}
</script>

<style>


.login-input{
    margin: 5px;
    padding: 5px;
    border: 1px;
    border-radius: 5px;
    width: min-content;
    background: lightcyan;
}

</style>
