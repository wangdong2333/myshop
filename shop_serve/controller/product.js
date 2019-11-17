const mongoose = require('mongoose');
const Router = require('koa-router');
let router = new Router();
const fs = require('fs');//node自带fs模块读取本地文件

router.get("/insertProductInfo",async ctx =>{
    fs.readFile('./data/product.json','utf8',(err,data) =>{
        data = JSON.parse(data);//取到的是字符串 把字符串转化为对象
        console.log(data);
        let count = 0;//计数器
        const Product = mongoose.model('Product');
        data.map((value,index) =>{
            console.log(value);
            let product = new Product(value);
            product.type = Math.floor(Math.random() * 8)+1;
            product.save().then(() =>{
                count++;
                console.log("成功"+count)
            }).catch((err) =>{
                console.log("失败"+err)
            });
        })

    })
    ctx.body = '导入数据';
})

router.get('/getProductsByType', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.find({ type: ctx.query.typeId }).skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then(res => {
        ctx.body = res;
    })
});

router.get('/getDetail',async ctx =>{
    const Product = mongoose.model('Product');
    await Product.findOne({_id:ctx.query.id}).exec().then((res) =>{
        ctx.body = res;
    })
})

module.exports = router;

