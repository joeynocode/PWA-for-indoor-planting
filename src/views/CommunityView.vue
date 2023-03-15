<script setup>
import PlantSearchBar from "../components/PlantSearchBar.vue";
import CommunityCard from "../components/CommunityCard.vue";
</script>

<script>
</script>

<template>
    <div>
        <b-container>
            <!-- TODO: import full plant search bar when feature is finalized -->
            <!-- requires copy paste code, which is bad. looking for better solutions -->
            <!-- <div> -->
                <PlantSearchBar />
            <!-- </div> -->
            <b-row v-for="item in communityData" id="community-cards">
                <CommunityCard
                    :authorName="item.authorName"
                    :experienceLevel="item.experienceLevel"
                    :difficultyLevel="item.difficultyLevel"
                    :text="item.text"
                    :plant="item.plant"
                    :details="item.details"
                />
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>
#community-cards {
    margin: 0.5em 0;
}
</style>
