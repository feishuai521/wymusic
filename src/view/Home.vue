<template>
  <tabnav />
  <!-- <div>1sdskdjskhj</div> -->
  <swiper :imgbanner="imgbanner" :interval="3000" style="padding: 5px 10px" />
  <iconList />
  <MiuseList title="发现好歌单" :push="pushs" :data="getGDs" />
  <MiuseList title="发现好歌单" :push="pushs" :data="getGDs" />
  <MiuseList title="发现好歌单" :push="pushs" :data="getGDs" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { banner, getGD } from '../request/index'
import tabnav from '../components/Home/Tarnav/index.vue'
import swiper from '../components/Home/swiper/index.vue'
import iconList from '../components/Home/iconList/index.vue'
import MiuseList from '../components/Home/MiuseList/index.vue'
const imgbanner = ref<Array<object>>([])
let getGDs = ref<Array<object>>([])
const pushs = {
  name: 'a',
}
onMounted(() => {
  getGD().then((res: any) => (getGDs.value = res.data.result))
  banner().then((imgList: any) => (imgbanner.value = imgList.data.banners))
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
