<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner_img" :src="bannerImg"  alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont img-icon">&#xe616;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
import { ref } from 'vue'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  setup() {
    let showGallary = ref(false)
    function handleBannerClick () {
      showGallary.value = true
    }
    function handleGallaryClose () {
      showGallary.value = false
    }
    return { handleBannerClick, handleGallaryClose, showGallary }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner_img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    color #ffffff
    background-image linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))
    .banner-title
      flex 1
      line-height .4rem
      font-size .32rem
      padding .1rem .2rem
    .banner-number
      padding 0 .4rem
      border-radius .2rem
      background-color rgba(0, 0, 0, .8)
      height .4rem
      line-height .4rem
      font-size .24rem
      margin-right .2rem
      margin-top .1rem
</style>
