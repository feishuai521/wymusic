/*
 * @Author: 飞帅
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @Date: 2022-08-18 23:57:37
 * @LastEditTime: 2022-08-19 21:58:58
 */
const sx = '/'
const kf = 'http://cloud-music.pl-fe.cn/'
export default function (is: string) {
  return is == 'sx' ? sx : kf
}
