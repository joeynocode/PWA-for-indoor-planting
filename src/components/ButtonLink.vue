<script setup>
    defineProps({
        buttonText: {
            type: String,
            required: true
        },
        toLink:{
            type: String,
            required: true
        },
        color:{
            type: String,
            required: true
        },
})
</script>

<script>
    export default{
       methods:{
            to(){
                this.$router.push({ path: this.toLink })
            }
       }
    }
</script>

<template>
    <b-button :variant=color @click="to()">{{buttonText}}</b-button>
</template>
