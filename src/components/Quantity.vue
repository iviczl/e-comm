<template>
  <div class="quantity">
    <div class="minus">
      <img src="../assets/minus.svg" />
    </div>
    <span class="quantity-text">2</span>
    <div class="plus">
      <img src="../assets/icon_plus.svg" />
    </div>
  </div>  
</template>

<style scoped>
  .quantity {
    box-sizing: border-box;
    display: flex;
    width: 104px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 2px solid #F0EFED;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;  
  }
  .quantity-text {
    width: 40px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .minus {
    /* position: absolute; */
    width: 32px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* left: calc(50% - 40px/2 - 42.5px);
    top: calc(50% - 56px/2); */
  }
  .plus {
    /* position: absolute; */
    width: 32px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* left: calc(50% - 40px/2 + 42.5px);
    top: 0px;
    bottom: 0px;   */
  }
@media (min-width: 1600px) {
  .quantity {
    box-sizing: border-box;
    display: flex;
    width: 125px;
    height: 56px;
    align-items: center;
    justify-content: center;
    border: 2px solid #F0EFED;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;  
  }
  .quantity-text {
    width: 45px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .minus {
    /* position: absolute; */
    width: 40px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* left: calc(50% - 40px/2 - 42.5px);
    top: calc(50% - 56px/2); */
  }
  .plus {
    /* position: absolute; */
    width: 40px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* left: calc(50% - 40px/2 + 42.5px);
    top: 0px;
    bottom: 0px;   */
  }
}
</style>