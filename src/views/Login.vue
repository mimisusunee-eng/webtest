<template>
  <div class="login-bg">
    <div class="login-box">
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
          <div class="captcha">8K3P</div>
        </el-form-item>

        <div class="options">
          <el-checkbox v-model="form.remember">记住我</el-checkbox>
          <span class="forget">忘记密码?</span>
        </div>

        <el-button
          type="primary"
          size="large"
          class="login-btn"
          @click="login"
        >
          登 录
        </el-button>
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
.login-bg {
  height: 100vh;
  background: linear-gradient(135deg, #f0f4ff, #f9fbff);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 380px;
  padding: 38px 32px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.title {
  text-align: center;
  margin-bottom: 30px;
}

.title h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.title p {
  margin-top: 6px;
  font-size: 13px;
  color: #000000;
  letter-spacing: 1px;
}

.captcha-row {
  display: flex;
  gap: 12px;
}

.captcha {
  width: 100px;
  height: 40px;
  background: linear-gradient(135deg, #409eff, #66b1ff);
  color: #fff;
  border-radius: 6px;
  font-weight: bold;
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
  font-size: 13px;
}

.forget {
  color: #409eff;
  cursor: pointer;
}

.login-btn {
  width: 100%;
  height: 44px;
  font-size: 16px;
  border-radius: 6px;
}
</style>
