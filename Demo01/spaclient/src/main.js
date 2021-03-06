// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './theme.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMDCAdapter from 'vue-mdc-adapter'/*导入Vue Components插件（常用的按钮，表格等等） */


Vue.use(VueMDCAdapter)/*导入以后使用 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
