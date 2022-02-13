<template>
    <div class="login-container">

        <van-nav-bar class="page-nav-bar" title="登录"/>

        <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
            name="手机号"
            left-icon="phone-circle-o"
            placeholder="请输入手机号"
            />
            <van-field
            name="验证码"
            left-icon="comment-circle-o"
            placeholder="请输入验证码"
            >
            <!-- <i slot="left-icon" class="van-badge__wrapper van-icon van-icon-comment-circle-o"></i> -->
            <template #button>
                <van-button class="send-sms-btn" round size="mini" type="default">发送验证码</van-button>
            </template>
            </van-field>
        </van-cell-group>
        <div class="login_btn_wrap">
            <van-button class="login_btn" block type="primary" native-type="submit">
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
    .van-badge__wrapper{
        font-size: 50px;
    }
    .send-sms-btn{
        width: 152px;
        height: 46px;
        line-height: 46px;
        font-size: 22px;
        color: #666;
        background-color: #ededed;
    }
    .login_btn_wrap{
        padding: 53px 33px;
        .login_btn{
            background-color: #6db4fb;
            border: none;
        }
    }
}

</style>
