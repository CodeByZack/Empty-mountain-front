
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axiosPlugin from './axios/axiosInstance'

Vue.config.productionTip = false
Vue.use(axiosPlugin)




router.beforeEach((to,from,next)=>{
  let needToken = ['child'];

  let token = localStorage.getItem('token');

  if(!token && needToken.indexOf(to.name)>-1){
    //token不存在 且 跳转路由需要token
    //拦截下来 跳转到登录界面
    console.log(to.name+"need token");
  }

  next();
})



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
