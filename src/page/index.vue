<template>
  <div>
    <div class="body" v-bind:style="{ backgroundImage: bgUrl}"></div>
    <div class="wrapper" style="padding:40px 0px">
      <div class="container">
        <div class="article_show">
          <h1 class="aricle_title">{{title}}</h1>
          <div class="aricle_author">{{author}}</div>
          <div class="article_content" v-html="content">
          </div>
          <div class="btns">
            <div class="button" @click='random'>随机一篇</div>
            <div class="button" @click='showComments'>{{showComment?"收起评论":"展开评论"}}</div>
          </div>
          <transition name="fade">
            <div class="comments" v-show="showComment">
              <span class="title">评论列表</span>
              <div class="item" v-for="(item, index) in comments" :key="index">
                <div><span class="name">匿名</span><span class="date">{{item.createdAt}}</span></div>
                <p class="content">{{item.content}}</p>
              </div>
              <textarea ref="input"></textarea>
              <div class="wrapper" style="width:100%;text-align:center;">
                <div class="button" @click="submit">评论</div>
              </div>
            </div>
          </transition>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Bmob from '../axios/api';
export default {
  name: 'index',
  data () {
    return {
      title:'',
      author:'',
      content:'',
      imgurl:'',
      showComment : false,
      comments:[],
      article:{}
    }
  },
  created(){
    Bmob.queryArticleToDay()
    .then(res => {
        this.updateArticle(res[0]);
        return Bmob.getComments(res[0].objectId);
    }).then(res=>{
        this.comments = res;
    })
    .catch(err => {
        console.log(err)
    });
    Bmob.randomBg()
    .then(res => {
      this.imgurl = res[0].imgurl;
    })
    .catch(err => {
        console.log(err)
    });
  },
  methods:{
    random(){
      Bmob.randomArticle()
      .then(res=>{
        this.updateArticle(res[0]);
        return Bmob.getComments(res[0].objectId);
      })
      .then(res=>{
        this.comments = res;
      })
      .catch(err=>{
        console.log(err);
      })
      Bmob.randomBg()
      .then(res => {
        this.imgurl = res[0].imgurl;
      })
      .catch(err => {
          console.log(err)
      });
    },
    submit(){
      let value = this.$refs.input.value
      if(value === ""){
        alert('写点什么吧!');
        return;
      }
      let comment = {};
      comment.objectId = this.article.objectId;
      comment.content = value;
      Bmob.addComments(comment)
      .then(res=>{
        console.log(res);
        this.comments.push({content:this.$refs.input.value,createdAt:res.createdAt});
        alert('提交成功!');
        this.$refs.input.value = '';
      })
      .catch(err=>{
        console.log(err);
      })
    },
    showComments(){
      this.showComment = !this.showComment;
    },
    updateArticle(article){
      this.article = article;
      this.title = article.title;
      this.author = article.author;
      let temp = article.content;
      temp = temp.replace(/\n/g,'</p><p>');
      temp = '<p>'+temp+'</p>';
      this.content = temp ;
      this.toTop();
    },
    toTop:function(){
      let back = setInterval(() => {
          if(document.body.scrollTop||document.documentElement.scrollTop){
            document.body.scrollTop-=100;
            document.documentElement.scrollTop-=100;
          }else {
            clearInterval(back)
          }
        },10);
    },
  },
  computed:{
    bgUrl(){
      return 'url('+this.imgurl+')';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
	background-repeat:no-repeat;
	background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: -1;
  top: 0px;
}
.container{
	padding: 8px;
	width: 950px;
	margin: 0px auto;
	background: #fff;
  box-sizing: border-box;
	border-radius: 5px;
}
.container .article_show{
	padding: 80px 50px;
	border: 1px dashed #dddddd;

}


.container .article_show .aricle_title{
	text-align: center;
    color: #000000;
    font-weight: normal;
    letter-spacing: 4px;	
    
}
.container .article_show .aricle_author{
	text-align: center;
	color: #999999;
	line-height: 30px;
	font-size: 16px;
	margin: 50px 0;
}
>>> .container .article_show .article_content p{
    color: #000;
    font-size: 16px;
    font-weight: normal;
    line-height: 30px;
    margin-bottom: 30px;
    text-align: justify;	
}

.container .article_show .btns{
  margin-top: 80px;
  text-align: center;
}

.container .article_show .button{
	display: inline-block;
	width: 80px;
	background-color: #FFB94B;
    background-image: -moz-linear-gradient(center top , #FDDB6F, #FFB94B);
    border-color: #D69E31 #E3A037 #D5982D;
    border-radius: 3px 3px 3px 3px;
    border-style: solid;
    border-width: 1px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;
    color: #8F5A0A;
    cursor: pointer;
    font: bold 15px Arial,Helvetica;
    padding: 5px 15px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
.comments{
  width: 560px;
  margin: 50px auto;
  transition: height 1s ease-in-out;
  overflow: hidden;
}
.comments .title{
  display: inline-block;
  margin: 40px 0px;
  width: 100%;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
}
.comments .item{
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom:1px solid #f2f2f2;
}
.comments .item .name{
  font-size: 16px;
  color: #808080;
}
.comments textarea{
  width: 100%;
  height: 80px;
  margin-top: 30px;
  border: 1px solid #CCCCCC;
  border-radius: 3px 3px 3px 3px;
  font-size: 16px;
  padding: 8px;
  resize: none;
  box-sizing: border-box;
}
.comments .item .date{
  font-size: 14px;
  float: right;
  color: #e0e0e0;
}
.comments .item .content{
    font-size: 16px;
    line-height: 23px;
    margin-top: 10px;
    color: #000;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
