<!--
 * @Author: CtrlC
 * @Date: 2022-07-16 13:48:20
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-18 10:52:06
 * @Description: 评论item
 * @FilePath: /uni-preset-vue-vite/src/pages/specialColumn/components/CommentsItem.vue
-->
<template>
  <view class="comments-item_container">
    <u-cell size="large" :border="false">
      <template #title>
        <view class="u-flex">
          <u-avatar text="张" font-size="18" random-bg-color></u-avatar>
          <view class="u-flex u-flex-between" style="flex: 2">
            <view class="u-flex-y v-p-l-10">
              <view class="u-flex u-flex-start">
                <u--text text="浮生若梦" size="15"></u--text>
                <text v-if="props.isLecturer" class="lecturer_mark">讲师</text>
              </view>
              <u--text text="2022-02-03 12:45" color="#AAAAAA" size="13"></u--text>
            </view>
            <u-icon
              name="thumb-up"
              color="#777777"
              label-color="#777777"
              label="点赞"
              label-size="13"
              size="22"
            ></u-icon>
          </view>
        </view>
      </template>
      <template #label>
        <view class="v-p-l-60 v-p-t-10 v-m-l-20">
          <view class="comments-item_content">
            <template v-if="props.isLecturer">
              <text>回复</text>
              <text class="comments-item_reply_user">@浮生若梦:</text>
            </template>
            <text
              :style="{
                color: props.isLecturer ? '#777777' : '#333333'
              }"
              >我们都知道，如果一个人肝火比较旺，这个人就容易发脾气，既然肝火旺，那就得灭火，正常情况下灭火用什么灭？</text
            >
          </view>
        </view>
      </template>
    </u-cell>
  </view>
</template>

<script setup>
const props = defineProps({
  isLecturer: {
    type: Boolean
  }
})
</script>

<style lang="scss" scoped>
.comments-item {
  &_container {
    .lecturer_mark {
      color: #007aff;
      background-color: rgba(0, 122, 255, 0.1);
      border-radius: 16rpx;
      padding: 5rpx 10rpx;
      font-size: 22rpx;
    }
  }
  &_content {
    line-height: 40rpx;
  }
  &_reply_user {
    color: #ffbc21;
  }
}
</style>
