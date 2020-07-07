<template>
  <div class="header">
    <slot name="left"></slot>
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
    margin-top: -12 / @rem;
    width: 24 / @rem;
    height: 24 / @rem;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 16 / @rem;
    &.icon {
        .bg-image('../../assets/imgs/左去');
    }
  }

  .right {
    position: absolute;
    top: 50%;
    margin-top: -3 / @rem;
    right: 16 / @rem;
    width: 26 / @rem;
    height: 6 / @rem;
    .bg-image('../../assets/imgs/more');
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>