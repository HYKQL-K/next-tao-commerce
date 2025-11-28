# TaoShop 后端API文档

## 基础信息

- 基础URL: `http://localhost:5000/api`
- 数据格式: JSON
- 认证方式: JWT Token

## 认证

需要认证的接口需要在请求头中添加:
```
Authorization: Bearer <token>
```

其中 `<token>` 是登录或注册时获取的JWT token。

## 商品API

### 获取所有商品

**接口地址**: `GET /products`

**查询参数**:
- `page`: 页码，默认1
- `limit`: 每页数量，默认10
- `search`: 搜索关键词（模糊搜索商品名称和描述）
- `category`: 分类筛选

**响应示例**:
```json
{
  "products": [
    {
      "_id": "60d5ec49f1a2c8f7f8c9f9a1",
      "name": "iPhone 15 Pro",
      "price": 7999,
      "description": "苹果最新旗舰手机",
      "category": "电子产品",
      "image": "https://via.placeholder.com/300x300",
      "stock": 50,
      "rating": 4.8,
      "reviews": [],
      "createdAt": "2023-06-28T10:00:00.000Z",
      "updatedAt": "2023-06-28T10:00:00.000Z"
    }
  ],
  "totalPages": 1,
  "currentPage": 1,
  "total": 1
}
```

### 根据ID获取商品

**接口地址**: `GET /products/:id`

**路径参数**:
- `id`: 商品ID

**响应示例**:
```json
{
  "_id": "60d5ec49f1a2c8f7f8c9f9a1",
  "name": "iPhone 15 Pro",
  "price": 7999,
  "description": "苹果最新旗舰手机",
  "category": "电子产品",
  "image": "https://via.placeholder.com/300x300",
  "stock": 50,
  "rating": 4.8,
  "reviews": [],
  "createdAt": "2023-06-28T10:00:00.000Z",
  "updatedAt": "2023-06-28T10:00:00.000Z"
}
```

### 创建新商品

**接口地址**: `POST /products`

**请求体**:
```json
{
  "name": "iPhone 15 Pro",
  "price": 7999,
  "description": "苹果最新旗舰手机",
  "category": "电子产品",
  "image": "https://via.placeholder.com/300x300",
  "stock": 50
}
```

**响应示例**:
```json
{
  "_id": "60d5ec49f1a2c8f7f8c9f9a1",
  "name": "iPhone 15 Pro",
  "price": 7999,
  "description": "苹果最新旗舰手机",
  "category": "电子产品",
  "image": "https://via.placeholder.com/300x300",
  "stock": 50,
  "rating": 0,
  "reviews": [],
  "createdAt": "2023-06-28T10:00:00.000Z",
  "updatedAt": "2023-06-28T10:00:00.000Z"
}
```

### 更新商品

**接口地址**: `PUT /products/:id`

**路径参数**:
- `id`: 商品ID

**请求体**:
```json
{
  "price": 7499,
  "stock": 45
}
```

**响应示例**:
```json
{
  "_id": "60d5ec49f1a2c8f7f8c9f9a1",
  "name": "iPhone 15 Pro",
  "price": 7499,
  "description": "苹果最新旗舰手机",
  "category": "电子产品",
  "image": "https://via.placeholder.com/300x300",
  "stock": 45,
  "rating": 4.8,
  "reviews": [],
  "createdAt": "2023-06-28T10:00:00.000Z",
  "updatedAt": "2023-06-29T10:00:00.000Z"
}
```

### 删除商品

**接口地址**: `DELETE /products/:id`

**路径参数**:
- `id`: 商品ID

**响应示例**:
```json
{
  "message": "商品删除成功"
}
```

## 用户API

### 用户注册

**接口地址**: `POST /users/register`

**请求体**:
```json
{
  "username": "testuser",
  "email": "test@taoshop.com",
  "password": "123456",
  "phone": "13800138000",
  "address": "北京市朝阳区"
}
```

**响应示例**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d5ec49f1a2c8f7f8c9f9a2",
    "username": "testuser",
    "email": "test@taoshop.com"
  }
}
```

### 用户登录

**接口地址**: `POST /users/login`

**请求体**:
```json
{
  "email": "test@taoshop.com",
  "password": "123456"
}
```

**响应示例**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d5ec49f1a2c8f7f8c9f9a2",
    "username": "testuser",
    "email": "test@taoshop.com"
  }
}
```

### 获取当前用户信息

**接口地址**: `GET /users/me`

**认证**: 需要

**响应示例**:
```json
{
  "_id": "60d5ec49f1a2c8f7f8c9f9a2",
  "username": "testuser",
  "email": "test@taoshop.com",
  "phone": "13800138000",
  "address": "北京市朝阳区",
  "createdAt": "2023-06-28T10:00:00.000Z",
  "updatedAt": "2023-06-28T10:00:00.000Z"
}
```

### 更新用户信息

**接口地址**: `PUT /users/me`

**认证**: 需要

**请求体**:
```json
{
  "phone": "13900139000",
  "address": "上海市浦东新区"
}
```

**响应示例**:
```json
{
  "_id": "60d5ec49f1a2c8f7f8c9f9a2",
  "username": "testuser",
  "email": "test@taoshop.com",
  "phone": "13900139000",
  "address": "上海市浦东新区",
  "createdAt": "2023-06-28T10:00:00.000Z",
  "updatedAt": "2023-06-29T10:00:00.000Z"
}
```

## 订单API

### 创建订单

