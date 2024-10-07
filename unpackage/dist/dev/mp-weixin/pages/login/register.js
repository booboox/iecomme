"use strict";
const common_vendor = require("../../common/vendor.js");
const common_request = require("../../common/request.js");
require("../../common/config.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    async register() {
      if (this.username && this.password && this.password == this.confirmPassword) {
        try {
          const response = await common_request.request("/user/register", "POST", {
            username: this.username,
            password: this.password
          });
          if (response.status == "success") {
            common_vendor.index.showToast({
              title: "注册成功",
              icon: "success"
            });
            common_vendor.index.navigateTo({
              url: "/pages/login/login"
              // 注册成功后跳转到登录页面
            });
          } else {
            common_vendor.index.showToast({
              title: response.message || "注册失败",
              icon: "none"
            });
          }
        } catch (error) {
          console.error("注册请求失败:", error);
          common_vendor.index.showToast({
            title: "注册请求失败，请重试",
            icon: "none"
          });
        }
      } else {
        common_vendor.index.showToast({
          title: "请填写完整信息并确认密码",
          icon: "none"
        });
      }
    },
    goToLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
        // 登录页面
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
    e: $data.confirmPassword,
    f: common_vendor.o(($event) => $data.confirmPassword = $event.detail.value),
    g: common_vendor.o((...args) => $options.register && $options.register(...args)),
    h: common_vendor.o((...args) => $options.goToLogin && $options.goToLogin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-838b72c9"], ["__file", "D:/BBX/课程/uniapp/iEComme/pages/login/register.vue"]]);
wx.createPage(MiniProgramPage);
