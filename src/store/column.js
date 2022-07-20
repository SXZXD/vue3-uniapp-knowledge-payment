/*
 * @Author: CtrlC
 * @Date: 2022-07-16 11:52:10
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-16 13:41:38
 * @Description: 专栏store
 * @FilePath: /uni-preset-vue-vite/src/store/column.js
 */
import { defineStore } from 'pinia'

export default defineStore('columnStore', {
  id: 'columnStore',
  state: () => ({
    columnData: {
      introduce:
        '自从有了孩子，我格外关注如何做一名合格的妈妈，如何能引导孩子做出正确的选择，如何带给孩子积极的影响。总之，对于孩子，我和所有的妈妈一样，希望能给予孩子我最好的一切。',
      catalogue: [
        {
          id: 1,
          title: '让孩子教家长，双方都成长',
          time: '2022-02-01',
          learnNum: 3456,
          playStatus: true
        },
        {
          id: 2,
          title: '让孩子教家长，双方都成长',
          time: '2022-02-01',
          learnNum: 3456,
          playStatus: false
        }
      ],
      isBuied: false,
      isCollection: false
    }
  }),
  actions: {
    playHandel(id) {
      this.columnData.catalogue.forEach(item => {
        const cItem = item
        if (item.id === id) {
          cItem.playStatus = !cItem.playStatus
        } else {
          cItem.playStatus = false
        }
      })
    },
    buyHandle() {
      this.columnData.isBuied = true
    },
    collectHandle() {
      this.columnData.isCollection = true
    }
  },
  unistorage: true
})
