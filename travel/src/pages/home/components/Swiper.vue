<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  setup(props) {
    const swiperOptions ={
      pagination: '.swiper-pagination',
      paginationClickable: true,
      // 循环
      loop: true
    }
    const showSwiper = computed( () => props.list.length )
    return { swiperOptions, showSwiper }
  }
}
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.5%
    background-color #eee
    .swiper-img
      width 100%
</style>
