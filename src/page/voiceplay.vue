<template>
    <div class="play-wrapper">
        <div class="play-box">
            <h1>{{item.title}}</h1>
            <h2>{{item.author}}</h2>
            <div>
            <audio :src="item.voiceurl" controls></audio>
            </div>
            <span class="btn" @click="$router.go(-1)">返回列表</span>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            item:{}
        }
    },
    created(){
        console.log(this.$route)
        this.item = this.$route.params;
    }
}
</script>

<style lang="less" scoped>

.play-wrapper{
    min-height: 900px;
    background-image: url("http://voice.meiriyiwen.com/upload_imgs/339_img.jpg");    
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .play-box{
        text-align: center;
        width: 600px;
        height: 350px;
        position: absolute;
        padding: 50px;
        top: 30%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        border-radius: 10px;
        h1{
            margin: 0 0 30px 0;
            letter-spacing: 4px;
            font: normal 26px/1 Verdana, Helvetica;
            color: #000000;
            font-weight: bold;
        }
        h2{
            font-weight: normal;
            font-size: 17px;
            color: #666;
            margin-bottom: 80px;
        }
        .btn{
            margin-top: 80px;
            display: inline-block;
            background-color: #ffb94b;
            background-image: linear-gradient(top, #fddb6f, #ffb94b);
            border-radius: 3px;
            text-shadow: 0 1px 0 rgba(255,255,255,0.5);
            border-width: 1px;
            border-style: solid;
            border-color: #d69e31 #e3a037 #d5982d #e3a037;
            padding: 5px 15px;
            cursor: pointer;
            font: bold 15px Arial, Helvetica;
            color: #8f5a0a;
        }
    }
}

</style>

