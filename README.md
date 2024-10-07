# iecomme
iecomme-uniapp

这是一个基于 UniApp 的电商平台，支持在微信小程序上运行。后端使用 Flask 提供 API 支持，用户可以注册、登录、浏览商品、出售闲置物品，并管理个人账户。

## 功能

- **用户认证**
  - **登录**：用户可以使用电子邮件和密码进行登录。
  - **注册**：新用户可以创建账户，填写必要信息。

- **首页**
  - 显示热门商品和最新上架的闲置物品。
  - 提供搜索功能，帮助用户快速找到感兴趣的商品。

- **卖闲置**
  - 用户可以发布自己的闲置物品，填写商品详情（如名称、价格、描述等）。
  - 上传商品图片以展示给潜在买家。

- **个人中心**
  - 用户可以查看和编辑个人信息。
  - 查看购买历史和当前出售的闲置物品。

## 技术栈

- 前端：UniApp
- 后端：Flask
- 数据库：MySQL 或 MongoDB（根据你的选择）

## 快速开始

### 环境要求

- Node.js 版本：14.x 或以上
- 微信开发者工具
- Python 3.x
- Flask 库

### 安装

#### 前端 (UniApp)

1. 克隆这个仓库：
   ```bash
   git clone https://github.com/你的用户名/ecommerce.git
进入项目目录：

bash
cd ecommerce
安装依赖：

bash
npm install
使用微信开发者工具打开项目。

后端 (Flask)
进入后端目录：

bash
cd backend
创建虚拟环境并激活：

bash
python -m venv venv
source venv/bin/activate  # 对于 Windows 使用 `venv\Scripts\activate`
安装依赖：

bash
pip install -r requirements.txt
启动 Flask 应用：

bash
python app.py
确保后端 API 运行在 http://localhost:5000。

示例截图
登录页面
登录页面

注册页面
注册页面

首页
首页

卖闲置页面
卖闲置页面

个人中心
个人中心

贡献
欢迎贡献！请遵循以下步骤：

Fork 本项目
创建你的特性分支 (git checkout -b feature/AmazingFeature)
提交你的更改 (git commit -m 'Add some AmazingFeature')
推送到分支 (git push origin feature/AmazingFeature)
创建一个新的 Pull Request
许可证
本项目使用 MIT 许可证 - 详情请参见 LICENSE 文件。

联系
如有问题，请联系我：你的邮箱
