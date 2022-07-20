<!--
 * @Author: CtrlC
 * @Date: 2022-07-14 10:00:38
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-16 13:42:59
 * @Description: 专栏详情
 * @FilePath: /uni-preset-vue-vite/src/pages/specialColumn/details.vue
-->
<template>
  <view class="v-p-t-44">
    <BaseNavBar title="专栏详情" />
    <DetailsHeader />
    <DetailsFoot
      :buy-handle="column.buyHandle"
      :is-buied="columnData.isBuied"
      :collect-handle="column.collectHandle"
      :is-collection="columnData.isCollection"
    />
    <DetailsContent :column-data="columnData" :column="column" />
  </view>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import BaseNavBar from '@/components/BaseNavBar'
import DetailsHeader from './components/DetailsHeader'
import DetailsFoot from './components/DetailsFoot'
import DetailsContent from './components/DetailsContent'
import columnStore from '@/store/column'

const column = columnStore()
const { columnData } = storeToRefs(column)
</script>

<style lang="scss" scoped></style>
