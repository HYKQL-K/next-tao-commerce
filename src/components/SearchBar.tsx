'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

const hotSearchWords = ['女装', '手机', '电脑', '家居', '美妆', '男装'];

export function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="text"
          placeholder="搜索商品..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-orange-500 focus:border-orange-600"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <button
          type="submit"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-6 py-1.5 rounded-full hover:bg-orange-600 transition-colors"
        >
          搜索
        </button>
      </form>
      <div className="flex flex-wrap gap-2 mt-2">
        {hotSearchWords.map((word, index) => (
          <span
            key={index}
            className="text-xs text-gray-500 cursor-pointer hover:text-orange-500"
            onClick={() => setQuery(word)}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
