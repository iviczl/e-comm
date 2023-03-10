import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  async function loadProducts() {
    const response = await fetch('https://63500f5078563c1d82b7d0ab.mockapi.io/oander-frontend/products')
    products.value = await response.json()
  }
  return { products, loadProducts }
})
