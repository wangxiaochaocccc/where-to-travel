<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="data.swiperList"></home-swiper>
    <home-icon :list="data.iconList"></home-icon>
    <home-recommend :list="data.recommendList"></home-recommend>
    <home-weekend :list="data.weekendList"></home-weekend>
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
import { reactive, onMounted } from 'vue'

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
    const data = reactive({
      // lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    })
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
        data.swiperList = result.swiperList
        data.iconList = result.iconList
        data.recommendList = result.recommendList
        data.weekendList = result.weekendList
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
    return { data }
  }
}
</script>

<style></style>
