<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-20 21:54:13
 * @LastEditTime: 2022-08-20 22:03:16
-->
<template>
  <div class="swerper">
    <n-carousel autoplay draggable :interval="interval" loop :show-dots="false">
      <img class="carousel-img" v-for="(item, index) in imgbanner" :src="item.pic" :key="index" />
    </n-carousel>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  imgbanner: Object,
  interval: {
    type: Number,
    default: 3000,
  },
})
</script>

<style scoped lang="scss">
.carousel-img {
  width: 100%;
  height: 160px;
  object-fit: revert;
  border-radius: 10px;
}
</style>
