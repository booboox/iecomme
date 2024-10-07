"use strict";
const common_vendor = require("../../common/vendor.js");
const common_request = require("../../common/request.js");
require("../../common/config.js");
const _sfc_main = {
  data() {
    return {
      products: [],
      // 初始化为空数组以存储从后端获取的产品
      selectedProduct: null
      // 用于存储选中的产品信息
    };
  },
  onLoad() {
    this.fetchUserData();
    this.fetchProducts();
  },
  methods: {
    goToMyPage() {
      common_vendor.index.redirectTo({
        url: "/pages/User/User Center"
      });
    },
    goToProductUpload() {
      common_vendor.index.navigateTo({
        url: "/pages/Product/Product upload"
      });
    },
    async fetchUserData() {
      try {
        const response = await common_request.request("/user", "GET");
        if (response.status === "success") {
          console.log("用户信息:", response.user);
        } else {
          common_vendor.index.showToast({
            title: response.message || "获取用户信息失败",
            icon: "none"
          });
        }
      } catch (error) {
        common_vendor.index.showToast({
          title: "请求失败",
          icon: "none"
        });
        console.error(error);
      }
    },
    async fetchProducts() {
      try {
        const response = await common_request.request("/shop/products", "GET");
        if (response && response.products) {
          this.products = response.products.map((product) => ({
            id: product.id,
            title: product.name,
            // 显示名称
            description: product.description,
            // 显示描述
            price: parseFloat(product.price),
            images: product.images.map((image) => `http://127.0.0.1:5000/static/images/${product.id}/${image}`)
            // 构建完整路径
          }));
          console.log("获取到的产品:", this.products);
        } else {
          common_vendor.index.showToast({
            title: "获取商品信息失败",
            icon: "none"
          });
        }
      } catch (error) {
        common_vendor.index.showToast({
          title: "请求失败",
          icon: "none"
        });
        console.error(error);
      }
    },
    async fetchProductData(productId) {
      try {
        const response = await common_request.request(`/shop/products/${productId}`, "GET");
        if (response) {
          this.selectedProduct = {
            id: response.id,
            title: response.name,
            description: response.description,
            // 添加描述
            price: parseFloat(response.price),
            images: response.images.map((image) => `http://127.0.0.1:5000/static/images/${response.id}/${image}`)
            // 构建完整路径
          };
          console.log("选中产品信息:", this.selectedProduct);
          common_vendor.index.navigateTo({
            url: `/pages/Product/Product Details?id=${this.selectedProduct.id}`
          });
        } else {
          common_vendor.index.showToast({
            title: "获取产品信息失败",
            icon: "none"
          });
        }
      } catch (error) {
        common_vendor.index.showToast({
          title: "请求失败",
          icon: "none"
        });
        console.error(error);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.products, (product, k0, i0) => {
      return {
        a: product.images[0],
        b: common_vendor.t(product.description),
        c: common_vendor.t(product.price),
        d: product.id,
        e: common_vendor.o(($event) => $options.fetchProductData(product.id), product.id)
      };
    }),
    b: $data.products.length === 0
  }, $data.products.length === 0 ? {} : {}, {
    c: common_vendor.o((...args) => $options.goToProductUpload && $options.goToProductUpload(...args)),
    d: common_vendor.o((...args) => $options.goToMyPage && $options.goToMyPage(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/BBX/课程/uniapp/iEComme/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
