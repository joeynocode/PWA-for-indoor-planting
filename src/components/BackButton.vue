<script setup>
defineProps({
})
</script>

<script>
export default {
    data: function() {
        return {

        }
    },
    methods: {
        back() {
            this.$router.back();
        }
    }
}
</script>

<template>
    <div>
        <button @click="back()" class="d-flex back-btn align-items-center">
            <img :src= "getImageUrl('back-icon.svg')" alt="back icon" class="me-1">
            Back
        </button>
    </div>
</template>

<style >
.back-btn{
    border:none;
    background:none;
    font-size: 1.5em;
    font-weight: 600;
    color:#606060;
}

</style>
