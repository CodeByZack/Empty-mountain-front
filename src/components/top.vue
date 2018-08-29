<template>
  <div>
    <div class="header">
        <span class="logo">行者空山</span>
        <ul>
            <a href="/"><li class="current">文章</li></a>
            <a href="/voicelist"><li>声音</li></a>
            <li>关于我</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
	background: #fff;
	height: 50px;
	width: 100%;
	min-width: 500px;
	opacity: 0.9;
}
.header ul{
	display: inline-block;
	list-style: none;
	padding: 0;
	letter-spacing: -8px;
}
.header ul li{
	
	display: inline-block;
	line-height: 50px;
	width: 110px;
	height: 50px;
	text-align: center;
	color: #999999;
	letter-spacing:0;
}
.header ul li.current{
	cursor: pointer;
	background: #fcfcfc;
	color: #20b3d8;

	box-shadow: inset 0 9px 8px #f8f8f8;
}

.header ul li:hover{
	cursor: pointer;
	background: #fcfcfc;
	color: #20b3d8;

	box-shadow: inset 0 9px 8px #f8f8f8;
}
.header .logo{
	display: inline-block;
	line-height: 50px;
	width: 110px;
	height: 50px;
	text-align: center;
	margin-left: 20px;
	font-weight: bold;
	color: #DDDDDD;
}
</style>