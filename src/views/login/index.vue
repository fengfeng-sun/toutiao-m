<template>
    <div class="login-container">

        <van-nav-bar class="page-nav-bar" title="登录"/>

        <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
            v-model="user.mobile"
            name="手机号"
            left-icon="phone-circle-o"
            placeholder="请输入手机号"
            :rules=userForRules.mobile
            type="number"
            maxlength="11"
            />
            <van-field
            v-model="user.code"
            name="验证码"
            left-icon="comment-circle-o"
            placeholder="请输入验证码"
            :rules=userForRules.code
            type="number"
            maxlength="6"
            >
            <!-- eslint.js配置有问题，电脑上需要检查 -->
            <template v-slot:left-icon>
                <i class="van-badge__wrapper van-icon van-icon-comment-circle-o"></i>
            </template>
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
import { login } from '@/api/user'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      userForRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '手机号格式不正确'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式不正确'
        }]
      }
    }
  },
  methods: {
    async onSubmit () {
      const user = this.user
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login(user)
        console.log('登录成功', res)
        this.$$toast.success('登录成功')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$$toast.fail('登录失败，请稍后重试', err)
        }
      }
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
