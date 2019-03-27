// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import echarts from 'echarts'//全局引入会将所有的echarts图表打包，导致体积过大，所以最好还是按需引入。见index.vue

Vue.config.productionTip = false
// Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
