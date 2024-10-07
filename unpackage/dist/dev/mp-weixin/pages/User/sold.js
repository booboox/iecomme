"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      soldItems: []
      // 模拟已卖出的宝贝列表
    };
  },
  mounted() {
    this.fetchSoldItems();
  },
  methods: {
    fetchSoldItems() {
      this.soldItems = [
        // { id: 1, name: '闲置书籍', image: '/static/images/book.png' },
        // { id: 2, name: '旧玩具', image: '/static/images/toy.png' }
        // 如果想要测试“没有卖出过宝贝”的情况，可以将上面的数组清空
      ];
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.soldItems.length > 0
  }, $data.soldItems.length > 0 ? {
    b: common_vendor.f($data.soldItems, (item, k0, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.name),
        c: item.id
      };
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/BBX/课程/uniapp/iEComme/pages/User/sold.vue"]]);
wx.createPage(MiniProgramPage);
