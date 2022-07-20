/*
 * @Author: CtrlC
 * @Date: 2022-06-30 20:30:44
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-18 10:35:31
 * @Description: vite配置
 * @FilePath: /uni-preset-vue-vite/vite.config.js
 */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    eslintPlugin({
      cache: false
    })
  ]
})
