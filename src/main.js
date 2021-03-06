import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
import store from './store/index'
import "amfe-flexible" // 引入flexible
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
//设置为 false 以阻止 vue 在启动时生成生产提示

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  document.title = to.name
  next()
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
