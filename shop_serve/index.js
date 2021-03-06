const Koa = require('koa');
const app = new Koa();


// 解决跨域问题
const cors = require('koa2-cors');
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}));

// 接收前端post请求
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// 加载路由（不是随便在controller下建一个文件它就是控制器的，需要加载路由）
const Router = require('koa-router');
let user = require('./controller/user.js');
let product = require('./controller/product.js');
let type = require('./controller/type.js');
let cart = require('./controller/cart.js');


let router = new Router();
router.use('/user', user.routes());//这个/user的名字必须和前端的匹配
router.use('/product', product.routes());
router.use('/type', type.routes());
router.use('/cart',cart.routes());


app.use(router.routes());
app.use(router.allowedMethods());//方法的目的是如果前端是get这面接收必须是get 如果是post，这面必须是post



const { connect, initSchemas } = require('./init.js');
(async () => {
    await connect();
    initSchemas();
})();



app.use(async (ctx) => {
    ctx.body = 'hello';
})

app.listen(3000, () => {
    console.log('start shop server');
});