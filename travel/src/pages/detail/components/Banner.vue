<template>
  <div class="banner">
    <img class="banner_img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"  alt="">
    <div class="banner-info">
      <div class="banner-title">故宫(AAAAA景区)</div>
      <div class="banner-number">
        <span class="iconfont img-icon">&#xe616;</span>
        12
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
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
