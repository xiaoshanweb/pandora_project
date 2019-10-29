<template>
    <div class="container-fluid">
        <my-header></my-header>
        <div class="headder"></div>
         <div class="describle">
            <div class="breadcrumbs">
                <a href="#">主页</a>
                <span class="next-link">></span>
                <span class="breadcrumb-elem">串饰</span>
            </div>
            <div class="brief-flex">
                <h1>串饰<span class="product-count">(529)</span></h1>
                <div class="desc-word">
                    <p class="desc-top">每一颗串饰都是一个故事，每一种组合都展现着与众不同的自我</p>
                    <p class="desc-bottom">Pandora精选手工925银、Pandora rose、Pandora Shina等材质，为你串联起人生的美好回忆</p>
                </div>
                <div class="product-kind">
                    <a href="#" title="最受欢迎串饰" class="product-link">最受欢迎串饰</a>
                    <a href="#" title="双色串饰" class="product-link">双色串饰</a>
                    <a href="#" title="PANDORA Reflexions系列串饰" class="product-link">PANDORA Reflexions系列串饰</a>
                    <a href="#" title="小串饰" class="product-link">小串饰</a>
                    <a href="#" title="吊饰" class="product-link">吊饰</a>
                    <a href="#" title="固定夹" class="product-link">固定夹</a>
                    <a href="#" title="安全链" class="product-link">安全链</a>
                    <a href="#" title="小装饰" class="product-link">小装饰</a>
                    <a href="#" title="PANDORA SHINE串饰" class="product-link">PANDORA SHINE串饰</a>
                    <a href="#" title="14K金串饰" class="product-link">14K金串饰</a>
                    <a href="#" title="PANDORA ROSE串饰" class="product-link">PANDORA ROSE串饰</a>
                    <a href="#" title="925银串饰" class="product-link">925银串饰</a>
                    <a href="#" title="双色串饰" class="product-link">双色串饰</a>
                    <a href="#" title="闪耀的心" class="product-link">闪耀的心</a>
                    <a href="#" title="几何光辉" class="product-link">几何光辉</a>
                    <a href="#" title="迪士尼串饰" class="product-link">迪士尼串饰</a>
                    <a href="#" title="爱串饰" class="product-link">爱串饰</a>
                    <a href="#" title="欢乐圣诞" class="product-link">欢乐圣诞</a>
                    <a href="#" title="童话" class="product-link">童话</a>
                    <a href="#" title="花卉" class="product-link">花卉</a>
                    <a href="#" title="亲情友情" class="product-link">亲情友情</a>
                    <a href="#" title="星空" class="product-link">星空</a>
                    <a href="#" title="象征性符号" class="product-link">象征性符号</a>
                    <a href="#" title="旅行串饰" class="product-link">旅行串饰</a>
                    <a href="#" title="字母与数字" class="product-link">字母与数字</a>
                    <a href="#" title="动物系列" class="product-link">动物系列</a>
                    <a href="#" title="琉璃串饰" class="product-link">琉璃串饰</a>
                    <a href="#" title="皇冠和公主串饰" class="product-link">皇冠和公主串饰</a>
                </div>
            </div>
        </div>
        <!-- 过滤器 -->
        <div class="filter">
            <div class="filter-content">
                <div class="filter-left">
                    <div class="filter-kind">
                        <span class="test">主题</span>
                        <div class="expend" style="display: none">
                            <div class="expend-main">
                                    <ul class="expend-main-flex">
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <p class="refinement-name">字母符号</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <p class="refinement-name">兴趣爱好</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <p class="refinement-name">自然</p>
                                                </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <p class="refinement-name">童话</p>
                                                <input type="radio" class="input">
                                                <i>Disney</i>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <p class="refinement-name">爱情</p>
                                            </a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div class="filter-kind">
                        <span class="test">宝石</span>
                        <div class="expend" style="display: none">
                            <div class="expend-main">
                                    <ul class="expend-main-flex">
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <img src="../assets/img/No stone.png" alt="">
                                                <p class="refinement-name">Diamond h/vs</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <img src="../assets/img/Other Stone.png" alt="">
                                                <p class="refinement-name">其他宝石</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <img src="../assets/img/No stone.png" alt="">
                                                <p class="refinement-name">无宝石</p>
                                                </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <img src="../assets/img/Pearl.png" alt="">
                                                <p class="refinement-name">珍珠</p>
                                            </a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div class="filter-kind">
                        <span class="test">价格</span>
                        <div class="expend" style="display: none;">
                                <div class="expend-main">
                                        <ul class="expend-main-flex price">
                                            <li class="expend-flex-item">
                                                <a href="">
                                                    <input type="radio" class="input">
                                                    <i>500CNY以下</i>
                                                </a>
                                            </li>
                                            <li class="expend-flex-item">
                                                <a href="">
                                                    <input type="radio" class="input">
                                                    <i>501CNY-1000CNY</i>
                                                </a>
                                            </li>
                                            <li class="expend-flex-item">
                                                <a href="">
                                                    <input type="radio" class="input">
                                                    <i>1001CNY-1500CNY</i>
                                                </a>
                                            </li>
                                            <li class="expend-flex-item">
                                                <a href="">
                                                    <input type="radio" class="input">
                                                    <i>1500CNY-2500CNY</i>
                                                </a>
                                            </li>
                                            <li class="expend-flex-item">
                                                <a href="">
                                                    <input type="radio" class="input">
                                                    <i>2500CNY以上</i>
                                                </a>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                    </div>
                    <div class="filter-kind">
                        <span class="test">金属</span>
                        <div class="expend" style="display: none;">
                                <div class="expend-main">
                                        <ul class="expend-main-flex">
                                            <li class="expend-flex-item">
                                                <a href="">
                                                    <img src="../assets/img/Gold.png" alt="">
                                                    <p class="refinement-name">14K金</p>
                                                </a>
                                            </li>
                                            <li class="expend-flex-item">
                                                <a href="">
                                                    <img src="../assets/img/Silver.png" alt="">
                                                    <p class="refinement-name">925银</p>
                                                </a>
                                            </li>
                                            <li class="expend-flex-item">
                                                <a href="">
                                                    <img src="../assets/img/Two Tone.png" alt="">
                                                    <p class="refinement-name">925银/14K金</p>
                                                    </a>
                                            </li>
                                            <li class="expend-flex-item">
                                                <a href="">
                                                    <img src="../assets/img/PANDORA Rose.png" alt="">
                                                    <p class="refinement-name">PANDORA Rose</p>
                                                </a>
                                            </li>
                                            <li class="expend-flex-item">
                                                <a href="">
                                                    <img src="../assets/img/Gold.png" alt="">
                                                    <p class="refinement-name">PANDORA Shine</p>
                                                </a>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                    </div>
                    <div class="filter-kind">
                        <span class="test">材质</span>
                        <div class="expend" style="display: none">
                            <div class="expend-main">
                                    <ul class="expend-main-flex">
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <img src="../assets/img/Glass.png" alt="">
                                                <p class="refinement-name">琉璃</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <img src="../assets/img/Enamel.png" alt="">
                                                <p class="refinement-name">珐琅</p>
                                            </a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div class="filter-kind">
                        <span class="test">颜色</span>
                        <div class="expend" style="display: none">
                            <div class="expend-main">
                                    <ul class="expend-main-flex">
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <img src="../assets/img/No stone.png" alt="">
                                                <p class="refinement-name">Diamond h/vs</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <img src="../assets/img/Other Stone.png" alt="">
                                                <p class="refinement-name">其他宝石</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <img src="../assets/img/No stone.png" alt="">
                                                <p class="refinement-name">无宝石</p>
                                                </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="">
                                                <img src="../assets/img/Pearl.png" alt="">
                                                <p class="refinement-name">珍珠</p>
                                            </a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div class="filter-kind">
                        <span class="test">尺寸</span>
                        <div class="expend" style="display: none">
                            <div class="expend-main">
                                <ul class="expend-main-flex price">
                                    <li class="expend-flex-item">
                                        <a href="">
                                            <input type="radio" class="input">
                                            <i>50MM</i>
                                        </a>
                                    </li>
                                    <li class="expend-flex-item">
                                        <a href="">
                                            <input type="radio" class="input">
                                            <i>60MM</i>
                                        </a>
                                    </li>
                                    <li class="expend-flex-item">
                                        <a href="">
                                            <input type="radio" class="input">
                                            <i>70MM</i>
                                        </a>
                                    </li>
                                    <li class="expend-flex-item">
                                        <a href="">
                                            <input type="radio" class="input">
                                            <i>ONE SIZE</i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter-right">
                    <span class="order" @click='order'>排序方式</span>
                    <ul class="selector" v-show='show'>
                        <li><a href="">排序方式</a></li>
                        <li><a href="">上市新品</a></li>
                        <li><a href="">畅销商品</a></li>
                        <li><a href="">人气商品</a></li>
                        <li><a href="">价格(从高到低)</a></li>
                        <li><a href="">价格(从低到高)</a></li>
                    </ul>
                </div>
            </div>
        </div>
         <!-- 商品列表 -->
        <div class="product">
            <div class="first-row">
                <div v-for="(p,i) of product1" :key="i" class="first-row-items">
                    <span class="flag-top">人气畅销</span>
                   <div class="product-center-img" @mousemove="touch(i)" @mouseleave="untouch(10)">
                       <router-link to="/details/1">
                           <img v-if="i !== id" class="product-img-hover" :src="'../../static/'+p.pic" alt="">
                           <img v-else class="product-img-hover" :src="'../../static/'+p.pic1" alt="">
                       </router-link>
                   </div>
                    <router-link class="product-name" to="/details/1">{{p.title}}</router-link>
                   <span class="product-price">￥{{p.price.toFixed(2)}}&nbsp;CNY</span>
                   <div class="add-shoppingcar">
                       <button href="">加入购物车</button>
                       <i class="iconfont icon-aixin"></i>
                   </div>
                </div>
            </div>
           <div class="first-row">
                <div v-for="(p,i) of product2" :key="i" class="first-row-items">
                    <span class="flag-top">人气畅销</span>
                   <div class="product-center-img" @mousemove="touch(i)" @mouseout="untouch(10)">
                       <router-link to="/details/1">
                           <img v-if="i !== id" class="product-img-hover" :src="'../../static/'+p.pic" alt="">
                           <img v-else class="product-img-hover" :src="'../../static/'+p.pic1" alt="">
                       </router-link>
                   </div>
                    <router-link class="product-name" to="/details/1">{{p.title}}</router-link>
                   <span class="product-price">￥{{p.price.toFixed(2)}}&nbsp;CNY</span>
                   <div class="add-shoppingcar">
                       <button href="">加入购物车</button>
                       <i class="iconfont icon-aixin"></i>
                   </div>
                </div>
            </div>
           <div class="first-row">
                <div v-for="(p,i) of product3" :key="i" class="first-row-items">
                    <span class="flag-top">人气畅销</span>
                   <div class="product-center-img" @mousemove="touch(i)" @mouseout="untouch(10)">
                       <router-link to="/details/1">
                           <img v-if="i !== id" class="product-img-hover" :src="'../../static/'+p.pic" alt="">
                           <img v-else class="product-img-hover" :src="'../../static/'+p.pic1" alt="">
                       </router-link>
                   </div>
                    <router-link class="product-name" to="/details/1">{{p.title}}</router-link>
                   <span class="product-price">￥{{p.price.toFixed(2)}}&nbsp;CNY</span>
                   <div class="add-shoppingcar">
                       <button href="">加入购物车</button>
                       <i class="iconfont icon-aixin"></i>
                   </div>
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
            product1:[],
            product2:[],
            product3:[],
            id:-1,
            show:false
        }
    },
    methods:{
        touch(i){
            this.id=i;
        },
        untouch(i){
            this.id=i;
        },
        open(){
            var expend=document.getElementsByClassName('expend');
            var test=document.getElementsByClassName('test');
            var selector=document.getElementsByClassName('selector')[0];
            var order=document.getElementsByClassName('order')[0];
            for(let key in test){
                test[key].onclick=function(){
                    if(expend[key].className=='open expend'){
                        expend[key].className='expend';
                        expend[key].style.display='none';
                    }else{
                        var openAlr=document.getElementsByClassName('open');
                        if(openAlr.length==0){
                            expend[key].style.display='block';
                            expend[key].className='open expend';
                        }else{
                            for(var prop of openAlr){
                                prop.className='expend';
                                prop.style.display='none';
                            }
                            expend[key].style.display='block';
                            expend[key].className='open expend';
                        }
                    }
                }
            }
        },
        order(){
            this.show=!this.show;
        }
    },
    created(){
        fun.getProduct(result=>{
            console.log(result.data.data);
            this.product1=result.data.splice(0,3);
            this.product2=result.data.splice(0,3);
            this.product3=result.data.splice(0,3);
        })
    },
    mounted(){
        this.open();
    }
}
</script>
<style>
    @import '../assets/css/Stringing.css';
    @import '../assets/font/iconfont.css';
</style>