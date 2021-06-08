<template>
  <div>
    <div class="header">
      <div class="header-left">
        <span class="iconfont back-icon">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont trangle-icon">&#xe688;</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    display:flex
    line-height: .86rem
    color: #fff
    background-color: $bgcolor
    .header-left
      width: .84rem
      text-align center
      font-size 0.4rem
    .header-input
      flex: 1
      height: .64rem
      line-height 0.64rem
      margin-top: .12rem
      border-radius: .1rem
      background-color: #fff
      color #ccc
      padding-left 0.2rem
    .header-right
      width: 1.24rem
      text-align center
      .trangle-icon {
        margin-left -0.1rem
        font-size .28rem
      }
</style>
