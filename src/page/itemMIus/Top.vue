<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-09-26 20:22:49
 * @LastEditTime: 2022-10-27 10:27:02
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
        <!-- {{ list }} -->
        <div style="color: #fff; font: 1em sans-serif">{{ list.name }}</div>
        <div class="userjs">
          <img :src="list.creator.avatarUrl" alt="" width="25" style="border-radius: 50%" />
          <span style="color: #8c8c90; font: 1em sans-serif">{{ list.creator.nickname }}</span>
          <span> &gt;</span>
        </div>
        <div style="color: #acb1b1; font-size: 14px" class="signature">
          {{ list.creator.signature }}
        </div>
      </div>
    </div>
    <div class="itemMIssction_List">
      <ul>
        <li>
          <FS-icon name="xiaoxi" :size="26" color="#fff" />
          <span>{{ list.shareCount }}</span>
        </li>
        <li>
          <FS-icon name="fenxiang" :size="26" color="#fff" />
          <span>{{ list.commentCount }}</span>
        </li>
        <li>
          <FS-icon name="xiazai" :size="26" color="#fff" />
          <span>下载</span>
        </li>
        <li>
          <FS-icon name="xuanzhong" :size="26" color="#fff" />
          <span>选中</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps, shallowReactive } from 'vue'
const router = useRouter()

const props: any = defineProps(
  shallowReactive({
    list: Object,
  })
)

if ((props.list.creator = '')) {
  const list: { playlist: {} } = JSON.parse(sessionStorage.getItem('Muse') as unknown as object | string | any)
  props.list = list.playlist
  console.log(list)
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
  align-items: center;
  width: 100%;
  margin: 20px 0;
  div.itemMIssction_item1 {
    width: 60%;
    &:nth-child(1) {
      //width: 40%;
      text-align: center;
      img {
        width: 80%;
        border-radius: 10px;
      }
    }
    &:nth-child(2) {
      text-align: left;
      &:nth-child(1) {
        color: #fff;
      }
      .userjs {
        display: flex;
        line-height: 45px;
        align-items: center;
        color: #9a9a9a;
        > span {
          display: inline-block;
          padding: 0 5px;
        }
      }
      .signature {
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
.itemMIssction_List {
  ul {
    list-style: none;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    li {
      width: 25%;
      text-align: center;
    }
  }
}
</style>
