/*
 * @Author: CtrlC
 * @Date: 2022-07-11 14:26:03
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-14 09:39:21
 * @Description: 请求类
 * @FilePath: /uni-preset-vue-vite/src/utils/request.js
 */
// 初始化请求配置
export default app => {
  const { $env } = app
  uni.$u.http.setConfig(config => {
    config.baseURL = $env.BASE_URL /* 根域名 */
    return config
  })
  uni.$u.http.interceptors.request.use(
    config => config,
    config => Promise.reject(config)
  )
  uni.$u.http.interceptors.response.use(
    response => {
      const { data } = response
      // 自定义参数
      const custom = response.config?.custom
      if (data.code !== 200) {
        if (custom.toast !== false) {
          uni.$u.toast(data.message)
        }
        if (custom?.catch) {
          return Promise.reject(data)
        }
        return new Promise(() => {})
      }
      return data.data || {}
    },
    response => Promise.reject(response)
  )
}
