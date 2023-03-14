<template>
  <div class="cart">
    <label class="cart-label">
      <img class="cart-label-icon" src="../assets/icon_colour.svg" />
      <span class="cart-label-text">add to cart</span>
    </label>
  </div>
</template>

<style scoped>
.cart {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 14px 25px; */
  gap: 10px;
  width: 156px;
  height: 40px;
  /* orange */
  background: #F35743;
  /* Inside auto layout */
  flex: none;
  /* order: 1; */
  flex-grow: 0;
}
.cart-label {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 10px;
  width: 113px;
  height: 20px;
  /* Inside auto layout */
  flex: none;
  /* order: 0; */
  flex-grow: 0;
}
.cart-label-icon {
  display: none;
}
.cart-label-text {
  width: 113px;
  height: 20px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 111% */
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #FFFFFF;
  /* Inside auto layout */
  flex: none;
  /* order: 1; */
  flex-grow: 0;
}
@media (min-width: 1600px) {
    .cart {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* padding: 14px 25px; */
    gap: 10px;
    width: 212px;
    height: 56px;
    /* orange */
    background: #F35743;
    /* Inside auto layout */
    flex: none;
    /* order: 1; */
    flex-grow: 0;
  }
  .cart-label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    gap: 10px;
    width: 161px;
    height: 24px;
    /* Inside auto layout */
    flex: none;
    /* order: 0; */
    flex-grow: 0;
  }
  .cart-label-icon {
    width: 24px;
    height: 24px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    background: #F35743;
  }
  .cart-label-text {
    width: 127px;
    height: 20px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 20px;
    /* identical to box height, or 111% */
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #FFFFFF;
    /* Inside auto layout */
    flex: none;
    /* order: 1; */
    flex-grow: 0;
  }  
}
</style>