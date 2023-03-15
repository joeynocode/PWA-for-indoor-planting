<script>
import BackButton from '../components/BackButton.vue';

export default {
    components: {
        BackButton
    },

    data: function () {
        return {
            record: {},
            plantName: '',
            authorName: '',
            commentor: '',
            comment: '',
        }
    },

    methods: {
        getDetailsReturnPlant() {
            let info = this.$route.params.plantAuthorName.split('_');
            let authorName = info[0].replace('-', ' ');
            this.authorName = authorName[0].toUpperCase() + authorName.slice(1);
            let plantName = info[1];
            this.plantName = plantName[0].toUpperCase() + plantName.slice(1);
            this.record = this.communityData.find(item => item.authorName === authorName && item.plant === plantName);
            return this.plantName;
        },
        postComment() {
            this.record.details.comments.push({ authorName: this.commentor, text: this.comment });
            document.getElementById('commentor').value = '';
            document.getElementById('comment').value = '';
        },
    },
}
</script>

<template>
    <div>
        <b-container>
            <br>
            <h1 class="mb-4"> {{ getDetailsReturnPlant() }} </h1>
            <div class="post-box">
                <div class="d-flex align-items-center mb-2 avtar-box px-4 py-2">
                    <b-avatar size="3em" class="me-2" variant="success">
                        {{ this.authorName.charAt(0) }}
                    </b-avatar>
                    <h5 class="mb-0"> {{ this.authorName }} </h5>
                </div>
                <b-row class="p-4">
                    <b-col lg="6">
                        <p class="mb-lg-5">{{ this.record.details.story }}</p>
                        <h5> {{ "Tips" }} </h5>
                        <ul>
                            <li v-for="tip in this.record.details.tips">
                                {{ tip }}
                            </li>
                        </ul>
                    </b-col>
                    <b-col>
                        <img class="post-img" :src="getImageUrl('plant_' + this.record.plant + '.jpg')"/>
                    </b-col>
                </b-row>
            </div>

            <h4 class="mt-4"> Comments </h4>

            <div v-for="(item, index) in record.details.comments" :key="index">
                <div class="d-lg-flex align-items-start mb-2 px-3 px-lg-4 py-2 py-lg-4 comment-box">
                    <b-col lg="3" class="d-flex align-items-center mb-1 mb-lg-0">
                        <b-avatar size="3em" class="me-2" variant="success">
                            {{ item.authorName.charAt(0).toUpperCase() }}
                        </b-avatar>
                        <h6 class="mb-0"> {{ item.authorName }} </h6>
                    </b-col>
                    <b-col>
                        <p class="my-0">{{ item.text }}</p>
                    </b-col>
                </div>
            </div>

            <div class="mt-4">
                <b-row>
                    <b-col lg="3 mb-2 mb-lg-0">
                        <input type="text" placeholder="Your Name" id="commentor"
                            @input="commentor = $event.target.value"
                        />
                    </b-col>
                    <b-col>
                        <textarea type="text" placeholder="Add a comment" id="comment"
                            @input="comment = $event.target.value" class="w-100" rows="5"
                        ></textarea>
                    </b-col>
                </b-row>
            </div>
            <div class="w-100 " >
                <b-button class="float-end my-3" variant="outline-primary" @click="postComment()">Post</b-button>
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
.post-box,.comment-box{
    border:0.8px solid #adadad;
    border-radius: 1em;
}

.post-img{
    width:100%;
    object-fit:fill
}

.avtar-box{
    border-radius: 1em 1em 0 0;
    border-bottom: 0.8px solid #adadad;
    background:#efffd1;
}
</style>
