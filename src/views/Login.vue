<template>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="logo-box">
      
        <h2>TPTP泰国家管家</h2>
        <p>登 录</p>
      </div>

      <el-form :model="form">
        <el-form-item>
          <el-input
            v-model="form.username"
            placeholder="请输入账号"
            prefix-icon="User"
          />
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="form.password"
            type="password"
            show-password
            placeholder="请输入密码"
            prefix-icon="Lock"
          />
        </el-form-item>

        <el-form-item class="captcha-row">
          <el-input
            v-model="form.code"
            placeholder="请输入验证码"
          />
          <div class="captcha">7A2L</div>
        </el-form-item>

        <div class="options">
          <el-checkbox v-model="form.remember">记住我</el-checkbox>
          <span class="forget">忘记密码</span>
        </div>

        <el-button type="primary" class="login-btn" @click="login">
          登 录
        </el-button>

        <div class="other">
          其它登录方式
          <div class="icon"></div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
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
.login-wrapper {
  height: 100vh;
  background: linear-gradient(135deg, #e9f3ff, #f6f9ff);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 380px;
  padding: 35px 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.logo-box {
  text-align: center;
  margin-bottom: 25px;
}

.logo {
  width: 80px;
  margin-bottom: 10px;
}

.logo-box h2 {
  margin: 0;
  font-size: 18px;
}

.logo-box p {
  margin: 6px 0 0;
  color: #666;
  letter-spacing: 4px;
}

.captcha-row {
  display: flex;
  gap: 10px;
}

.captcha {
  width: 90px;
  background: #f2f2f2;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.forget {
  color: #409eff;
  cursor: pointer;
  font-size: 13px;
}

.login-btn {
  width: 100%;
  height: 42px;
  font-size: 16px;
}

.other {
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  color: #999;
}

.icon {
  margin: 10px auto 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #409eff, #66b1ff);
}
</style>
