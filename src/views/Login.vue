<template>
  <div class="login-bg">
  <svg class="bg-svg" viewBox="0 0 1000 600" preserveAspectRatio="none">
    <line x1="50" y1="100" x2="300" y2="50" />
    <line x1="300" y1="50" x2="600" y2="120" />
    <line x1="600" y1="120" x2="850" y2="80" />
    <line x1="200" y1="300" x2="450" y2="260" />
    <line x1="450" y1="260" x2="700" y2="350" />
  </svg>
  <div class="dot dot1"></div>
  <div class="dot dot2"></div>
  <div class="dot dot3"></div>
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
          <div class="captcha" @click="refreshCode" title="点击刷新">
           {{ captchaCode }}
          </div>

        </el-form-item>

        <div class="options">
          <el-checkbox v-model="form.remember">记住我</el-checkbox>
          <span class="forget">忘记密码</span>
        </div>

        <el-button
          type="primary" 
          size="large"
          class="login-btn"
          @click="handleLogin"
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
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const form = reactive({
  username: '',
  password: '',
  code: '',
  remember: false
})

const captchaCode = ref('')
const handleLogin = login


function randomCode(len = 4) {
  const chars = 'ABCDEFGHJIKLMNOPQRSTUVWXYZ1234567890'
  let code = ''
  for (let i = 0; i < len; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

function refreshCode() {
  captchaCode.value = randomCode(4)
}

onMounted(() => {
  refreshCode()
})

function login() {
  if (!form.username || !form.password) {
    return ElMessage.error('请输入账号和密码')
  }

  if (!form.code) {
    return ElMessage.warning('请输入验证码')
  }

  if (form.code.toUpperCase() !== captchaCode.value) {
    ElMessage.error('验证码错误')
    refreshCode()
    form.code = ''
    return
  }

  localStorage.setItem('token', 'mock-token')
  localStorage.setItem('username', form.username)


  ElMessage.success('登录成功')
  router.push('/house/sale')
}
</script>


<style scoped>
.login-bg {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #e9f3ff, #f9fcff);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-svg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.bg-svg line {
  stroke: rgba(64, 158, 255, 0.25);
  stroke-width: 1;
}

.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #409eff;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(64, 158, 255, 0.8);
  animation: float 6s ease-in-out infinite;
}

.dot1 { top: 120px; left: 140px; }
.dot2 { top: 220px; right: 200px; animation-delay: 1s; }
.dot3 { bottom: 180px; left: 280px; animation-delay: 2s; }

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
  100% { transform: translateY(0); }
}

.login-box {
  width: 380px;
  padding: 42px 38px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0,0,0,.12);
  text-align: center;
  z-index: 5;
}


.login-bg::before,
.login-bg::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(64, 158, 255, 0.15);
}

.login-bg::before {
  width: 200px;
  height: 200px;
  left: -50px;
  top: 80px;
}

.login-bg::after {
  width: 300px;
  height: 300px;
  right: -100px;
  bottom: -100px;
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
  flex: 16px;
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
  margin-left: 10px;
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