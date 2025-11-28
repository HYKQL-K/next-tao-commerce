'use client';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">购物车为空</h2>
          <p className="text-gray-500 mb-8">快去挑选心仪的商品吧！</p>
          <Button href="/" asChild>
            去首页购物
          </Button>
        </div>
      </Layout>
    );
  }

  // Group items by shop
  const itemsByShop = items.reduce((acc, item) => {
    const shopName = item.product.shopName;
    if (!acc[shopName]) {
      acc[shopName] = [];
    }
    acc[shopName].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">购物车</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {Object.entries(itemsByShop).map(([shopName, shopItems]) => (
              <div key={shopName} className="bg-white rounded-lg shadow-sm p-4">
                <div className="font-medium mb-4">{shopName}</div>
                {shopItems.map((item) => {
                  const price = item.variant?.specificPrice || item.product.price;
                  return (
                    <div key={item.id} className="flex items-center space-x-4 py-4 border-b last:border-b-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm line-clamp-2">{item.product.title}</h3>
                        {item.variant && (
                          <p className="text-xs text-gray-500">{item.variant.color} {item.variant.size}</p>
                        )}
                        <p className="text-red-500 font-bold mt-2">{formatPrice(price)}</p>
                      </div>
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-gray-500 hover:text-red-500"
                      >
                        删除
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>商品总数</span>
                <span>{items.reduce((t, i) => t + i.quantity, 0)} 件</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>总计</span>
                <span className="text-red-500">{formatPrice(getTotalPrice())}</span>
              </div>
            </div>
            <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
              结算
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
