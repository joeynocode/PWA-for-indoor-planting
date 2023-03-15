<script setup>
defineProps({

})
</script>

<script>
export default {
    data: function() {
        return {
            inputField:"",
        }
    },
    methods: {
        //get input
        searchPlant() {
            this.$emit("search-plant",this.inputField);
        },

        //end search, clear input
        clearSearch() {
            this.inputField = "";
            this.$emit("search-end",true);
        }
    }
}
</script>

<template>
    <b-row id="search-bar-row">
        <b-col lg="6" sm="12" class="pb-2">
            <b-form-input v-model="inputField"
                type="text"
                placeholder="Search plant name"
                @keyup.enter="searchPlant()"
            />
        </b-col>
        <b-col>
            <b-button @click="searchPlant()" variant="outline-primary" class="me-2"> Search </b-button>
            <b-button @click="clearSearch()" variant="outline-secondary"> Clear </b-button>
        </b-col>
    </b-row>
</template>

<style scoped>
#search-bar-row {
    padding: 2rem 0rem;
}
</style>
