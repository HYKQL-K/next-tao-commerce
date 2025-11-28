'use client';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { User, ShoppingBag, MapPin } from 'lucide-react';
import { useUserStore } from '@/store/userStore';

export default function ProfilePage() {
  const { user, logout } = useUserStore();

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">请先登录</h2>
          <Button>登录</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">我的淘宝</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-xs text-gray-500">{user.role === 'buyer' ? '买家' : '卖家'}</div>
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                个人信息
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ShoppingBag className="mr-2 h-4 w-4" />
                我的订单
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <MapPin className="mr-2 h-4 w-4" />
                收货地址
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={logout}>
                退出登录
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">个人信息</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">用户名</label>
                  <div className="text-sm">{user.name}</div>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">角色</label>
                  <div className="text-sm">{user.role === 'buyer' ? '买家' : '卖家'}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">我的订单</h3>
              <div className="text-center py-8 text-gray-500">
                暂无订单
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
