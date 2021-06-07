<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <div class="item-title">{{item.name}}</div>
          <div class="item-desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '01',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        name: '颐和园',
        desc: '中国现存最大的皇家园林'
      }, {
        id: '02',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
        name: '鸟巢',
        desc: '2008年奥运会主场所'
      }, {
        id: '03',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
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
