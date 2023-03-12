<script setup>
import { ref } from 'vue'
import ColorOptions from './ColorOptions.vue';
import Prices from './Prices.vue'
import BadgeBar from './BadgeBar.vue';

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
</script>

<template>
  <div class="card">
    <BadgeBar :badges="badges()" />
    <div class="data">
      <figure>
        <img class="image" :src="props.product.image" :alt="props.product.name" loading="lazy">
        <figcaption class="title">{{ props.product.name }}</figcaption>
      </figure>
      <Prices :actualPrice="props.product.price.special ?? props.product.price.normal" :oldPrice="props.product.price.special ? props.product.price.normal : null" />
    </div>
    <ColorOptions :options="colorOptions" @color-changed="colorChanged" />
    <div class="bottom">

    </div>
    <div class="favorite">

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
  z-index: 3;  
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
  z-index: 2;  
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
  z-index: 0;  
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
  height: 436px;
  /* white */
  background: #FFFFFF;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
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
  }
  .favorite {
    position: absolute;
    visibility: hidden;
    width: 24px;
    height: 24px;
    right: 0px;
    top: 3px;
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
  .bottom {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
    position: absolute;
    visibility: hidden;
    height: 56px;
    left: 0px;
    right: 0px;
    bottom: -70px;
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
    cursor: url(../assets/mouse_hover.svg) 9 0, auto;
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