<script setup>
import { ref } from 'vue'
const props = defineProps({
  badges: { type: Array, required: true }
})
let selectedValue = ref('')
const emit = defineEmits(['filter-changed'])
const filterChanged = function(value) {
  emit('filter-changed', value)
}
</script>

<template>
  <select class="dropdown" @change="filterChanged($event.target.value)">
    <option value="">filter</option>
    <option v-for="badge in badges" :key="badge" :value="badge">{{ badge }}</option>
    <!-- <option value="New">New</option>
    <option value="Discount">Discount</option> -->
  </select>
</template>

<style>
.dropdown {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 6px;
  gap: 10px;
  border: 0;
  width: 81px;
  height: 17px;
  /* width: 42px; */
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 17px;
  /* identical to box height, or 131% */
  text-align: right;
  text-transform: uppercase;
  /* dark */
  color: #111111;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
@media (min-width: 1600px) {
  .dropdown {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 15px;
    gap: 15px;
    border: 0;
    width: 117px;
    height: 20px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */
    /* text-align: right; */
    text-transform: uppercase;
    /* dark */
    color: #111111;  
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;  
    cursor: url(../assets/mouse_hover.svg), auto;
  }
}
</style>