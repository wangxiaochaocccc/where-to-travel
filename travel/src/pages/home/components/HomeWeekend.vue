<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item"
        v-for="item of list"
        :key="item.id"
      >
        <div class="img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl';
  .title
    line-height .78rem
    background-color #eee
    text-indent .2rem
  .img-wrapper

  .item-img
    width 100%
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      margin-top 0.1rem
      line-height .4rem
      ellipsis()
    .item-desc
      line-height 0.4rem
      margin-top 0.1rem
      color #ccc
      ellipsis()
    .item-btn {
      padding 0 .2rem
      background-color #ff9300
      color #fff
      margin-top .2rem
      border-radius .06rem
    }
</style>
