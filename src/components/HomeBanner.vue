<script setup>
    import ButtonLink from "./ButtonLink.vue"
</script>

<script>
    export default{
        data:function(){
            return{

            }
        },
        methods:{
            toInfo(){
                this.$emit("to-info");
            },
        }
    }
</script>

<template>
    <div class="banner-container"
         :style="{backgroundImage: 'url(' + getImageUrl('home-banner.jpg') + ')'}"
    >
        <div class="black-rec"></div>
        <b-card
            title="A Guidebook for Gardening Beginner"
            sub-title="Card subtitle"
            bg-variant="transparent"
            border-variant="0"
            text-variant="white"
        >
            <b-card-text text-variant="50">
                Get all the information you need to learn indoor planting.<br/>
                Pave the way from a beginner to an expert.
            </b-card-text>
            <div class="button-group">
                <ButtonLink color="warning"
                            buttonText="Start Planting!"
                            toLink="/information"/>
                <!-- <ButtonLink class="mx-2" color="success"
                            buttonText="Planting Community" toLink="/community"/> -->
            </div>

        </b-card>
    </div>
</template>

<style scoped>
.banner-container {
    height: 75vh;
    position: relative;
    background-position: 50% 50%;
}

.black-rec {
    width:100%;
    padding-bottom:75vh;
    background:rgba(0,0,0,0.4);
    position: absolute;
}
.card{
    height:100%;
}
p {
    font-size: 1rem;
    padding-bottom: 0px;
}

.button-group{
    position: absolute;
    bottom: 0;
    margin-bottom: 2rem;
}

@media (min-width:992px){
.banner-container {
    height: 22vw;

}
.black-rec {
    padding-bottom:22vw;
}
}
</style>
