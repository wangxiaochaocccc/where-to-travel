<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/HomeWeekend'
import axios from 'axios'
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  setup() {
    // const data = reactive({
    //   // lastCity: '',
    //   swiperList: [],
    //   iconList: [],
    //   recommendList: [],
    //   weekendList: []
    // })
    const swiperList = ref([])
    const iconList = ref([])
    const recommendList = ref([])
    const weekendList = ref([])
    const store = useStore()
    const city = store.state.city
    // const city = computed(()=> {
    //   return store.state.city
    // })
    async function getHomeInfo () {
      // 用计算属性监听city时 用city.value 
      let res = await  axios.get('/api/index.json?city=' + city)
      res = res.data
      if (res.ret && res.data) {
        const result = res.data
        swiperList.value = result.swiperList
        iconList.value = result.iconList
        recommendList.value = result.recommendList
        weekendList.value = result.weekendList
      }
    }
    onMounted(()=>{
      // data.lastCity = city
      getHomeInfo()
    })
    // 代码不执行 
    // onActivated(()=> {
    //   if (data.lastCity !== city) {
    //     data.lastCity = city
    //     getHomeInfo()
    //   }
    // })
    return { swiperList, iconList,  weekendList, recommendList }
  }
}
</script>

<style></style>
