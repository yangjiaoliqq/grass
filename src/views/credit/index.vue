<template>
  <div class="credit-box">
    <!-- 导航栏 -->
    <van-nav-bar class="credit-navbar" title="草根金融" fixed />
    <div class="container">
      <van-cell is-link v-for="(item,index) in creditList" :key="index">
        <template #title>
          <i class="iconfont" :class="item.icon"></i>
          <span class="custom-title">{{item.title}}</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     creditList:[
       {
         title:'个人信息',
         icon:'icon-gerenxinxi icon-mini'
       },
       {
         title:'紧急联系人',
         icon:'icon-jinjilianxiren'
       },
       {
         title:'人脸识别',
         icon:'icon-saoma'
       },
       {
         title:'手机认证',
         icon:'icon-19'
       },
       {
         title:'工作信息',
         icon:'icon-tool-cabinet_icon icon-mini'
       },
       {
         title:'身份证认证',
         icon:'icon-credentials_icon'
       },
       {
         title:'公积金授权',
         icon:'icon-gongjijin icon-big'
       },
       {
         title:'社保授权',
         icon:'icon-shouquan'
       },
       {
         title:'储蓄卡流水导入',
         icon:'icon-shuaqiaqiapianyinhangqia'
       },
       {
         title:'芝麻信用授权',
         icon:'icon-zmxy'
       },
       {
         title:'银行卡信息',
         icon:'icon-yinxingqia'
       },
       {
         title:'查询央行征信',
         icon:'icon-zhengxin icon-big'
       },
       {
         title:'支付宝认证',
         icon:'icon-zhifubao'
       },
       {
         title:'其他资料',
         icon:'icon-qita'
       }
     ]
    };
  },
};
</script>

<style lang="less">
html,body {
    background-color: #f1f1f1;
}
.credit-box {
  //导航栏
  .credit-navbar {
    background-color: rgb(50, 151, 253);
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
    background-color: #f1f1f1;
    //单元格
    .van-cell {
      .iconfont {
        margin-right: 15px;
        color: rgb(50, 151, 253);
        font-size: 24px;
      }
      .icon-mini {
        font-size: 20px;
      }
      .icon-big {
        font-size: 26px;
      }
    }
  }
}
</style>