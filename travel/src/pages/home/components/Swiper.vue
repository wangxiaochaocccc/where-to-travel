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
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        // 这样写不合法了已经
        // pagination: {
        //   el: '.swiper-pagination'
        // }
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // 循环
        loop: true
        // 每张播放时长3秒，自动播放
        // autoplay: 2000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
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
