# TaoShop - 类似淘宝的电商平台 MVP

TaoShop 是一个功能完整的 B2C 电商平台 MVP，采用现代 Web 开发技术栈构建，具有清晰的代码结构和良好的可扩展性。

## 技术栈

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui, Lucide Icons
- **State Management**: Zustand
- **Backend**: Next.js API Routes (Server Actions)
- **Database**: Prisma ORM (支持 PostgreSQL) + Mock Data

## 核心功能

### 1. 首页
- 顶部导航栏（Sticky Header）：Logo、搜索框、用户中心、购物车
- 轮播图（Hero Slider）
- 商品瀑布流（Product Feed）：猜你喜欢，双列布局

### 2. 商品详情页
- 图片画廊（支持缩略图切换）
- 商品信息：标题、价格、销量、店铺名
- SKU 选择器：颜色/尺寸选择，动态更新价格和库存
- 操作栏：立即购买、加入购物车、收藏
- 商品详情：富文本描述、评价列表、店铺信息

### 3. 购物车与结算
- 购物车：店铺维度分组
- 全选/单选逻辑，实时计算总价
- 数量增减器

### 4. 用户中心
- 买家视角：订单列表、收货地址管理
- 卖家视角：商品发布表单、订单管理面板

## 数据模型

- **User**: id, role (buyer/seller), name, avatar
- **Product**: id, title, description, price, stock, categoryId, shopId
- **Variant (SKU)**: id, productId, size, color, specificPrice
- **Order**: id, userId, totalAmount, status (pending/paid/shipped), items (JSON)

## 设计规范

- **色彩体系**：主色调 #FF5000（淘宝橙红色），背景色 #F5F5F5
- **响应式**：Mobile First，支持桌面端多栏布局
- **交互细节**：按钮 hover 效果，加载骨架屏动画

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
npm run start
```

## 项目结构

```
.
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # 根布局
│   │   ├── page.tsx        # 首页
│   │   ├── product/        # 商品详情页
│   │   ├── cart/           # 购物车页
│   │   └── profile/        # 用户中心页
│   ├── components/         # UI 组件
│   │   ├── ui/             # 通用 UI 组件
│   │   ├── Header.tsx      # 头部组件
│   │   ├── Layout.tsx      # 页面布局
│   │   ├── ProductCard.tsx # 商品卡片
│   │   └── SearchBar.tsx   # 搜索框
│   ├── store/              # Zustand 状态管理
│   │   ├── cartStore.ts    # 购物车状态
│   │   └── userStore.ts    # 用户状态
│   ├── lib/                # 工具函数
│   │   ├── utils.ts        # 通用工具
│   │   └── mockData.ts     # 模拟数据
│   └── types/              # TypeScript 类型定义
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## 扩展开发

### 切换到真实数据库

1. 安装 Prisma CLI：`npm install -D prisma`
2. 配置数据库连接字符串
3. 运行迁移：`npx prisma migrate dev`
4. 更新数据获取逻辑，使用 Prisma Client

### 添加新页面

在 `src/app/` 目录下创建新的文件夹和 `page.tsx` 文件。

### 添加新组件

在 `src/components/` 目录下创建新的组件文件。

## License

MIT
