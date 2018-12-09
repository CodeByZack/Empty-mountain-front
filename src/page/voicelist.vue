<template>
  <div class="voice-wrapper">
    <div class="list w">
      <h3 class="list-title">声音作品</h3>
      <div class="item" v-for="(item,index) in datalist" :key="index" @click="play(item)">
        <img :src="item.imgurl" class="item-pic">
        <p class="item-title">{{item.title}}</p>
        <p class="item-author">{{item.author}}</p>
        <div class="play-btn"><img src="@/assets/play.png"></div>
      </div>
    </div>
    <div class="pagation w"> <pagination :total="total" @pageChanged="pageChange"></pagination> </div>
  </div>
</template>

<script>
import pagination from "@/components/pagination";
import Bmob from '../axios/api';
export default {
  name: 'voicelist',
  components:{
    pagination

  },
  data () {
    return {
      datalist:[],
      total:0,
      nowPage:1,
    }
  },
  methods:{
    pageChange(nowpage){
      this.nowPage = nowpage;
      this.getData(this.nowPage);
    },
    getData(page){
      Bmob.queryVoiceByPage(page)
      .then(res=>{
        this.datalist = res;
        console.log(res);
      });
    },
    getTotal(){
      Bmob.countVoices()
      .then(res=>{
        this.total = res;
      })
    },
    play(item){
      this.$router.push({name:"voiceplay",params:item});
    }
  },
  created(){
    this.getData(this.nowPage);
    this.getTotal();
  }
}
</script>

<style lang="less" scoped>

.voice-wrapper{
  background: url(http://meiriyiwen.com/images/default_bg.jpg) #999999;
  width: 100%;
  min-height: 900px;
  position: relative;
  .w{
    width: 1000px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .list{
    overflow: hidden;
    .list-title{
      font-weight: normal;
      padding-top: 60px;
      padding-bottom: 35px;
      font-size: 25px;
      text-align: center;
    }
    .item{
      width: 300px;
      height: 210px;
      box-sizing: border-box;
      float: left;
      overflow: hidden;
      position: relative;
      margin-right: 50px;
      margin-bottom: 30px;
      background-color: #fff;
      cursor: pointer;
      .play-btn{
        position: absolute;
        top: 0px;
        width: 300px;
        height: 150px;
        opacity: 0;
        background-color: #333;
        transition: all 0.5s ease-in-out;
        img{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
      .item-pic{
        width: 300px;
        height: 150px;
      }
      .item-title{
        padding: 0 8px;
        line-height: 25px;
        font-size: 14px;
        color: #333;
      }
      .item-author{
        padding: 0 8px;
        line-height: 25px;
        font-size: 14px;
      }
    }
    .item:nth-child(3n+1){
      margin-right: 0;
    }
    .item:hover > .play-btn{
      // top:0px;
      opacity: 0.7;
    }
  }
}

</style>
