<template>
    <div>
        <my-header></my-header>
        <div class="containers">
        <div class="headder"></div>
        <div class="breadcrumbs">
            <ul>
                <li class="first">
                    <i class="iconfont icon-fangxiangjiantou-xiangzuo"></i>
                    <a href="">返回</a>
                    <span>|</span>
                </li>
                <li class="two">
                    <a href="">主页</a>
                    <i class="iconfont icon-you"></i>
                </li>
                <li class="third">
                    <a href="">串饰</a>
                    <i class="iconfont icon-you"></i>
                </li>
            </ul>
        </div>
        <div class="product">
            <div class="product-pic"> 
                <!-- 缩略图 -->
                <div class="thumb-containers">
                    <div v-for="(p,i) of pics" :key="i" class="thumb" :class="id==i?'select':''">
                        <img :src="'../../static/'+p.sm" @click="change(i)" alt="">
                    </div>
                </div>
                <!-- 中图 -->
                <div class="zomimg" @mouseenter="changeShow" @mouseleave="changeShow" @mousemove="move">
                    <img :src="'../../static/'+pics[i].md" id="datu"  alt="">
                    <!-- 遮罩层 -->
                    <div class="zomimg-hover" :class="show?'hover':''" :style="styleMove"></div> 
                </div>
                <!-- 大图 -->
                <div class="big-zomimg" :class="show?'hover':''">
                    <img :src="'../../static/'+pics[i].lg" :style="style" id='datu1' alt="">
                </div>
                <div class="product-det">
                    <h2 class="product-title">{{product.title}} </h2>
                    <p class="product-price">{{product.price.toFixed(2)}} CNY</p>
                    <p class="product-desc">金属色&nbsp;银</p>
                    <p class="product-desc">人气畅销</p>
                    <button class="shoppingcar" @click="addCart" :data-pid='product.pid' :data-title='product.title' :data-price='product.price' :data-pic='product.pic'>加入购物车</button>
                </div>
            </div>
        </div>
        <div class="service">
            <div class="service-left">
                <span>商品资料</span>
                <p>以这款迷人的月光蓝串饰照亮夜空。它以925银精心打造，镶嵌璀璨的深蓝色，环绕闪石。侧面心形镂空细节进一步提升美感。可搭配925银手链，亦可作为潘多拉项链上的耀眼吊坠。</p>
            </div>
            <div class="service-right">
                <ul class="section-content">
                    <li>
                        <span class="label">材质</span>
                        <span class="value">无其他特殊材质</span>
                    </li>
                    <li>
                        <span class="label">金属</span>
                        <span class="value">925银</span>
                    </li>
                    <li>
                        <span class="label">宝石</span>
                        <span class="value">Mixed stones</span>
                    </li>
                    <li>
                        <span class="label">主题</span>
                        <span class="value">闪耀的心</span>
                    </li>
                </ul>
                <ul class="section-content">
                    <li>
                        <span class="label">类目</span>
                        <span class="value">串饰</span>
                    </li>
                    <li>
                        <span class="label">商品编号</span>
                        <span class="value">797125NMB</span>
                    </li>
                    <li>
                        <span class="label">尺寸</span>
                        <span class="value">厚度：12.2毫米</span>
                        <span class="value">高度：11.4毫米</span>
                        <span class="value">厚度：11.4毫米</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import fun from '../assets/js/fun.js'
export default {
    data(){
        return{
            product:{
                price:0
            },
            pics:[{sm:'',md:'',lg:''}],
            i:0,
            id:0,
            show:true,
            styleMove:{
                left:0,
                top:0
            },
            style:{
                left:0,
                top:0
            }
        }
    },
    props:["pid"], //{ ..., props:true}
    methods:{
        addCart(event){
            var pid=event.target.dataset.pid;
            var title=event.target.dataset.title;
            var price=event.target.dataset.price;
            var pic=event.target.dataset.pic;
            console.log(pid,title,pic,price);
            this.axios.get(
                '/addCart',
                {params:{
                    pid,
                    title,
                    price,
                    pic
                }}).then(result=>{
                    console.log(result);
                    if(result.data.code==404){
                        alert('请先登录')
                        return;
                    }
                }
            )
        },
        change(i){
            this.i=i;
            this.id=i;
        },
        changeShow(){
            this.show=!this.show
        },
        move(e){
            var left=e.offsetX-100;
            var top=e.offsetY-100;
            if(left<0) left=0;
            else if(left>300) left=300;
            if(top<0) top=0;
            else if(top>300) top=300;
            this.styleMove.left=left+'px';
            this.styleMove.top=top+'px';
            this.style.left=-2*left+'px';
            this.style.top=-2*top+'px'
        }
    },
    created(){
        fun.getDetails(this.pid,result=>{
                this.product=result.data.product;
                this.pics=result.data.pics;
                // console.log(this.product);
                // console.log(this.pics[0].sm);
        })
    }
}
</script>
<style>
    @import '../assets/css/product_detail.css';
    @import '../assets/font/iconfont.css';
    @import '//at.alicdn.com/t/font_1357872_a69stxrzzv.css';
</style>