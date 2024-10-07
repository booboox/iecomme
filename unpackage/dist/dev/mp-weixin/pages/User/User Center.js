"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "张三",
      email: "zhangsan@example.com",
      phone: "1234567890"
    };
  },
  methods: {
    goToHome() {
      common_vendor.index.redirectTo({
        url: "/pages/home/home"
      });
    },
    goToHelp() {
      common_vendor.index.navigateTo({
        url: "/pages/help/help"
        // 请替换为帮助页面路径
      });
    },
    goToSettings() {
      common_vendor.index.navigateTo({
        url: "/pages/settings/settings"
        // 请替换为设置页面路径
      });
    },
    goToPublished() {
      common_vendor.index.navigateTo({
        url: "/pages/User/published"
        // 请替换为我发布的页面路径
      });
    },
    goToSold() {
      common_vendor.index.navigateTo({
        url: "/pages/User/sold"
        // 请替换为我卖出的页面路径
      });
    },
    goToProductUpload() {
      common_vendor.index.navigateTo({
        url: "/pages/Product/Product upload"
      });
    },
    goToBought() {
      common_vendor.index.navigateTo({
        url: "/pages/User/bought"
        // 请替换为我买到的页面路径
      });
    },
    goToMessages() {
      common_vendor.index.navigateTo({
        url: "/pages/User/message"
        // 请替换为消息页面路径
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.username),
    b: common_vendor.o((...args) => $options.goToHelp && $options.goToHelp(...args)),
    c: common_vendor.o((...args) => $options.goToSettings && $options.goToSettings(...args)),
    d: common_vendor.o((...args) => $options.goToPublished && $options.goToPublished(...args)),
    e: common_vendor.o((...args) => $options.goToSold && $options.goToSold(...args)),
    f: common_vendor.o((...args) => $options.goToBought && $options.goToBought(...args)),
    g: common_vendor.o((...args) => $options.goToMessages && $options.goToMessages(...args)),
    h: common_vendor.o((...args) => $options.goToHome && $options.goToHome(...args)),
    i: common_vendor.o((...args) => $options.goToProductUpload && $options.goToProductUpload(...args)),
    j: common_vendor.o((...args) => _ctx.goToMyPage && _ctx.goToMyPage(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/BBX/课程/uniapp/iEComme/pages/User/User Center.vue"]]);
wx.createPage(MiniProgramPage);
