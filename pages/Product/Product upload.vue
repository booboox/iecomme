<template>
  <view class="container">
    <form @submit.prevent="submitProduct">
      <view class="form-group">
        <label for="name">商品名称:</label>
        <input v-model="productName" type="text" id="name" required class="input-field" />
      </view>
      
      <view class="form-group">
        <label for="description">商品描述:</label>
        <textarea v-model="productDescription" id="description" required class="textarea-field"></textarea>
      </view>
      
      <view class="form-group">
        <label for="price">商品价格:</label>
        <input v-model.number="productPrice" type="number" id="price" required class="input-field" />
      </view>
      
      <view class="form-group">
        <label for="stock">商品库存:</label>
        <input v-model.number="productStock" type="number" id="stock" required class="input-field" />
      </view>

      <view class="form-group">
        <button type="button" @click="chooseImage" class="image-button">选择图片</button>
        <view class="image-preview">
          <image v-for="(img, index) in selectedImages" :key="index" :src="img" mode="aspectFill" class="image-item" />
        </view>
      </view>

      <button type="button" @click="submitProduct" class="submit-button">提交商品</button>
    </form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      productDescription: '',
      productPrice: '',
      productStock: '',
      selectedImages: []
    };
  },
  methods: {
    chooseImage() {
      uni.chooseImage({
        count: 5 - this.selectedImages.length,
        success: (res) => {
          this.selectedImages = this.selectedImages.concat(res.tempFilePaths);
        }
      });
    },
    async submitProduct() {
      if (!this.productName || !this.productDescription || !this.productPrice || this.productStock === '' || this.selectedImages.length === 0) {
        uni.showToast({ title: '请填写所有信息', icon: 'none' });
        return;
      }

      const uploadPromises = this.selectedImages.map((image) => {
        return new Promise((resolve, reject) => {
          uni.uploadFile({
            url: 'http://你的后端地址/products', // 替换成你的实际后端API地址
            filePath: image,
            name: 'images',
            formData: {
              name: this.productName,
              description: this.productDescription,
              price: this.productPrice,
              stock: this.productStock
            },
            success: (uploadRes) => {
              const data = JSON.parse(uploadRes.data);
              if (data.message === "Product added") {
                resolve(data);
              } else {
                reject(data.message);
              }
            },
            fail: (err) => {
              reject(err);
            }
          });
        });
      });

      try {
        await Promise.all(uploadPromises);
        uni.showToast({ title: '发布成功', icon: 'success' });
        this.resetForm();
      } catch (error) {
        uni.showToast({ title: error || '发布失败', icon: 'none' });
      }
    },
    resetForm() {
      this.productName = '';
      this.productDescription = '';
      this.productPrice = '';
      this.productStock = '';
      this.selectedImages = [];
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: #f7f9fc; /* 背景色 */
}

.form-group {
  margin-bottom: 15px;
}

.input-field, .textarea-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 25px; /* 半圆角 */
  transition: border-color 0.3s;
}

.input-field:focus, .textarea-field:focus {
  border-color: #007aff; /* 聚焦时边框颜色 */
}

.textarea-field {
  height: 100px; /* 文本域高度 */
  resize: none; /* 禁止调整大小 */
}

.image-button {
  background-color: #007aff; /* 按钮背景色 */
  color: #fff; /* 按钮文字颜色 */
  border: none;
  padding: 10px 20px;
  border-radius: 25px; /* 半圆角 */
  cursor: pointer;
  transition: background-color 0.3s;
}

.image-button:hover {
  background-color: #005bb5; /* 悬停时更改颜色 */
}

.image-preview {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.image-item {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 10px; /* 图片圆角 */
}

.submit-button {
  background-color: #28a745; /* 提交按钮颜色 */
  color: #fff; /* 提交按钮文字颜色 */
  border: none;
  padding: 10px 20px;
  border-radius: 25px; /* 半圆角 */
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #218838; /* 提交按钮悬停颜色 */
}
</style>
