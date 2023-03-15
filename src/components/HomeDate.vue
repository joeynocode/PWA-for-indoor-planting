<script setup>
import CirclePlantIcon from "./CirclePlantIcon.vue"
</script>

<script>
    export default{
        data:function(){
            return{
                seasonalPlant:{
                    spring:["cucumber","radish","onion","raspberry","lemon"],
                    summer:["tomato","cucumber","pepper","garlic","strawberry"],
                    fall:["grape","spinach","carrot","apple","orange"],
                    winter:["carrot","onion","radish","parsley","thyme"],
                },
                toadyDate: new Date(),
                day:"",
                date:"",
                month:"",
                season:"",

            }
        },
        methods:{
            getDate(){
                const MonthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
                const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

                this.date = (this.toadyDate.getDate()).toLocaleString('en-US', {
                                        minimumIntegerDigits: 2,
                                        useGrouping: false
                                    })
                this.month = MonthName[this.toadyDate.getMonth()];
                this.day = dayName[this.toadyDate.getDay()];

                switch(this.toadyDate.getMonth()+1){
                    case 3||4||5 : this.season = "spring"
                        break;
                    case 6||7||8 : this.season = "summer"
                        break;
                    case 9||10||11 : this.season = "fall"
                        break;
                    case 12||1||2 : this.season = "winter"
                        return;
                }
            }
        },
        created(){
            this.getDate();
        }


    }
</script>

<template>
    <div class="mt-5">
        <div class="title"><h4>Seasonal Plants</h4></div>
        <div class="season-box px-3 py-4 mx-0 w-100" >
            <div class="d-lg-flex align-items-center">
                <b-col cols="8" lg="2" class="date-box mx-auto">
                    <b-row class="date-month m-0">
                        <p class="d-flex justify-content-center  m-0">{{month}}</p>
                    </b-row>
                    <b-row class="date-date-and-day m-0">
                        <b-row class="date-date m-0">
                            <p class="d-flex justify-content-center  m-0">{{date}}</p>
                        </b-row>
                        <b-row class="date-day m-0">
                            <p class="d-flex justify-content-center">{{day}}</p>
                        </b-row>
                    </b-row>
                </b-col>
                <b-col class="px-0 mx-0 season-right">
                    <b-row class="season-slogan">
                        <h6 class="my-2">{{season}} Time! </h6>
                        <p class="mb-0 mb-lg-2">Check the winter plants we have selected for you!</p>
                    </b-row>
                    <b-row class="justify-content-center gx-2" align-v>
                        <b-col cols="6" lg="2" v-for= "value in seasonalPlant[season]">
                            <CirclePlantIcon :plantName=value />
                        </b-col>
                    </b-row>
                </b-col>
            </div>
        </div>
    </div>
</template>

<style>
.season-box{
    background:#f1f7df;
}

.banner-container {
    height: 35vh;
    position: relative;
    background-position: 50% 100%;
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

.date-box p{
    font-size: 3em;
}
.date-month{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #d2e988;
}
.date-date-and-day{
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #84a628;
}
.date-date p,
.date-day p{
    font-size: 6em;
    color:#fff;
}
.date-month p{
    font-size: 3em;
}
.date-day p{
    font-size: 2em;
    line-height: 50%;
}

.season-slogan p,
.season-slogan h6{
    display: flex;
    justify-content: center;
}

.season-slogan p{
    font-size: 1em;
}

.season-slogan h6{
    font-size: 2em;
    font-weight: 700;
    text-transform: capitalize;
}

.season-right{
    box-sizing: border-box;
}
</style>
