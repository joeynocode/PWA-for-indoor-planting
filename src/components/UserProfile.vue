<script setup>
  defineProps({
        userEmail:{
            type:String,
            required:true,
        }
  })
</script>
<script>
    export default{
        data:function(){
            return{
                userName:"",
                userId:"",

            }
        },
        methods:{
            getUserInfo(){
                this.userName = this.userData[this.userEmail].userName;
                this.userId = this.userData[this.userEmail].id;

            }
        },
        created(){
            this.getUserInfo();
        }
    }
</script>

<template>
    <b-container class="profile sticky-top bg-white">
        <div class="justify-content-end d-flex">
            <div class="align-items-center d-flex px-0 me-2">
                <h6 class="m-0">{{userName}}</h6>
            </div>
            <div class="profile-img">
                <img :src="getImageUrl(`user-${userId}` + '.jpg')">
            </div>
        </div>
    </b-container>
</template>

<style>
.profile{
    height:100%;
}

.profile-img{
    width:40px;
    height:40px;
    border-radius: 50%;
    overflow:hidden ;
}
.profile-img img{
    width:100%;
    height:100%;
    object-fit: cover;
}
@media (min-width: 991px) {
.profile-img{
    width:50px;
    height:50px;
}
}
</style>
