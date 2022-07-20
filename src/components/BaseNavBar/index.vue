<!--
 * @Author: CtrlC
 * @Date: 2022-07-14 10:02:45
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-14 10:09:44
 * @Description: 自定义导航栏
 * @FilePath: /uni-preset-vue-vite/src/components/BaseNavBar/index.vue
-->
<template>
  <u-navbar :title="title" :auto-back="true" @right-click="rightClick"> </u-navbar>
</template>

<script setup>
const emit = defineEmits(['rightClick'])
defineProps({
  title: {
    default: '知识付费',
    type: String
  }
})
const rightClick = () => {
  emit('rightClick')
}
</script>

<style lang="scss" scoped></style>
