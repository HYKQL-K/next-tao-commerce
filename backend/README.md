# TaoShop 后端API

基于Node.js + Express + MongoDB的电商平台后端API

## 功能特性

- 商品管理API
- 用户注册/登录API
- 订单管理API
- JWT认证中间件
- 数据验证和错误处理

## 安装依赖

```bash
npm install
```

## 配置环境变量

复制 `.env` 文件并修改配置：

```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taoshop
JWT_SECRET=your-secret-key-here
```

## 启动服务器

开发模式（自动重启）：
```bash
npm run dev
```

生产模式：
```bash
npm start
```

服务器将运行在 http://localhost:5000

## API接口

### 商品接口

- `GET /api/products` - 获取所有商品
- `GET /api/products/:id` - 根据ID获取商品
- `POST /api/products` - 创建新商品
- `PUT /api/products/:id` - 更新商品
- `DELETE /api/products/:id` - 删除商品

### 用户接口

- `POST /api/users/register` - 用户注册
- `POST /api/users/login` - 用户登录
- `GET /api/users/me` - 获取当前用户信息（需要认证）
- `PUT /api/users/me` - 更新用户信息（需要认证）

### 订单接口

- `POST /api/orders` - 创建订单（需要认证）
- `GET /api/orders/my-orders` - 获取当前用户的所有订单（需要认证）
- `GET /api/orders/:id` - 根据ID获取订单（需要认证）
- `PUT /api/orders/:id/status` - 更新订单状态（需要认证）

## 认证

需要认证的接口需要在请求头中添加：

```
Authorization: Bearer <token>
```

其中 `<token>` 是登录或注册时获取的JWT token。