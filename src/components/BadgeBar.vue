<script setup>
const props = defineProps({
  badges: { type: Array, defaultValue: []},
  hovered: { type: Boolean, defaultValue: false }
})
</script>

<template>
  <div :class="[hovered ? 'badges-hover' : 'badges' ]">
    <div v-for="badge in props.badges" class="badge" :style="{ 'background-color': badge.background_color }"><span class="badge-content">{{ badge.title }}</span></div>
  </div>
</template>

<style scoped>
.badges {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
  position: relative;
  width: 60px;
  height: 30px;
  left: 0px;
  top: 0px;
  /* Inside auto layout */
  flex: none;
  order: 4;
  flex-grow: 0;
  /* z-index: 3; */
}
.badge {
  width: 60px;
  height: 30px;
  display: flex;
  flex: none;
  justify-content: center;
  order: 0;
  flex-grow: 0;  
}
.badge-content {
  /* position: absolute; */
  height: 30px;
  left: 0%;
  right: 0%;
  top: calc(50% - 30px/2);
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;  
}
@media (min-width: 1600px) {
  .badges {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;
    position: absolute;
    width: 60px;
    height: 30px;
    left: 0px;
    top: 0px;    
    z-index: 0;  
  }
  .badges-hover {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;
    position: absolute;
    align-self: flex-start;
    width: 122px;
    height: 30px;
    flex: none;
    left: 16px;
    top: 15px;
    flex-grow: 0;
    z-index: 0;    
  }
}
</style>