<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-09-26 20:22:49
 * @LastEditTime: 2022-10-16 14:37:03
-->
<template>
  <div class="itemMIsTop">
    <!-- {{ creator.backgroundUrl }} -->
    <img :src="list.creator.backgroundUrl" alt="" class="img" />
    <div class="itemMIs">
      <div class="itemMIsTop_left">
        <FS-icon name="zuo" :size="18" @click="router.go(-1)" color="#fff"></FS-icon>
        <span>歌单</span>
      </div>
      <div class="itemMIsTop_right">
        <div>
          <FS-icon name="sousu" :size="18" class="icon"></FS-icon>
        </div>
        <div>
          <FS-icon name="liebiao" :size="18" class="icon"></FS-icon>
        </div>
      </div>
    </div>
    <div class="itemMIssction">
      <div class="itemMIssction_item1"><img :src="list.coverImgUrl" alt="" /></div>
      <div class="itemMIssction_item1">
        <div style="color: #fff">{{ list.name }}</div>
        <div><img src="" alt="" /><span></span> ></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps, shallowReactive } from 'vue'
const router = useRouter()

const props = defineProps(
  shallowReactive({
    list: Object,
  })
)
type T = {
  playlist: any
}
if ((props.list.creator = '')) {
  const list: T = JSON.parse(sessionStorage.getItem('Muse') as unknown as object | string | any)
  props.list = list.playlist
}
</script>

<style lang="scss" scoped>
.itemMIsTop {
  width: 100%;

  .img {
    &:nth-child(1) {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      height: 250px;
      z-index: -1;
      filter: blur(30px);
    }
  }
  .itemMIs {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .itemMIsTop_left,
    .itemMIsTop_right {
      width: 20%;
      display: flex;
      justify-content: space-between;
      span {
        display: block;
        color: #fff;
      }
      .icon {
        fill: #fff;
        span {
          color: #fff;
        }
      }
    }
  }
}
.itemMIssction {
  display: flex;
  width: 100%;
  margin: 20px 0;
  div.itemMIssction_item1 {
    width: 60%;
    &:nth-child(1) {
      width: 40%;
      text-align: center;
      img {
        width: 80%;
      }
    }
    &:nth-child(2) {
      text-align: left;
      &:nth-child(1) {
        color: #fff;
      }
    }
  }
}
</style>
