<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyWords" class="search-input" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyWords">
      <ul>
        <li class="search-item border-bottom" v-for="(item) of list" :key="item.id">{{item.name}}</li>
        <li v-show="hasNoData">没有找到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWords: '',
      timer: null,
      list: []
    }
  },
  watch: {
    keyWords () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWords) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        let result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyWords) > -1 || value.name.indexOf(this.keyWords) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    background-color $bgcolor
    padding 0 .1rem
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      text-align center
      color #999
      border-radius .06rem
      padding 0 .1rem
  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background-color #eee
    z-index 5
    .search-item
      line-height .62rem
      padding-left .2rem
      background-color #fff
</style>
