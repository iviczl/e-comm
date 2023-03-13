<script setup>
import { ref } from 'vue'
const props = defineProps({
  options: { type: Array, required: true }
})
const emit = defineEmits(['color-changed'])
const selectedColor = ref(props.options[0])
const changeColor = (color) => {
  selectedColor.value = color
  emit('color-changed', color)
}
</script>

<template>
  <div class="color-options" >
    <div class="option" :class="{ 'option-selected': selectedColor === option }" :style="{ background: option }" v-for="option in options" :key="option" 
    @click="changeColor(option)"></div>
  </div>
</template>

<style scoped>
.color-options {
  display: flex;
  /* margin-top: 20px; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 108px;
  height: 12px;
  /* Inside auto layout */
  flex: none;
  /* order: 1; */
  flex-grow: 0;
  z-index: 1;  
}
.option {
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.option-selected {
  border: 3px solid #DDDDDD;
}
@media (min-width: 1600px) {
  /* display: flex; */

  .color-options {
    /* margin-top: 15px; */
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 84px;
    height: 12px;
    /* Inside auto layout */
    flex: none;
    order: 3;
    flex-grow: 0;
  }


}</style>