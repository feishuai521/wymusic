/*
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-19 22:10:37
 * @LastEditTime: 2022-10-26 15:30:14
 */
import { get } from './request'
//获取轮播图数据
export const banner: Function = () => {
  return get('/banner?type=2')
}
//获取发现好歌单数据
export const getGD: Function = (size: number = 20) => {
  return get(`/personalized?limit=${size}`)
}
//获取歌单信息
///playlist/detail?id=24381616
export const Getplaylist: Function = (id: number = 24381616) => {
  return get(`playlist/detail?id=${id}`)
}
//获取歌单列表
// http://playlist.track/all?id=
export const GetplayLt: Function = (id: number, limit: number = 10, offset: number = 0) => {
  return get(`playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`)
}
