<script setup>

defineProps({
    recordInfo: {
        type: Object,
        required: true,
    },
    recordKey: {  // router key
        type: String,
        required: true,
    }
})
</script>

<script>
export default {
    data: function () {
        return {
            recordName: "",
            recordImg: "",
            recordDate: "",
            recordNote: ""
        }
    },

    methods: {
        getRecordInfo() {
            this.recordName = this.recordInfo['plant name'];
            this.recordDate = this.recordInfo['date'];
            this.recordNote = this.recordInfo['note'];
            this.recordEmoji = this.recordInfo['emoji'];
        },
        toAlbumDetailView() {
            let path = this.$route.fullPath;
            this.$router.push({ path: `${path}/${this.recordKey}` });
            window.scrollTo(0, 0);
        }
    },
    created(){
        this.getRecordInfo();
    }

}
</script>

<template>

    <!-- AlbumCard.vue below<br> -->
    <div class="album-card" @click="toAlbumDetailView()">
        <b-card :title="recordName" :img-src="getImageUrl('plant_' + recordName + '_record.jpeg')" :img-alt="recordName"
            img-top tag="record" style="width: 20rem;" class="mb-2">
            <b-card-text class="card-text-box">
                <p> {{ recordDate }}</p>
                <p> {{ recordNote }}</p>
            </b-card-text>
            <h3>{{ recordEmoji }}</h3>
            <b-button variant="outline-primary">Read More</b-button>
        </b-card>
    </div>

</template>

<style>
.card-text-box {
    height: 90px;
    overflow: hidden;
}
.b-card :hover {
    background: #f5f5f571;
}


</style>
