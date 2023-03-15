<script setup>
defineProps({
    searchText: {
        type: String,
        // required: true
    }
})
</script>

<script>
export default {
    data: function() {
        return {
        }
    }
}
</script>

<template>
    <div id="search-bar-row">
        <input type="text"  />
        <!-- TODO: change them to icons -->
        <button> Search </button>
        <button> Filter </button>
    </div>
</template>

<style>
#search-bar-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    padding: 2rem 2.5rem;
}
</style>
