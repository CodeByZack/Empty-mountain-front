<template>
  <div id="app">
    <Top></Top>
    <keep-alive>
    <router-view  v-if="$route.meta.keepAlive"></router-view>    
    </keep-alive>

    <router-view  v-if="!$route.meta.keepAlive"></router-view>    
    
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from '@/components/top'
import Bottom from '@/components/bottom'
export default {
  name: 'App',
  components:{
    Top,
    Bottom
  }

}
</script>

<style>
*{
  margin:0;
  padding:0;
}
li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 950px;
}
</style> 
