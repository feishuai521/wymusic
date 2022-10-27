<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-10-27 10:07:34
 * @LastEditTime: 2022-10-27 11:37:44
-->
<template>
  <div class="FooterMuise">
    <div class="FooterMuise_left">
      <img src="https://p2.music.126.net/n257D9re3_ZCf0svunYrCg==/18935789253797636.jpg" alt="" />
      <div>
        <span>我想和你唱 第二季 第12期</span>
        <span>横滑可以切换上下首哦</span>
      </div>
    </div>
    <div class="FooterMuise_right">
      <FS-icon name="bofang1" :size="25" @click="audio.play()"></FS-icon>
      <FS-icon name="playlistHeart" :size="25"></FS-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AminStore } from '../../store/index'
import { storeToRefs } from 'pinia'

const store = AminStore()
const { playlist, playlistindex } = storeToRefs(store)
let audio = new Audio()
audio.src = `https://music.163.com/song/media/outer/url?id=${playlist.value[playlistindex.value].id}.mp3`
</script>

<style lang="scss" scoped>
.FooterMuise {
  position: fixed;
  bottom: -1px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  left: 0;
  background-color: #fff;
  border-top: 1px solid #999;
  .FooterMuise_left {
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
    img {
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding-right: 5px;
    }
    div {
      span {
        display: block;
        &:nth-child(1) {
          font-weight: 800;
        }
        &:nth-child(2) {
          font-size: 10px;
          font-weight: 400;
        }
      }
    }
  }
  .FooterMuise_right {
    display: flex;
    width: 20%;
    justify-content: space-between;
    padding: 0 0.2rem;
  }
}
</style>
