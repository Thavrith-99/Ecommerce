import { createRouter, createWebHistory } from 'vue-router'

// Temporary components to replace the deleted files
const HomeView = { template: '<div>Home Page</div>' }
const AboutView = { template: '<div>About Page</div>' }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
