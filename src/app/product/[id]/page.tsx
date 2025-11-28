'use client';
import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { mockProducts } from '@/lib/mockData';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = mockProducts.find((p) => p.id === params.id);
  const addItem = useCartStore((state) => state.addItem);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>商品不存在</div>;
  }

  const currentPrice = selectedVariant?.specificPrice || product.price;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      variantId: selectedVariant?.id,
      quantity,
      product,
      variant: selectedVariant,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div>
              <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg mb-4">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-20 h-20 object-cover rounded border-2 border-transparent hover:border-orange-500"
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h1>
              <div className="mb-4">
                <span className="text-3xl font-bold text-red-500">{formatPrice(currentPrice)}</span>
              </div>
              <div className="mb-6">
                <span className="text-sm text-gray-500">销量 {product.sales} | 库存 {selectedVariant?.stock || product.stock}</span>
              </div>

              {/* SKU Selector */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">选择规格</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 border rounded ${selectedVariant?.id === variant.id ? 'border-orange-500 bg-orange-50' : 'border-gray-300'}`}
                    >
                      {variant.color} {variant.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="text-sm font-medium mr-4">数量</span>
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button className="flex-1 bg-orange-500 hover:bg-orange-600" onClick={handleAddToCart}>
                  加入购物车
                </Button>
                <Button className="flex-1" variant="outline">
                  立即购买
                </Button>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">商品详情</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p>{product.description}</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-64 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
