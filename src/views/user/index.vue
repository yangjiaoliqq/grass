<template>
  <div class="user-box" v-cloak>
    <!-- 导航栏 -->
    <van-nav-bar class="user-navbar" title="草根金融" fixed />
    <div class="container">
      <div class="info-main">
        <div class="info-hp">
          <img class="header-img" :src="userInfo.avatar" alt="头像" />
          <div class="info">
            <span class="name">{{ userInfo.username }}</span>
            <span class="tel">{{ userInfo.phone | telfilter }}</span>
            <div class="iden">
              <p
                class="badge"
                v-for="(item, index) in userInfo.badge_list"
                :key="index"
              >
                <img class="badge-icon" :src="item.icon" alt="" />
                <span class="badge_name">{{ item.name }}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="info-bp">
          <p class="apply-for">
            <span>申请借款</span>
            <span class="num">{{ borrowList.apply_num }} 笔</span>
          </p>
          <p class="to-be">
            <span>待还借款</span>
            <span class="num">{{ borrowList.return_num }} 笔</span>
          </p>
        </div>
      </div>
      <van-cell is-link v-for="(item, index) in loanList" :key="index">
        <template #title>
          <!-- <i class="iconfont" :class="item.icon"></i> -->
          <img class="icon" :src="item.icon" alt="" />
          <span class="custom-title">{{ item.name }}</span>
        </template>
      </van-cell>
      <van-button type="default" size="large" @click="loginOut"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script>
import { apiGetInfo } from "../../api/user";
export default {
  data() {
    return {
      uid: 1,
      loanList: [],
      borrowList: {},
      userInfo: {},
    };
  },
  created() {
    this.getLoan();
  },
  methods: {
    // 获取首页列表
    async getLoan() {
      let res = await apiGetInfo(this.uid);
      console.log(res);
      this.userInfo = res.data.data.user_info;
      this.loanList = res.data.data.menu_list;
      this.borrowList = res.data.data.borrow_info;
    },
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
          this.$router.push("/login");
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
   [v-cloak] {
    display: none!important;
  }
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
            display: flex;
            justify-content: flex-start;
            .badge {
              width: 30%;
              display: flex;
              align-items: center;
              .badge-icon {
                width: 14px;
                height: 14px;
                margin-right: 5px;
              }
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
      // .iconfont {
      //   margin-right: 15px;
      //   color: rgb(50, 151, 253);
      //   font-size: 24px;
      // }
      .icon {
        width: 20px;
        height: 20px;
        // border-radius: 50%;
        margin-right: 15px;
      }
      // .icon-mini {
      //   font-size: 20px;
      // }
      // .icon-big {
      //   font-size: 26px;
      // }
    }
    // 按钮
    .van-button {
      margin-top: 15px;
    }
  }
}
</style>