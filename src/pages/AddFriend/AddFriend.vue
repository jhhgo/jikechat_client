<template>
  <div id="wrap">
    <HeaderTop>
      <div class="left icon" slot="left"></div>
      <div class="right" slot="right"></div>
    </HeaderTop>
    <div class="bg"></div>
    <div class="content">
      <div class="avatar"></div>
      <p>葫芦娃娃娃</p>
      <div class="msg">
        <p>你好哇哇哇哇哇哇哇哇哇</p>
      </div>
      <div class="btns">
        <a href="#">取消</a>
        <a href="#">发送</a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  components: {
    HeaderTop
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/jike";
@import "../../assets/css/clearfix";
@headerH: 44 / @rem;
#wrap {
  height: 100%;
  .bg {
    height: calc(~"100% - @{headerH} - 100px");
    background-color: @color-primary;
  }
  .content {
    position: absolute;
    top: 170 / @rem;
    width: 16rem;
    background-color: #ffffff;
    border-radius: 20 / @rem;
    .avatar {
      height: 120 / @rem;
      width: 120 / @rem;
      border-radius: 50%;
      border: 3px solid #ffffff;
      box-shadow: 0 18 / @rem 20 / @rem 0 rgba(39, 40, 50, 0.1);
      background-image: url("../../assets/imgs/avatar/头像3.jpg");
      background-size: cover;
      margin-left: 30 / @rem;
      margin-top: -60 / @rem;
    }

    p {
      font-size: 26 / @rem;
      letter-spacing: -1 / @rem;
      color: @text-color;
      margin-left: 30 / @rem;
      margin-top: 24 / @rem;
    }

    .msg {
      width: 319 / @rem;
      height: 360 / @rem;
      background-color: #f3f4f6;
      border-radius: 10 / @rem;
      margin: 20 / @rem auto 0 auto;
      p {
        font-size: 16 / @rem;
        letter-spacing: -1 / @rem;
        color: @text-color;
        margin-left: 11 / @rem;
      }
    }

    .btns {
      margin-top: 47 / @rem;
      margin-bottom: 50 / @rem;
      a:nth-child(1) {
        display: inline-block;
        height: 40 / @rem;
        width: 86 / @rem;
        background-color: rgba(39, 40, 50, 0.1);
        border-radius: 5 / @rem;
        text-align: center;
        line-height: 40 / @rem;
        margin-left: 17 / @rem;
        font-size: 16 / @rem;
        letter-spacing: -1 / @rem;
        margin-right: 16 / @rem;
        color: @text-color;
      }
      a:nth-child(2) {
        display: inline-block;
        height: 40 / @rem;
        width: 240 / @rem;
        border-radius: 5 / @rem;
        background-color: @color-primary;
        text-align: center;
        line-height: 40 / @rem;
        color: @text-color;
        font-size: 16 / @rem;
        letter-spacing: -1 / @rem;
      }
    }
  }
}
</style>