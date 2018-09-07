<template>
  <div class="about">
      <div class="container">
        <h1>关于</h1>
        <p>来自一个简单而遥远的梦想。</p>
        <p>文章全部手工筛选，尽量每日一更。</p>
        <p>如果你有不错的文章，欢迎投稿。</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'voicelist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{
  background-image: url('../assets/bg.jpg');
  width: 100%;
  min-height: 100vh;
  background-attachment: fixed;
  overflow: hidden;
}
.container{
  background: #ffffff;
  width: 950px;
  margin: 40px auto;
  padding: 30px;
  border-radius: 5px;
	/* border: 1px dashed #dddddd; */
}
</style>