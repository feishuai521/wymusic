/*
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-18 19:40:57
 * @LastEditTime: 2022-10-19 16:47:28
 */
import { routes } from './routes'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// console.log(import)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
