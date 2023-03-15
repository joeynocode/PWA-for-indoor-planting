<script setup>
import BackButton from "./BackButton.vue";

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
            getPageTitle() {
                let title = this.$route.fullPath.slice(1);
                let pos = title.indexOf("/");
                pos === -1 ? title = title.substring(0) : title = title.substring(0, pos);
                return title === "" ? "Home" : title;
            },
        }
    }
</script>

<template>
    <b-container class="ms-1 page-title py-3">
        <h5 class="text-white">Planting Guidebook</h5>
    </b-container>
</template>

<style scoped>
    .page-title {
        border-bottom: 1px solid #fff;
        box-sizing:border-box;
    }
    h3 {
        text-transform: capitalize;
    }
</style>
