<script setup>

</script>

<script>
export default {
    data: function () {
        return {
            emailId: `email-${Math.random() *10}`,
            pwdId:`pwd-${Math.random() *10}`,
            selectedStatus: false,
            selectedTab: "home",

            logInShow: false,
            logOutShow: false,
            wrongPwd: false,

            enteredEmail: "",
            enteredPwd: "",
            id: "",
            logStatus: false,
        }
    },
    methods: {
        login() {
            this.wrongPwd = false;
            if (this.enteredEmail && this.enteredPwd &&
                this.userData[this.enteredEmail] &&
                this.userData[this.enteredEmail]['pwd'] == this.enteredPwd) {
                this.logStatus = true;
                this.id = this.userData[this.enteredEmail]["id"];
                this.logInShow = false;
                this.$emit("user-email", this.enteredEmail);
                this.$emit("user-id", this.id)
            }
            else this.wrongPwd = true;

        },
        loginCancel() {
            this.logInShow = !this.logInShow;
        },

        logOut() {
            this.logStatus = false;
            this.logOutShow = !this.logOutShow;
            this.logStatus = false;
            this.$router.push({ path: "/" });
            this.$emit("log-out")
        },
        logOutCancel() {
            this.logOutShow = !this.logOutShow;
        }
    }
}
</script>

<template>
    <div class="ps-lg-3">
        <div v-if="!logStatus" class="log-btn log-in-btn">
            <b-button @click="logInShow = !logInShow" variant="success" class="align-items-center d-none d-lg-flex">
                <div class="d-flex align-items-center">
                    <img :src="getImageUrl('nav-login.svg')" class="d-block-sm" />
                    <p class="my-0 ms-2">Log in</p>
                </div>
            </b-button>
            <b-nav-item class="nav-item-inner d-lg-none" @click="logInShow = !logInShow">
                <img :src="getImageUrl('nav-login.svg')" class="d-block-sm" />
                <p class="text-white d-none d-lg-block"> Log in </p>
            </b-nav-item>
            <b-modal v-model="logInShow" hide-footer>
                <b-form-group id="input-group-1" label="Email:" label-for="input-email">
                    <b-form-input v-model="enteredEmail" :id=emailId type="email" placeholder="Enter email"
                        required></b-form-input>
                </b-form-group>
                <b-form-group id="input-pwd" label="Password:" label-for="input-pwd">
                    <b-form-input v-model="enteredPwd" :id=pwdId type="password" placeholder="Enter password"
                        required></b-form-input>
                </b-form-group>
                <p v-if=wrongPwd class="text-danger">
                    Either the email or the password doesn't match with the history.
                </p>
                <div>
                    <b-button @click=login variant="success" class="me-2">Log in</b-button>
                    <b-button @click=loginCancel>Cancel</b-button>
                </div>
            </b-modal>
        </div>

        <div v-if="logStatus" class="log-btn log-out-btn">
            <b-button @click="logOutShow = !logOutShow" variant="outline-secondary"
                class="align-items-center d-none d-lg-flex">
                <div class="d-flex align-items-center">
                    <img :src="getImageUrl('nav-logout.svg')" class="d-block-sm" />
                    <p class="my-0 ms-2">Log out</p>
                </div>
            </b-button>
            <b-nav-item class="nav-item-inner d-lg-none" @click="logOutShow = !logOutShow">
                <img :src="getImageUrl('nav-logout.svg')" class="d-block-sm" />
                <p class="text-white d-none d-lg-block"> Log out </p>
            </b-nav-item>
            <b-modal v-model="logOutShow" hide-footer>
                <h6 class="mb-4">Are you sure to log out?</h6>
                <div>
                    <b-button @click=logOut variant="secondary" class="me-5">Log out</b-button>
                    <b-button @click=logOutCancel variant="outline-secondary">Cancel</b-button>
                </div>
            </b-modal>
        </div>
    </div>

</template>

<style>
.log-in-btn button {
    background: none;
    border: none;
}

.log-out-btn button {
    background-color: #4e4e4e;
    color: #fff;
    border: none;
}

.log-in-btn button div img,
.log-out-btn button div img {
    filter: invert(100%);
    width: 30px;
    height: 30px;
}

@media (min-width: 992px) {
    .log-btn {
        position: absolute;
        bottom: 0em;
    }

    .log-in-btn button {
        background-color: #91be00;
    }
}

@media (max-width: 991.9px) {
    .log-btn button {
        border-radius: 0;
    }
}
</style>
