<template>
  <view class="container">
    <view v-if="soldItems.length > 0">
      <text class="title">我卖出的宝贝</text>
      <view v-for="item in soldItems" :key="item.id" class="item">
        <image :src="item.image" class="item-image" />
        <text class="item-name">{{ item.name }}</text>
      </view>
    </view>
    <view v-else class="no-items">
      <image src="/static/555.jpg" class="no-items-image" />
      <text class="no-items-text">你还没有卖出过宝贝</text>
      <text class="no-items-subtext">别着急，宝贝总会遇到对的人</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      soldItems: [] // 模拟已卖出的宝贝列表
    };
  },
  mounted() {
    this.fetchSoldItems(); // 页面加载时获取已卖出的宝贝
  },
  methods: {
    fetchSoldItems() {
      // 这里可以替换为实际的 API 调用
      // 模拟数据
      this.soldItems = [
        // { id: 1, name: '闲置书籍', image: '/static/images/book.png' },
        // { id: 2, name: '旧玩具', image: '/static/images/toy.png' }
        // 如果想要测试“没有卖出过宝贝”的情况，可以将上面的数组清空
      ];
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
</style>
