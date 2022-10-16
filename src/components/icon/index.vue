<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-18 17:19:00
 * @LastEditTime: 2022-08-25 21:35:20
-->
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  name: String || null,
  color: {
    type: String,
    default: '#000000',
  },
  size: {
    type: Number,
    default: 10,
  },
})
const Emit = defineEmits(['click'])
function incons() {
  Emit('click')
}
// console.log(props)
</script>
<template>
  <div class="iconfont">
    <span :class="name" :style="{ color, 'font-size': size + 'px' }" @click="incons"></span>
  </div>
</template>

<style scoped lang="scss">
div {
  span {
    display: inline-block;
  }
}
</style>
