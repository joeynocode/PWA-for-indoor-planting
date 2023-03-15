<script setup>
import PlantCard from "../components/PlantCard.vue";
import PlantSearchBar from "../components/PlantSearchBar.vue";
import PlantFilter from "../components/PlantFilter.vue";
</script>

<script>
    export default {
        data:function() {
            return {
                searching: false,
                foundSearch: false,
                searchPlant: "",
                plantInfo: "",

                filtering: false,
                filter: {
                    "difficulty":[],
                    "type":[]
                }
            }
        },
        methods: {

            // start search
            setSearchPlant(e) {
                this.searching = true;
                this.foundSearch = false;

                this.searchPlant = e;
                this.getInfo();
            },

            //end search
            endSearch() {
                this.searching = false;
                this.foundSearch = false,
                this.searchPlant = "";
            },

            //get information of the plant
            getInfo() {
                for(const [type,typeValue] of Object.entries(this.plantData)){
                    if (typeValue[this.searchPlant]) {
                        this.foundSearch = true;
                        this.plantInfo = typeValue[this.searchPlant];
                        return;
                    }
                }
            },

            setFilterDifficulty(e) {
                this.filter["difficulty"]= e;
            },
            setFilterType(e){
                this.filter["type"]= e;
            },
            filterType(type){
                let flag =false;
                if(this.filter["type"].length ===0 ) return true;
                this.filter["type"].forEach(t=>{
                    if(t.toLowerCase() ==type.toLowerCase() ) flag= true;
                })
                return flag;
            },

            filterPlant(typeValue) {
                let filteredData = {};
                for(const [name,info] of Object.entries(typeValue)) {
                    let flag = false;
                    if (this.filter["difficulty"].length === 0) {
                        flag = true;
                    }
                    else {
                        this.filter["difficulty"].forEach(f => {
                            if (info["difficulty"].toLowerCase() === f.toLowerCase())
                                flag = true;
                            }

                        )
                    }
                    if (flag) {
                        filteredData[name]=info;
                    }
                }
                return filteredData
            }
        }

    }
</script>


<template>
        <div>
            <PlantSearchBar
                @search-plant = "setSearchPlant"
                @search-end = "endSearch"
            />
            <PlantFilter
                @filter-difficulty = "setFilterDifficulty" @filter-type = "setFilterType"
            />
            <div v-if="searching">
                <b-container class="p-0 m-0">
                    <b-col lg="4" md="6" ms="12" class="plant-card-item px-1" >
                        <PlantCard v-if="foundSearch" :plantName=searchPlant :plantInfo=plantInfo />
                    </b-col>
                    <b-col class="px-1" >
                        <p v-if="!foundSearch">
                            Sorry, there is nothing about <b>{{searchPlant}}</b> here.
                        </p>
                    </b-col>
                </b-container>
            </div>

            <div v-if="(!searching || !foundSearch)" v-for="[type,typeValue] of Object.entries(plantData)">
                <div v-if="filterType(type)">
                    <h2 class="text-capitalize px-1 pt-2">{{type}}</h2>
                    <b-container class="p-0 m-0">
                        <b-col
                            lg="4" md="6" ms="12" class="plant-card-item px-1"
                            v-for="[name,info] of Object.entries(filterPlant(typeValue))"
                        >
                            <PlantCard :plantName=name :plantInfo=info />
                        </b-col>
                    </b-container>
                </div>
            </div>
        </div>
</template>

<style scoped>
    .plant-card-item {
        display:inline-block;
    }
</style>
