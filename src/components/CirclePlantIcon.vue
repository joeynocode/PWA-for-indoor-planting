<script setup>
    defineProps({
        plantName:{
            type: String,
            required: true,
        }
    })
</script>
<script>
    export default{
        data:function(){
            return {} // suppress warning since this function should return an object
        },
        methods:{
            toPlantDetailView() {
                this.$router.push({ path: `/information/${this.plantName}` });
                scroll(0,0);
            }
        }
    }
</script>

<template>
    <button class="plant-icon w-100" @click="toPlantDetailView">
        <div class="plant-icon-img"
            :style="{backgroundImage: 'url(' + getImageUrl(`plant_${plantName}.jpg`) + ')'}">
        </div>
        <p class="plant-icon-name d-flex justify-content-center text-capitalize mt-1 mb-0" >
            {{plantName}}
        </p>
    </button>
</template>


<style>
.plant-icon{
    background: none;
    border:none;
    padding: 1em;
    border-radius: 1em;
}
.plant-icon:hover{
 box-shadow: 0 0 15px #cfcfcf;
 background: rgb(156, 199, 47);
 transition: 0.2s;
}
.plant-icon:hover .plant-icon-name{
    color: #fff;
    font-weight: 900;
}
.plant-icon-img{
    border-radius: 50%;
    width:100%;
    height:0;
    padding-bottom: 100%;
    background-size: cover;
}

.plant-icon-name{
    font-size: 1.4em;
    font-weight: 500;
    color:#395021
}
</style>
