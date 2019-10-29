<template>
    <div>
        <my-header></my-header>
        <div class="container">
            <div class="headder"></div>
            <!-- banner start -->
            <div class="banner">
                <div class="banner-top"><p>情人节浪漫礼物</p></div>
                        <a href="http://www.baidu.com">
                            <img src="../assets/img/hero.png" alt=""/>
                        </a>
                <div class="banner-middle">
                    <div class="content-box">
                        <p>情人节珠宝礼物，比言语更加"动听"</p>
                        <h1>真心流露</h1>
                        <button class="btn btn-outline-light w-60 dropdown-toggle">探索更多</button>
                    </div>
                </div> 
            </div>
            <!-- banner end -->
            <!-- 情人节套组 start-->
            <div id="valen" class="valentine">
                <h2>人气情人节套组</h2>
                <!-- 商品展示 -->
                <div class="my-big">
                    <div :style="{'margin-left':left+'px'}" class="valen-prod d-flex d-inline-flex flex-nowrap">
                        <div v-for="(p,i) of product2" :key='i' class="prod_box border border-light pb-5">
                            <div class="po-abs-top">人气畅销</div>
                            <router-link to="/details/1">
                                <img class="pro" :src="'../../static/'+p.pic" />
                            </router-link>
                            <p>{{p.title}}</p>
                            <p>{{p.price.toFixed(2)}} CNY</p>
                            <div class="d-flex buy justify-content-center mt-5">
                                <div class="bg-dark">
                                    把整套添加到购物车
                                </div>
                                <div title="加入收藏" class="love">
                                    <img src="../assets/img/heart_1.png" alt=""/>
                                    <input type="hidden" value="false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--左右切换的箭头-->
                    <div @click="lastPage()" class="last_page"></div>
                    <div @click="nextPage()" class="next_page"></div>
                </div>

                <a href="" class="btn btn-dark w-25 mt-5">立即选购</a>
            </div>
            <!-- 情人节套组 end-->
            <!-- 全新搭配串饰 start-->
            <div id="chuan" class="valentine mb-5">
                <h2>全新搭配串饰</h2>
                <!-- 串饰商品展示-->
                <div class="my-big">
                    <div :style="{ 'margin-left':left+'px'}" class="valen-prod d-flex d-inline-flex flex-nowrap">
                        <div v-for="(p,i) of product1" :key='i' @mouseover="changeImg(i)" @mouseleave="changeImg(10)" class="prod_box border border-light pb-5">
                            <router-link to="/detsils/1">
                                <img v-if="id!==i" class="pro" :src="'../../static/'+p.pic">
                                <img v-else class="pro" :src="'../../static/'+p.pic1">
                            </router-link>
                            <p>{{p.title}}</p>
                            <p>648.00 CNY</p>
                            <div class="d-flex buy justify-content-center mt-5">
                                <div class="bg-dark">
                                    加入购物车
                                </div>
                                <div title="加入收藏" class="love">
                                    <img src="../assets/img/heart_1.png" alt=""/>
                                    <input type="hidden" value="false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--左右切换的箭头-->
                    <div @click="lastPage()" class="last_page"></div>
                    <div @click="nextPage()" class="next_page"></div>
                </div>
            </div>
            <!-- 全新搭配串饰 end-->
            <!-- 按价格浏览 start-->
            <div class="bg-pink w-100 pt-4 pb-5">
                <h2 class="text-center my_font_family">按价格浏览</h2>
                <div class="d-flex justify-content-center mt-4">
                    <img src="../assets/img/right.png" /><span class="my_font_family font-20 mr-5">1000元以下礼品</span>
                    <img src="../assets/img/right.png" /><span class="my_font_family font-20">1000-2500元礼品</span>
                </div>
            </div>
            <!-- 按价格浏览 end-->
            <!-- 帮她搭配一副耳饰 start-->
            <div id="earring" class="valentine mb-5">
                <h2>帮她搭配一副耳饰</h2>
                <!-- 耳饰商品展示-->
                <div class="my-big">
                    <div :style="{'margin-left':left+'px'}" class="valen-prod d-flex d-inline-flex flex-nowrap">
                        <div v-for="(p,i) of product2" :key="i" class="prod_box border border-light pb-5">
                            <router-link to="/details/1">
                                <img class="pro" alt="花木兰耳钉" title="花木兰耳钉" :src="'../../static/'+p.pic">
                            </router-link>
                            <p>{{p.title}}</p>
                            <p>{{p.price}} CNY</p>
                            <div class="d-flex buy justify-content-center mt-5">
                                <div class="bg-dark">
                                    加入购物车
                                </div>
                                <div title="加入收藏" class="love">
                                    <img src="../assets/img/heart_1.png" alt=""/>
                                    <input type="hidden" value="false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--左右切换的箭头-->
                    <div @click="lastPage()" class="last_page"></div>
                    <div @click="nextPage()" class="next_page"></div>
                </div>
            </div>
            <!-- 帮她搭配一副耳饰 end-->
            <!--图片展示 start-->
            <div class="row mx-0 mt-4">
                <div class="col-lg-6 col-md-12 px-0">
                    <div class="mr-lg-2 mb-sm-3 my-big">
                        <img class="w-100" src="../assets/img/collage-tall.jpg" alt=""/>
                        <div class="box_left po-abs-left-bottom">
                            <p>让她感动的更多方式</p>
                            <p>情人节礼物创意</p>
                            <button class="btn btn-dark text-white">查看我们的指南</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 px-0">
                    <div class="ml-lg-2 my-big">
                        <img class="w-100" src="../assets/img/collage-medium.png" alt=""/>
                        <div class="box_left po-abs-left-bottom">
                            <button class="btn btn-dark text-white small_btn">
                                礼物套装
                            </button>
                        </div>
                    </div>
                    <div class="ml-lg-2 my-big">
                        <img class="w-100 mt-3" src="../assets/img/collage-small.png" alt=""/>
                        <div class="box_left po-abs-left-bottom">
                            <p>448.00 CNY 起</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--图片展示 end-->
            <!-- 她会喜欢的戒指  start-->
            <div id="ring" class="valentine mb-5">
                <h2>她会喜欢的戒指</h2>
                <div class="my-big">
                    <div :style="{'margin-left':left+'px'}" class="valen-prod d-flex d-inline-flex flex-nowrap">
                        <div v-for="(p,i) of product3" :key="i" class="prod_box border border-light pb-5"  @mouseover="changeImg(i)" @mouseleave="changeImg(10)" >
                            <router-link to="/details/1">
                                <img v-if="id!==i" class="pro" :src=" '../../static/'+p.pic">
                                <img v-else class="pro" :src="  '../../static/'+p.pic1">
                            </router-link>
                            <p>{{p.title}}</p>
                            <p>{{p.price.toFixed(2)}}CNY</p>
                            <div class="d-flex buy justify-content-center mt-5">
                                <div class="bg-dark">
                                    加入购物车
                                </div>
                                <div title="加入收藏" class="love">
                                    <img src="../assets/img/heart_1.png" alt=""/>
                                    <input type="hidden" value="false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--左右切换的箭头-->
                    <div @click="lastPage()" class="last_page"></div>
                    <div @click="nextPage()" class="next_page"></div>
                </div>
            </div>
            <!-- 她会喜欢的戒指 end-->

            <!-- 仍在寻找完美礼物 start-->
            <div class="parent mt-5 w-75">
                <h1 class="text-center">仍在寻找完美礼物</h1>
                <!-- 您的预算 -->
                <div class="card mt-5">
                    <div data-toggle="collapse" data-target="#one" class="card-header py-4">
                        您的预算是多少？
                        <img src="../assets/img/big_bottom.png" class="float-right" alt=""/>
                    </div>
                    <div id="one" class="collapse mb-5">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-4">
                                    <img src="../assets/img/right.png" /><span class="my_font_family font-20 ">1000元以下礼品</span>
                                </div>
                                <div class="col-4">
                                    <img src="../assets/img/right.png" /><span class="my_font_family font-20">1000-2500元礼品</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 想送给谁 -->
                <div class="card">
                    <div data-toggle="collapse" data-target="#two" class="card-header py-4">
                        想送给谁？
                        <img src="../assets/img/big_bottom.png" class="float-right" alt=""/>
                    </div>
                    <div id="two" class="collapse mb-5">
                        <div class="card-body">
                                <div class="row">
                                    <div class="col-4">
                                        <img src="../assets/img/right.png" /><span class="my_font_family font-20">送母亲</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="../assets/img/right.png" /><span class="my_font_family font-20">送老婆/女朋友</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="../assets/img/right.png" /><span class="my_font_family font-20">送好友</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="../assets/img/right.png" /><span class="my_font_family font-20">送儿童</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="../assets/img/right.png" /><span class="my_font_family font-20">送毕业生</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="../assets/img/right.png" /><span class="my_font_family font-20">送伴娘</span>
                                    </div>
                                </div>
                        </div>
                    </div>

                </div>

                <!-- 按主题浏览 -->
                <div class="card">
                    <div data-toggle="collapse" data-target="#three" class="card-header py-4">
                        按主题浏览
                        <img src="../assets/img/big_bottom.png" class="float-right" alt=""/>
                    </div>
                    <div id="three" class="collapse mb-5">
                        <div class="card-body">
                                <div class="row">
                                    <div class="col-4">
                                        <img src="../assets/img/right.png" /><span class="my_font_family font-20">生日祝福</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="../assets/img/right.png" /><span class="my_font_family font-20">新婚礼物</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="../assets/img/right.png" /><span class="my_font_family font-20">浪漫爱情</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 仍在寻找完美礼物 end-->

            <!-- last part start-->
            <div class="last_part">
                <h1 class="text-center">送给她的情人节礼物</h1>
                <p class="text-center">了解我们的珠宝系列并找到适合女友、妻子或闺蜜的完美个性化情人节礼物。我们精美的手工制作珠宝不仅气质典雅，更采用了925银、18k金镀层925银芯和PANDORA Rose等上乘材料。</p>
            </div>
            <!-- last part end-->  
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
            product4:[],
            id:-1,
            left:0
        }
    },
    methods:{
        changeImg(i){
            this.id=i;
        },
        lastPage(){
            this.left=0;
            console.log(this.left)
        },
        nextPage(){
            this.left=-960;
            console.log(this.left)
        }
    },
    created(){
        fun.getProduct(result=>{
            this.product1=result.data.splice(0,6);
            this.product2=result.data.splice(0,6);
            this.product3=result.data.splice(0,6);
        })
    }
}
</script>
<style>
    @import '../assets/css/gift.css';
    @import '../assets/font/iconfont.css';
    @import '//at.alicdn.com/t/font_1357872_a69stxrzzv.css';
     .container .headder{
        width: 1349px;
        height: 149px;
    }
</style>