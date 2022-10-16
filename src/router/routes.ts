export const routes: Array<RouteRecordRaw> = [
  { name: '/', path: '/', component: () => import('../view/Home.vue') },
  { name: 'a', path: '/a', component: () => import('../view/two.vue') },
  { name: 'miuse', path: '/miuse', component: () => import('../page/itemMIus/index.vue') },
]
