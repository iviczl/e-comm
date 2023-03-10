<script setup>
import { ref } from 'vue'
const props = defineProps({
  categories: { type: Array, required: true } 
})
const selectedValue = ref(0)
const emit = defineEmits(['filter-changed'])
const filterChanged = function(value) {
  selectedValue.value = value
  emit('filter-changed', value)
}
</script>

<template>
  <span class="main-sub">
    <span :class="[ selectedValue === '' ? 'active' : 'sub' ]">
      <sub class="text" @click=" filterChanged('')">All</sub>
    </span>
    <span :class="[ selectedValue === category.id ? 'active' : 'sub' ]" v-for="category in props.categories" :key="category.id">
      <sub class="text" @click="filterChanged(category.id)">{{ category.title }}</sub>
    </span>
  </span>
</template>

<style scoped>
.text {
  height: 12px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 11px;
  line-height: 12px;
  text-transform: uppercase;
  color: #111111;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.sub {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px;
  gap: 6px;
  width: auto;
  /* height: 24px; */
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 11px;
  line-height: 12px;
  /* identical to box height, or 109% */
  text-transform: uppercase;
  /* dark */
  color: #111111;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;  
}
.main-sub {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  gap: 6px;
  width: 320px;
  height: 24px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}
.active {
  width: auto;
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  gap: 6px;
  height: 24px;
  /* light */
  background: #EEEEEE;
  /* light grey */
  border-bottom: 2px solid #DDDDDD;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
@media (min-width: 1600px) {
  .text {
    height: 20px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */
    text-transform: uppercase;
    /* dark */
    color: #111111;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: url(../assets/mouse_hover.svg), auto;
  }
  .sub {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;  
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */
    text-transform: uppercase;
    /* dark */
    color: #111111;  
  }
  .main-sub {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 15px;
    width: 499px;
    height: 40px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  .active {
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: auto;
    height: 40px;
    /* light */
    background: #EEEEEE;
    /* light grey */
    border-bottom: 3px solid #DDDDDD;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
}
</style>