<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-23 12:15:44
 * @LastEditTime: 2022-11-08 15:38:35
-->
<template>
  <!-- <div>详情页</div> -->
  <Topvue :list="Muse.playlist" />

  <ListVue :list="Muse.songs" :subscribedCount="Muse.playlist.subscribedCount" />
</template>

<script setup lang="ts">
import { reactive, shallowReactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Getplaylist, GetplayLt } from '../../request/index'
import Topvue from './Top.vue'
import ListVue from './List.vue'
const route = useRoute()
onMounted(async () => {
  const { data } = await Getplaylist(route.query.id)
  Muse.playlist = data.playlist
  sessionStorage.setItem('Muse', JSON.stringify(Muse))
  //获取歌单列表
  await GetplayLt(route.query.id, 20).then(async (data: { data: { code: number; privileges: Array<object>; songs: Array<object> } }) => {
    const {
      data: { code, privileges, songs },
    } = await data
    Muse.songs = songs
  })
})

const Muse: any = shallowReactive({
  playlist: {},
  songs: {},
})
</script>

<style scoped lang="scss"></style>
