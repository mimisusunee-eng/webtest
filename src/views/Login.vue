<template>
  <div class="login-bg">
    <div class="login-box">
      <img :src="logo" class="logo" />

      <div class="title">
        <h2>TPTP 泰国家管家</h2>
        <p>登录</p>
      </div>

      <el-form :model="form">
        <el-form-item>
          <el-input
            v-model="form.username"
            placeholder="请输入账号"
            size="large"
            prefix-icon="User"
          />
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="form.password"
            type="password"
            show-password
            placeholder="请输入密码"
            size="large"
            prefix-icon="Lock"
          />
        </el-form-item>

        <el-form-item class="captcha-row">
          <el-input
            v-model="form.code"
            placeholder="请输入验证码"
            size="large"
          />
          <div class="captcha">7A2L</div>
        </el-form-item>

        <div class="options">
          <el-checkbox v-model="form.remember">记住我</el-checkbox>
          <span class="forget">忘记密码</span>
        </div>

        <el-button
          type="primary"
          size="large"
          class="login-btn"
          @click="login"
        >
          登 录
        </el-button>

        <div class="other-login">
          <div class="line">
            <span>其它登录方式</span>
          </div>

          <div class="icons">
            <img :src="wecom" class="wecom-icon" />
          </div>
        </div>

      </el-form>
    </div>
  </div>
</template>

<script setup>
import logo from '@/assets/logo.png'
import wecom from '@/assets/logowecom.png'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const form = reactive({
  username: '',
  password: '',
  code: '',
  remember: false
})

const login = () => {
  if (!form.username || !form.password) {
    return ElMessage.error('请输入账号和密码')
  }
  ElMessage.success('登录成功')
  router.push('/list')
}
</script>

<style scoped>
.login-bg {
  height: 100vh;
  background: linear-gradient(135deg, #e3e6f0, #f9fbff);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Comfortaa', sans-serif;
}

.login-box {
  width: 380px;
  padding: 38px 32px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.logo {
  display: block;
  margin: 0 auto 30px;
  width: 80px;
}

.title {
  text-align: center;
  margin-bottom: 36px;
}

.title h2 {
  margin: 0 0 10px;
  font-size: 22px;
  font-weight: 500;
}

.title p {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.captcha-row {
  display: flex;
  gap: 10px;
}

.captcha-row .el-input {
  flex: 1;
}

.captcha {
  width: 90px;
  height: 42px;
  background: linear-gradient(135deg, #ebeef0);
  color: #706d6d;
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
  cursor: pointer;
  user-select: none;
}

.options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
}

.forget {
  color: #409eff;
  cursor: pointer;
}

:deep(.el-input__wrapper) {
  height: 42px;
}

.login-btn {
  width: 100%;
  height: 46px;
  font-size: 16px;
  border-radius: 6px;
}

.other-login {
  margin-top: 24px;
  text-align: center;
}

.line {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  color: #999;
  font-size: 13px;
}

.line::before,
.line::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}

.line span {
  padding: 0 12px;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 22px;
}

.icons img {
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: 0.2s;
}

.other-login{
  font-size:18px;
  font-weight:800;
  color:#524f4f;
}

.icons img:hover {
  transform: scale(1.1);
}
</style>
