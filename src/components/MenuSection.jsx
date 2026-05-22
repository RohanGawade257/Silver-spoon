import { useEffect, useMemo, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import MenuCard from './MenuCard';
import { menuData, menuCategories } from '../data/menuData';

export default function MenuSection() {
  const menuSectionRef = useRef(null);
  const filterAnchorRef = useRef(null);
  const filterBarRef = useRef(null);
  const [filter, setFilter] = useState('All'); // 'All', 'Veg', 'NonVeg'
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterFloating, setIsFilterFloating] = useState(false);
  const [filterBarHeight, setFilterBarHeight] = useState(0);

  useEffect(() => {
    const updateFilterPosition = () => {
      if (!menuSectionRef.current || !filterAnchorRef.current || !filterBarRef.current) return;

      const menuRect = menuSectionRef.current.getBoundingClientRect();
      const anchorRect = filterAnchorRef.current.getBoundingClientRect();
      const filterHeight = filterBarRef.current.offsetHeight;
      const navbarOffset = window.innerWidth >= 768 ? 112 : 96;

      setFilterBarHeight(filterHeight);

      const hasReachedTop = anchorRect.top <= navbarOffset;
      const hasRoomInMenu = menuRect.bottom > navbarOffset + filterHeight + 24;

      setIsFilterFloating(hasReachedTop && hasRoomInMenu);
    };

    updateFilterPosition();
    window.addEventListener('scroll', updateFilterPosition);
    window.addEventListener('resize', updateFilterPosition);

    return () => {
      window.removeEventListener('scroll', updateFilterPosition);
      window.removeEventListener('resize', updateFilterPosition);
    };
  }, []);

  const filteredMenu = useMemo(() => {
    return menuData.filter((item) => {
      // 1. Dietary filter
      if (filter === 'Veg' && !item.isVeg) return false;
      if (filter === 'NonVeg' && item.isVeg) return false;

      // 2. Category filter
      if (activeCategory !== 'All' && item.category !== activeCategory) return false;

      // 3. Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return item.name.toLowerCase().includes(query) || 
               (item.description && item.description.toLowerCase().includes(query));
      }

      return true;
    });
  }, [filter, activeCategory, searchQuery]);

  // Group by category if "All" categories is selected
  const displayData = useMemo(() => {
    if (activeCategory !== 'All' || searchQuery.trim()) {
      return { [activeCategory !== 'All' ? activeCategory : 'Search Results']: filteredMenu };
    }

    const grouped = {};
    filteredMenu.forEach(item => {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });
    return grouped;
  }, [filteredMenu, activeCategory, searchQuery]);

  return (
    <section
      ref={menuSectionRef}
      id="menu"
      className="relative py-24 w-full overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-zinc-950"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 10, 5, 0.72), rgba(10, 8, 6, 0.78)), url('/assets/silver_spoon_interior.jpg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-[var(--color-accent)]">Menu</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our wide spread of cuisines, from Goan coastal delicacies to authentic Indian and Chinese dishes.
          </p>
        </div>

      {/* Main Dietary Filters */}
      <div
        ref={filterAnchorRef}
        className="mb-10"
        style={isFilterFloating ? { height: `${filterBarHeight}px` } : undefined}
      >
        <div
          className={`transition-all duration-300 ease-in-out ${
            isFilterFloating
              ? 'fixed top-0 left-0 z-40 flex w-full justify-center px-3 sm:px-4 pt-24 md:pt-28'
              : 'relative'
          }`}
        >
          <div
            ref={filterBarRef}
            className={`mx-auto grid w-full max-w-md grid-cols-3 gap-3 sm:flex sm:w-fit sm:max-w-full sm:justify-center sm:gap-4 transition-all duration-300 ease-in-out ${
              isFilterFloating ? 'rounded-[1.75rem] glass-nav px-3 py-2 sm:rounded-full sm:px-4 sm:py-3 shadow-2xl shadow-black/50' : ''
            }`}
          >
            <button 
              onClick={() => setFilter('All')}
              className={`min-w-0 px-3 py-3 text-sm sm:px-6 sm:text-base rounded-full font-bold transition-all ${
                filter === 'All' 
                  ? 'bg-[var(--color-accent)] text-[var(--color-primary)] shadow-lg shadow-[var(--color-accent)]/20' 
                  : 'glass text-white hover:bg-white/10'
              }`}
            >
              All Menu
            </button>
            <button 
              onClick={() => setFilter('Veg')}
              className={`min-w-0 px-3 py-3 text-sm sm:px-6 sm:text-base rounded-full font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                filter === 'Veg' 
                  ? 'bg-[var(--color-veg)] text-white shadow-lg shadow-[var(--color-veg)]/20' 
                  : 'glass text-white hover:bg-white/10'
              }`}
            >
              <div className="w-3 h-3 border-2 border-current rounded-sm flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-current rounded-full"></div>
              </div>
              Veg
            </button>
            <button 
              onClick={() => setFilter('NonVeg')}
              className={`min-w-0 px-3 py-3 text-sm sm:px-6 sm:text-base rounded-full font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                filter === 'NonVeg' 
                  ? 'bg-[var(--color-non-veg)] text-white shadow-lg shadow-[var(--color-non-veg)]/20' 
                  : 'glass text-white hover:bg-white/10'
              }`}
            >
              <div className="w-3 h-3 border-2 border-current rounded-sm flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-current rounded-full"></div>
              </div>
              Non-Veg
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-10 relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
          <Search size={20} />
        </div>
        <input 
          type="text" 
          className="w-full glass bg-white/5 border border-white/10 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] placeholder-gray-400 transition-all"
          placeholder="Search for a dish..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Category Chips */}
      {!searchQuery.trim() && (
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-12 pb-2">
          <button
            onClick={() => setActiveCategory('All')}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'All' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white glass'
            }`}
          >
            All Categories
          </button>
          {menuCategories.map(cat => {
            // Only show category if it has items in the current dietary filter
            const hasItems = menuData.some(item => item.category === cat && 
              (filter === 'All' || (filter === 'Veg' && item.isVeg) || (filter === 'NonVeg' && !item.isVeg))
            );
            
            if (!hasItems) return null;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white glass'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      )}

      {/* Menu Grid */}
      <div className="space-y-16">
        {Object.entries(displayData).map(([category, items]) => (
          items.length > 0 && (
            <div key={category}>
              <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-6 border-b border-white/10 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                  <MenuCard key={`${item.name}-${idx}`} item={item} />
                ))}
              </div>
            </div>
          )
        ))}

        {Object.keys(displayData).length === 0 || (Object.keys(displayData).length === 1 && Object.values(displayData)[0].length === 0) ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl">No dishes found matching your criteria.</p>
            <button 
              onClick={() => { setFilter('All'); setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-[var(--color-accent)] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : null}
      </div>
      </div>
    </section>
  );
}
