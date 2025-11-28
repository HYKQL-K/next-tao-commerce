const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

// 用户注册
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, phone, address } = req.body;

    // 检查用户是否已存在
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: '用户已存在' });
    }

    // 加密密码
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 创建新用户
    const user = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address
    });

    const newUser = await user.save();

    // 生成JWT token
    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET || 'taoshop-secret-key',
      { expiresIn: '7d' }
    );

    res.status(201).json({ token, user: { id: newUser._id, username: newUser.username, email: newUser.email } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 用户登录
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 检查用户是否存在
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: '邮箱或密码错误' });
    }

    // 检查密码是否正确
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: '邮箱或密码错误' });
    }

    // 生成JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'taoshop-secret-key',
      { expiresIn: '7d' }
    );

    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 获取当前用户信息
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 更新用户信息
router.put('/me', auth, async (req, res) => {
  try {
    const { username, phone, address } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { username, phone, address },
      { new: true, runValidators: true }
    ).select('-password');

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;