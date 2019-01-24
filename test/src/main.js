// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import promise from 'es6-promise';
import VueBus from 'vue-bus'

// 兼容 Promise
promise.polyfill();
//多组件通信（利用bus总线进行事件触发）应用场景:
//分页组件A，搜索组件B，分页组件A里面的方法C,这个时候A组件用用到方法C控制分页接口地址，
//B组件这个时候要用到A组件中的C方法（搜索条件，影响分页接口地址）这个时候可以用到中央事件总线来全局控制
// 具体的操作大致就是1、在搜索组件的方法里面：this.$bus.$emit("getUrl",url);
///2、在分页组件的：created() {
// this.num();
// this.getList();
// this.$bus.on("getUrl", this.setHref);
// },
// 这里this.$bus.on的第二个参数是要调用的方法C
// 对于上面我们其他的方法，就是用vuex，就是在state中添加搜索条件，每次搜索组件改变搜索条件的时候就讲全局的搜索条件对象设为一样，在分页组件里面就利用这个全局的搜索条件来设置分页接口地址
Vue.use(VueBus);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
