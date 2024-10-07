"use strict";
const common_vendor = require("../../common/vendor.js");
const common_request = require("../../common/request.js");
require("../../common/config.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login() {
      if (this.username && this.password) {
        try {
          const response = await common_request.request("/user/login", "POST", {
            username: this.username,
            password: this.password
          });
          console.log("响应:", response);
          if (response.status === "success") {
            common_vendor.index.showToast({
              title: "登录成功",
              icon: "success"
            });
            common_vendor.index.setStorageSync("token", response.token);
            this.fetchUserData();
            common_vendor.index.redirectTo({
              url: "/pages/home/home"
            });
          } else {
            common_vendor.index.showToast({
              title: response.message || "登录失败",
              icon: "none"
            });
          }
        } catch (error) {
          console.error("登录请求失败:", error);
          common_vendor.index.showToast({
            title: "登录请求失败，请重试",
            icon: "none"
          });
        }
      } else {
        common_vendor.index.showToast({
          title: "请填写用户名和密码",
          icon: "none"
        });
      }
    },
    async fetchUserData() {
      const token = common_vendor.index.getStorageSync("token");
      try {
        const response = await common_request.request("/user", "GET", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
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
    goToRegister() {
      common_vendor.index.navigateTo({
        url: "/pages/login/register"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.username,
    b: common_vendor.o(($event) => $data.username = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: common_vendor.o((...args) => $options.login && $options.login(...args)),
    f: common_vendor.o((...args) => $options.goToRegister && $options.goToRegister(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4e4508d"], ["__file", "D:/BBX/课程/uniapp/iEComme/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
