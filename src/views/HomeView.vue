<script setup>
    import HomeBanner from "../components/HomeBanner.vue"
    import HomeFeaturedPlant from "../components/HomeFeaturedPlant.vue"
    import HomeDate from '../components/HomeDate.vue'
</script>

<template>
    <div>
        <HomeBanner />
        <HomeDate />
        <HomeFeaturedPlant defaultPlantName= "lemon" />
    </div>
</template>

<style scoped>
</style>
