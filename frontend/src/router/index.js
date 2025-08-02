import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  /*history: createWebHistory(import.meta.env.BASE_URL)*/
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/project-setup',
      name: 'project-setup',
      component: () => import('@/views/ProjectSetup.vue'),
    },
    {
      path: '/sfc-template',
      name: 'sfc-template',
      component: () => import('@/views/SfcTemplate.vue'),
    },
    {
      path: '/github-pages-deploy',
      name: 'github-pages-deploy',
      component: () => import('@/views/GitHubPagesDeploy.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
