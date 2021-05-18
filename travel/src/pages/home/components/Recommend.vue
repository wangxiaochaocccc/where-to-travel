<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <div class="item-title">{{item.name}}</div>
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
  data () {
    return {
      recommendList: [{
        id: '01',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_250x250_d76001d5.jpg',
        name: '颐和园',
        desc: '中国现存最大的皇家园林'
      }, {
        id: '02',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/fe/434ee530e21f1c11bad088e8cc8d5e93.water.jpg_200x200_912ce9f4.jpg',
        name: '鸟巢',
        desc: '2008年奥运会主场所'
      }, {
        id: '03',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_200x200_8eb33f07.jpg',
        name: '恭王府',
        desc: '一座恭王府，半部清代史'
      }]
    }
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
