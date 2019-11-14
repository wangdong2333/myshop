<template>
  <div>
    <van-nav-bar title="购物车"></van-nav-bar>
    <div class="card">
      <van-card
        v-for="(item, index) in pruductList"
        :key="index"
        num="1"
        :price="item.price"
        :desc="item.company"
        :title="item.name"
        :thumb="item.img"
      >
        <div slot="footer">
          <van-button size="mini" @click="delCart(item._id, index)">删除</van-button>
        </div>
      </van-card>
    </div>
    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交付款" @submit="onSubmit"/>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      pruductList: []
    };
  },
  created() {
    //  验证用户是否登录
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$toast.fail("请先登录");
      setTimeout(() => {
        this.$router.push("/profile");
      }, 1000);
    } else {
      axios({
        url: url.getCart,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          console.log(res);
          for (let item of res.data) {
            this.pruductList.push(item.productId);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice(){
      return this.pruductList.reduce((sum, elem)=>{
            sum += elem.price;
            return sum;
        }, 0) * 10 * 10;
    }
  },
  methods:{
    onSubmit(){
      this.$toast.success("付款成功")
    },
    delCart(id,index){
      //前端删除
      this.pruductList.splice(index,1);
    }
  },
  
};
</script>

<style lang="scss" scoped>
.body{
  height: 10000px;
}
.submit-bar{
    margin-bottom: 1rem;
}
.card{
  position: fixed;
  top: 1rem;
  bottom: 100px;
  overflow-y: scroll;
  background: #fff;
}
</style>