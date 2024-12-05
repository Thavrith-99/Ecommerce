import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { createApp } from 'vue';
import CategoryView from '@/views/CategoryView.vue';
import ProductView from '@/views/ProductView.vue';
import App from '@/App.vue';

// Temporary components to replace the deleted files
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:"/",
      name:"home",
      component: HomeView
    },
    {
      path:'/categories/:categoryId',
      name:'category',
      component: CategoryView
    },
    {
      path: "/products/:productId",
      name: "product",
      component: ProductView,
    },
  ]

})
const app = createApp(App);
 



export default router;
