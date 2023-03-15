<script setup>
import PlantItem from "../components/PlantItem.vue";
</script>

<script>
    export default{
        data: function(){
            return{

            }
        },
        methods:{

        }

    }
</script>


<template>
        <div >
            <PlantItem :plantName = $route.params.plantName />
        </div>
</template>
