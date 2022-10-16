<!--
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-21 21:18:19
 * @LastEditTime: 2022-08-21 21:35:29
-->
<template>
  <div class="iconList">
    <ul>
      <li>
        <FS-icon name="tuijian" :size="40" />
        <span>每日推荐</span>
      </li>
      <li><FS-icon name="shouyinji" :size="40" /> <span>私人FM</span></li>
      <li><FS-icon name="gedan" :size="40" /> <span>歌单</span></li>
      <li><FS-icon name="paihangbang" :size="40" /> <span>排行榜</span></li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.iconList {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 10px 0;
    display: flex;
    width: 100%;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      padding: 0;
      span {
        display: inline-block;
        color: #999;
      }
    }
  }
}
</style>
