<div align="center">
  <h1 style="font-size: 3rem; margin-bottom: 1rem;">🛒 Next-Tao-Commerce</h1>

  <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto;">
    A <b>Pixel-Perfect</b> e-commerce MVP inspired by Taobao.<br>
    Built for performance, designed for scale.
  </p>

  <br />

  <p>
    <a href="https://github.com/HYKQL-K/next-tao-commerce/stargazers">
      <img src="https://img.shields.io/github/stars/HYKQL-K/next-tao-commerce?style=for-the-badge&logo=starship&color=FF5000" alt="GitHub stars" />
    </a>
    <a href="https://github.com/HYKQL-K/next-tao-commerce/network/members">
      <img src="https://img.shields.io/github/forks/HYKQL-K/next-tao-commerce?style=for-the-badge&logo=git&color=orange" alt="GitHub forks" />
    </a>
    <a href="https://github.com/HYKQL-K/next-tao-commerce/issues">
      <img src="https://img.shields.io/github/issues/HYKQL-K/next-tao-commerce?style=for-the-badge&logo=github&color=black" alt="GitHub issues" />
    </a>
   
  </p>

  <p>
    <a href="#quick-start">🚀 快速开始</a> • 
    <a href="#tech-stack">🛠️ 技术架构</a> • 
    <a href="#features">✨ 核心亮点</a> • 
    <a href="#roadmap">🗺️ 路线图</a>
  </p>
</div>

<br />

---

## 📖 关于项目 (Introduction)

**Next-Tao-Commerce** 是一个基于 **Next.js 14 App Router** 的全栈电商实战项目。它不仅仅是一个简单的商城，更是一次对**复杂业务逻辑**的深度探索。

我们复刻了淘宝/天猫的核心体验：从**SKU 动态组合算法**到**店铺维度的购物车结算**，每一个交互细节都力求完美。对于想要掌握 Modern Web 全栈开发的同学，这是一个绝佳的参考案例。

---

<span id="tech-stack"></span>

## 🛠️ 技术架构 (Tech Stack)

我们选用了目前 React 生态中最能打的组合，兼顾开发体验与运行性能：

### 🎨 Frontend & UI
* **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Components**: [Shadcn/ui](https://ui.shadcn.com/) + Lucide Icons
* **Motion**: Tailwind Animate / Framer Motion (Optional)

### ⚙️ Backend & Data
* **API**: Next.js Server Actions (无需独立后端)
* **Database**: PostgreSQL (Via Prisma)
* **ORM**: [Prisma](https://www.prisma.io/)
* **State**: [Zustand](https://github.com/pmndrs/zustand) (Global Store)

---

<span id="features"></span>

## ✨ 核心亮点 (Key Features)

### 🛒 深度还原的交易流程
- [x] **智能 SKU 选择器**: 
    - 自动判断 `颜色` + `尺寸` 组合的库存状态。
    - 无货选项自动置灰/禁用 (Visual Disable)。
- [x] **店铺级购物车**: 
    - 商品按 `ShopID` 自动分组。
    - 支持店铺维度的全选/反选，以及跨店总价计算。

### ⚡ 极致的性能优化
- [x] **瀑布流加载**: 基于 `IntersectionObserver` 的无限滚动。
- [x] **骨架屏 (Skeleton)**: 数据加载时的优雅过渡。
- [x] **图像优化**: 使用 Next/Image 实现自适应加载与懒加载。

---

<span id="quick-start"></span>

## 🚀 快速开始 (Quick Start)

本地运行只需三步：

### 1. 环境准备
确保你的本地环境满足：
- Node.js >= 18.17.0
- 包管理器 (npm / pnpm / yarn)

### 2. 克隆与安装
```bash
git clone [https://github.com/HYKQL-K/next-tao-commerce.git]
cd next-tao-commerce
npm install
# 或者 pnpm install
````

### 3\. 启动开发服务器

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000] 即可看到效果。

-----

## 📂 目录结构 (Directory)

清晰的分层架构，方便二次开发：

```text
src/
├── app/                 # Next.js 路由入口
│   ├── (main)/          # 主布局组 (Header+Footer)
│   ├── (auth)/          # 认证布局组 (Login/Register)
│   └── api/             # API Routes
├── components/          # 组件库
│   ├── ui/              # Shadcn 基础组件
│   ├── business/        # 业务组件 (ProductCard, SKUSelector)
│   └── layout/          # 布局组件
├── lib/                 # 工具函数 (Utils, Constants)
├── store/               # Zustand 状态管理
├── types/               # TypeScript 类型定义
└── prisma/              # 数据库 Schema
```

-----

<span id="roadmap"></span>

## 🗺️ 路线图 (Roadmap)

  - [x] **MVP 阶段**: 首页、详情页、购物车基础流程跑通。
  - [ ] **用户中心**: 订单状态流转 (待付款 -\> 待发货 -\> 待收货)。
  - [ ] **支付对接**: 模拟支付宝/微信支付流程。
  - [ ] **卖家后台**: 简单的商品发布与上下架管理。
  - [ ] **性能优化**: 引入 Redis 缓存热点商品数据。

-----

## 🤝 贡献 (Contributing)

如果你觉得这个项目对你有帮助，欢迎 **Star ⭐️** 支持一下！

同时也非常欢迎提交 PR：

1.  Fork 本仓库
2.  新建 Feat\_xxx 分支
3.  提交代码
4.  新建 Pull Request

-----

## 📄 许可证 (License)

本项目基于 MIT 协议开源。详见 [LICENSE](https://www.google.com/search?q=./LICENSE) 文件。

-----

<div align="center"\>
<sub\>Made with ❤️ by <a href="https://github.com/HYKQL-K">HYKQL-K</a\><sub\>
<div\>
