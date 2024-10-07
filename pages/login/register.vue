<template>
  <view class="register-container">
    <view class="logo-container">
      <image src="../../static/logo.png" mode="aspectFit" class="logo" />
    </view>
    <view class="form-container">
      <input 
        v-model="username" 
        type="text" 
        placeholder="用户名" 
        class="input-field"
      />
      <input 
        v-model="password" 
        type="password" 
        placeholder="密码" 
        class="input-field"
      />
      <input 
        v-model="confirmPassword" 
        type="password" 
        placeholder="确认密码" 
        class="input-field"
      />
      <button @click="register" class="register-button">注册</button>
      <view class="footer">
        <text class="footer-text" @click="goToLogin">已有账号? 登录</text>
      </view>
    </view>
  </view>
</template>

<script>
import request from '@/common/request.js'
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async register() {
      // 检查输入
      if (this.username && this.password && (this.password == this.confirmPassword)) {
        try {
          const response = await request('/user/register', 'POST', {
            username: this.username,
            password: this.password
          });

          if (response.status == "success") {
            uni.showToast({
              title: '注册成功',
              icon: 'success'
            });
            uni.navigateTo({
              url: '/pages/login/login' // 注册成功后跳转到登录页面
            });
          } else {
            uni.showToast({
              title: response.message || '注册失败',
              icon: 'none'
            });
          }
        } catch (error) {
          console.error('注册请求失败:', error);
          uni.showToast({
            title: '注册请求失败，请重试',
            icon: 'none'
          });
        }
      } else {
        uni.showToast({
          title: '请填写完整信息并确认密码',
          icon: 'none'
        });
      }
    },
    goToLogin() {
      uni.navigateTo({
        url: '/pages/login/login' // 登录页面
      });
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
  height: 100vh; /* 占满整个屏幕高度 */
  padding: 0 20px; /* 左右内边距 */
}

.logo-container {
  margin-bottom: 30px;
}

.logo {
  width: 80px;
  height: 80px;
}

.form-container {
  width: 100%;
  max-width: 350px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

.register-button {
  width: 100%;
  padding: 10px;
  background-color: #007AFF;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-button:hover {
  background-color: #0056b3;
}

.footer {
  text-align: center;
  margin-top: 20px;
}

.footer-text {
  color: #007AFF;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
}
</style>
