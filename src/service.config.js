const MOCKURL = 'http://www.shangcheng.com/'; // mock模拟URL
const SERVERURL = 'http://localhost:3000/';//真实URL

let URL = {
    getVarietyItem : MOCKURL + "getVarietyItem",
    registUser:SERVERURL + "user/registUser",
    loginUser: SERVERURL + 'user/loginUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getDetail: SERVERURL + 'product/getDetail',
    addCart: SERVERURL + 'cart/addCart',
    getCart: SERVERURL + 'cart/getCart'


}

export default URL;
