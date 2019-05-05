import Vue from 'vue'
import Router from 'vue-router'
import ImageDownloader from '@/views/ImageDownloader'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'download-image',
      component: ImageDownloader
    },
    {
      path: '/upload',
      name: 'upload-image',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/ImageUploader.vue')
    }
  ]
})
