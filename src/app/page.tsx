import { Layout } from '@/components/Layout';
import { ProductCard } from '@/components/ProductCard';
import { mockProducts } from '@/lib/mockData';

export default function Home() {
  return (
    <Layout>
      {/* Hero Slider */}
      <div className="container mx-auto px-4 py-4">
        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="https://picsum.photos/seed/hero-1/1200/600"
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Feed */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">猜你喜欢</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
