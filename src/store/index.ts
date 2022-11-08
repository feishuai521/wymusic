/*
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-10-26 19:34:10
 * @LastEditTime: 2022-11-08 18:01:12
 */
import { defineStore } from 'pinia'

type muse = {
  id: number
  al: {
    id: number
    name: string
    picUrl: string
    tns: never[]
    pic_str: string
    pic: number
  }
}[]
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
    isbtnshow: false,
  }),
  getters: {},
  actions: {
    updataplaylist(list: any) {
      console.log(list)
      this.playlist = list
    },

    updataisShow(show: boolean) {
      console.log(show)

      this.isbtnshow = show
    },
    unpdtaindex(id: number) {
      this.playlistindex = id
      console.log(this.playlist[this.playlistindex])
    },
  },
})
