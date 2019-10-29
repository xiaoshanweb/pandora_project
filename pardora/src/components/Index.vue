<template>
    <div class="container-fuild">
        <my-header></my-header>
        <div class="top-content">
            <ul class="list-unstyled">
                <li><a href="">购物满1500免运费</a></li>
                <li><a href="">三个工作日内发货提供礼品包装</a></li>
                <li><a href="">七天无理由退换</a></li>
            </ul>
        </div>
        <div id="lbt" class="carousel" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/img/lbt1.jpg" alt="">
                    <div class="lbt-content">
                        <p>浪漫桃花系列</p>
                        <a class="buy" href="">
                            <div>
                                <p>立即选购</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/lbt2.jpg" alt="">
                    <div class="lbt-content">
                        <p>秋季新款系列</p>
                        <a class="buy" href="">
                            <div>
                                <p>立即选购</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <a href="#lbt" class="carousel-control-prev" data-slide="prev">
                <div class="lbt-left">
                    <i class="iconfont icon-zuo"></i>
                </div>
            </a>
            <a href="#lbt" class="carousel-control-next" data-slide="next">
                <div class="lbt-right">
                    <i class="iconfont icon-you"></i>
                </div>
            </a>
        </div>
        <div class="content-asset">
            <a href="">
                <span>人气推荐</span>
            </a>
            <a href="">
                <span>更多</span>
            </a>
        </div>
        <div class="pop-com">
            <div v-for="(p,i) of product" :key="i">
                <div class="flag-top">
                    <span>人气畅销</span>
                </div>
                <div class="product-img">
                    <img :src="'../../static/img/'+p.pic" alt=""/>
                </div>
                <div class="product-name">
                    <router-link :to="'/details/'+p.pid">{{p.title}}</router-link>
                </div>
                <div class="product-price">
                    <span>{{p.price.toFixed(2)}} CNY</span>
                </div>
            </div>
        </div>
        <div class="tj-img">
            <div>
                <img src="../assets/img/ci-img1.jpg" alt=""/>
                <div class="img-detail">
                    <p>精选手链推荐</p>
                    <a class="buy" href="">
                        <div>
                            <p>立即选购</p>
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <img src="../assets/img/ci-img2.jpg" alt=""/>
            </div>
        </div>
     <div class="ci-module">
        <h2>皇冠马车的逐梦之旅</h2>
        <p>童话里的奇妙旅程，让Pandora皇冠马车带你一起体验。</p>
        <div class="ci-module-left">
            <div class="ci-module-left-top">
                <img src="../assets/img/mache.jpg" alt=""/>
                <div>
                    <p>闪耀皇冠马车</p>
                </div>
                <p>798.00 CNY</p>
            </div>
            <div>
                <div class="ci-module-text">
                    <h3>典雅人生项链</h3>
                    <div>
                        <p>多颗立方氧化锆石加持的Pandora Rose皇冠O车厢，闪耀动人，散发魅力。搭配经典优雅Pandora Rose项链，展露典雅气质。</p>
                    </div>
                </div>
                <div class="ci-module-btn">
                    <p>立即选购</p>
                </div>
            </div>
        </div>
        <div class="ci-module-right">
            <img src="../assets/img/cvd-关晓彤.jpg" alt=""/>
            <div>
                <p>闪耀皇冠马车</p>
            </div>
            <p>798.00 CNY</p>
        </div>
    </div>
    <my-footer></my-footer>
    </div>
</template>
<script>
import fun from '../assets/js/fun.js';
export default {
    data(){
        return{
            product:[],
            pid:''
        }
    },
    methods:{

    },
    created(){
        fun.getIndex(result=>{
            console.log(result.data);
            this.product=result.data;
        })
    },
    mounted(){

    }
}
</script>
<style>
    @import '../assets/css/index.css';
    @import '../assets/font/iconfont.css';
    @import '//at.alicdn.com/t/font_1357872_a69stxrzzv.css';
</style>