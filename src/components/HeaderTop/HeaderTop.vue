<template>
  <div class="header">
    <slot name="left"></slot>
    <slot name="mid"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../assets/css/jike.less";

.header {
  height: 44 / @rem;
  position: relative;
  background-color: @color-primary;

  .left {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 16 / @rem;
    &.icon {
      width: 24 / @rem;
      height: 24 / @rem;
      .bg-image("../../assets/imgs/左去");
    }
    &.avatar {
      border-radius: 8 / @rem;
      width: 34 / @rem;
      height: 34 / @rem;
      background-image: url("../../assets/imgs/avatar/头像1.jpg");
    }
  }
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16 / @rem;
    background-size: contain;
    background-repeat: no-repeat;
    &.more {
      .bg-image("../../assets/imgs/more");
      width: 26 / @rem;
      height: 6 / @rem;
    }
    &.add {
      width: 24 / @rem;
      height: 24 / @rem;
      .bg-image("../../assets/imgs/添加");
    }
  }
}
</style>