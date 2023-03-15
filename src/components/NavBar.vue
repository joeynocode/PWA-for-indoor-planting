<script setup>
import NavBarItem from './NavbarItem.vue'
import LogIn from './LogIn.vue'
</script>

<script>
export default {
    data: function () {
        return {
            nav: {
                // TODO: use getImageUrl
                "home": 'nav-home.svg',
                "information": 'nav-info.svg',
                "community": 'nav-comm.svg',

            },
            navPrivate: {
                "my album": 'nav-album.svg',
            },

            selectedStatus: false,
            selectedTab: "home",

            logStatus: false,
            userId: "",
        }
    },
    methods: {
        changeSelected(key) {
            key = key.replace(" ","")
            let path = this.$route.fullPath.split("/");
            //check if userid
            let title= Number(path[1])?path[2]:path[1]
            //check if homepage
            title == "" ? title = "home" : title = title;
            return title == key ? true : false;
        },
        login(e) {
            if (e != "") this.logStatus = true;
            this.$emit("user-email", e);
        },

        logOut() {
            this.logStatus = false;
            this.$emit("log-out")
        },
        setUserId(e) {
            this.userId = e;
        }
    }
}
</script>

<template>
    <b-container class="nav-container px-0">
        <b-nav vertical class="w-20 d-none d-lg-block h-100">
            <NavBarItem v-for="[key, value] of Object.entries(nav)" :private=false :navIcon="getImageUrl(value)"
                :navItem=key :selected=changeSelected(key) />
            <NavBarItem v-if=logStatus v-for="[key, value] of Object.entries(navPrivate)" :private=true :userId=userId
                :navIcon="getImageUrl(value)" :navItem=key :selected=changeSelected(key) />
        </b-nav>
        <LogIn class="d-none d-lg-block" @user-email=login @log-out=logOut @user-id=setUserId />

        <b-nav class="d-lg-none d-flex justify-content-center">
            <NavBarItem v-for="[key, value] of Object.entries(nav)" :private=false :navIcon="getImageUrl(value)"
                :navItem=key :selected=changeSelected(key) class="d-inline" />
            <NavBarItem v-if=logStatus v-for="[key, value] of Object.entries(navPrivate)" :private=true :userId=userId
                :navIcon="getImageUrl(value)" :navItem=key :selected=changeSelected(key) class="d-inline" />
            <LogIn class="" @user-email=login @log-out=logOut @user-id=setUserId />
        </b-nav>
    </b-container>

</template>

<style>
@media (min-width: 992px) {
    .nav-container {
        height: 75vh;
        position: relative;
    }

    .log-in-btn button {
        background-color: #91be00;
        border: none;
        z-index: 0;
    }

    .log-out-btn button {
        background-color: #4e4e4e;
        color: #fff;
        border: none;
    }

}

@media (max-width: 991.9px) {}
</style>
