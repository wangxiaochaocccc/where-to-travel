<template>
  <div class="icon">
    <swiper :options="swiperOptions1" v-if="showIcons">
      <swiper-slide
        v-for="(page,index) of pages"
        :key="index"
      >
        <div
          class="icon-item"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="title">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions1: {
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
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcons () {
      return this.list.length
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';
  .icon >>> .swiper-container
    height 0
    padding-bottom 50%
    padding-top .2rem
  .icon-item
    position relative
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .title
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
