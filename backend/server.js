const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 数据库连接
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/taoshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB连接成功'))
.catch(err => console.error('MongoDB连接失败:', err));

// 路由
app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));
app.use('/api/orders', require('./routes/orders'));

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ message: 'TaoShop后端服务运行正常', timestamp: new Date().toISOString() });
});

// 错误处理中间件
app.use(require('./middleware/errorHandler'));

app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});