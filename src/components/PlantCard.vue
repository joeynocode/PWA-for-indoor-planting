<script setup>
import Tag from "./DifficultyTag.vue";

defineProps({
    plantName: {
        type: String,
        requried: true,
    },
    plantInfo: {
        type: Object,
        requried: true,
    }
})
</script>

<script>
export default {
    data: function () {
        return {
            plantDifficulty: "",
            plantWeather: "",
        }
    },

    methods: {
        getPlantInfo() {
            if (this.plantInfo != "") {
                this.plantDifficulty = this.plantInfo["difficulty"];
                this.plantAbout = this.plantInfo["about"];
            }
        },
        toPlantDetailView() {
            this.$router.push({ path: `/information/${this.plantName}` });
            scroll(0,0);
        }

    },
}
</script>
<template>
    {{getPlantInfo()}}
    <div class="plant-card" @click="toPlantDetailView()">
        <b-card :title=plantName
                :img-src="getImageUrl('plant_' + plantName + '.jpg')"
                :img-alt=plantName img-top tag="plant"
                style="max-width: 20rem;" class="mb-2"
        >
            <b-card-text>
                <Tag :text=plantDifficulty />
                <p>{{ plantAbout }}</p>
            </b-card-text>
            <b-button @click="toPlantDetailView()" variant="outline-primary">Read More</b-button>
        </b-card>
    </div>
</template>


<style>
.card-img-top {
    width: 100%;
    height: 50vh;
    object-fit: cover;
}
@media (min-width:992px){
.card-img-top {
    height: 15vw;
}
}


</style>
