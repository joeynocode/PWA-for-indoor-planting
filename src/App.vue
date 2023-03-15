<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import PageTitle from './components/PageTitle.vue'
import UserProfile from './components/UserProfile.vue';
import BackButton from "./components/BackButton.vue";
</script>
<script>
  export default{
    data:function(){
      return{
        userEmail:"",
        logStatus:false,
        subPage:false,
      }
    },
    methods:{
      getEamil(e){
        this.userEmail = e;
        this.logStatus = true;
      },
      logOut(){
        this.userEmail = "";
        this.logStatus = false;
      },
      checkSubPage(){
        let currentRoute = this.$route.fullPath;
        let delta = currentRoute.split("/").length - 1;
        if (currentRoute.indexOf("album") !== -1) {
          delta = delta - 1;
        }
        this.subPage = delta>1?true :false;
      }
    }
  }
</script>

<template>
  <b-container class="all mx-0 w-100">
    <b-row>
      <b-col cols="3" class="p-0 d-none d-lg-block">
        <header class="sticky-top">
          <PageTitle />
          <NavBar @user-email= getEamil @log-out=logOut />
        </header>
      </b-col>

      <b-col class="p-0" sm="12" lg="9" >
        <main>
          {{checkSubPage()}}
          <b-row v-if=subPage||logStatus
                 class="top-bar px-0 mx-0 sticky-top align-items-center"
                 style="--bs-bg-opacity: 1;">
            <b-col cols="3" lg="2" class="ps-0 ms-3 ms-lg-4"><BackButton v-if=subPage /></b-col>
            <b-col><UserProfile v-if=logStatus :userEmail = userEmail /></b-col>
          </b-row>

          <RouterView class="mx-lg-4 mx-3"/>
        </main>
      </b-col>
    </b-row>
  </b-container>
  <header cols="12" class="d-block d-lg-none fix d-bottom">
    <NavBar @user-email= getEamil @log-out=logOut />
  </header>
</template>

<style scoped>
 .all{
    max-width: none;
  }
header, footer {
  background-color: #909090;
}
.top-bar{
  height:5em;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,0.12);
}
@media (min-width: 992px) {
  header {
    height:100vh;
  }
}

@media (max-width: 991px) {
  .all {
    max-width: none;
    width: 100%;
    margin-bottom: 60px;
  }

  header {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
