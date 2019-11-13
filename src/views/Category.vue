<template>
  <div>
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <!-- :class="{active:active==index} 当active==index时结果为true active样式好使-->
            <li
              @click="selectCategory(item.typeId,index)"
              :class="{active:active==index} "
              v-for="(item,index) in types"
              :key="index"
            >{{item.typeName}}</li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="content" @load="onLoad" v-model="isLoading" :finished="finished" finished-text="没有更多了">
              <div class="content-item" v-for="(item,index) in productList" :key="index">
                <img :src="item.img" alt />
                <p class="content-item-name">{{ item.name }}</p>
                <p class="content-item-price">￥{{ item.price }}</p>
              </div>
            </van-list>
          </van-pull-refresh>
          
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";

export default {
  data() {
    return {
      types: [], // 类型信息
      active: 0,
      productList: [],
      typeId: 1, // 当前选中类型的id
      start: 0,
      limit: 10,
      finished: false,//判断是否数据取完
      isLoading: false,//下拉加载
    };
  },
  created() {
    axios({
      url: url.getTypes
    })
      .then(res => {
        console.log(res);
        this.types = res.data;
        this.selectCategory(this.typeId, this.active);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.finished = false;
      this.getProductList();
    },
    getProductList() {
      // console.log("11")
      axios({
        url: url.getProductsByType,
        method: "get",
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            this.finished = true;
          }
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onLoad() {
      setTimeout(() =>{
        this.getProductList();
      },1000)
    },
    onRefresh(){
      setTimeout(() => {
        this.productList = [];
        this.getProductList();
      }, 2000);
    }
  }
};
</script>
<style lang="scss">
.nav {
  background: #eee;
  li {
    height: 0.7rem;
    line-height: 0.7rem;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
    border-top: 1px solid #eee;
  }
  .active {
    background: #ffffff;
  }
}
.container {
  position: fixed;
  right: 0;
  top: 46px;
  bottom: 1rem;
  overflow-y: scroll;
  background: #fff;
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  &-item {
    width: 40%;
    padding: 0 10px;
    text-align: center;

    img {
      height: 2rem;
      width: 2rem;
    }
    &-name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
