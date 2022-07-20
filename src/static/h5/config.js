/*
 * @Author: CtrlC
 * @Date: 2022-05-27 14:44:37
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-13 11:21:47
 * @Description: h5全局配置
 * @FilePath: /uni-preset-vue-vite/src/static/h5/config.js
 */
const isDevelopment = process.env.NODE_ENV === "development"
let config = {
  CURRENT_MODE: "dev",
  BASE_URL: "http://39.96.44.34:8093/",
  NEW_URL: "http://39.96.44.34:8084/",
  WEB_URL: "http://192.168.11.27:8080",
  VUE_APP_STATIC_URL: "http://dev-static.chuangyetianxia.com/",
  VUE_APP_EncryptionKey: "S@3KcJXs1-gckFg",
  VUE_APP_MD5K: "232dca354bb77411bfbcf67f6ca67c26",
  MODE_CN: "测试环境H5",
  VUE_APP_PROGRAMTYPE: 1, // 小程序 0正式版 1开发版 2体验版
  CONFIG_PLATFORM: "DEV_H5",
}

// #ifdef H5-TEST
config = {
  CURRENT_MODE: "product",
  BASE_URL: "http://39.107.71.116:8093/",
  NEW_URL: "http://39.107.71.116:8084/",
  VUE_APP_STATIC_URL: "http://dev-static.chuangyetianxia.com/",
  VUE_APP_EncryptionKey: "S@3KcJXs1-gckFg",
  VUE_APP_MD5K: "232dca354bb77411bfbcf67f6ca67c26",
  MODE_CN: "开发环境H5",
  CONFIG_PLATFORM: "TEST_H5",
}
if (isDevelopment) {
  config.ALERT_MSG =
    "您正在使用H5生产环境进行本地调试，会产生实际业务，请切换至H5测试环境。如果确定是本地调试生产环境，请忽略此提示信息。"
}
// #endif
// #ifdef H5-PRO
config = {
  CURRENT_MODE: "product",
  BASE_URL: "https://shopapi.chuangyetianxia.com/",
  NEW_URL: "https://cytxapi.chuangyetianxia.com/",
  VUE_APP_STATIC_URL: "https://static.chuangyetianxia.com/",
  VUE_APP_EncryptionKey: "S@4KcJqs1-gckFg",
  VUE_APP_MD5K: "232dca354bb77411bfbcf67f6ca67c26",
  MODE_CN: "生产环境h5",
  CONFIG_PLATFORM: "PRODUCT_H5",
}
if (isDevelopment) {
  config.ALERT_MSG =
    "您正在使用WEB生产环境进行本地调试，会产生实际业务，请切换至WEB测试环境。如果确定是本地调试生产环境，请忽略此提示信息。"
}
// #endif

export default config
