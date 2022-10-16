/*
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-18 16:52:47
 * @LastEditTime: 2022-08-18 17:27:58
 */
export function remsize() {
  //获取他的宽度
  let devswideth: any = document.documentElement.clientWidth || window.innerWidth
  //判断长度
  if (devswideth >= 750) {
    devswideth = 750
  }
  if (devswideth <= 320) {
    devswideth = 320
  }
  //750px---1rem=100px
  document.documentElement.style.fontSize = devswideth / 7.5 + 'px'
  //设置字体大小
  document.body.style.fontSize = 0.3 + 'rem'
}
