<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="elem => elems[key] = elem"
      >
        <div class="title border-topbottom">
          {{key}}
        </div>
        <div class="item-list"
          v-for="innerItem of item"
          :key="innerItem.id"
          @click="handleCityClick(innerItem.name)"
        >
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { useStore } from 'vuex'
import { useRouter} from 'vue-router'
import { watch, onMounted, onUpdated, ref, computed } from 'vue'

export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    let scroll = null
    const elems = ref({})
    const wrapper = ref(null)
    let currentCity = computed(()=>{
      return store.state.city
    })
    function handleCityClick (city) {
      store.commit('changeCity', city)
      router.push('/')
    }

    watch(() => props.letter, (letter, prevLetter) => {
      if (letter && scroll) {
        // 必须放在if里 否则会报错
        let element = elems.value[letter]
        // 参数必须是DOM元素
        scroll.scrollToElement(element)
      }
    })
    onMounted(() => {
      scroll = new Bscroll(wrapper.value, {
        click: true
      })
      currentCity = store.state.city
    })
    onUpdated(()=>{
      scroll.refresh()
    })
    return { currentCity, handleCityClick, elems, wrapper}
    
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      color #666
      line-height .54rem
      padding-left .2rem
      background-color #eee
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          text-align center
          padding .1rem 0
          border .02rem solid #ccc
          border-radius .06rem
          margin .1rem
    .item-list
      .item
        padding-left .2rem
        line-height 0.72rem
</style>
