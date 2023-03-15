<script setup>
import Tag from "./DifficultyTag.vue";
import BackButton from "./BackButton.vue";

defineProps({
    plantName: {
        type: String,
        requried: true,
    }
})
</script>

<script>
export default {
    data: function() {
        return {
            plantAbout: "",
            plantDifficulty: "",
            plantBasic: "",
            plantHow: "",
            plantIcon:{
                "soil type": "plant-seeding.svg",
                "watering frequency": "plant-watering.svg",
                "suitable weather":"plant-temperature.svg",
                "light":"plant-light.svg"

            }
        }
    },

    methods: {
        getPlantInfo() {

            for (const [type,value] of Object.entries(this.plantData)) {
                if (value[this.plantName]) {
                    let plant = value[this.plantName];
                    if (plant["about"]) {
                        this.plantAbout = plant["about"];
                    }
                    if (plant["difficulty"]) {
                        this.plantDifficulty = plant["difficulty"];
                    }
                    if (plant["basic"]) {
                        this.plantBasic = plant["basic"];
                    }
                    if (plant["how-to"]) {
                        this.plantHow = plant["how-to"];
                    }
                }
            }
        }
    },
    created(){
        this.getPlantInfo();
    }
}
</script>
<template>
    <b-container>
        <h2 class="plant-title mt-2"> {{ plantName }} </h2>
        <b-row class="mb-2 mb-lg-5">
            <b-col cols="12" lg="8" class="me-2">
                <div class="">
                    <b-img :src="getImageUrl('plant_' + plantName + '.jpg')" :alt=plantName class="plant-img w-100 pb-3"></b-img>
                    <p> {{ plantAbout }} </p>
                </div>
            </b-col>
            <b-col>
                <Tag :text= plantDifficulty />
                <div class="py-2">
                    <b-col  class="plant-req my-2 p-1 d-flex align-items-center"
                        v-for="[key, value] of Object.entries(plantBasic)"
                    >
                        <b-col cols="2" md="1" lg="2" class="p-1" >
                            <img class="p-1 plant-icon" :src= getImageUrl(plantIcon[key]) :alt=key>
                        </b-col>
                        <b-col>
                            <p class="p-0 m-0 text-white">{{ value }}</p>
                        </b-col>
                    </b-col>
                </div>
            </b-col>
        </b-row>
        <div class="py-2">
            <div v-for="[key,value] of Object.entries(plantHow)">
                <h6 class="plant-subtitle"> {{ key }} </h6>
                <p> {{ value }} </p>
            </div>
        </div>
    </b-container>
</template>

<style scoped>
.plant-title{
    text-transform: capitalize;
    font-size:1.8rem;
}
.plant-subtitle {
    text-transform: capitalize;
    font-size:1.0rem;
}
.plant-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}
.plant-icon{
    filter: invert(100%);
}

.plant-req{
    background-color: #345209;
    border-radius: 0.3em;
}
.plant-req{
    font-size: 20px;
}
</style>
