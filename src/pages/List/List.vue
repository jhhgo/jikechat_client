<template>
  <div id="wrap">
        <!-- <div class="header">
            <div class="left"></div>
            <div class="mid"></div>
            <div class="right">
                <div class="search"></div>
                <div class="add"></div>
            </div>
        </div> -->
        <HeaderTop>
          <div class="left avatar" slot="left"></div>
          <div class="right add" slot="right"></div>
        </HeaderTop>
        <div class="list">
            <div class="item">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">阿活</div>
                    <div class="date">上午7:45</div>
                    <div class="msg">哈哈哈哈哈哈</div>
                </div>
            </div>
            <div class="item">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">阿活</div>
                    <div class="date">上午7:45</div>
                    <div class="msg">哈哈哈哈哈哈</div>
                </div>
            </div>
            <div class="item">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">阿活</div>
                    <div class="date">上午7:45</div>
                    <div class="msg">哈哈哈哈哈哈</div>
                </div>
            </div>
            <div class="item">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">阿活</div>
                    <div class="date">上午7:45</div>
                    <div class="msg">哈哈哈哈哈哈</div>
                </div>
            </div>
            <div class="item">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">阿活</div>
                    <div class="date">上午7:45</div>
                    <div class="msg">哈哈哈哈哈哈</div>
                </div>
            </div>
            <div class="item">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">阿活</div>
                    <div class="date">上午7:45</div>
                    <div class="msg">哈哈哈哈哈哈</div>
                </div>
            </div>
            <div class="item">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">阿活</div>
                    <div class="date">上午7:45</div>
                    <div class="msg">哈哈哈哈哈哈</div>
                </div>
            </div>
            <div class="item">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">阿活</div>
                    <div class="date">上午7:45</div>
                    <div class="msg">哈哈哈哈哈哈</div>
                </div>
            </div>
            <div class="item">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">阿活</div>
                    <div class="date">上午7:45</div>
                    <div class="msg">哈哈哈哈哈哈</div>
                </div>
            </div>
            <div class="item">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">阿活</div>
                    <div class="date">上午7:45</div>
                    <div class="msg">哈哈哈哈哈哈</div>
                </div>
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
}
</script>

<style lang="less" scoped>
@import "../../assets/css/jike.less";

#wrap {
    
    .list {
        width: 100%;
        .item {
            box-sizing: border-box;
            width: 100%;
            height: 52/@rem;
            padding: 0 16/@rem;
            margin: 5/@rem 0 0 0;
            .avatar {
                float: left;
                width: 48/@rem;
                height: 48/@rem;
                margin: 4/@rem 16/@rem 0 0;
                background-image: url('../../assets/imgs/avatar/头像2.jpg');
                background-size: cover;
                border-radius: 12/@rem;
            }
            .content {
                float: left;
                height: 48/@rem;
                width: 279/@rem;
                margin: 6/@rem 0 0 0;
                .name {
                    float: left;
                    font-size: 18/@rem;
                    font-weight: 400;
                    height: 25/@rem;
                    line-height: 25/@rem;
                    text-align: left;
                    letter-spacing: -1px/@rem;
                    color: #272832;
                }
                .date {
                    float: right;
                    font-size: 12/@rem;
                    height: 17@rem;
                    font-weight: 400;
                    text-align: left;
                    line-height: 17/@rem;
                    letter-spacing: 0;
                    color: rgba(39,40,50,0.4);
                }
                .msg {
                    height: 20/@rem;
                    font-size: 14/@rem;
                    line-height: 20/@rem;
                    letter-spacing: 0;
                    font-weight: 400;
                    color: rgba(39,40,50,0.6);
                    clear: both;
                }
            }
        }
    }
}
</style>