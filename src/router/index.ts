/*
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-18 19:40:57
 * @LastEditTime: 2022-08-18 20:06:03
 */
import { routes } from './routes'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
