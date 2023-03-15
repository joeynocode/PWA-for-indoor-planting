import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


import './assets/main.css'
import { BootstrapVue3 } from 'bootstrap-vue-3'

const app = createApp(App)

import plantData from './assets/plant_data.json'
import albumData from './assets/album_data.json'
import communityData from './assets/community_data.json'
import userData from './assets/user_email_data.json'

app.config.globalProperties.plantData = plantData
app.config.globalProperties.albumData = albumData
app.config.globalProperties.communityData = communityData
app.config.globalProperties.userData = userData

app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.config.globalProperties.getImageUrl = function getImageUrl(name) {
  return(`${this.baseDir}images/${name}`)
}

app.use(router)
app.use(BootstrapVue3)

app.mount('#app')
