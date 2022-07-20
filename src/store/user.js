/*
 * @Author: CtrlC
 * @Date: 2022-07-11 15:21:36
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-16 11:51:32
 * @Description: userStore
 * @FilePath: /uni-preset-vue-vite/src/store/user.js
 */
import { defineStore } from 'pinia'

export default defineStore('userStore', {
  id: 'userStore',
  state: () => ({
    token: '1231313'
  }),
  actions: {
    setToken(value) {
      this.token = value
    }
  },
  getters: {
    userToken(state) {
      return !!state.token
    }
  },
  unistorage: true
})
