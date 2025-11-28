export type UserRole = 'buyer' | 'seller';

export interface User {
  id: string;
  role: UserRole;
  name: string;
  avatar: string;
  email?: string;
}

export interface Category {
  id: string;
  name: string;
  parentId?: string;
  children?: Category[];
}

export interface Variant {
  id: string;
  productId: string;
  size?: string;
  color?: string;
  specificPrice?: number;
  stock: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  shopId: string;
  shopName: string;
  images: string[];
  variants: Variant[];
  sales: number;
  createdAt: string;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId?: string;
  quantity: number;
  product: Product;
  variant?: Variant;
}

export interface OrderItem {
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  totalAmount: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered';
  items: OrderItem[];
  createdAt: string;
}

export interface Address {
  id: string;
  userId: string;
  name: string;
  phone: string;
  detail: string;
  isDefault: boolean;
}
