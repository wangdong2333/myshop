<template>
    <div>
      <!-- 首页导航栏 -->
      <van-nav-bar title="首页">
        <van-icon name="search" slot="left"></van-icon>
        <van-icon name="shopping-cart-o" slot="right"></van-icon>
      </van-nav-bar>

      <!-- 轮播图 -->
      <div class="carousel">
        <van-swipe :autoplay="3000">
        <van-swipe-item class="carousel-item" v-for=" (item,index)  in carouselItem" :key="index">
          <img v-lazy="item.imgSrc" alt="">
        </van-swipe-item>
        </van-swipe>
      </div>
    </div>
</template>

<script>

export default {
    data(){
      return{
        //轮播图
        carouselItem:[
            {
              name:'img1',
              imgSrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1041994715,1243354266&fm=26&gp=0.jpg"
            },
            {
              name:'img2',
              imgSrc:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=116744544,2055858210&fm=26&gp=0.jpg"
            },
            {
              name:'img3',
              imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1490457979,856070595&fm=200&gp=0.jpg"
            
            }
        ]
      }
    }
  }
</script>

<style lang="scss">
    .carousel{
      height: 3rem;
      &-item{
        img{
          width: 100%;
          height: 3rem;
        }

      }
    }
</style>

