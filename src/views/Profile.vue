<template>
    <div>
      <van-tabs>
        <van-tab title="登录">
          <van-cell-group>
            <!-- required表示必填   clearable 表示输入完之后可以一键清空 -->
            <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUsername"></van-field>
            <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="loginPassword"></van-field>
            <van-button @click="loginHandler" type="primary" size="large">登录</van-button>

          </van-cell-group>
        </van-tab>
        <van-tab title="注册">
          <van-cell-group>
            <!-- required表示必填   clearable 表示输入完之后可以清空 -->
            <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="registUsername"></van-field>
            <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="registPassword"></van-field>
            <van-button @click="registHandler" type="primary" size="large">注册</van-button>
         
          </van-cell-group>
        </van-tab>
  
      </van-tabs>
    </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapActions } from "vuex";

export default {
    data() {
      return {
        loginUsername:'',
        loginPassword:'',
        registUsername:'',
        registPassword:'',
      }
    },
    methods: {
      ...mapActions(['loginAction']),
      registHandler(){
        axios({
          url: url.registUser,
          method: "post",
          data: {
            userName: this.registUsername,
            password: this.registPassword
          }
      })
      .then(res => {
          if (res.data.code == 200) {
            this.$toast.success("注册成功");
            this.registUsername = this.registPassword = "";
          } else {
            this.$toast.fail("注册失败");
          }
      console.log(res);
        })
        .catch(err => {
          console.log(err);
          this.$toast.fail("注册失败");

        });
    },
      loginHandler(){
         axios({
          url: url.loginUser,
          method: "post",
          data: {
            userName: this.loginUsername,
            password: this.loginPassword
          }
      })
      .then(res =>{
        console.log(res);
        this.$toast.success("登录成功");
        //保存登录状态
        // this.loginAction(this.loginUsername);
        this.loginAction(res.data.userInfo);
        this.registUsername = this.registPassword = "";
        // this.$router.push('/');
        this.$router.go(-1);

      }) 
      .catch(err =>{
        console.log(err);
        this.$toast.fail("登录失败");
      })
    }
  }
}
</script>
