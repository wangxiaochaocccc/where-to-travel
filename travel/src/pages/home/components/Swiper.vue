<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
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
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_640x276_267de9bb.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_640x276_078119ce.jpg'
      }]
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
    padding-bottom 43%
    background-color #eee
    .swiper-img
      width 100%
</style>
