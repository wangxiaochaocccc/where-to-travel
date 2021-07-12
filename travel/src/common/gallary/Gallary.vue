<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img :src="item" alt="" class="swiper-img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container >>> .swiper-wrapper
    display flex
    align-items center
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    z-index 99
    top 0
    left 0
    bottom 0
    right 0
    background-color #000
    .wrapper
      width 100%
      .swiper-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
