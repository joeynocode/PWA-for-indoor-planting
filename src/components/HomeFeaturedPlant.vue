<script setup>
import Tag from "./DifficultyTag.vue";

defineProps({
    defaultPlantName: {
        type: String,
        requried: true,
    }
})
</script>

<script>
export default {
    data: function () {
        return {
            plantName:this.defaultPlantName,
            plantDifficulty: "",
            plantImg: "",
            plantWeather: "",
        }
    },

    methods: {
        getInfo() {
            for(const [type,typeValue] of Object.entries(this.plantData)){
                if (typeValue[this.plantName]) {
                    this.plantDifficulty = typeValue[this.plantName]["difficulty"];
                    this.plantAbout = typeValue[this.plantName]["about"];
                    return;
                }
            }
        },

        toPlantDetailView() {
            this.$router.push({ path: `/information/${this.plantName}` });
            scroll(0,0);
        },

        refresh(){
            let type = Object.keys(this.plantData);
            let typeSeed = Math.floor(Math.random() * type.length);
            let category = type[typeSeed];

            let plantKey = Object.keys(this.plantData[category]);
            let plantSeed= Math.floor(Math.random() * plantKey.length);
            this.plantName = plantKey[plantSeed];
        }
    },
    created(){
        this.getInfo();
    }
}
</script>

<template>
    <div class="featured-plant my-5">
        <div class="featured-title">
            <div class="title"><h4>Today's Featured Plants</h4></div>
            <b-button class="mb-3" variant="outline-primary" @click=refresh() >
                Want a new one?
            </b-button>
        </div>
        <b-card :img-src="getImageUrl('plant_' + plantName + '.jpg')" :img-alt=plantName img-right class="mb-3 d-none d-lg-flex">
          <b-card-text>
            <Tag :text=plantDifficulty />
            <p>{{ plantAbout }}</p>
          </b-card-text>
          <b-button class="read-more" @click="toPlantDetailView()" variant="outline-primary">
            Read More
          </b-button>
        </b-card>

        <b-card :img-src="getImageUrl('plant_' + plantName + '.jpg')" :img-alt=plantName img-top class="mb-3 d-block d-lg-none">
          <b-card-text>
            <Tag :text=plantDifficulty />
            <p>{{ plantAbout }}</p>
          </b-card-text>
          <b-button class="read-more" @click="toPlantDetailView()" variant="outline-primary">
            Read More
          </b-button>
        </b-card>
    </div>

</template>


<style scoped>

.featured-plant :deep(.card-img-top) {
    height: 50vw;
    object-fit: cover;
    align-self:center;
}


.featured-title :deep(.title){
    flex-grow:1;
}
.read-more{
    position: static;
}
@media (min-width: 992px) {
    .featured-plant :deep(.featured-title) {
    display: flex;
}
    .featured-plant :deep(.card-body){
        width: 25%;
    }
    .featured-plant :deep(.card-img-right) {
        width: 75%;
        height: 20vw;
        object-fit: cover;
        align-self:center;
    }
    .read-more{
        position: absolute;
        bottom:1.5em
    }
}
</style>
