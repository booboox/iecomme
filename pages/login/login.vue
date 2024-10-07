<template>
  <view class="login-container">
    <view class="logo-container">
      <image src="../../static/1.webp" mode="aspectFit" class="logo" />
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
      <button @click="login" class="login-button">登录</button>
      <view class="footer">
        <text class="footer-text" @click="goToRegister">还没有账号? 注册</text>
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
      password: ''
    };
  },
  methods: {
    async login() {
      // 登录逻辑，调用API
      if (this.username && this.password) {
        try {
          const response = await request('/user/login', 'POST', {
            username: this.username,
            password: this.password
          });
          console.log('响应:', response); 
          if (response.status === "success") {
            uni.showToast({
              title: '登录成功',
              icon: 'success'
            });
            uni.setStorageSync('token', response.token);
            this.fetchUserData();
            uni.redirectTo({
              url: '/pages/home/home' 
            });
          } else {
            uni.showToast({
              title: response.message || '登录失败',
              icon: 'none'
            });
          }
        } catch (error) {
          console.error('登录请求失败:', error);
          uni.showToast({
            title: '登录请求失败，请重试',
            icon: 'none'
          });
        }
      } else {
        uni.showToast({
          title: '请填写用户名和密码',
          icon: 'none'
        });
      }
    },
    async fetchUserData() {
      const token = uni.getStorageSync('token');
      try {
        const response = await request('/user', 'GET', {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        if (response.status === "success") {
          console.log('用户信息:', response.user);
        } else {
          uni.showToast({
            title: response.message || '获取用户信息失败',
            icon: 'none'
          });
        }
      } catch (error) {
        uni.showToast({
          title: '请求失败',
          icon: 'none'
        });
        console.error(error);
      }
    },
    goToRegister() {
      uni.navigateTo({
        url: '/pages/login/register' 
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, #4A90E2, #50E3C2); /* 渐变背景 */
  height: 100vh; 
  padding: 0 20px; 
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
  max-width: 350px; /* 更小的最大宽度，更适合手机 */
  background-color: #ffffff;
  border-radius: 12px; /* 圆角 */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); /* 阴影 */
  padding: 25px; /* 内边距 */
}

.input-field {
  width: 100%;
  padding: 14px; /* 增加内边距 */
  margin: 10px 0; /* 减少上下间距 */
  border: 1px solid #ccc;
  border-radius: 8px; /* 圆角 */
  font-size: 16px; /* 较大字体 */
  transition: border-color 0.3s; /* 边框颜色过渡 */
}

.input-field:focus {
  border-color: #007AFF; /* 聚焦时边框颜色 */
  outline: none; /* 去掉默认轮廓 */
}

.login-button {
  width: 100%;
  padding: 14px; /* 增加内边距 */
  background-color: #007AFF; 
  color: #ffffff;
  border: none;
  border-radius: 8px; /* 圆角 */
  font-size: 18px; /* 大字体 */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s; /* 动画效果 */
}

.login-button:hover {
  background-color: #0056b3; 
  transform: scale(1.05); /* 悬停时稍微放大 */
}

.footer {
  text-align: center;
  margin-top: 25px;
}

.footer-text {
  color: #007AFF;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px; /* 大字体 */
}
</style>
