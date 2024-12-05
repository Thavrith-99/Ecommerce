<script>
import axios from 'axios';
import ButtonComponent from '../components/ButtonComponent.vue';
import CategoryComponent from '../components/CategoryComponent.vue';
import PromotionComponent from '../components/PromotionComponent.vue';
import ProductComponent from '../components/ProductComponent.vue';
import { useProductStore } from '../Product_Store';
import { mapState } from 'pinia';


export default {
  name: 'App',
  setup() {
    console.log('setup App.vue')
    const store = useProductStore();
    return {
      store,
    };
  },
  components: {
    ButtonComponent,
    CategoryComponent,
    PromotionComponent,
    ProductComponent,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(useProductStore, {
      categories: 'categories',
      products: 'products',
      promotions: 'promotions'
    }),
  },
  async mounted() {
    // Fetch categories and promotions from backend
    await this.store.fetchCategories();
    await this.store.fetchPromotions();
    await this.store.fetchProducts();
  },
};
</script>

<template>
<router-view>
  <div class="featured-categories">
    <h2>Featured Categories</h2>
    <ul class="category-list">
      <li><a href="#" class="active">All</a></li>
      <li><a href="#">Milks & Dairies</a></li>
      <li><a href="#">Coffees & Teas</a></li>
      <li><a href="#">Pet Foods</a></li>
      <li><a href="#">Meats</a></li>
      <li><a href="#">Vegetables</a></li>
      <li><a href="#">Fruits</a></li>
    </ul>
  </div>

  <div class="content-wrapper">
    <div class="category">
      <template v-for="category in categories" :key="category.id">
        <CategoryComponent 
          :name="category.name" 
          :amount="category.productCount" 
          :color="category.color" 
          :image="category.image"
        />
      </template>
    </div>

    <div class="promotion">
      <template v-for="promotion in promotions" :key="promotion.id">
        <PromotionComponent 
          :title="promotion.title" 
          :color="promotion.color" 
          :btnColor="promotion.buttonColor" 
          :image="promotion.image"
        />
      </template>
    </div>

    
  </div>
  <div class="featured-categories">
    <h2>Popular Products</h2>
    <ul class="category-list">
      <li><a href="#" class="active">All</a></li>
      <li><a href="#">Milks & Dairies</a></li>
      <li><a href="#">Coffees & Teas</a></li>
      <li><a href="#">Pet Foods</a></li>
      <li><a href="#">Meats</a></li>
      <li><a href="#">Vegetables</a></li>
      <li><a href="#">Fruits</a></li>
    </ul>
  </div>

  <div class="product">
      <template v-for="product in products" :key="product.id">
        <ProductComponent 
          :name="product.name" 
          :rating="product.color" 
          :size="product.size" 
          :image="product.image"
          :price="product.price"
          :promotionAsPercentage="product.promotionAsPercentage"
          :categoryID="product.categoryID"
          :instock="product.instock"
          :countSold="product.countSold"
          :group="product.group"
        />
      </template>
    </div>
</router-view>
</template>



<style scoped>

.featured-categories {
  border: 2px solid #302828; /* Dark red border */
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.featured-categories h2 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.category-list {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.category-list li {
  display: inline-block;
}

.category-list a {
  text-decoration: none;
  color: #201f1f;
  font-weight: 500;
}

.category-list a.active {
  font-weight: bold;
}


.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.category {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px 0;
  background-color: hwb(0 96% 2%);
  border-radius: 10px;
}

.promotion {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 300px;
  background-color: rgb(247, 248, 249);
  border-radius: 10px;
}

.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 300px;
  background-color: rgb(247, 248, 249);
  border-radius: 10px;
}
</style>