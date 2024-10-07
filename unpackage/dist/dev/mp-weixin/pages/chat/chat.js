"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      newMessage: "",
      chatMessages: [],
      username: "",
      avatar: "../static/logo.png"
      // 这里替换为用户头像的路径
    };
  },
  onLoad(options) {
    this.username = decodeURIComponent(options.username);
    this.loadChatHistory();
  },
  methods: {
    loadChatHistory() {
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        const currentTime = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
        this.chatMessages.push({
          username: this.username,
          text: this.newMessage,
          time: currentTime,
          avatar: this.avatar
          // 添加用户头像
        });
        this.newMessage = "";
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.chatMessages, (message, index, i0) => {
      return common_vendor.e({
        a: message.username === $data.username
      }, message.username === $data.username ? {
        b: message.avatar,
        c: common_vendor.t(message.username),
        d: common_vendor.t(message.time)
      } : {}, {
        e: common_vendor.t(message.text),
        f: index,
        g: common_vendor.n({
          "my-message": message.username === $data.username
        })
      });
    }),
    b: common_vendor.o((...args) => $options.sendMessage && $options.sendMessage(...args)),
    c: $data.newMessage,
    d: common_vendor.o(($event) => $data.newMessage = $event.detail.value),
    e: common_vendor.o((...args) => $options.sendMessage && $options.sendMessage(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/BBX/课程/uniapp/iEComme/pages/chat/chat.vue"]]);
wx.createPage(MiniProgramPage);
