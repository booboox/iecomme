<template>
  <view class="container">
    <view v-if="publishedItems.length > 0">
      <text class="title">我发布的宝贝</text>
      <view v-for="item in publishedItems" :key="item.id" class="item">
        <image :src="item.image" class="item-image" />
        <text class="item-name">{{ item.name }}</text>
      </view>
    </view>
    <view v-else class="no-items">
      <image src="/static/555.jpg" class="no-items-image" />
      <text class="no-items-text">你还没有发布宝贝呢</text>
      <text class="no-items-subtext">别人的世界花里胡哨，你的世界空空如也~</text>
      <button class="publish-button" @click="navigateToPublish">发布宝贝</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      publishedItems: [] // 模拟已发布的宝贝列表
    };
  },
  mounted() {
    this.fetchPublishedItems(); // 页面加载时获取已发布的宝贝
  },
  methods: {
    fetchPublishedItems() {
      // 这里可以替换为实际的 API 调用
      // 模拟数据
      this.publishedItems = [
        // { id: 1, name: '闲置书籍', image: '/static/images/book.png' },
        // { id: 2, name: '旧玩具', image: '/static/images/toy.png' }
        // 如果想要测试“没有发布宝贝”的情况，可以将上面的数组清空
      ];
    },
    navigateToPublish() {
      uni.redirectTo({
        url: '/pages/Product/Product upload'
      });
    }
  }
};
</script>

<style>
.container {
  padding: 16px;
  background-color: #ffffff; /* 背景颜色改为白色 */
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center; /* 标题居中 */
}

.item {
  background-color: #f9f9f9; /* 项目背景颜色 */
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex; /* 使用 Flexbox */
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 水平居中对齐 */
}

.item-image {
  width: 60px; /* 设置图像宽度 */
  height: 60px; /* 设置图像高度 */
  border-radius: 6px;
  margin-bottom: 5px; /* 图像与文本之间的间距 */
}

.item-name {
  font-size: 18px;
  color: #333;
}

.no-items {
  text-align: center;
  margin-top: 50px;
  display: flex; /* 使用 Flexbox */
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 水平居中对齐 */
}

.no-items-image {
  width: 150px;
  height: 150px;
  margin-bottom: 10px; /* 图片下方间距 */
}

.no-items-text {
  font-size: 18px;
  color: #666;
  margin-top: 10px;
}

.no-items-subtext {
  font-size: 14px;
  color: #999;
  margin-top: 5px;
}

.publish-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff; /* 按钮背景颜色 */
  color: white; /* 按钮文字颜色 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.publish-button:hover {
  background-color: #0056b3; /* 悬停时按钮颜色 */
}
</style>
