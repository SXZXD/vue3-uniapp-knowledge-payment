<!--
 * @Author: CtrlC
 * @Date: 2022-07-14 10:16:10
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-14 18:30:24
 * @Description: 详情头部
 * @FilePath: /uni-preset-vue-vite/src/pages/specialColumn/components/DetailsHeader.vue
-->
<template>
  <view class="details-header_container">
    <view class="details-header_content">
      <u--image
        width="100%"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F110220144354%2F201102144354-4-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660357370&t=a14c1e6ac1ef21de32b6c7d58c2a0ebd"
      ></u--image>
      <view class="details-header_info">
        <u--text size="20" color="#ffffff" text="3招教你作文分数暴涨"></u--text>
        <u--text size="15" color="#ffffff" text="轻松学习快乐成长" line-height="30"></u--text>
        <view class="u-flex u-flex-between v-m-t-20">
          <u--text size="13" color="#ffffff" text="共123讲｜已更新23讲"></u--text>
          <view class="u-flex">
            <u-avatar-group :urls="urls" size="25" gap="0.4"></u-avatar-group>
            <u--text size="13" color="#ffffff" text="23455人已加入学习" align="right"></u--text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const urls = ref([
  'https://cdn.uviewui.com/uview/album/1.jpg',
  'https://cdn.uviewui.com/uview/album/2.jpg',
  'https://cdn.uviewui.com/uview/album/3.jpg',
  'https://cdn.uviewui.com/uview/album/4.jpg',
  'https://cdn.uviewui.com/uview/album/7.jpg',
  'https://cdn.uviewui.com/uview/album/6.jpg',
  'https://cdn.uviewui.com/uview/album/5.jpg'
])
</script>

<style lang="scss" scoped>
.details-header {
  &_container {
    position: relative;
  }
  &_content {
    width: 100%;
    position: relative;
  }
  &_info {
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 20rpx;
    padding: 32rpx;
  }
}
</style>
