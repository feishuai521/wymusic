<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-23 12:15:44
 * @LastEditTime: 2022-10-16 13:44:47
-->
<template>
  <!-- <div>详情页</div> -->
  <Topvue :list="Muse.playlist" />
</template>

<script setup lang="ts">
import { reactive, shallowReactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Getplaylist } from '../../request/index'
import Topvue from './Top.vue'
const route = useRoute()
onMounted(async () => {
  const { data } = await Getplaylist(route.query.id)
  Muse.playlist = data.playlist
  Muse.privileges = data.privileges
  sessionStorage.setItem('Muse', JSON.stringify(Muse))
})

const Muse = shallowReactive({
  playlist: {},
  privileges: {},
})
console.log(Muse.playlist)
</script>

<style scoped lang="scss"></style>
