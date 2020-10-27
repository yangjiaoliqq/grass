<template>
  <div class="tiny-box">
    <div class="container">
      <!-- 头部 -->
      <div class="pic-main">
        <img class="pic" src="../../assets/loanBanner1.52bb9bb.jpg" alt="" />
        <i class="iconfont icon-fanhui"></i>
        <div class="ad_box">
          <span class="title">微额借款</span>
          <span class="slogan">应急首选,解你燃眉之急</span>
        </div>
      </div>
      <!-- 产品要点 -->
      <div class="content">
        <div class="point">
          <p>
            <span class="point-title">产品要点</span>
          </p>
          <div class="point-list">
            <ul>
              <li>
                <span>借款金额</span>
                <span>500元</span>
              </li>
              <li>
                <span>借款金额</span>
                <span>500元</span>
              </li>
              <li>
                <span>借款金额</span>
                <span>500元</span>
              </li>
              <li>
                <span>借款金额</span>
                <span>500元</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 需要资料 -->
      <div class="content">
        <div class="point">
          <p>
            <span class="point-title">需要资料</span>
          </p>
          <div class="point-list">
            <ul>
              <li>
                <span>1.本人身份证</span>
              </li>
              <li>
                <span>2.有实名认证的手机号码</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 产品特点 -->
      <div class="content">
        <div class="point">
          <p>
            <span class="point-title">产品特点</span
            ><i class="iconfont icon-shangjiantou"></i>
          </p>
          <div class="point-list">
            <ul>
              <li>
                <span
                  >借款金额借款金额借款金额借款金额借款金额借款金额借款金额借款金额借款金额借款金额借款金额借款金额借款金额</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 好借好还,再借不难 -->
      <div class="content last-con">
        <div class="point">
          <p>
            <span class="point-title">有借有还，再借不难</span
            ><i class="iconfont icon-shangjiantou"></i>
          </p>
          <div class="point-list">
            <ul>
              <li>
                <span>请勿提交虚假材料</span>
              </li>
              <li>
                <span>审核时间1-2天</span>
              </li>
              <li>
                <span>珍惜信用</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="btn-box">
        <van-button type="info" size="large">申请借款</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.tiny-box {
  .container {
    width: 100%;
    // 头部
    .pic-main {
      width: 100%;
      height: 180px;
      position: relative;
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
      .pic {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      .iconfont {
        position: absolute;
        top: 15px;
        left: 10px;
        font-size: 20px;
        color: #ffffff;
      }
      .ad_box {
        width: 100%;
        height: 60px;
        position: absolute;
        top: 60px;
        left: 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        .slogan {
          font-size: 18px;
        }
      }
    }
    // 产品要点
    .content {
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #ffffff;

      p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #f2f2f2;
      }
      .point-title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        font-weight: 600;
        color: #333;
      }
      .point-list {
        width: 100%;
        ul {
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          li {
            display: flex;
            justify-content: space-between;
            // margin-top: 10px;
            font-size: 14px;
            color: #333;
            line-height: 28px;
            // &:first-child {
            //   margin-top: 0px;
            // }
          }
        }
      }
    }
    .last-con {
      margin-bottom: 80px;
    }
    // 按钮
    .btn-box {
      width: 100%;
      height: 70px;
      background-color: #fff;
      padding: 10px;
      box-sizing: border-box;
      position: fixed;
      bottom: 0;
      left: 0;
      .van-button {
        border-radius: 5px;
      }
    }
  }
}
</style>