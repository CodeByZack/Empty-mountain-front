import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import voicelist from '@/components/voicelist'
import about from '@/components/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/voicelist',
      name:'voicelist',
      component:voicelist
    },
    {
      path:'/about',
      name:'about',
      component:about
    }
  ]
})
