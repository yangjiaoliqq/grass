<template>
  <div class="login-box">
    <!-- 导航栏 -->
    <van-nav-bar
      class="login-navbar"
      title="登录"
      left-text="取消"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <!-- 内容 -->
    <div class="container">
      <div class="logo-con">
        <img src="../../assets/logoImg.f58bb1d.png" alt="" />
      </div>
      <!-- 账号密码 -->
      <van-cell-group>
        <van-field
          v-model="phone"
          type="phone"
          label="手机号"
          placeholder="请输入手机号码"
          right-icon="clear"
          :rules="[{ required: true, message: '请填写手机号码' }]"
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          right-icon="closed-eye"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="code"
          center
          clearable
          label="验证码"
          placeholder="获取短信验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #button>
            <van-button
              :disabled="isDisabled"
              size="small"
              type="info"
              @click="send"
              >{{ btntxt }}</van-button
            >
          </template>
        </van-field>
      </van-cell-group>
      <!-- 登录按钮 -->
      <div class="login-btn">
        <van-button type="info" size="large" @click="login">登录</van-button>
      </div>
      <!-- 文本 -->
      <div class="text-box">
        <span>马上注册</span>
        <span>忘记密码?</span>
      </div>
    </div>
  </div>
</template>

<script>
import { apiGetLogin, apiGetCode } from "../../api/user";
export default {
  data() {
    return {
      phone: "18888888888",
      password: "888888",
      code: "",
      sms: "",
      btntxt: "获取验证码",
      isDisabled: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    // 登录
    login() {
      if (!this.verify()) {
        return;
      }
      if (this.code.trim().length === 0) {
        return;
      }
      // 自定义登录的加载效果
      this.$toast.loading({
        message: "登录中...",
        forbidClick: true,
        loadingType: "spinner",
        duration: 1000, //展示时长
      });
      setTimeout(async () => {
        let res = await apiGetLogin({
          phone: this.phone,
          password: this.password,
          code: this.code,
        });
        console.log(res);
        if (res.data.code === "1") {
          this.$toast.success(res.data.msg);
          this.$router.push("/home");
        }
      }, 1000);
    },
    // 封装一个验证的方法
    verify() {
      // 定义变量用来分别表示手机号和验证码是否通过的标识
      let phoneFlag = true;
      let codeFlag = true;
      let passwordFlag = true;
      // 正则验证手机号码
      if (!/^1[345789]\d{9}$/.test(this.phone)) {
        this.phone = "请输入正确的手机号";
        this.phone = "";
        phoneFlag = false;
      }
      if (this.code !== this.sms) {
        this.code = "请输入正确的验证码";
        this.code = "";
        codeFlag = false;
      }
      if (this.password != 888888) {
        this.password = "请输入正确的验证码";
        this.password = "";
        passwordFlag = false;
      }
      // 返回通过的结果
      return phoneFlag && codeFlag && passwordFlag;
    },
    // 发送短信
    async send() {
      let res = await apiGetCode({
        phone: this.phone,
      });
      console.log(res.data.data);
      this.sms = res.data.data;
    },
  },
};
</script>

<style lang="less">
html,
body {
  background-color: #fff;
}
.login-box {
  //导航栏
  .login-navbar {
    background-color: rgb(50, 151, 253);
    .van-icon-arrow-left {
      color: #ffffff;
      ::before {
        color: #ffffff;
      }
    }
    .van-nav-bar__text {
      color: #ffffff;
      ::before {
        color: #ffffff;
      }
    }
    .van-nav-bar__title {
      color: #ffffff;
      font-weight: 600;
    }
  }
  //   内容
  .container {
    width: 100%;
    height: 100%;
    margin-top: 46px;
    .logo-con {
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      img {
        width: 100px;
        height: 150px;
      }
    }
    // 删除图标颜色
    .van-icon-clear {
      color: rgb(204, 204, 204);
    }
    // 登录按钮
    .login-btn {
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      .van-button {
        border-radius: 6px;
      }
    }
    //文本
    .text-box {
      width: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>