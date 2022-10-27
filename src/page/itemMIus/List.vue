<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-10-26 15:18:09
 * @LastEditTime: 2022-10-27 10:20:02
-->
<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="listLeft">
        <span
          >播放全部<span>(共{{ list.length }}首)</span></span
        >
      </div>
      <div class="listRight">
        <span>收藏({{ subscribedCount }})</span>
      </div>
    </div>
    <div class="itemListContent">
      <div class="itemList" v-for="(item, i) in list" :key="item.id">
        <div class="listLeft">
          <span class="index">{{ i + 1 }}</span>
          <div class="content">
            <p>{{ item.al.name }}</p>
            <span> {{ item.ar[0].name }}</span>
          </div>
        </div>
        <div class="listRight">
          <FS-icon class="icon" name="playSquare" :size="20" v-show="item.mv"></FS-icon>
          <FS-icon name="liebiao" class="liebiaos" :size="20"></FS-icon>
        </div>
      </div>
      <div class="block"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props: any = defineProps({
  list: Object,
  subscribedCount: Number,
})
console.log(props)
</script>

<style lang="scss" scoped>
.itemMusicList {
  width: 100%;
  height: 11rem;
  background: #fff;

  border-radius: 0.4rem 0.4rem 0 0;
  .itemListTop {
    //width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    padding-top: 0.2rem;
    .listLeft {
      width: 3rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        width: 0.55rem;
        height: 0.55rem;
        stroke: #333333;
        stroke-width: 20;
      }
      span {
        font-weight: 700;
        span {
          font-weight: 400;
          font-size: 0.24rem;
          color: #999;
        }
      }
    }
    .listRight {
      display: flex;
      align-items: center;
      background: red;
      padding: 0.2rem 0.5rem;
      border-radius: 0.4rem;
      color: #fff;
      .icon {
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.1rem;
      }
    }
  }
  .itemListContent {
    width: 100%;
    background: #fff;
    .itemList {
      height: 1.4rem;
      padding: 0 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .listLeft {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        .index {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
        .content {
          p {
            width: 4.54rem;
            height: 0.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span {
            font-weight: 400;
            font-size: 0.24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .listRight {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        .icon {
          position: absolute;
          z-index: 2;
          fill: #999;
        }
        .liebiaos {
          position: absolute;
          right: 0;
        }
      }
    }
    .itemList:hover {
      background: #ddd;
    }
  }
  .block {
    width: 100%;
    height: 1.4rem;
  }
}
</style>
