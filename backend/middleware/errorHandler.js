// 错误处理中间件
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // 默认错误状态码和消息
  let statusCode = 500;
  let message = '服务器内部错误';

  // 根据错误类型设置不同的状态码和消息
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors).map(error => error.message).join(', ');
  } else if (err.name === 'CastError') {
    statusCode = 400;
    message = '无效的ID格式';
  } else if (err.name === 'MongoServerError' && err.code === 11000) {
    statusCode = 400;
    const duplicateField = Object.keys(err.keyValue)[0];
    message = `${duplicateField} 已存在，请使用其他值`;
  } else if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = '无效的token';
  } else if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'token已过期';
  } else if (err.message === '访问被拒绝，未提供token') {
    statusCode = 401;
    message = err.message;
  } else if (err.message === 'token无效') {
    statusCode = 401;
    message = err.message;
  } else if (err.message === '商品不存在') {
    statusCode = 404;
    message = err.message;
  } else if (err.message === '订单不存在') {
    statusCode = 404;
    message = err.message;
  } else if (err.message === '用户已存在') {
    statusCode = 400;
    message = err.message;
  } else if (err.message === '邮箱或密码错误') {
    statusCode = 400;
    message = err.message;
  } else if (err.message === '无权访问此订单') {
    statusCode = 403;
    message = err.message;
  } else if (err.message === '无效的订单状态') {
    statusCode = 400;
    message = err.message;
  }

  // 发送错误响应
  res.status(statusCode).json({
    message,
    // 在开发环境下返回错误堆栈
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;