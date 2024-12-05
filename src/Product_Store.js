import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore('product', {
    state: () => ({
         groups: [],
         promotions: [],
         categories: [],
         products: []
    }),
    getters: {},
    actions: {
      async fetchCategories() { 
            await axios.get('http://localhost:3000/api/categories')
            .then(response => {
              // Access the data
              // console.log(response.data); 
              this.categories = response.data;
            })
            .catch(error => {
              console.error('Error fetching data:', error);
        });
      },
      async fetchPromotions() {
            await axios.get('http://localhost:3000/api/promotions')
            .then(response => {
              // Access the data
              // console.log(response.data); 
              this.promotions = response.data;
            })
            .catch(error => {
              console.error('Error fetching data:', error);
        });
                
      },
      async fetchProducts() {
        await axios.get('http://localhost:3000/api/products')
        .then(response => {
          // Access the data
          // console.log(response.data); 
          this.products = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });         
      }
    },
  })    