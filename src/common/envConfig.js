/*
 * @Author: CtrlC
 * @Date: 2022-07-09 10:13:40
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-20 09:38:00
 * @Description: 环境变量
 * @FilePath: /uni-preset-vue-vite/src/common/envConfig.js
 */
// #ifdef H5
import envConfig from '@/static/h5/config.js'

const { env } = process
// #endif

// #ifdef MP-WEIXIN
// import envConfig from '@/static/mp-weixin/config.js'
// #endif

// #ifdef APP-PLUS
// import envConfig  from '@/static/app-plus/config.js'
// #endif

// 运行的平台
const RUNTIME_PLATFORM = uni.$u.platform
// 运行的系统
const OS_SYSTEM = uni.$u.os()
export default {
  install(app) {
    app.$env = {
      // 公共参数
      APP_NAME: '知识付费',
      VERSION: '1.0.0',
      RUNTIME_PLATFORM,
      OS_SYSTEM,
      // 环境变量
      ...env,
      // 平台参数
      ...envConfig
    }
  }
}
