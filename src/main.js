/*
 * @Author: CtrlC
 * @Date: 2022-06-30 20:30:44
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-20 10:59:10
 * @Description:  app全局配置
 * @FilePath: /uni-preset-vue-vite/src/main.js
 */
import { createSSRApp } from 'vue'
import uviewPlus from '@/uni_modules/uview-plus'
import App from './App.vue'
import envConfig from './common/envConfig'
import request from '@/utils/request'
import painaInstall from '@/store/plugins'

export default function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus).use(envConfig).use(painaInstall)
  request(app)
  return {
    app
  }
}
