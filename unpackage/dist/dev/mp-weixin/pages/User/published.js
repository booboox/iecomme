"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      publishedItems: []
      // 模拟已发布的宝贝列表
    };
  },
  mounted() {
    this.fetchPublishedItems();
  },
  methods: {
    fetchPublishedItems() {
      this.publishedItems = [
        // { id: 1, name: '闲置书籍', image: '/static/images/book.png' },
        // { id: 2, name: '旧玩具', image: '/static/images/toy.png' }
        // 如果想要测试“没有发布宝贝”的情况，可以将上面的数组清空
      ];
    },
    navigateToPublish() {
      common_vendor.index.redirectTo({
        url: "/pages/Product/Product upload"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.publishedItems.length > 0
  }, $data.publishedItems.length > 0 ? {
    b: common_vendor.f($data.publishedItems, (item, k0, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.name),
        c: item.id
      };
    })
  } : {
    c: common_vendor.o((...args) => $options.navigateToPublish && $options.navigateToPublish(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/BBX/课程/uniapp/iEComme/pages/User/published.vue"]]);
wx.createPage(MiniProgramPage);
