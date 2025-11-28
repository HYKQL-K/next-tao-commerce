const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 }
});

const shippingAddressSchema = new mongoose.Schema({
  recipient: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true }
});

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  totalAmount: { type: Number, required: true, min: 0 },
  shippingAddress: shippingAddressSchema,
  paymentMethod: { type: String, required: true, enum: ['cash', 'credit_card', 'alipay', 'wechat'] },
  status: { type: String, required: true, enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  orderNumber: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// 生成订单号
orderSchema.pre('save', function(next) {
  if (this.isNew) {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    this.orderNumber = `TAO${timestamp}${random}`;
  }
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Order', orderSchema);