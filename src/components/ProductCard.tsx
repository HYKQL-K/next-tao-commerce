import Link from 'next/link';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        {product.sales > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            已售 {product.sales}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm text-gray-800 line-clamp-2 mb-2">{product.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-red-500">{formatPrice(product.price)}</span>
          <span className="text-xs text-gray-500">{product.shopName}</span>
        </div>
      </div>
    </Link>
  );
}
