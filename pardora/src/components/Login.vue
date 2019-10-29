<template>
<div>
    <my-header></my-header>
    <div class="container">
        <div class="headder"></div>
        <div class="parent">
                <div class="d1">
                <p>已经是会员了？</p>
                <input class="input_1" type="email" placeholder="姓名*" v-model="uname">
                <input class="input_2" type="password" placeholder="密码*" name="password" v-model="upwd">
                <div class="dd1">
                    <input id="rm" class="rm_1" type="checkbox">
                    <label for="rm"></label>
                    <span>记住我</span>
                </div>
                <a href="">忘记密码？</a>
                <div class="btn_login" style="height:43px" @click="login">
                    <router-link to="">登录</router-link>
                </div>
                </div>
                <div class="d2" align="center">
                    <div class="cm_a1"><a  href="">加入并获得福利</a></div>
                    <a class="cm_a2" href="">作为PANDORA俱乐部会员，您可以享受轻松结账 专属优惠、特殊礼遇等更多服务</a>
                    <div class="btn_login1"  style="height:43px"><a href="">成为会员</a></div>
                </div>
        </div>
    </div>
    <my-footer></my-footer>
</div>
</template>
<script>
import fun from '@/assets/js/fun.js'
export default {
    data(){
        return{
            uname:'',
            upwd:''
        }
    },
    methods:{
        login(){
            var uname=this.uname;
            var upwd=this.upwd;
            console.log(uname);
            console.log(upwd);
            this.axios.get(
                '/login',
                {params:{
                    uname,
                    upwd
                    }
                }
            ).then(res=>{
                if(res.data=='登录成功')
                console.log(res);
                this.$router.push('/index')
            })
            // fun.getLogin({uname,upwd}).then(res=>{
                
            // })
        }
    }
}
</script>
<style>
    @import '../assets/css/login.css';
    @import '../assets/font/iconfont.css';
    @import '//at.alicdn.com/t/font_1357872_a69stxrzzv.css';
    .container .headder{
        width: 1349px;
        height: 149px;
    }
</style>