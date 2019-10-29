const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const session=require('express-session');

var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:"",
    port:3306,
    database:'pandora',
    connectionLimit:15
});

var server=express();
server.use(cors({
    origin:['http://127.0.0.1:8080',"http://localhost:8080"],
    credentials:true  //每次请求时需要验证
}));
// 配置session模块
server.use(session({
    secret:'128位字符串',//安全字符串
    resave:true,//请求时更新数据
    saveUninitialized:true//保存初始数据
}))
// 配置项目静态目录
server.use(express.static("public"));
server.listen(4000);

// 验证用户注册
server.get('/register',(req,res)=>{
    var str=req.query;
    var sql='INSERT INTO user SET ?';
    pool.query(sql,[str],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            // res.send({code:200,msg:'注册成功'});
            var msg='注册成功';
            res.writeHead(200,{
                "Access-Control-Allow-Origin":"http://localhost:8080"
            })
            res.write(msg);
            res.end();
        }else{
            res.send({code:404,msg:'注册失败'});
        }
    })
});
// http://127.0.0.1:4000/register?uname=mary&upwd=1234&phone=12345678910&email=1234@qq.com
// http://127.0.0.1:4000/login?uname=mary&upwd=1234
// 验证用户登录
server.get('/login',(req,res)=>{
    var str=req.query;
    console.log(str);
    var sql='SELECT * FROM user WHERE uname=? AND upwd=?';
    pool.query(sql,[str.uname,str.upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            // console.log(result);
            req.session.uid = result[0].uid;
            var msg='登录成功';
            res.writeHead(200,{
                "Access-Control-Allow-Origin":"http://localhost:8080"
            })
            res.write(msg);
            res.end();
        }else{
            res.send({code:404,msg:'登录失败'})
        }
    });
});

//查询首页商品
server.get('/index',(req,res)=>{
    var sql='SELECT * FROM index_product';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.writeHead(200,{
                "Access-Control-Allow-Origin":"http://localhost:8080"
            })
            res.write(JSON.stringify(result));
            res.end();
            // res.send({code:200,msg:'查询成功',data:result})
        }else{
            res.send({code:404,msg:'查询失败'})
        }
    });
});
//查询商品
server.get('/product',(req,res)=>{
    var data={};
    var sql='SELECT * FROM product';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.writeHead(200,{
                "Access-Control-Allow-Origin":"http://localhost:8080"
            })
            res.write(JSON.stringify(result));
            res.end();
            // res.send({code:200,msg:'查询成功',data:result})
        }else{
            res.send({code:404,msg:'查询失败'})
        }
    });
});

// 详情页查询商品
server.get('/details',(req,res)=>{
    var pid=req.query.pid;
    var output={
        product:{},
        pics:[]
    }
    var sql='SELECT * FROM product WHERE pid=?';
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            output.product=result[0];
            var sql2='SELECT * FROM product_pic WHERE product_id=?';
            pool.query(sql2,[pid],(err,result)=>{
                if(err) throw err;
                console.log(result);
                if(result.length>0){
                    output.pics=result;
                    // res.send(output);
                    res.writeHead(200,{
                        "Access-Control-Allow-Origin":"http://localhost:8080"
                    })
                    res.write(JSON.stringify(output));
                    res.end();
                }else{
                    res.send({code:404,msg:'查询图片失败'})
                }
            })
        }else{
            res.send({code:404,msg:'查询商品失败'})
        }
    });
});
// 添加购物车
server.get('/addCart',(req,res)=>{
    var uid=req.session.uid;
    if(!uid){
        res.send({code:404,msg:"请登录"})
        return;
    }
    var pid=req.query.pid;
    var title=req.query.title;
    var pic=req.query.pic;
    var price=req.query.price;
   var sql='SELECT * FROM shopping_cart WHERE pid=?';
   pool.query(sql,[pid],(err,result)=>{
       if(err) throw err;
       if(result.length==0){
            var sql2 =  `INSERT INTO shopping_cart VALUES(null,${pid},'${title}',${price},'${pic}',1)`;
            pool.query(sql2,(err,result)=>{
                if(err) throw err;
                if(result.affectedRows>0){
                    // res.send({code:200,msg:'添加成功'})
                    var msg='添加成功';
                    res.writeHead(200,{
                        "Access-Control-Allow-Origin":"http://localhost:8080"
                    })
                    res.write(msg);
                    res.end();
                }else{
                    res.send({code:404,msg:'插入失败'})
                }
            })
       }else{
            var count=result[0].count;
            var sql2 = `UPDATE shopping_cart SET count=${count}+1 WHERE pid=?`;
            pool.query(sql2,[pid],(err,result)=>{
                if(err) throw err;
                console.log(result);
                if(result.affectedRows>0){
                    // res.send({code:200,msg:'数据修改成功'})
                    var msg='修改数据成功';
                    res.writeHead(200,{
                        "Access-Control-Allow-Origin":"http://localhost:8080"
                    })
                    res.write(msg);
                    res.end();
                }else{
                    res.send({code:404,msg:'数据修改失败'})
                }
            })
       }
   })
})
//http://127.0.0.1:4000/addcart?pid=1&title=串饰&price=999&pic=12344.jpg

//查看购物车
server.get('/searchCart',(req,res)=>{
    var uid=req.session.uid;
    if(!uid){
        res.send({code:404,msg:'请登录'});
        return;
    }
    var sql =  'SELECT * FROM shopping_cart';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            console.log(result)
            // res.send({code:200,msg:'success',data:result});
            res.writeHead(200,{
                "Access-Control-Allow-Origin":"http://localhost:8080"
            })
            res.write(JSON.stringify(result));
            res.end();
        }else{
            res.send({code:404,msg:'failed'});
        }
    })
})