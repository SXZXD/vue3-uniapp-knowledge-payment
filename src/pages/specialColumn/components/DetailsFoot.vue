<!--
 * @Author: CtrlC
 * @Date: 2022-07-14 10:38:57
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-16 13:44:06
 * @Description: 专栏详情低部
 * @FilePath: /uni-preset-vue-vite/src/pages/specialColumn/components/DetailsFoot.vue
-->
<template>
  <view class="details-foot_container u-flex u-flex-items-center u-flex-around v-p-10">
    <view class="u-flex u-flex-around" style="flex: 1">
      <u-icon name="home" size="20" label-pos="bottom" label-size="10" label="更多"></u-icon>
      <u-icon
        :name="props.isCollection ? 'star-fill' : 'star'"
        size="20"
        label-pos="bottom"
        label-size="10"
        label="收藏"
        :color="props.isCollection ? '#FFAA19' : ' rgb(96, 98, 102)'"
        @click="props.collectHandle"
      ></u-icon>
    </view>
    <view class="details-foot_opt u-flex">
      <view
        class="pirces"
        :style="{
          opacity: props.isBuied ? '0.4' : '1'
        }"
        @click="props.buyHandle"
      >
        <text v-if="props.isBuied">已购买</text>
        <view v-else class="u-flex-y">
          <u--text size="16" align="center" color="#ffffff" :text="`现价:¥188`"></u--text>
          <u--text
            size="12"
            align="center"
            decoration="line-through"
            color="#ffffff"
            :text="`原价:¥288`"
          ></u--text>
        </view>
      </view>
      <view class="v-font-32 btn">更多会员权益</view>
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  buyHandle: {
    type: Function,
    default: () => {}
  },
  collectHandle: {
    type: Function,
    default: () => {}
  },
  isBuied: {
    type: Boolean,
    default: false
  },
  isCollection: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.details-foot {
  &_container {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 120rpx;
    border-top: 2rpx solid #f1f4f4;
    box-sizing: border-box;
    z-index: 10;
    background: #ffffff;
  }
  &_opt {
    border-radius: 44rpx;
    height: 88rpx;
    overflow: hidden;
    box-sizing: border-box;
    line-height: 88rpx;
    flex: 3;
    text-align: center;
    color: #ffffff;
    .pirces {
      background: #ffaa19;
      flex: 1;
      display: flex;
      box-sizing: border-box;
      justify-content: center;
      .u-flex-y {
        justify-content: space-around;
        flex-direction: column;
        .u-text {
          height: 0;
        }
      }
    }
    .btn {
      background: #007aff;
      flex: 1;
    }
  }
}
</style>
