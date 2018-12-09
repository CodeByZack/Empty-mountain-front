import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import voicelist from '@/page/voicelist'
import voiceplay from '@/page/voiceplay'
import about from '@/page/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        keepAlive:true
      }
    },
    {
      path:'/voicelist',
      name:'voicelist',
      component:voicelist,
      meta:{
        keepAlive:true
      }
    },
    {
      path:'/about',
      name:'about',
      component:about,
      meta:{
        keepAlive:true
      }
    },
    {
      path:'/voiceplay',
      name:'voiceplay',
      component:voiceplay
    }
  ]
})
