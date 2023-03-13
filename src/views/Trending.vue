<script setup>
import { computed, ref } from '@vue/reactivity';
import CategoryFilter from '../components/CategoryFilter.vue';
import BadgeFilter from '../components/BadgeFilter.vue';
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '@/stores/product';
import { onMounted } from 'vue';

const store = useProductStore()

onMounted(async () => {
await store.loadProducts()
})

const categories = [
  { id: '1', title: 'Category 1' },
  { id: '2', title: 'Category 2' },
  { id: '3', title: 'Category 3' },
]
const badges = ref([ 'New', 'Discount' ])
const selectedCategory = ref('')
const selectedBadge = ref('')
const filteredProducts = computed(() => {
  // console.log(products.values())
  return store.products.filter(p => (selectedCategory.value === '' || p.category.id === selectedCategory.value) && 
  (selectedBadge.value === '' || p.badges.some(b => b.title === selectedBadge.value) || (selectedBadge.value === 'Discount' && typeof p.price.special === 'number')))  
})

const categoryChanged = (category) => {
  selectedCategory.value = category
  // console.log(category)
}
const badgeChanged = (badge) => {
  selectedBadge.value = badge
  console.log(badge)
}
</script>

<template>
  <div class="trending">
    <article class="head">
      <span class="title">TOP TRENDING NOW</span>
      <CategoryFilter :categories="categories" @filter-changed="categoryChanged"/>
      <span class="filter">
        <a class="more-products">More products</a>
        <BadgeFilter :badges="badges" @filter-changed="badgeChanged" />
      </span>
    </article>
    <article class="product-cards">
      <div class="row">
        <template v-for="product in filteredProducts" :key="product.id" class="card-and-line">
          <ProductCard :product="product" />
          <dl class="line" />
        </template>
      </div>
    </article>
  </div>
</template>

<style scoped>
@media (max-width: 1599px) {
.card-and-line {
  display: flex;
  flex-direction: column;
}
.line {
  width: 280px;
  height: 1px;
  /* light grey */
  background: #DDDDDD;
  /* Inside auto layout */
  flex: none;
  /* order: 1; */
  flex-grow: 0;  
}
.trending {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: relative;
  width: 320px;
  background: #FFFFFF;
}
.product-cards {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 60px;
  gap: 25px;

  position: absolute;
  width: 280px;
  left: calc(50% - 280px/2);
  top: 229px;
}
.head {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 35px;
  position: absolute;
  width: 320px;
  height: 139px;
  left: 0px;
  top: 30px;
}
.title {
  width: 212px;
  height: 28px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */
  text-align: center;
  text-transform: uppercase;
  color: #0F0F0F;  
}
.filter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  gap: 60px;
  width: 320px;
  height: 17px;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
}

.more-products {
  width: 116px; /* 115px; */
  height: 17px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 17px;
  /* identical to box height, or 131% */
  text-align: right;
  text-decoration-line: underline;
  text-transform: uppercase;
  /* dark */
  color: #111111;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
}
@media (min-width: 1600px) {
.card-and-line {
  display: flex;  
  flex-direction: row;
}
.line:not(:nth-of-type(4n)) {
  width: 1px;
  height: 500px;
  /* light grey */
  background: #DDDDDD;
  /* Inside auto layout */
  /* padding-left: 14.5px;
  padding-right: 14.5px; */
  flex: none;
  /* order: 1; */
  flex-grow: 0;    
}
.trending {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: relative;
  width: 1600px;
  /* white */
  background: #FFFFFF;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  /* gap: 30px; */
  width: 1518px;
  max-width: 1518px;
  height: 500px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;  
}
.product-cards {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 60px;
  gap: 40px;
  isolation: isolate;

  position: absolute;
  width: 1518px;
  left: 40px;
  top: 166px;  
}
.filter {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 80px;

  width: 338px;
  height: 20px;


  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;  
}
.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  align-items: center;
  padding: 0px;
  gap: 161px;

  position: absolute;
  height: 46px;
  left: 39px;
  right: 42px;
  top: 40px;
  min-width: 320px;
}
.title {
  width: 360px;
  height: 46px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 900;
  font-size: 34px;
  line-height: 46px;
  /* identical to box height, or 135% */
  text-transform: uppercase;
  /* dark */
  color: #111111;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;  
}

.more-products {
  width: 142px; /* 141px; */
  height: 20px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */
  text-align: right;
  text-decoration-line: underline;
  text-transform: uppercase;
  /* dark */
  color: #111111;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: url(../assets/mouse_hover.svg) 9 0, auto;
}
}

</style>