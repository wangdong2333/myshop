const MOCKURL = 'http://www.shangcheng.com/'; // mock模拟URL
const SERVERURL = 'http://localhost:3000/';//真实URL

let URL = {
    getVarietyItem : MOCKURL + "getVarietyItem",
    registUser:SERVERURL + "user/registUser",
    loginUser: SERVERURL + 'user/loginUser',


}

export default URL;
