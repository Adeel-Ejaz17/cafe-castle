import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles, ChevronRight, FileText } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

type CategoryFilter = 'all' | 'burgers' | 'pizza' | 'specials' | 'chinese' | 'pasta' | 'coffee' | 'iftar';

const CATEGORIES: { key: CategoryFilter; label: string }[] = [
  { key: 'all', label: 'All Items' },
  { key: 'burgers', label: 'Burgers' },
  { key: 'pizza', label: 'Artisan Pizza' },
  { key: 'specials', label: 'Specials & Steaks' },
  { key: 'chinese', label: 'Chinese Entrées' },
  { key: 'coffee', label: 'Coffee & Drinks' },
  { key: 'iftar', label: 'Iftar Platter' },
];

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#F6F1E8] text-[#24211E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B58A52] block mb-3">
            Source of Truth • Authentic Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2A211C] tracking-tight leading-tight mb-4">
            Curated Menu & Pricing
          </h2>
          <p className="text-sm sm:text-base text-[#716A61] font-normal leading-relaxed">
            Every dish and price below reflects the authentic Coffee Castle menu. Prepared fresh to order with quality ingredients.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#2A211C]/10">
          {/* Category Tabs (Segmented Button Controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase rounded transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.key
                    ? 'bg-[#2A211C] text-[#F6F1E8] shadow-sm'
                    : 'bg-[#E9E0D3]/60 text-[#24211E]/80 hover:bg-[#E9E0D3] hover:text-[#2A211C]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#716A61] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, pizzas, steaks..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-[#2A211C]/15 rounded text-[#24211E] placeholder:text-[#716A61]/60 focus:outline-none focus:ring-1 focus:ring-[#B58A52] transition-colors"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group p-6 bg-white rounded-lg border border-[#2A211C]/10 hover:border-[#B58A52]/50 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#2A211C] group-hover:text-[#B58A52] transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-semibold text-sm sm:text-base text-[#B58A52] whitespace-nowrap tabular-nums">
                    {item.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#716A61] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Sizing options if present */}
                {item.sizes && (
                  <div className="flex items-center gap-2 text-xs text-[#2A211C]/70 mb-3 pt-2 border-t border-[#F6F1E8]">
                    {item.sizes.map((s) => (
                      <span key={s.name} className="tabular-nums">
                        {s.name}: <strong className="text-[#2A211C]">{s.price}</strong>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer with Category & Tag */}
              <div className="pt-3 border-t border-[#2A211C]/10 flex items-center justify-between text-xs text-[#716A61]">
                <span className="capitalize">{item.category}</span>
                {item.tag ? (
                  <span className="text-[#B58A52] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.tag}</span>
                  </span>
                ) : (
                  <span className="text-[#2A211C]/40 group-hover:text-[#B58A52] transition-colors flex items-center gap-0.5">
                    <span>Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-dashed border-[#2A211C]/20">
            <p className="text-base text-[#716A61] mb-2">
              No menu items match your search "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs font-semibold uppercase tracking-wider text-[#B58A52] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Informational Callout Bar */}
        <div className="mt-14 p-6 sm:p-8 bg-[#2A211C] text-[#F6F1E8] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#B58A52]/20 rounded text-[#B58A52]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-normal text-[#F6F1E8]">
                Looking for seasonal specials or custom platters?
              </h4>
              <p className="text-xs sm:text-sm text-[#F6F1E8]/70 mt-0.5">
                Call our team directly at 051-4908443 for current daily specials and group bookings.
              </p>
            </div>
          </div>
          <a
            href="tel:0514908443"
            className="px-6 py-3 bg-[#B58A52] text-[#171716] hover:bg-[#9E733D] hover:text-white transition-all text-xs font-semibold tracking-wider uppercase rounded whitespace-nowrap shadow-md"
          >
            Call Front Desk
          </a>
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#2A211C]/15 text-[#24211E] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B58A52] font-semibold block mb-1">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2A211C]">
                  {selectedItem.name}
                </h3>
              </div>
              <span className="font-serif text-xl sm:text-2xl font-semibold text-[#B58A52] tabular-nums">
                {selectedItem.price}
              </span>
            </div>

            <p className="text-sm text-[#716A61] leading-relaxed mb-6">
              {selectedItem.description}
            </p>

            {selectedItem.sizes && (
              <div className="p-4 bg-[#F6F1E8] rounded-lg mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2A211C] block mb-2">
                  Available Sizes & Pricing
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {selectedItem.sizes.map((s) => (
                    <div
                      key={s.name}
                      className="p-2.5 bg-white rounded border border-[#2A211C]/10 text-center"
                    >
                      <span className="text-xs text-[#716A61] block">{s.name}</span>
                      <strong className="text-sm text-[#2A211C] tabular-nums">
                        {s.price}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#2A211C]/10">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#716A61] hover:text-[#2A211C]"
              >
                Close
              </button>
              <a
                href="#reservation"
                onClick={() => setSelectedItem(null)}
                className="px-6 py-2 bg-[#2A211C] text-[#F6F1E8] hover:bg-[#B58A52] hover:text-[#171716] transition-colors text-xs font-semibold tracking-wider uppercase rounded"
              >
                Reserve Table
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
