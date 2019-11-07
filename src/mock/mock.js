import Mock from "mockjs"
import data from "./data.json"


Mock.mock("http://www.shangcheng.com/getList",{data1:data.List});

let Random = Mock.Random;

Mock.mock('http://www.shangcheng.com/getUser',{
    "name":Random.cname(),
    "age|18-35":1,
    "say|3":"万岁"
})

Mock.mock("http://www.shangcheng.com/Regexp",{
    "regexp1":/[a-z][A-Z][0-9]/,
    "regexp2":/\d{5,10}/
})

Mock.mock("http://www.shangcheng.com/obj",{
    "info|5-10":[
        {
            "index|+1":1,
            "name":"@first @last",
            'id': '@integer(10000,99999)',
            'date': '@datetime',
            'img': '@image("120x90")',
            'text': '@sentence(6, 22)'
        }
    ]
})

var productData = function(){
    let productList = []; // 存放农机信息的数组
    for(var i=0;i<100;i++){
        let product = {
            name: Random.ctitle(10, 16),
            "img":Random.dataImage('125x125', '农机' + Random.integer(1, 100)),
            "price": Random.integer(1000, 10000),
            // name1: Random.cname()
        }
        productList.push(product);
    }
    return productList;
}

Mock.mock("http://www.shangcheng.com/getVarietyItem",productData)