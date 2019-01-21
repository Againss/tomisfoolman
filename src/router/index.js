import Vue from 'vue'
import Router from 'vue-router'
import route from './route'
import index from '@/views/index'
import login from '@/views/login'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'login',
//       component: login
//     },
//     {
//       path: '/sys',
//       name: 'index',
//       component: index,
//       children:[
//         {
//           path: 'tom',
//           name: 'tom',
//           component: route.come,
//         }
//       ]
//     }
//   ]
// })
let routes =  [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/sys',
    name: 'index',
    component: index,
    children:[
      {
        path: 'tom',
        name: 'tom',
        component: route.come,
      }
    ]
  }
]
//histore大家都知道，路由地址都是以"#"形式展示，但是有些时候，我们又希望路由地址中不出现"#"，那怎么办呢？
//  vue给我们提供了一个属性mode = "history"
// 因为可能会出现刷新报404错的问题，所以需要服务器的支持
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: routes
})
