<!--
 * @Author: CtrlC
 * @Date: 2022-06-30 20:30:44
 * @LastEditors: CtrlC
 * @LastEditTime: 2022-07-20 11:24:33
 * @Description: app入口文件
 * @FilePath: /uni-preset-vue-vite/src/App.vue
-->
<script>
export default {
  onLaunch() {
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uview-plus/index.scss';
</style>
