"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      messages: [
        {
          id: 1,
          username: "张三",
          text: "你好，有什么需要帮助的吗？",
          avatar: "/static/images/avatar1.png",
          timestamp: (/* @__PURE__ */ new Date()).getTime() - 6e4
        },
        {
          id: 2,
          username: "李四",
          text: "请查看您近期的订单。",
          avatar: "/static/images/avatar2.png",
          timestamp: (/* @__PURE__ */ new Date()).getTime() - 36e5
        },
        {
          id: 3,
          username: "王五",
          text: "您的申请已被处理。",
          avatar: "/static/images/avatar3.png",
          timestamp: (/* @__PURE__ */ new Date()).getTime() - 864e5
        }
      ]
    };
  },
  methods: {
    goToChat(message) {
      common_vendor.index.navigateTo({
        url: `/pages/chat/chat?id=${message.id}&username=${encodeURIComponent(message.username)}`
      });
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      const now = /* @__PURE__ */ new Date();
      const diff = now - date;
      if (diff < 6e4) {
        return "刚刚";
      } else if (diff < 36e5) {
        return Math.floor(diff / 6e4) + "分钟前";
      } else if (diff < 864e5) {
        return Math.floor(diff / 36e5) + "小时前";
      } else {
        return date.toLocaleDateString();
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.messages, (message, index, i0) => {
      return {
        a: message.avatar,
        b: common_vendor.t(message.username),
        c: common_vendor.t(message.text),
        d: common_vendor.t($options.formatTimestamp(message.timestamp)),
        e: index,
        f: common_vendor.o(($event) => $options.goToChat(message), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/BBX/课程/uniapp/iEComme/pages/User/message.vue"]]);
wx.createPage(MiniProgramPage);
