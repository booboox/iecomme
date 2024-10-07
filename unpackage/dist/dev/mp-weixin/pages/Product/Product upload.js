"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      productName: "",
      productDescription: "",
      productPrice: "",
      productStock: "",
      selectedImages: []
    };
  },
  methods: {
    chooseImage() {
      common_vendor.index.chooseImage({
        count: 5 - this.selectedImages.length,
        success: (res) => {
          this.selectedImages = this.selectedImages.concat(res.tempFilePaths);
        }
      });
    },
    async submitProduct() {
      if (!this.productName || !this.productDescription || !this.productPrice || this.productStock === "" || this.selectedImages.length === 0) {
        common_vendor.index.showToast({ title: "请填写所有信息", icon: "none" });
        return;
      }
      const uploadPromises = this.selectedImages.map((image) => {
        return new Promise((resolve, reject) => {
          common_vendor.index.uploadFile({
            url: "http://你的后端地址/products",
            // 替换成你的实际后端API地址
            filePath: image,
            name: "images",
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
        common_vendor.index.showToast({ title: "发布成功", icon: "success" });
        this.resetForm();
      } catch (error) {
        common_vendor.index.showToast({ title: error || "发布失败", icon: "none" });
      }
    },
    resetForm() {
      this.productName = "";
      this.productDescription = "";
      this.productPrice = "";
      this.productStock = "";
      this.selectedImages = [];
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.productName,
    b: common_vendor.o(($event) => $data.productName = $event.detail.value),
    c: $data.productDescription,
    d: common_vendor.o(($event) => $data.productDescription = $event.detail.value),
    e: $data.productPrice,
    f: common_vendor.o(common_vendor.m(($event) => $data.productPrice = $event.detail.value, {
      number: true
    })),
    g: $data.productStock,
    h: common_vendor.o(common_vendor.m(($event) => $data.productStock = $event.detail.value, {
      number: true
    })),
    i: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args)),
    j: common_vendor.f($data.selectedImages, (img, index, i0) => {
      return {
        a: index,
        b: img
      };
    }),
    k: common_vendor.o((...args) => $options.submitProduct && $options.submitProduct(...args)),
    l: common_vendor.o((...args) => $options.submitProduct && $options.submitProduct(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0bbcc720"], ["__file", "D:/BBX/课程/uniapp/iEComme/pages/Product/Product upload.vue"]]);
wx.createPage(MiniProgramPage);
