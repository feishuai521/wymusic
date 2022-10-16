/*
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-19 22:06:01
 * @LastEditTime: 2022-09-03 21:05:26
 */
import instance from '../utils/index'
export const get: Function = (url: string) => {
  return instance({
    method: 'get',
    url,
  })
}
export const post: Function = (url: string, data: object) => {
  return instance({
    method: 'post',
    url,
    data,
  })
}
