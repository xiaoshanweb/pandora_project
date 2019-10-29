<template>
<div>
    <my-header></my-header>
    <div class="container">
        <div class="headder"></div>
        <div class="parent"> 
            <div class="d1">
                <p>创建账户</p>
                <input class="input_1" type="text" placeholder="姓名*" name="uname" v-model="uname">
                <div class="nesscity" :class="show?'d-none':''">姓名只能输入1-10个中文</div>
                <div> 
                    <input class="input1 date" type="text" placeholder="年份*" name="date">
                    <input class="input1 month" type="text" placeholder="月份*" name="month">
                    <input class="input1 year" type="text" placeholder="日期*" name="year">
                </div>
                <input class="input1" type="text" placeholder="手机号码*" name="phone" v-model="phone">
                <div class="nesscity"  :class="show?'d-none':''">请输入正确的电话号码格式</div>
                <input class="input1" type="email" placeholder="电邮*" name="email" v-model="email">
                <div class="nesscity"  :class="show?'d-none':''">请输入正确的电子邮件格式</div>
                <input class="input1" type="password" placeholder="密码*" name="password" v-model="upwd">
                <div class="nesscity"  :class="show?'d-none':''">密码只能输入6-18个字母、数字</div>
                <input class="input_2" type="password" placeholder="确认密码*" name="isPassword">
                <div class="nesscity"  :class="show?'d-none':''">两次密码输入不一致</div>
                <div>
                    <input id="cb_yes"  class="c1" type="checkbox">
                    <label for="cb_yes"></label>&nbsp;同意PANDORA
                    <a href="" class="a11">隐私政策</a>
                </div>
                <div class="btn_register" @click="register"><p>创建账户</p></div>
            </div>
            <div class="d2">
                <p class="p1">加入并获得福利</p>
                <p class="p2">作为PANDORA俱乐部会员，您可以享受轻松结账、专属优惠、特殊礼遇等更多服务。</p>
            </div>
        </div>
    </div>
    <my-footer></my-footer>
</div>  
</template>
<script>
export default {
    data(){
        return{
            uname:'',
            phone:'',
            email:'',
            upwd:'',
            show:true
        }
    },
    methods:{
        register(){
            var u=this.uname;
            var ph=this.phone;
            var e=this.email;
            var p=this.upwd;
            var regU=/^[\u4e00-\u9fa5]{1,10}$/;
            var regPh=/^1[3|4|5|8]\d{9}$/;
            var regE=/\w+@\w+\.[a-z]{2,3}(\.[a-z]{2})?/;
            var regP=/^[A-Za-z0-9]{6,18}$/;
            if(regU.test(u)==false){
                this.show=!this.show;
                return;
            }
            if(regPh.test(ph)==false){
                this.show=!this.show;
                return;
            }
            if(regE.test(e)==false){
                this.show=!this.show;
                return;
            }
            if(regP.test(p)==false){
                this.show=!this.show;
                return;
            }
            var obj={
                uname:u,
                upwd:p,
                phone:ph,
                email:e
            }
            this.axios.get(
                '/register',
                {params:{
                        uname:u,
                        upwd:p,
                        phone:ph,
                        email:e
                    }
                }
            ).then(res=>{
                console.log(res);
                if(res.data=='注册成功'){
                   this.$router.push("/Login");
                }
            })
        }
    },
    mounted(){
       
    }
}
</script>
<style>
    @import '../assets/css/register.css';
    @import '../assets/font/iconfont.css';
    @import '//at.alicdn.com/t/font_1357872_a69stxrzzv.css';
     .container .headder{
        width: 1349px;
        height: 149px;
    }
</style>