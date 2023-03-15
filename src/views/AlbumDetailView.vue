<script >
import BackButton from '../components/BackButton.vue';

export default {
    components: {
        BackButton
    },
    data: function () {
        return {
            recordKey: this.$route.params.recordKey,
        }
    },
    methods: {
        getRecordInfo() {
            let userId = this.$route.fullPath.split("/")[1]
            this.recordName = this.albumData[userId][this.recordKey]['plant name'];
            this.recordDate = this.albumData[userId][this.recordKey]['date'];
            this.recordNote = this.albumData[userId][this.recordKey]['note'];
            this.recordStory1 = this.albumData[userId][this.recordKey]['story1'];
            this.recordStory2 = this.albumData[userId][this.recordKey]['story2'];
            const noStory = '(No story from the user yet)';
            if (this.recordStory1 === '') {
                this.recordStory1 = noStory;
            }
            if (this.recordStory2 === '') {
                this.recordStory2 = noStory;
            }
        },
        addStory() {
            let story = document.getElementById('input-1').value;
            console.log('story: ', story)
            document.getElementById('input-1').value = '';
            if (document.getElementById('card-story-1').innerHTML === '(No story from the user yet)') {
                document.getElementById('card-story-1').innerHTML = story;
            } else if (document.getElementById('card-story-2').innerHTML === '(No story from the user yet)') {
                document.getElementById('card-story-2').innerHTML = story;
            } else {
                alert('You can only add two stories for each record');
            }
        }
    },
}
</script>

<template>
    <div>
        <b-container>
            {{ getRecordInfo() }}
            <br>

            <!-- TO-DO need more CSS -->
            <h2>{{ recordName }}</h2>
            <p>{{ recordDate }}</p>
            <!-- TO-DO upload button need to work -->
            <div>
                <b-button id="popover-target-1" variant="success">
                    Current Status
                </b-button>

                <b-popover target="popover-target-1" triggers="hover" placement="top">
                    <template #title>{{ recordName }}</template>
                    {{ recordNote }}
                </b-popover>
            </div>
            <div>
                <b-img :src="getImageUrl('plant_' + recordName + '_record.jpeg')" rounded alt="Rounded image"
                    class="plant-img w-100 mt-3"></b-img>
            </div>

            <div>
                <b-card no-body class="mt-3">
                    <b-tabs card id="albumdetail-tabs">
                        <b-tab title="story 1" active>
                            <b-card-text id="card-story-1">{{ recordStory1 }}</b-card-text>
                        </b-tab>
                        <b-tab title="story 2">
                            <b-card-text id="card-story-2">{{ recordStory2 }}</b-card-text>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>

            <div class="mt-3">
                <!-- allow user to add story -->
                <b-form-group id="input-group-1" label="Add your story" label-for="input-1">
                    <b-form-textarea id="input-1" placeholder="Enter your story here"></b-form-textarea>
                </b-form-group>
                <b-button variant="outline-primary" @click="addStory()"> Add </b-button>
            </div>
        </b-container>
    </div>
</template>

<style>
.plant-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}
</style>
