<!--
 * @Author: CtrlC
 * @Date: 2022-07-14 14:51:47
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-16 12:36:18
 * @Description: 课程目录
 * @FilePath: /uni-preset-vue-vite/src/pages/specialColumn/components/DetailsCourseCatalogue.vue
-->
<template>
  <u-list>
    <u-list-item v-for="item in catalogue" :key="item.id">
      <u-cell @click="playColumn(item.id)">
        <template #title>
          <u--text
            size="17"
            :color="item.playStatus ? '#007AFF' : '#222222'"
            :text="item.title"
          ></u--text>
        </template>
        <template #label>
          <view class="v-m-t-20">
            <u--text color="#AAAAAA" :text="`${item.time}｜${item.learnNum}人学习`"></u--text>
          </view>
        </template>
        <template #right-icon>
          <u-icon
            :color="item.playStatus ? '#007AFF' : '#AAAAAA'"
            :name="item.playStatus ? 'pause-circle' : 'play-circle'"
            size="30"
          ></u-icon>
        </template>
      </u-cell>
    </u-list-item>
  </u-list>
</template>

<script setup>
const props = defineProps({
  catalogue: {
    type: Array,
    default: () => []
  },
  playHandel: {
    type: Function,
    default: () => {}
  }
})
const playColumn = id => {
  props.playHandel(id)
}
</script>

<style lang="scss" scoped></style>
