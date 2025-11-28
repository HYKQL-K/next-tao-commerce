const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    // 从请求头获取token
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: '访问被拒绝，未提供token' });
    }

    // 验证token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'taoshop-secret-key');

    // 查找用户
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'token无效' });
    }

    // 将用户信息添加到请求对象
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'token无效' });
  }
};

module.exports = auth;