import { ref } from 'vue'
import { defineStore } from 'pinia'
import { isTouchScreenDevice } from '../modules/utils.js'

export const useConfigStore = defineStore('config', () => {
  const isMobile = ref(false)

  function detectMobile() {
    isMobile.value = isTouchScreenDevice() || window.innerWidth < 1600
  }
  
  function initMobileDetection() {
    window.onresize = detectMobile
  }

  return { isMobile, initMobileDetection }
})
