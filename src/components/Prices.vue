<script setup>
const props = defineProps({
  actualPrice: { type: Number, required: true },
  oldPrice: { type: Number, default: null }
})
const formattedPriceString = (price) => {
  const formatter = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    minimumFractionDigits: 0,
  });
  return formatter.format(price)
}
</script>

<template>
  <div class="prices">
    <span class="actual-price">{{ formattedPriceString(props.actualPrice) }}</span>
    <span class="old-price" :style="{ display: props.oldPrice === null ? 'none' : 'flex' }" >{{ formattedPriceString(props.oldPrice) }}</span>
  </div>
</template>

<style scoped>
.prices {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 194px;
  height: 26px;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;  
}
.actual-price {
  width: 93px;
  height: 26px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */
  display: flex;
  align-items: center;
  text-align: center;
  /* red */
  color: #EB333C;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.old-price {
  width: 81px;
  height: 26px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: line-through;
  /* grey */
  color: #8D8D8D;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;  
}
@media (min-width: 1600px) {
  .prices {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;
    width: 215px;
    height: 28px;
    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;    
  }
  .actual-price {
    width: 104px;
    height: 28px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 28px;
    /* identical to box height, or 140% */
    display: flex;
    align-items: center;
    text-align: center;
    /* red */
    color: #EB333C;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;    
  }
  .old-price {
    width: 91px;
    height: 28px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    /* identical to box height, or 156% */
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration-line: line-through;
    /* grey */
    color: #8D8D8D;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;    
  }
}
</style>