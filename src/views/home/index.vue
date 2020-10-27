<template>
  <div class="home-box">
    <!-- 导航栏 -->
    <van-nav-bar class="home-navbar" title="草根金融" fixed />
    <div class="container">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img src="../../assets/loanBanner1.52bb9bb.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../../assets/loanBanner2.2bd63e8.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../../assets/loanBanner3.ad43349.jpg" alt=""
        /></van-swipe-item>
      </van-swipe>
      <!-- 列表 -->
      <div class="loans">
        <ul>
          <li v-for="(item, index) in List" :key="index">
              <!-- <i class="iconfont icon-qianbao"></i> -->
              <img class="img-icon" :src="item.img" alt="" />
            <p class="loans-txt">
              <span class="title">{{ item.title }}</span>
              <span class="txt">{{ item.desc }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { apihomeList } from "../../api/home";
export default {
  data() {
    return {
      bannerList: [],
      List: [],
    };
  },
  created() {
    this.getHomeList();
  },
  methods: {
    async getHomeList() {
      let res = await apihomeList();
      console.log(res);
      this.bannerList = res.data.banner_list;
      this.List = res.data.item_list;
    },
  },
};
</script>

<style lang="less">
html,
body {
  background-color: #f1f1f1;
}
.home-box {
  //导航栏
  .home-navbar {
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
    .my-swipe {
      width: 100%;
      height: 200px;
      .van-swipe-item {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 列表
    .loans {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li {
          width: 100%;
          height: 100px;
          padding: 10px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          border-bottom: 1px solid #f1f1f1;
          
            .img-icon {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              margin-right: 15px;
              border: 1px solid #f2f2f2;
            }
          
          // .img-one {
          //   background-color: rgb(245, 165, 67);
          // }
          // .img-two {
          //   background-color: rgb(75, 164, 234);
          // }
          // .img-three {
          //   background-color: rgb(46, 188, 145);
          // }
          .loans-txt {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
              font-size: 16px;
              color: #000;
            }
            .txt {
              font-size: 14px;
              color: #999;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
</style>