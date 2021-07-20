<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyWords" class="search-input" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyWords">
      <ul>
        <li class="search-item border-bottom" v-for="(item) of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li v-show="hasNoData">没有找到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { useStore } from 'vuex'
import { router } from 'vue-router'
import { watch, ref, computed, onMounted, onUpdated } from 'vue'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  setup(props) {
    const keyWords = ref('')
    const list = ref([])
    let timer = null
    const store = useStore()
    let scroll = null
    const search = ref(null)
    function handleCityClick (city) {
      store.city('changeCity',city)
      router.push('/')
    }
    watch(keyWords, (keyWords) => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      if (!keyWords) {
        list.value = []
        return
      }
      timer = setTimeout(() => {
        let result = []
        for (let i in props.cities) {
          props.cities[i].forEach(value => {
            if (value.spell.indexOf(keyWords) > -1 || value.name.indexOf(keyWords) > -1) {
              result.push(value)
            }
          })
        }
        list.value = result
      }, 100)
    })
    let hasNoData = computed(() => {
      !list.length
    })
    onMounted(() => {
      scroll = new Bscroll(search.value, {
        click: true
      })
    })
    onUpdated(() => {
      // 重新计算高度
      scroll.refresh()
    })
    return { list, keyWords, handleCityClick, hasNoData, search }
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
    height 100%
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background-color #eee
    overflow hidden
    z-index 5
    .search-item
      line-height .62rem
      padding-left .2rem
      background-color #fff
</style>
