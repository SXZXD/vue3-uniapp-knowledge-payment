/*
 * @Author: CtrlC
 * @Date: 2022-07-11 15:33:33
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-14 09:39:18
 * @Description: file content
 * @FilePath: /uni-preset-vue-vite/src/store/plugins.js
 */
import { createUnistorage } from 'pinia-plugin-unistorage'
import { createPinia } from 'pinia'

const store = createPinia()
store.use(createUnistorage)

export default store
