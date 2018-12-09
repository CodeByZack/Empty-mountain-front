<template>
    <div class="pagination">
        <ul>
            <li class="first" v-show="nowPage!=1" @click="first">首页</li>
            <li class="pre" v-show="noPre"  @click="pre"> &lt </li>
            <li v-for="item in page" :key="item" @click="changePage(item)" :class="{current:nowPage==item}">{{item}}</li>
            <li class="next" v-show="noNext" @click="next"> &gt </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"pagination",
    data(){
        return{
            nowPage:1,
            noPre:false,
            noNext:false
        }
    },
    props:{
        total:{
            type:Number,
            required:true
        },
        pagesize:{
            type:Number,
            default:9
        },
        pagenumber:{//page index count
            type:Number,
            default:5
        }
    },
    methods:{
        changePage(page){
            this.nowPage = page;
            this.$emit("pageChanged",this.nowPage);
        },
        pre(){
            let nowPage = this.nowPage == 1? this.nowPage: this.nowPage-1;
            this.changePage(nowPage);
        },
        next(){
            let nowPage = this.nowPage == this.total? this.total : this.nowPage+1;
            this.changePage(nowPage);        
        },
        first(){
            this.changePage(1);
        }
    },
    computed:{
        page(){
            let totalPage = (this.total / this.pagesize) ^ 0;
            totalPage = this.total % this.pagesize == 0 ? totalPage : totalPage+1;
            this.totalPage = totalPage;
            
            // console.log(totalPage);

            let pageArray = [];

            pageArray.push(this.nowPage);

            //边界判断

            let pagenumber = totalPage > this.pagenumber ? this.pagenumber : this.totalPage;

            let tmp = Math.ceil(pagenumber/2);
            let preCount = pagenumber % 2 == 0 ? tmp-1 : tmp ;
            let nextCount = tmp;


            // console.log(preCount);
            // console.log(nextCount);

            for(let i = 0 ; i< preCount; i++){
                let preIndex = pageArray[0]-1;
                if(preIndex == 0) break;
                pageArray.unshift(preIndex);
            }

            for(let i = 0 ; i< nextCount; i++){
                let nextIndex = pageArray[pageArray.length-1]+1;
                if(nextIndex == totalPage+1)break;
                pageArray.push(nextIndex);
            }

            // console.log(pageArray);

            return pageArray;
        }
    }

}
</script>

<style lang="less" scoped>
.pagination{
    text-align: center;
    ul{
        display: inline-block;
        li{
            display: inline-block;
            background-color: #fff;
            padding: 0 5px;
            color: #333;
            margin-right: 10px;
            line-height: 20px;
            min-width: 15px;    
            border: 1px solid #0005;
            text-align: center;
            cursor: pointer;
            &:hover{
                background-color: #666;
                color: #fff;
            }
        }
        li.current{
            background-color: #666;
            color: #fff;
        }
    }
}
</style>

