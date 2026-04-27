'use client';

import { useState } from 'react';

import { MenuItem } from '@/types/menu';
import MenuCard from './MenuCard';
import ItemModal from './ItemModal';
import { useTranslations } from 'next-intl';

interface MenuGridProps {
  items: MenuItem[];
}

export default function MenuGrid({ items }: MenuGridProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = useTranslations('Menu');

  const categories = ['all', 'breakfast', 'snacks', 'drinks'];

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === category
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}
          >
            {t(`categories.${category}`)}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-zinc-500 dark:text-zinc-400">
            Aucun plat disponible.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onSelect={setSelectedItem}
            />
          ))}
        </div>
      )}

      {selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
