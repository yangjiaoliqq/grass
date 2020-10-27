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
          v-model="tel"
          type="tel"
          label="手机号"
          placeholder="请输入手机号码"
          right-icon="clear"
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          right-icon="closed-eye"
        />
        <van-field
          v-model="sms"
          center
          clearable
          label="验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" type="info">发送验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
      <!-- 登录按钮 -->
      <div class="login-btn">
        <van-button type="info" size="large">登录</van-button>
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
export default {
  data() {
    return {
      tel: "",
      password: "",
      sms: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
      console.log("返回啦");
    },
  },
};
</script>

<style lang="less">
html,body {
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