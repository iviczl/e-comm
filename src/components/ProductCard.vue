<script setup>
import { ref } from 'vue'
import ColorOptions from './ColorOptions.vue';
import Prices from './Prices.vue'
import BadgeBar from './BadgeBar.vue';
import Quantity from './Quantity.vue'
import CartButton from './CartButton.vue'
import { useConfigStore } from '@/stores/config.js';

const config = useConfigStore()
const props = defineProps({
  product: { type: Object, required: true }
})
const badges = () => {
  if(props.product.price.special === null) { return props.product.badges }
  const title = '-' + Math.round((props.product.price.normal - props.product.price.special) / props.product.price.normal * 100).toString() + '%'
  return [{ title, background_color: '#EB333C' }, ...props.product.badges.map(b => ({ title: b.title.toUpperCase(), background_color: b.background_color })) ]
}
const colorOptions = ref(props.product.variants)
const colorChanged = (color) => {}
const hovered = ref(false)
</script>

<template>
  <div v-if="config.isMobile" class="card">
    <BadgeBar :badges="badges()" />
    <div class="favorite">
        <img class="favorite-icon" src="../assets/icon_favorite.svg" />
    </div>
    <div class="data">
      <img class="image" :src="props.product.image" :alt="props.product.name" loading="lazy">
      <span class="title">{{ props.product.name }}</span>
      <Prices :actualPrice="props.product.price.special ?? props.product.price.normal" :oldPrice="props.product.price.special ? props.product.price.normal : null" />
    </div>
    <ColorOptions :options="colorOptions" @color-changed="colorChanged" />
    <div class="bottom">
      <Quantity />
      <CartButton />
    </div>
  </div>
  <div v-else class="card-place" @mouseover="hovered = true" @mouseleave="hovered = false">
    <div v-if="hovered" class="card-hover">
      <BadgeBar :badges="badges()" :hovered="true"/>
      <div class="favorite">
        <img class="favorite-icon" src="../assets/icon_favorite.svg" />
      </div>
      <div class="data-hover">
        <img class="image" :src="props.product.image" :alt="props.product.name" loading="lazy">
        <span class="title">{{ props.product.name }}</span>
        <Prices :actualPrice="props.product.price.special ?? props.product.price.normal" :oldPrice="props.product.price.special ? props.product.price.normal : null" />
        <ColorOptions :options="colorOptions" @color-changed="colorChanged" />
      </div>
      <div class="bottom">
        <Quantity />
        <CartButton />
      </div>
    </div>
    <div class="card" v-else >
      <BadgeBar :badges="badges()" />
      <div class="data">
        <img class="image" :src="props.product.image" :alt="props.product.name" loading="lazy">
        <span class="title">{{ props.product.name }}</span>
        <Prices :actualPrice="props.product.price.special ?? props.product.price.normal" :oldPrice="props.product.price.special ? props.product.price.normal : null" />
      </div>
      <ColorOptions :options="colorOptions" @color-changed="colorChanged" :style="{ 'display': hovered ? 'flex' : 'none' }" />
    </div>
  </div>
</template>

<style scoped>
.favorite {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 0px;
  top: 3px;
  /* Inside auto layout */
  flex: none;
  order: 3;
  flex-grow: 0;
  /* z-index: 3;   */
}
.favorite-icon {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  /* grey */
  /* background: #8D8D8D; */
}
.bottom {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 280px;
  height: 40px;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  z-index: 4;  
}

.data {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 15px;
  width: 280px;
  height: 376px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  /* z-index: 0;   */
}
.image {
  width: 280px;
  height: 280px;
  /* background: url(02.png); */
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.title {
  width: 260px;
  height: 40px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */
  text-align: center;
  /* dark */
  color: #111111;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}
.card {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 20px;
  isolation: isolate;
  width: 280px;
  /* height: 436px; */
  /* white */
  background: #FFFFFF;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
@media (min-width: 1600px) {
  .favorite {
    position: absolute;
    /* visibility: hidden; */
    width: 24px;
    height: 24px;
    right: 16px;
    top: 18px;  
  }
  .data {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 15px;
    /* position: absolute; */
    width: 357px;
    height: 467px;
    left: calc(50% - 357px/2);
    top: 0px;
  }
  .data-hover {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 15px;
    /* position: absolute; */
    width: 357px;
    height: 494px;
    left: calc(50% - 357px/2);
    top: 0px;
  }
  .bottom {
    display: flex;
    flex-direction: row;
    padding: 0px;
    gap: 20px;
    /* position: relative; */
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 357px;
    /* top: 70px; */
    left: 16px;
    /* right: 16px; */
    /* bottom: 15px; */
    z-index: 4;
  }
  .card-place {
    width: 357px;
    height: 500px;
  }
  .card {
    box-sizing: border-box;
    width: 357px;
    height: 500px;
    /* white */
    background: #FFFFFF;
    /* Inside auto layout */
    flex: none;
    /* order: 0; */
    flex-grow: 0;
  }
  .card-hover {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 389px;
    height: 600px;
    /* left: 371px; */
    top: -15px;
    left: -16px;
    /* white */
    background: #FFFFFF;
    /* light grey */
    border: 1px solid #DDDDDD;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    cursor: url(../assets/mouse_hover.svg) 9 0, auto;
    z-index: 4;
  }
  .image {
    width: 357px;
    height: 357px;
    /* background: url(02.png); */
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;    
  }
  .title {
    width: 317px;
    height: 52px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */
    text-align: center;
    /* dark */
    color: #111111;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;    
  }
}
</style>