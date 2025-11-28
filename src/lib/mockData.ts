import { Category, Product, User } from '@/types';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: '女装',
    children: [
      { id: '11', name: '上衣', parentId: '1' },
      { id: '12', name: '裤子', parentId: '1' },
      { id: '13', name: '连衣裙', parentId: '1' },
    ],
  },
  {
    id: '2',
    name: '数码',
    children: [
      { id: '21', name: '手机', parentId: '2' },
      { id: '22', name: '电脑', parentId: '2' },
      { id: '23', name: '配件', parentId: '2' },
    ],
  },
  {
    id: '3',
    name: '家居',
    children: [
      { id: '31', name: '家具', parentId: '3' },
      { id: '32', name: '装饰', parentId: '3' },
      { id: '33', name: '日用品', parentId: '3' },
    ],
  },
  {
    id: '4',
    name: '男装',
    children: [
      { id: '41', name: '上衣', parentId: '4' },
      { id: '42', name: '裤子', parentId: '4' },
      { id: '43', name: '鞋子', parentId: '4' },
    ],
  },
  {
    id: '5',
    name: '美妆',
    children: [
      { id: '51', name: '护肤品', parentId: '5' },
      { id: '52', name: '化妆品', parentId: '5' },
      { id: '53', name: '香水', parentId: '5' },
    ],
  },
];

export const mockProducts: Product[] = Array.from({ length: 20 }, (_, i) => ({
  id: `product-${i + 1}`,
  title: `时尚商品 ${i + 1} - 高品质保证`,
  description: `这是商品 ${i + 1} 的详细描述，品质优良，价格实惠，欢迎选购。`,
  price: Math.floor(Math.random() * 500) + 50,
  stock: Math.floor(Math.random() * 100) + 10,
  categoryId: Math.floor(Math.random() * 5) + 1 + '',
  shopId: `shop-${Math.floor(Math.random() * 5) + 1}`,
  shopName: `店铺 ${Math.floor(Math.random() * 5) + 1}`,
  images: [
    `https://picsum.photos/seed/product-${i + 1}-1/400/400`,
    `https://picsum.photos/seed/product-${i + 1}-2/400/400`,
    `https://picsum.photos/seed/product-${i + 1}-3/400/400`,
  ],
  variants: [
    { id: `variant-${i + 1}-1`, productId: `product-${i + 1}`, size: 'S', color: '红色', stock: 20 },
    { id: `variant-${i + 1}-2`, productId: `product-${i + 1}`, size: 'M', color: '蓝色', stock: 15 },
    { id: `variant-${i + 1}-3`, productId: `product-${i + 1}`, size: 'L', color: '黑色', stock: 10 },
  ],
  sales: Math.floor(Math.random() * 1000) + 100,
  createdAt: new Date().toISOString(),
}));

export const mockUser: User = {
  id: 'user-1',
  role: 'buyer',
  name: '张三',
  avatar: 'https://picsum.photos/seed/avatar-1/100/100',
};
