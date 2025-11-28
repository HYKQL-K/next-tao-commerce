'use client';
import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { useCartStore } from '@/store/cartStore';
import { useEffect, useState } from 'react';

const categories = ['首页', '女装', '数码', '家居', '男装', '美妆'];

export function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const [showCartCount, setShowCartCount] = useState(false);

  useEffect(() => {
    setShowCartCount(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-500">TaoShop</span>
          </Link>

          <SearchBar />

          <div className="flex items-center space-x-6">
            <Link href="/profile" className="flex items-center space-x-1 text-gray-600 hover:text-orange-500">
              <User className="h-5 w-5" />
              <span className="hidden md:block">我的淘宝</span>
            </Link>
            <Link href="/cart" className="relative flex items-center space-x-1 text-gray-600 hover:text-orange-500">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:block">购物车</span>
              {showCartCount && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        <nav className="mt-4 hidden md:flex items-center space-x-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              {category}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
