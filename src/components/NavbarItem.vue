<script setup>
    defineProps ({
        selected:{
            type: Boolean,
            required: true
        },
        navItem: {
            type: String,
            required: true
        },
        navIcon: {
            type: String,
            required: true
        },
        private:{
            type: Boolean,
            required: true
        },
        userId:{
            type: Number,
            required: false
        }
    })
</script>

<script>
    export default {
        data:function(){
            return{
                windowHeight: window.innerHeight,
                windowWidth: window.innerWidth,
            }
        },
        emits: ["change-tab"],
        methods: {
            toPage() {
                this.selected== true
                this.tabSelected = this.navItem;
                let navName = this.navItem.replace(" ","");
                if (navName === "home") {
                    this.$router.push({path: "/"});
                }
                else if(this.private){
                    this.$router.push({path: `/${this.userId}/${navName}`})
                }
                else {
                    this.$router.push({path: `/${navName}`})
                }

            },
        },
        mounted() {
            window.addEventListener('resize', () => {
                this.windowHeight = window.innerHeight;
                this.windowWidth = window.innerWidth;
            })
        },
        beforeDestroy() {
            window.removeEventListener('resize', () => {
                this.windowHeight = window.innerHeight;
                this.windowWidth = window.innerWidth;
            })
        }
}
</script>

<template>
   <div class="nav-item mx-lg-0">
        <b-nav-item class="nav-item-inner" @click="toPage()" :active=selected >
            <img :src="navIcon" class="p-0" />
            <p class="text-white d-none d-lg-block"> {{navItem}} </p>
        </b-nav-item>
   </div>
</template>

<style>

.nav-item-inner p {
    font-size:20px;
    display: inline;
    align-items: center;
    justify-content: center;
    margin: 0.5em;
    text-transform: capitalize;
}
.nav-item .active{
    background: #91be00;
}
.nav-item a{
    align-items:center ;
    display:flex;
    padding:1em;
}
.nav-item .active img,
.nav-item img{
    filter: invert(100%);
    width:30px;
    height:30px;
}

@media (min-width: 992px) {
}
</style>