**接口地址**: `POST /orders`

**认证**: 需要

**请求体**:
```json
{
  "items": [
    {
      "productId": "60d5ec49f1a2c8f7f8c9f9a1",
      "quantity": 2,
      "price": 7999
    }
  ],
  "totalAmount": 15998,
  "shippingAddress": {
    "recipient": "张三",
    "phone": "13800138000",
    "address": "北京市朝阳区",
    "city": "北京",
    "postalCode": "100000"
  },
  "paymentMethod": "alipay"
}
```

**响应示例**:
```json
{
  "_id": "60d5ec49f1a2c8f7f8c9f9a3",
  "userId": "60d5ec49f1a2c8f7f8c9f9a2",
  "items": [
    {
      "productId": "60d5ec49f1a2c8f7f8c9f9a1",
      "quantity": 2,
      "price": 7999,
      "_id": "60d5ec49f1a2c8f7f8c9f9a4"
    }
  ],
  "totalAmount": 15998,
  "shippingAddress": {
    "recipient": "张三",
    "phone": "13800138000",
    "address": "北京市朝阳区",
    "city": "北京",
    "postalCode": "100000",
    "_id": "60d5ec49f1a2c8f7f8c9f9a5"
  },
  "paymentMethod": "alipay",
  "status": "pending",
  "orderNumber": "TAO1624884000000123",
  "createdAt": "2023-06-28T10:00:00.000Z",
  "updatedAt": "2023-06-28T10:00:00.000Z"
}
```

### 获取当前用户的所有订单

**接口地址**: `GET /orders/my-orders`

**认证**: 需要

**响应示例**:
```json
[
  {
    "_id": "60d5ec49f1a2c8f7f8c9f9a3",
    "userId": "60d5ec49f1a2c8f7f8c9f9a2",
    "items": [
      {
        "productId": "60d5ec49f1a2c8f7f8c9f9a1",
        "quantity": 2,
        "price": 7999,
        "_id": "60d5ec49f1a2c8f7f8c9f9a4"
      }
    ],
    "totalAmount": 15998,
    "shippingAddress": {
      "recipient": "张三",
      "phone": "13800138000",
      "address": "北京市朝阳区",
      "city": "北京",
      "postalCode": "100000",
      "_id": "60d5ec49f1a2c8f7f8c9f9a5"
    },
    "paymentMethod": "alipay",
    "status": "pending",
    "orderNumber": "TAO1624884000000123",
    "createdAt": "2023-06-28T10:00:00.000Z",
    "updatedAt": "2023-06-28T10:00:00.000Z"
  }
]
```

### 根据ID获取订单

**接口地址**: `GET /orders/:id`

**认证**: 需要

**路径参数**:
- `id`: 订单ID

**响应示例**:
```json
{
  "_id": "60d5ec49f1a2c8f7f8c9f9a3",
  "userId": "60d5ec49f1a2c8f7f8c9f9a2",
  "items": [
    {
      "productId": "60d5ec49f1a2c8f7f8c9f9a1",
      "quantity": 2,
      "price": 7999,
      "_id": "60d5ec49f1a2c8f7f8c9f9a4"
    }
  ],
  "totalAmount": 15998,
  "shippingAddress": {
    "recipient": "张三",
    "phone": "13800138000",
    "address": "北京市朝阳区",
    "city": "北京",
    "postalCode": "100000",
    "_id": "60d5ec49f1a2c8f7f8c9f9a5"
  },
  "paymentMethod": "alipay",
  "status": "pending",
  "orderNumber": "TAO1624884000000123",
  "createdAt": "2023-06-28T10:00:00.000Z",
  "updatedAt": "2023-06-28T10:00:00.000Z"
}
```

### 更新订单状态

**接口地址**: `PUT /orders/:id/status`

**认证**: 需要

**路径参数**:
- `id`: 订单ID

**请求体**:
```json
{
  "status": "paid"
}
```

**响应示例**:
```json
{
  "_id": "60d5ec49f1a2c8f7f8c9f9a3",
  "userId": "60d5ec49f1a2c8f7f8c9f9a2",
  "items": [
    {
      "productId": "60d5ec49f1a2c8f7f8c9f9a1",
      "quantity": 2,
      "price": 7999,
      "_id": "60d5ec49f1a2c8f7f8c9f9a4"
    }
  ],
  "totalAmount": 15998,
  "shippingAddress": {
    "recipient": "张三",
    "phone": "13800138000",
    "address": "北京市朝阳区",
    "city": "北京",
    "postalCode": "100000",
    "_id": "60d5ec49f1a2c8f7f8c9f9a5"
  },
  "paymentMethod": "alipay",
  "status": "paid",
  "orderNumber": "TAO1624884000000123",
  "createdAt": "2023-06-28T10:00:00.000Z",
  "updatedAt": "2023-06-29T10:00:00.000Z"
}
```

## 健康检查

**接口地址**: `GET /health`

**响应示例**:
```json
{
  "message": "TaoShop后端服务运行正常",
  "timestamp": "2023-06-28T10:00:00.000Z"
}
```

## 错误响应

所有错误响应都遵循以下格式:

```json
{
  "message": "错误消息"
}
```

常见的错误状态码:
- 400: 错误的请求（如验证失败、重复数据）
- 401: 未授权（如无效的token）
- 403: 禁止访问（如无权查看其他用户的订单）
- 404: 资源不存在（如商品或订单不存在）
- 500: 服务器内部错误
