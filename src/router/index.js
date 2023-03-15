import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView.vue'
import AlbumView from '../views/AlbumView.vue'
import CommunityView from '../views/CommunityView.vue'
import PlantDetailView from '../views/PlantDetailView.vue'
import AlbumDetailView from '../views/AlbumDetailView.vue'
import CommunityDetailView from '../views/CommunityDetailView.vue'
import Add from '../views/CommunityDetailView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/information',
      name: 'information',
      component: InfoView
    },
    {
      path: '/:userId/myalbum',
      name: 'myalbum',
      component: AlbumView
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityView
    },
    {
      path: '/information/:plantName',
      name: 'detail-information',
      component: PlantDetailView
    },
    {
      path: '/community/:plantAuthorName',
      name: 'detail-community',
      component: CommunityDetailView,
    },
    {
      path: '/:userId/myalbum/:recordKey',
      name: 'detail-album',
      component: AlbumDetailView
    }
    ,
    {
      path: '/:userId/myalbum/:recordKey',
      name: 'detail-album',
      component: AlbumDetailView
    }
  ]
})

export default router
