import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([{
    "name":"Bondi Born Everywhere linen shirt light blue LumaTech V-type Tee","price":{"normal":188900,"special":119990},"in_stock":true,
  "image":"https://m24pwa.oandertest.hu/media/wysiwyg/01.png","badges":[],"variants":[],"category":{"id":"1","title":"Category 1"},"id":"1"},
  {"name":"Beosound Stage Atmos Soundbarheadphone","price":{"normal":488880,"special":388888},"in_stock":true,"image":"https://m24pwa.oandertest.hu/media/wysiwyg/02.png",
  "badges":[{"title":"New","background_color":"#01B392"}],"variants":["#7A7B87","#B7B7B7","#F15D48","#78D1A7"],"category":{"id":"2","title":"Category 2"},"id":"2"},
  {"name":"Bondi Born Everywhere linen shirt light blue LumaTech V-type Tee","price":{"normal":169990,"special":null},"in_stock":true,
  "image":"https://m24pwa.oandertest.hu/media/wysiwyg/03.png","badges":[],"variants":[],"category":{"id":"2","title":"Category 2"},"id":"3"},
  {"name":"Bondi Born Everywhere linen shirt light blue LumaTech V-type Tee","price":{"normal":24600,"special":null},"in_stock":true,
  "image":"https://m24pwa.oandertest.hu/media/wysiwyg/04.png","badges":[],"variants":[],"category":{"id":"1","title":"Category 1"},"id":"4"},
  {"name":"Bondi Born Everywhere linen shirt light blue LumaTech V-type Tee","price":{"normal":188900,"special":119990},"in_stock":false,
  "image":"https://m24pwa.oandertest.hu/media/wysiwyg/05.png","badges":[],"variants":["#D4D4D4","#E6BFC0"],"category":{"id":"3","title":"Category 3"},"id":"5"},
  {"name":"Beosound Stage Atmos Soundbar headphone","price":{"normal":119990,"special":null},"in_stock":true,"image":"https://m24pwa.oandertest.hu/media/wysiwyg/06.png",
  "badges":[],"variants":["#585C5D","#F15D48"],"category":{"id":"3","title":"Category 3"},"id":"6"},
  {"name":"Bondi Born Everywhere linen shirt light blue LumaTech V-type Tee","price":{"normal":169990,"special":null},"in_stock":false,
  "image":"https://m24pwa.oandertest.hu/media/wysiwyg/07.png","badges":[{"title":"New","background_color":"#01B392"}],"variants":[],"category":{"id":"2","title":"Category 2"},"id":"7"},
  {"name":"Bondi Born Everywhere linen shirt light blue LumaTech V-type Tee","price":{"normal":24600,"special":null},"in_stock":true,
  "image":"https://m24pwa.oandertest.hu/media/wysiwyg/08.png","badges":[],"variants":["#828385","#AB9869","#138E77"],"category":{"id":"1","title":"Category 1"},"id":"8"
  }])
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { products }
})
