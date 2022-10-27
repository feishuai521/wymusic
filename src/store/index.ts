/*
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-10-26 19:34:10
 * @LastEditTime: 2022-10-27 10:33:50
 */
import { defineStore } from 'pinia'
export const AminStore = defineStore('admin', {
  state: () => ({
    playlist: [
      {
        id: 33894312,
        al: {
          id: 35758075,
          name: '我想和你唱 第二季 第12期',
          picUrl: 'https://p2.music.126.net/n257D9re3_ZCf0svunYrCg==/18935789253797636.jpg',
          tns: [],
          pic_str: '18935789253797636',
          pic: 18935789253797636,
        },
      },
    ],
    playlistindex: 0,
  }),
})
