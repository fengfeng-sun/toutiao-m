<template>
  <div id="nav">
    <h1 class='xh1'>爱吃肉的瘦子</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
  </div>
  <div class="box">Hello World</div>
  <!-- 路由出口 -->
  <router-view/>
</template>
<script>
export default {
  name: 'nav'
}
</script>
<style lang="less">
.xh1{
  background-color: aqua;
}
.box{
  width: 200px;
  height: 100px;
  background-color: antiquewhite;
}
</style>
