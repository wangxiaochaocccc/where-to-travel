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
      <router-link to="/city">
        <div class="header-right">
          {{city}}
          <span class="iconfont trangle-icon">&#xe688;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'HomeHeader',
  setup() {
    const store = useStore()
    const city = computed(()=>store.state.city)
    return { city }
  }
  // computed: {
  //   ...mapState({
  //     'currentCity': 'city'
  //   })
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    display:flex
    line-height: $headerHeight
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
      min-width: 1.04rem
      padding 0 .1rem
      text-align center
      color #fff
      .trangle-icon {
        font-size .28rem
      }
</style>
