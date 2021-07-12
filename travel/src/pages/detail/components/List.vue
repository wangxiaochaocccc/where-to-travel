<!--  -->
<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  }
}
</script>
<style scoped lang="stylus">
.item-title
  height .8rem
  line-height 0.8rem
  padding 0 .2rem
  font-size .32rem
.item-children
  padding 0 .2rem
</style>
