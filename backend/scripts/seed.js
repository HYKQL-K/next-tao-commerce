const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Product = require('../models/Product');
const User = require('../models/User');
require('dotenv').config();

// 示例商品数据
const sampleProducts = [
  {
    name: 'iPhone 15 Pro',
    price: 7999,
    description: '苹果最新旗舰手机，搭载A17 Pro芯片',
    category: '电子产品',
    image: 'https://via.placeholder.com/300x300?text=iPhone+15+Pro',
    stock: 50,
    rating: 4.8,
    reviews: []
  },
  {
    name: 'MacBook Air M2',
    price: 8999,
    description: '轻薄便携的苹果笔记本电脑，续航长达18小时',
    category: '电子产品',
    image: 'https://via.placeholder.com/300x300?text=MacBook+Air+M2',
    stock: 30,
    rating: 4.9,
    reviews: []
  },
  {
    name: 'AirPods Pro',
    price: 1899,
    description: '苹果无线耳机，主动降噪功能',
    category: '电子产品',
    image: 'https://via.placeholder.com/300x300?text=AirPods+Pro',
    stock: 100,
    rating: 4.7,
    reviews: []
  },
  {
    name: 'Nike Air Max 270',
    price: 899,
    description: '耐克运动鞋，舒适缓震',
    category: '服装',
    image: 'https://via.placeholder.com/300x300?text=Nike+Air+Max+270',
    stock: 75,
    rating: 4.6,
    reviews: []
  },
  {
    name: 'Levi\'s 501牛仔裤',
    price: 599,
    description: '经典款牛仔裤，百搭时尚',
    category: '服装',
    image: 'https://via.placeholder.com/300x300?text=Levi\'s+501',
    stock: 60,
    rating: 4.5,
    reviews: []
  }
];

// 示例用户数据
const sampleUsers = [
  {
    username: 'admin',
    email: 'admin@taoshop.com',
    password: '123456',
    phone: '13800138000',
    address: '北京市朝阳区'
  },
  {
    username: 'testuser',
    email: 'test@taoshop.com',
    password: '123456',
    phone: '13900139000',
    address: '上海市浦东新区'
  }
];

// 连接数据库
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/taoshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('MongoDB连接成功');

  // 清空现有数据
  await Product.deleteMany({});
  await User.deleteMany({});
  console.log('现有数据已清空');

  // 加密用户密码
  for (let user of sampleUsers) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }

  // 插入示例数据
  await Product.insertMany(sampleProducts);
  await User.insertMany(sampleUsers);

  console.log('示例数据添加成功');
  console.log(`添加了 ${sampleProducts.length} 个商品`);
  console.log(`添加了 ${sampleUsers.length} 个用户`);

  // 断开数据库连接
  mongoose.connection.close();
})
.catch(err => {
  console.error('数据库操作失败:', err);
  process.exit(1);
});