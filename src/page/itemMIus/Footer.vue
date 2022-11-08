<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-10-27 10:07:34
 * @LastEditTime: 2022-11-08 18:31:21
-->
<template>
  {{}}
  <div class="FooterMuise">
    <!-- {{ playListt }} -->
    <div class="FooterMuise_left">
      <img :src="list.picUrl" alt="" />
      <div>
        <span>{{ list.name }}</span>
        <span>横滑可以切换上下首哦</span>
      </div>
    </div>
    <div class="FooterMuise_right">
      <FS-icon :name="isbtnshow ? 'zanting' : 'bofang1'" :size="25" @click="playaution"></FS-icon>
      <FS-icon name="playlistHeart" :size="25"></FS-icon>
    </div>
    <n-modal v-model:show="showModal"> 1 </n-modal>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playlistindex].id}.mp3`"></audio>
  </div>
</template>

<script setup lang="ts">
import { AminStore } from '../../store/index'
import { storeToRefs } from 'pinia'
import { watch, computed, ref } from 'vue-demi'
const store = AminStore()
const showModal = ref(false)
let { playlist, playlistindex, isbtnshow } = storeToRefs(store)
let audio = ref(<HTMLAudioElement>{})
const list = computed<{
  id: number
  name: string
  picUrl: string
  tns: never[]
  pic_str: string
  pic: number
}>(() => {
  return playlist.value[playlistindex.value].al
})
function playaution() {
  if (audio.value.paused) {
    store.updataisShow(true)
    audio.value.play()
  } else {
    store.updataisShow(false)
    // audio.paused = true
    audio.value.pause()
  }
}

watch(playlistindex, a => {
  playlistindex.value = a
  audio.value.autoplay = true
  store.updataisShow(true)
})
</script>

<style lang="scss" scoped>
.FooterMuise {
  position: fixed;
  bottom: -1px;
  z-index: 1000;
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
