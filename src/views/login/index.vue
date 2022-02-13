<template>
    <div class="login-container">

        <van-nav-bar class="page-nav-bar" title="登录"/>

        <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
            name="手机号"
            left-icon="phone-o"
            placeholder="请输入手机号"
            />
            <van-field
            name="验证码"
            placeholder="请输入验证码"
            />
        </van-cell-group>
        <!-- <i slot="left-icon" class="van-badge__wrapper van-icon van-icon-tv-o"></i> -->
        <div style="margin: 16px;">
            <van-button block type="primary" native-type="submit">
            登录
            </van-button>
        </div>
        </van-form>

    </div>

</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.login-container{
    .van-icon-phone-o{
        font-size: 37px;
    }
}
</style>
