<template>
  <view class="container">
    <view class="header">
      <text class="title">iEComme</text>
      <text class="username">{{ username }}</text>
    </view>

    <view class="content">
      <!-- 个人信息板块 -->
      <view class="info-section">
        <text class="info-title">个人信息</text>
        <view class="info-item" @click="goToHelp">
          <text>帮助与客服</text>
        </view>
        <view class="info-item" @click="goToSettings">
          <text>设置</text>
        </view>
      </view>

      <!-- 我的交易板块 -->
      <view class="trade-section">
        <text class="trade-title">我的交易</text>
        <view class="trade-item" @click="goToPublished">
          <text>我发布的</text>
        </view>
        <view class="trade-item" @click="goToSold">
          <text>我卖出的</text>
        </view>
        <view class="trade-item" @click="goToBought">
          <text>我买到的</text>
        </view>
      </view>

      <!-- 消息板块 -->
      <view class="message-section">
        <text class="message-title">消息</text>
        <view class="message-item" @click="goToMessages">
          <text>查看消息</text>
        </view>
      </view>
    </view>

    <view class="footer">
      <text class="footer-item" @click="goToHome">首页</text>
      <view class="sell-button" @click="goToProductUpload">
        <text class="sell-button-text">卖闲置</text>
      </view>
      <text class="footer-item" @click="goToMyPage">我的</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: '张三',
      email: 'zhangsan@example.com',
      phone: '1234567890'
    };
  },
  methods: {
    goToHome() {
      uni.redirectTo({
        url: '/pages/home/home' 
      });
    },
    goToHelp() {
      uni.navigateTo({
        url: '/pages/help/help' // 请替换为帮助页面路径
      });
    },
    goToSettings() {
      uni.navigateTo({
        url: '/pages/settings/settings' // 请替换为设置页面路径
      });
    },
    goToPublished() {
      uni.navigateTo({
        url: '/pages/User/published' // 请替换为我发布的页面路径
      });
    },
    goToSold() {
      uni.navigateTo({
        url: '/pages/User/sold' // 请替换为我卖出的页面路径
      });
    },
    goToProductUpload() {
      uni.navigateTo({
        url: '/pages/Product/Product upload'
      });
    },
    goToBought() {
      uni.navigateTo({
        url: '/pages/User/bought' // 请替换为我买到的页面路径
      });
    },
    goToMessages() {
      uni.navigateTo({
        url: '/pages/User/message' // 请替换为消息页面路径
      });
    }
  }
};
</script>

<style>
.container {
  padding: 16px;
  background-color: #e5f4fa; /* 淡蓝色背景 */
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  background-color: #007aff; /* 蓝色头部背景 */
  padding: 10px;
  border-radius: 8px;
  color: white;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.username {
  font-size: 18px;
}

.content {
  flex: 1;
}

.info-section, .trade-section, .message-section {
  background-color: #ffffff; /* 白色背景 */
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-title, .trade-title, .message-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.info-item, .trade-item, .message-item {
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0; /* 浅灰色分隔线 */
  color: #007aff; /* 蓝色文本 */
  transition: background-color 0.3s;
}

.info-item:last-child, .trade-item:last-child, .message-item:last-child {
  border-bottom: none;
}

.info-item:hover, .trade-item:hover, .message-item:hover {
  background-color: #f0f8ff; /* 浅蓝色悬停效果 */
}

.footer {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #ddd;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.footer-item {
  font-size: 16px;
  color: #333;
}

.sell-button {
  width: 50px;
  height: 50px;
  background-color: #ff4500;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  top: -20px; /* 向上移动 */
}

.sell-button-text {
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 50px; /* 垂直居中 */
}
</style>
