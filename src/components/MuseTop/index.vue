<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-21 21:43:09
 * @LastEditTime: 2022-08-25 21:52:47
-->
<template>
  <div class="MuseTop">
    <div>{{ title }}</div>
    <div @click="MuseTop">{{ more }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  title: String,
  more: {
    type: String,
    default: '查看更多',
  },
})
const emits = defineEmits(['click'])
function MuseTop() {
  emits('click')
}
</script>

<style scoped lang="scss">
.MuseTop {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    &:nth-child(1) {
      font-size: 18px;
      font-weight: 900;
    }
    &:nth-child(2) {
      border: 1px solid #ccc;
      padding: 0px 10px;
      border-radius: 20px;
      font-size: 12px;
    }
  }
}
</style>
