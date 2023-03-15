<script setup>
import DifficultyTag from "./DifficultyTag.vue";

defineProps({
    authorName: {
        type: String,
        required: true,
    },
    experienceLevel: {
        type: String,
        required: true,
    },
    difficultyLevel: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    plant: {
        type: String,
        required: true,
    },
    details: {
        type: Object,
        required: true,
    },
})
</script>

<script>
export default {
    methods: {
        cardClick() {
            let author = this.authorName.replace(' ', '-');
            this.$router.push({ path: `/community/${author}_${this.plant}` });
            window.scrollTo(0, 0);
        },
    }
}
</script>

<template>
    <!-- TODO: make this clickable -->
    <!-- TODO: implement a community detailed page for expanded view -->
    <!-- can be floating window (for designers to worry about) -->
    <div id="community-view-card" @click="cardClick()" class="d-lg-flex">
        <b-col lg="9" id="community-view-card-info-rows">
            <b-col class="d-flex align-items-center mb-3">
                <b-avatar size="3em" class="me-2" variant="success">
                            {{ authorName .charAt(0).toUpperCase() }}
                </b-avatar>
                <h6 class="mb-0"> {{ authorName  }} </h6>
                <!-- <img :src="getImageUrl('dummy-avatar.svg')" />
                {{ authorName }} -->
            </b-col>
            <b-col class="d-flex">
                <label id="community-view-card-tag" class="d-flex justify-content-center me-2">
                    {{ experienceLevel }}
                </label>
                <DifficultyTag :text="difficultyLevel" />
            </b-col>
            <b-col>
                <p>
                    {{ text }}
                </p>
            </b-col>
        </b-col>
        <b-col id="community-view-plant-image">
            <img :src="getImageUrl('plant_' + plant + '.jpg')" width="200" height="125" />
        </b-col>
    </div>
</template>

<style scoped>
#community-view-card {
    padding: 1em;
    margin: 1em 0;
    justify-content: space-between;
    align-items: center;
    background-color: #F2F2F2;
    border-radius: 10px;
}
#community-view-card-tag {
    padding: 0.5em;
    background-color: #ffffff;
    border-radius: 20px;
    height:fit-content;
    width: 120px;
    font-weight: bold;
}
#community-view-plant-image img{
    width:100%;
    object-fit: cover;
    border-radius: 10px;
}
</style>
