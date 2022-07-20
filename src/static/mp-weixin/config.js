/*
 * @Author: CtrlC
 * @Date: 2022-06-07 11:11:39
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-06-16 09:49:12
 * @Description: 小程序环境变量
 * @FilePath: /cytx-txsc-uniapp/static/mp-weixin/config.js
 */
let config = {
  BASE_URL: "http://39.96.44.34:8093/",
  VUE_APP_STATIC_URL: "http://dev-static.chuangyetianxia.com/",
  VUE_APP_EncryptionKey: "S@3KcJXs1-gckFg",
  VUE_APP_MD5K: "232dca354bb77411bfbcf67f6ca67c26",
  ALERT_MSG:
    "您正在使用测试环境微信小程序，所有数据和业务仅为测试使用，不会产生实际业务影响。",
  AppID: "wx7be5e08d2dfe6580",
  MODE_CN: "测试环境微信小程序",
  CONFIG_PLATFORM: "DEV_MP_WEIXIN",
};
// #ifdef MP-WEIXIN-PRO
config = {
  BASE_URL: "https://product/url",
  CURRENT_MODE: "product",
  AppID: "生产环境AppID",
  MODE_CN: "生产环境微信小程序",
  CONFIG_PLATFORM: "PRODUCT_MP_WEIXIN",
};
// #endif
export default config;
