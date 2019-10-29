// 封装axios
import axios from "axios"

export default{
    getIndex(callback){
        axios.get('/index').then(callback);
    },
    getDetails(pid,callback){
        console.log(pid);
        axios.get(
            '/details',
            {params:{pid}}
        ).then(callback)
    },
    getProduct(callback){
        axios.get('/product').then(callback);
    },
    getLogin(callback){
        axios.get(
            '/login',
            {params:{uname,upwd}}
        ).then(callback)
    },
    getRegister(callback){
        axios.get(
            '/register',
            {params:{uname,phone,email,upwd}}
        ).then(callback)
    },
    getAddcart(callback){
        axios.get(
            '/addCart',
            {params:{
                    pid,
                    title,
                    price,
                    pic,
                }
            }
        ).then(callback)
    },
    getSearch(callback){
        axios.get('/searchCart').then(callback);
    }
}