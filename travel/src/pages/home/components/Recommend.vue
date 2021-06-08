<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item"
        v-for="item of list"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
          <input class="item-btn" type="button" value="查看详情">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl';
  .title
    margin-top .2rem
    line-height .78rem
    background-color #eee
    text-indent .2rem
  .item
    display flex
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
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
