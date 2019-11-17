const mongoose = require('mongoose');
const Router = require('koa-router');
let router = new Router();

router.post('/addCart',async ctx =>{
    const Cart = mongoose.model('Cart');
    const cart = new Cart(ctx.request.body);
    await cart.save().then(() =>{
        ctx.body = {
            message:"添加成功",
            code:200,
        }
    }).catch(err => {
        console.log(err);
        ctx.body = {
            code: 500,
            message: err
        };
    })
})

router.get('/getCart',async ctx =>{
    const Cart = mongoose.model('Cart');
    //populate('productId')  表示和关联的那个东西
    await Cart.find({ userId: ctx.query.userId }).populate('productId').exec().then(res => {
        ctx.body = res;
    });
})

module.exports = router;
