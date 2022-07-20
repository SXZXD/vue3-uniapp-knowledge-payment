# vue3-uniapp-knowledge-payment

## ui框架 详细了解请移步官网 [uview-plus-ui docs](https://uiadmin.net/uview-plus/).
  +  uview提供了近乎完全的公共样式（请查阅uni_modules/uviwe-plus/libs/css）
  +  uview提供了常用的工具类 （请查询[utils docs](https://uiadmin.net/uview-plus/js/intro.html)）
## 编码规范: 采用Airbnb编码风格 [Airbnb docs](https://github.com/airbnb/javascript)
## 状态管理器：[pinia](https://pinia.web3doc.top/)
## 框架目录说明
  * .husky      git提交钩子
  * pages       页面组件
  * api         接口管理
  * common      公共类
    + const.js  全局常量
    + envConfig 环境变量
    + uviewConfing uview全局配置
  * components  公共组件
  * static      静态文件
    + app-plus  app环境变量
    + h5        环境变量
    + mp-weixin 小程序环境变量
  * uni_modules ui组件
  * utils       工具类
  * store       状态管理器
  * .cz-config  git提交配置
  * .eslintrc   eslint配置
  ## 注释插件：vscode [koroFileHeader](https://github.com/OBKoro1/koro1FileHeader)
  ## 开发规范
     1. 组件编写大写驼峰
     2. 基础组件Base开头，eg：BaseButton
     3. 单例组件（没有任何属性的组件，不接受任何prop）eg：TheHeading
     4. 紧密耦合的组件 eg:TodoList TodoListItem
     5. class命名
        主容器  "order-container"
        主内容  "order-content"
        主低部  "order-foot"
        子标签  "order-content_''"
     。。。。
  ## 项目运行
       npm install
       npm run dev:custom h5-dev/h5-test/h5-pro
 ## 项目打包
      npm run build:custom h5-dev/h5-test/h5-pro
