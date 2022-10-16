<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-21 21:40:35
 * @LastEditTime: 2022-08-25 21:48:37
-->
<template>
  <div class="MiuseList">
    <MoseTop :title="title" @click="MoseTops" />
    <!-- {{ data }} -->
    <n-carousel slides-per-view="auto" :space-between="20" loop autoplay :show-dots="false" draggable :interval="3000">
      <n-carousel-item style="width: 40%; position: relative" v-for="item in data" :key="item.id" @click="miuslink(item.id)">
        <div class="play-container">
          <FS-icon name="play" :size="20" color="#fff"></FS-icon>
          <span>{{ getGDsitem(item.playCount) }}</span>
        </div>
        <img class="carousel-img" :src="item.picUrl" />
        <span>{{ item.name }}</span>
      </n-carousel-item>
    </n-carousel>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useRouter, RouteLocationRaw } from 'vue-router'
import MoseTop from '../../MuseTop/index.vue'
const props = defineProps({
  title: String,
  push: Object,
  data: Object,
})
function getGDsitem(a: any) {
  if (a >= 100000000) {
    return (a / 100000000).toFixed(1) + '亿'
  } else if (a >= 10000) {
    return (a / 10000).toFixed(1) + '万'
  } else if (a >= 1000) {
    return (a / 1000).toFixed(1) + '千'
  }
}
const router: any = useRouter()
function MoseTops() {
  router.push(props.push)
}
const miuslink = (a: Number) => {
  router.push({
    path: 'miuse',
    query: {
      id: a,
    },
  })
}
</script>

<style scoped lang="scss">
.carousel-img {
  width: 100%;
  height: 200px;
  object-fit: revert;
  border-radius: 10px;
}
.MiuseList {
  padding: 10px;
  .play-container {
    position: absolute;
    right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }
  span {
    font: 0.1rem 'Times New Roman', 'Times New Roman';
  }
}
</style>
