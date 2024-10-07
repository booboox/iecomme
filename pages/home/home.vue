<template>
  <view class="container">
    <view class="header">
      <text class="title">二手骑行电商</text>
      <input class="search-bar" placeholder="搜索商品..." />
    </view>
    <view class="banner">
      <image class="banner-image" src="../../static/1.webp" mode="aspectFill" />
    </view>
    <view class="product-list">
      <view class="product-item" v-for="product in products" :key="product.id" @click="fetchProductData(product.id)">
        <image class="product-image" :src="product.images[0]" mode="aspectFill" />
        <view class="product-info">
          <text class="product-description">{{ product.description }}</text>
          <text class="product-price">{{ product.price }}元</text>
        </view>
      </view>
      <view v-if="products.length === 0" class="no-products">
        <text>暂无商品</text>
      </view>
    </view>

    <view class="footer">
      <text class="footer-item">首页</text>
      <view class="sell-button" @click="goToProductUpload">
        <text class="sell-button-text">卖闲置</text>
      </view>
      <text class="footer-item" @click="goToMyPage">我的</text>
    </view>
  </view>
</template>

<script>
import request from '@/common/request.js'; 
import config from '@/common/config.js'; // 根据实际路径调整

export default {
  data() {
    return {
      products: [], // 初始化为空数组以存储从后端获取的产品
      selectedProduct: null // 用于存储选中的产品信息
    };
  },
  onLoad() {
    this.fetchUserData();
    this.fetchProducts(); // 获取商品列表
  },
  methods: {
    goToMyPage() {
      uni.redirectTo({
        url: '/pages/User/User Center'
      });
    },
    goToProductUpload() {
      uni.navigateTo({
        url: '/pages/Product/Product upload'
      });
    },
    async fetchUserData() {
      try {
        const response = await request('/user', 'GET');
        
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
async fetchProducts() {
  try {
    const response = await request('/shop/products', 'GET');

    if (response && response.products) {
      this.products = response.products.map(product => ({
        id: product.id,
        title: product.name, // 显示名称
        description: product.description, // 显示描述
        price: parseFloat(product.price),
        images: product.images.map(image => `http://127.0.0.1:5000/static/images/${product.id}/${image}`) // 构建完整路径
      }));
      console.log('获取到的产品:', this.products);
    } else {
      uni.showToast({
        title: '获取商品信息失败',
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
async fetchProductData(productId) {
  try {
    const response = await request(`/shop/products/${productId}`, 'GET');

    if (response) {
      this.selectedProduct = {
        id: response.id,
        title: response.name,
        description: response.description, // 添加描述
        price: parseFloat(response.price),
        images: response.images.map(image => `http://127.0.0.1:5000/static/images/${response.id}/${image}`) // 构建完整路径
      };
      console.log('选中产品信息:', this.selectedProduct);

      // 你可以在这里做进一步处理，例如导航到产品详情页
      uni.navigateTo({
        url: `/pages/Product/Product Details?id=${this.selectedProduct.id}`
      });
    } else {
      uni.showToast({
        title: '获取产品信息失败',
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
}

  }
};
</script>


<style>
/* 保留原有样式代码 */
.container {
  padding: 16px;
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.search-bar {
  width: 60%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.banner {
  margin: 16px 0;
}

.banner-image {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
}

.product-list {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-item {
  background-color: #fff;
  border-radius: 10px;
  margin: 8px;
  padding: 16px;
  width: calc(33% - 16px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.product-item:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 120px;
  border-radius: 8px;
}

.product-description {
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  color: #555;
}

.product-price {
  color: #ff4500;
  margin-top: 4px;
}

.no-products {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  color: #999;
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
