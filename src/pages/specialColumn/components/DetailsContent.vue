<!--
 * @Author: CtrlC
 * @Date: 2022-07-14 11:12:49
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-16 13:50:39
 * @Description: 专栏内容
 * @FilePath: /uni-preset-vue-vite/src/pages/specialColumn/components/DetailsContent.vue
-->
<template>
  <view class="details-content_container">
    <view>
      <u-tabs :list="tabs" :scrollable="false" @click="switchTab"></u-tabs>
      <view class="v-p-20 details-content_info">
        <component
          :is="currentCmp"
          :catalogue="columnData.catalogue"
          :introduce="columnData.introduce"
          :play-handel="column.playHandel"
        />
      </view>
    </view>
  </view>
</template>

<script setup>
import { reactive, ref, markRaw } from 'vue'
import DetailsCourseCatalogue from './DetailsCourseCatalogue'
import DetailsInfo from './DetailsInfo'
import DetailsComments from './DetailsComments.vue'

defineProps({
  columnData: {
    type: Object,
    default: () => {}
  },
  column: {
    type: Object,
    default: () => {}
  }
})
const tabs = reactive([
  {
    name: '简介',
    cp: markRaw(DetailsInfo)
  },
  {
    name: '课程目录',
    cp: markRaw(DetailsCourseCatalogue)
  },
  {
    name: '讲师指导',
    cp: markRaw(DetailsComments)
  }
])
const currentCmp = ref(tabs[0].cp)
const switchTab = ({ cp }) => {
  if (cp) {
    currentCmp.value = cp
  }
}
</script>

<style lang="scss" scoped>
.details-content {
  &_container {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    bottom: 10px;
    border-radius: 12px 12px 0px 0px;
  }
  &_info {
    max-height: 500rpx;
    overflow: auto;
  }
}
</style>
