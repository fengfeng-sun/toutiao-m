<template>
    <div class="layout-container">
        <!-- 子路由出口 -->
        <router-view/>

        <!-- 标签导航栏 -->
        <!-- router: 开启路由模式 -->
        <van-tabbar class="layout-tabbar" v-model="active" router>
        <van-tabbar-item to="/">
            <template v-slot:icon>
              <i class="van-badge__wrapper van-icon van-icon-home-o"></i>
            </template>
            <span class="text">首页</span>
        </van-tabbar-item>
        <van-tabbar-item to="/qa">
            <template v-slot:icon>
              <i class="van-badge__wrapper van-icon van-icon-question-o"></i>
            </template>
            <span class="text">问答</span>
        </van-tabbar-item>
        <van-tabbar-item to="/video">
            <template v-slot:icon>
              <i class="van-badge__wrapper van-icon van-icon-tv-o"></i>
            </template>
            <span class="text">视频</span>
        </van-tabbar-item>
        <van-tabbar-item to="/my">
            <template v-slot:icon>
              <i class="van-badge__wrapper van-icon van-icon-user-o"></i>
            </template>
            <span class="text">我的</span>
        </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.layout-container{
    .layout-tabbar{
        i.van-badge__wrapper{
            font-size: 40px;
        }
        span.text{
            font-size: 20px;
        }
    }
}
</style>
