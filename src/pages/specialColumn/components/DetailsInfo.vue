<!--
 * @Author: CtrlC
 * @Date: 2022-07-14 14:34:21
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-16 12:09:46
 * @Description: file content
 * @FilePath: /uni-preset-vue-vite/src/pages/specialColumn/components/DetailsInfo.vue
-->
<template>
  <view>
    <u--text line-height="25" :text="introduce"></u--text>
  </view>
</template>

<script setup>
defineProps({
  introduce: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped></style>
