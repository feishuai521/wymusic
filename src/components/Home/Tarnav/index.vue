<template>
  <div class="Tarnav">
    <div class="Tarnav-item">
      <div>
        <FS-icon name="liebiao" :size="25" />
      </div>
      <!-- sousu -->
      <div>
        <ul>
          <li>我的</li>
          <li class="active">发现</li>
          <li>云村</li>
          <li>视频</li>
        </ul>
      </div>
      <div>
        <FS-icon name="sousu" :size="25" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.Tarnav {
  .Tarnav-item {
    display: flex;
    height: 50px;
    > div {
      display: flex;

      align-items: center;
      &:nth-child(1),
      &:nth-child(3) {
        width: 10%;
        justify-content: center;
      }
      &:nth-child(2) {
        width: 80%;
        ul {
          width: 80%;
          padding: 0 10%;
          display: flex;
          li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25%;
            color: #000;
          }
          .active {
            font-weight: 900;
          }
        }
      }
    }
  }
}
</style>
