<template>
    <div>
        <my-header></my-header>
        <div class="headder"></div>
        <div class="content">
            <div class="left">
                <div class="product-item" v-for="(p,i) of product" :key="i">
                    <div class="item-left">
                        <img :src="'../../static/'+p.pic" alt="">
                    </div>
                    <div class="item-right">
                        <p class="title">{{p.title}}</p>
                        <p class="price">{{p.price.toFixed(2)}} CNY</p>
                        <div class="shuliang">
                            <button>-</button>
                            <span class="count">{{p.count}}</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <h6>合计</h6>
                <div class="total">
                    <span>合计</span>
                    <span class="s1">XXXXCNY</span>
                </div>
                <div class="total">
                        <span>运送费</span>
                        <span class="s2">45 CNY</span>
                    </div>
                <div class="pay">
                    结算
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import fun from "@/assets/js/fun.js"
export default {
    data(){
        return{
            product:[{price:0,title:''}]
        }
    },
    methods:{

    },
    created(){
        fun.getSearch(result=>{
            console.log(result);
            if(result.data.code==404){
                alert('请先登录')
                return;
            }
            this.product=result.data;
        })
    }
}
</script>
<style scoped>
        *{
            padding: 0;
            margin: 0;
            list-style: none;
            text-decoration: none;
        }
        #app{
            background-color: #F1F1F3;
        }
        .headder{
            width: 100%;
            height: 169px;
        }
        .content{
            width: 700px;
            margin: 0 auto;
            /* border: 1px solid black; */
            display: flex;
            flex-flow: wrap;
        }
        .content .left{
            width: 483px;
            margin-bottom: 50px;
            background-color: #fff;
            box-shadow: 0 0 2px #999;
        }
        .content .product-item{
            padding: 20px 30px 15px;
            margin-bottom: 15px;
            display: flex;
            flex-direction: wrap;
        }
        .content .left .product-item .item-left{
            width: 40%;
        }
        .content .left .product-item .item-left>img{
            width: 180px;
            height: 180px;
            display: block;
        }
        .content .left .product-item .item-right{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items:flex-start;
            width: 60%;
            padding: 10px 30px 15px;
        }
        .content .left .product-item .item-right>p{
            font:20px simhei;
            color: #333;
            margin-bottom: 20px;
        }
        .content .left .product-item .item-right>span{
            font: 16px simhei;
            color: #27251f;
        }
        .content .left .product-item .item-right .shuliang{
            margin-top: 55px;
        }
        .content .left .product-item .item-right .shuliang>button{
            display: inline-block;
            width: 30px;
            height: 30px;
            text-align: center;
            font-size: 24px;
            line-height: 30px;
            background-color: #eee;
            outline: none;
            border: 1px solid transparent;
        }
        .content .right{
            width: 250px;
            height: 200px;
            /* border:1px solid black; */
            background-color: #fff;
            position: fixed;
            /* margin-top: 20px; */
            padding: 30px 10px 0;
            top:169px;
            border: 1px solid #999;
            left:827px;
        }
        .content .right h6{
            text-align: center;
            margin: 0 auto;
            font:16px simhei;
        }
        .content .right .total span{
            font:16px simhei;
            color: #333;
        }
        
        .content .right .total .s2{
            margin-left: 80px;
        }
        .content .right .total .s1{
            margin-left: 95px;
        }
        .content .right .pay{
            width: 160px;
            height: 45px;
            margin: 40px auto 0;
            background-color: #333;
            text-align: center;
            color: #fff;
            font: 16px simhei;
            line-height: 45px;
        }
</style>
