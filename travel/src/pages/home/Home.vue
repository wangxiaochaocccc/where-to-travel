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
import { mapState } from 'vuex'
import { reactive } from 'vue'

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
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    })
    return { data }
  }
  // computed: {
  //   ...mapState(['city'])
  // },
  // methods: {
  //   getHomeInfo () {
  //     axios.get('/api/index.json?city=' + this.city)
  //       .then(this.getHomeInfoSucc)
  //   },
  //   getHomeInfoSucc (res) {
  //     res = res.data
  //     if (res.ret && res.data) {
  //       const data = res.data
  //       this.swiperList = data.swiperList
  //       this.iconList = data.iconList
  //       this.recommendList = data.recommendList
  //       this.weekendList = data.weekendList
  //     }
  //   }
  // },
  // mounted () {
  //   this.lastCity = this.city
  //   this.getHomeInfo()
  // },
  // activated () {
  //   if (this.lastCity !== this.city) {
  //     this.lastCity = this.city
  //     this.getHomeInfo()
  //   }
  // }
}
</script>

<style></style>
