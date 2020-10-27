<template>
  <div class="user-box">
    <!-- 导航栏 -->
    <van-nav-bar class="user-navbar" title="草根金融" fixed />
    <div class="container">
      <div class="info-main">
        <div class="info-hp">
          <img class="header-img" src="../../assets/010.jpg" alt="头像" />
          <div class="info">
            <span class="name">您好</span>
            <span class="tel">159****0330</span>
            <p class="iden">
              <span class="xue"
                ><i class="iconfont icon-renzheng"></i>学徒</span
              >
              <span class="up"
                ><i class="iconfont icon-huangguan"></i>白手起家</span
              >
            </p>
          </div>
        </div>
        <div class="info-bp">
          <p class="apply-for">
            <span>申请借款</span>
            <span class="num">1 笔</span>
          </p>
          <p class="to-be">
            <span>待还借款</span>
            <span class="num">0 笔</span>
          </p>
        </div>
      </div>
      <van-cell is-link v-for="(item, index) in loanList" :key="index">
        <template #title>
          <i class="iconfont" :class="item.icon"></i>
          <span class="custom-title">{{ item.title }}</span>
        </template>
      </van-cell>
      <van-button type="default" size="large" @click="loginOut"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loanList: [
        {
          title: "我的借款",
          icon: "icon-jiekuan",
        },
        {
          title: "我的还款",
          icon: "icon-huankuan",
        },
        {
          title: "我的奖励",
          icon: "icon-jiangli",
        },
        {
          title: "帮助中心",
          icon: "icon-bangzhu",
        },
        {
          title: "意见反馈",
          icon: "icon-yijianfankui",
        },
        {
          title: "关于我们",
          icon: "icon-guanyu",
        },
      ],
    };
  },
  methods: {
    loginOut() {
      // 退出登录
      this.$dialog
        .confirm({
          title: "提示",
          message: "您是否要退出?",
        })
        .then(() => {
          // on confirm
          // 确认
          this.$router.push('/login')
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>

<style lang="less">
html,
body {
  background-color: #f1f1f1;
}
.user-box {
  //导航栏
  .user-navbar {
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
    .info-main {
      width: 100%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      .info-hp {
        width: 100%;
        height: 100px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f2f2f2;
        .header-img {
          margin-right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 14px;
          .name {
            color: #333;
          }
          .tel {
            color: #ccc;
            margin-top: 5px;
          }
          .iden {
            margin-top: 5px;
            font-size: 12px;
            color: #999;
            .xue {
              margin-right: 40px;
              .iconfont {
                font-size: 20px;
              }
            }
            .iconfont {
              color: rgb(50, 151, 253);
            }
          }
        }
      }
      .info-bp {
        width: 100%;
        height: 50px;
        font-size: 14px;
        color: #333;
        display: flex;
        justify-content: space-between;
        .apply-for {
          width: 50%;
          height: 100%;
          padding: 5px 0;
          box-sizing: border-box;
          border-right: 1px solid #f2f2f2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .to-be {
          flex: 1;
          height: 100%;
          padding: 5px 0;
          box-sizing: border-box;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .num {
          font-size: 18px;
          color: rgb(50, 151, 253);
        }
      }
    }
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
    // 按钮
    .van-button {
      margin-top: 15px;
    }
  }
}
</style>