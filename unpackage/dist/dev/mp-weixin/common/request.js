"use strict";
const common_vendor = require("./vendor.js");
const common_config = require("./config.js");
const request = (url, method, data) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: common_config.config.BASE_URL + url,
      // 拼接请求地址
      method,
      data,
      header: {
        "Content-Type": "application/json"
        // 设置请求头
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
exports.request = request;
