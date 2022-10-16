import { App } from 'vue'
import icon from '../components/icon/index.vue'
// import { Swipe, SwipeItem } from 'vant'
import naive from 'naive-ui'
import router from '../router/index'
// import instance from '../utils/index'
let list: Array<unknown> = [router, naive]
export default function (vue: App) {
  vue.component('FS-icon', icon)
  list.forEach((item: any) => vue.use(item))
}
