<!--
 * @Author: CtrlC
 * @Date: 2022-07-16 13:45:28
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-16 14:47:52
 * @Description: 讲师评论
 * @FilePath: /uni-preset-vue-vite/src/pages/specialColumn/components/DetailsComments.vue
-->
<template>
  <view>
    <CommentsItem> </CommentsItem>
    <view class="v-p-l-60">
      <CommentsItem :is-lecturer="true" />
    </view>
  </view>
</template>

<script setup>
import CommentsItem from './CommentsItem'
</script>

<style lang="scss" scoped></style>
