import React, { useState, useMemo } from 'react';
import { useEffect, useRef } from 'react';
import { ArrowLeft, Globe, Search } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImagePreloader from './ImagePreloader';

interface MenuItem {
  name: { ro: string; en: string };
  description?: { ro: string; en: string };
  volume?: string;
  price: string;
  alcohol?: string;
  image?: string;
  tags?: string[];
}

interface MenuSectionProps {
  title: { ro: string; en: string };
  items: MenuItem[];
  note?: { ro: string; en: string };
  language: 'ro' | 'en';
  onBack: () => void;
  onLanguageToggle: () => void;
  sectionId?: string;
}

interface FilterTag {
  id: string;
  label: { ro: string; en: string };
  emoji: string;
  matchFn: (item: MenuItem) => boolean;
}

const filterTags: FilterTag[] = [
  {
    id: 'non-alcoholic',
    label: { ro: 'Fără alcool', en: 'Non-alcoholic' },
    emoji: '🥤',
    matchFn: (item) => item.tags?.includes('non-alcoholic') || false
  }
];

// Sections that should show the non-alcoholic filter
const sectionsWithNonAlcoholicFilter = ['cocktails', 'beer', 'wines-champagne', 'spirits'];
const getCategoryBannerImage = (sectionId: string): string => {
  const bannerImages: { [key: string]: string } = {
    'cocktails': '/images/cocktailuri/sara.jpg',
    'beer': '/images/bere/stella.jpg',
    'specialties': '/images/specialitati/frape-ciocolata.jpg',
    'coffee-specialties': '/images/specialitati-din-cafea/espresso.jpg',
    'fast-food': '/images/fast-food/sandwich-sunca.jpg',
    'tea-specialties': '/images/specialitati-ceai/negru.jpg',
    'wines-champagne': '/images/vinuri-sampanie/sampanie-gold.jpg',
    'spirits': '/images/bauturi-alcoolice/vechia-romagna.jpg',
    'soft-drinks': '/images/bauturi-racoritoare/cola-zero.jpg',
    'lemonade-fresh': '/images/limonade-freshuri/lamaie.jpg',
    'hot-chocolate': '/images/specialitati-din-ciocolata/gold-clasic.jpg'
  };
  
  return bannerImages[sectionId] || '/images/cocktailuri/sara.jpg';
};

export default function MenuSection({ title, items, note, language, onBack, onLanguageToggle, sectionId = 'cocktails' }: MenuSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Extract all image URLs for preloading
  const imageUrls = useMemo(() => {
    return items
      .filter(item => item.image)
      .map(item => item.image!)
      .filter((url, index, array) => array.indexOf(url) === index); // Remove duplicates
  }, [items]);

  // Scroll to top when component mounts or section changes
  useEffect(() => {
    // Instantly set scroll position to top without animation
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    // Also instantly scroll the main window to top
    window.scrollTo(0, 0);
  }, [sectionId]);

  const itemsWithVisibility = useMemo(() => {
    let filteredItems = items;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filteredItems = filteredItems.filter(item => {
        const name = item.name[language].toLowerCase();
        const description = item.description?.[language]?.toLowerCase() || '';
        const volume = item.volume?.toLowerCase() || '';
        const alcohol = item.alcohol?.toLowerCase() || '';
        
        return name.includes(query) || 
               description.includes(query) || 
               volume.includes(query) || 
               alcohol.includes(query);
      });
    }

    // Apply tag filters
    if (activeFilters.length > 0) {
      filteredItems = filteredItems.filter(item => {
        return activeFilters.every(filterId => {
          const filter = filterTags.find(f => f.id === filterId);
          return filter ? filter.matchFn(item) : false;
        });
      });
    }

    // Create a Set of filtered items for fast lookup
    const filteredSet = new Set(filteredItems);
    
    // Return all items with visibility flag
    return items.map(item => ({
      ...item,
      isVisible: filteredSet.has(item)
    }));
  }, [items, searchQuery, activeFilters, language]);

  const visibleItemsCount = itemsWithVisibility.filter(item => item.isVisible).length;

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  // Get available filters for current section
  const getAvailableFilters = () => {
    const filters: FilterTag[] = [];
    
    // Add non-alcoholic filter only for specific sections
    if (sectionsWithNonAlcoholicFilter.includes(sectionId)) {
      filters.push(filterTags[0]); // Now the non-alcoholic filter is at index 0
    }
    
    return filters;
  };

  return (
    <div 
      className="min-h-screen flex flex-col relative"
      style={{ background: 'linear-gradient(to bottom right, #78350f, #1c1917, #171717)' }}
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-25"
        style={{
          backgroundImage: 'url("/background.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      />

      {/* Preload images for this section */}
      <ImagePreloader images={imageUrls} />
      
      {/* Fixed Header */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative"
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(12px)',
          borderRadius: '0 0 20px 20px',
          padding: '1.2rem',
          boxShadow: '0 2px 12px rgba(0,0,0,0.4)'
        }}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex-shrink-0 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border z-30 text-white border-white/30 hover:border-white/60"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
            }}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          {/* Center: Logo stretching available width */}
          <div className="flex-1 flex justify-center px-4">
            <div className="flex flex-col items-center z-10">
              <img 
                src="/saralogo.png" 
                alt="Sara Caffe" 
                className="header-logo logo-pulse-effect transition-all duration-300"
                style={{ 
                  height: '50px',
                  width: '100%',
                  maxWidth: '300px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 12px rgba(255, 50, 50, 0.8)) drop-shadow(0 0 20px rgba(255, 0, 0, 0.4))'
                }}
              />
              <p className="text-xs italic font-light leading-tight mt-1 transition-colors duration-300 text-white/70">
                {language === 'ro' ? 'Un loc plin de savoare din 2004' : 'A place full of flavor since 2004'}
              </p>
            </div>
          </div>
          
          <button
            onClick={onLanguageToggle}
            className="flex-shrink-0 px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border z-30 text-white border-white/30 hover:border-white/60"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="flex items-center space-x-1">
              <Globe className="w-4 h-4" />
              <span className="font-bold text-sm">
                {language === 'ro' ? 'RO' : 'EN'}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Fixed Category Banner */}
      <div className="relative w-full overflow-hidden mt-11 flex-shrink-0 z-10" style={{ height: '336px' }}>
        {/* Banner Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-300"
          style={{
            backgroundImage: `url("${getCategoryBannerImage(sectionId)}")`,
            backgroundPosition: sectionId === 'beer' ? 'center 15%' : 
                               sectionId === 'wines-champagne' ? 'center 20%' : 
                               sectionId === 'cocktails' ? 'center 20%' : 
                               sectionId === 'coffee-specialties' ? 'center 20%' : 
                               sectionId === 'specialties' ? 'center 20%' : 
                               sectionId === 'spirits' ? 'center 20%' : 
                               sectionId === 'soft-drinks' ? 'center 20%' : 
                               sectionId === 'lemonade-fresh' ? 'center 20%' : 
                               sectionId === 'tea-specialties' ? 'center 20%' : 
                               sectionId === 'fast-food' ? 'center 20%' : 
                               sectionId === 'hot-chocolate' ? 'center 20%' : 'center 20%',
            filter: sectionId === 'beer' || sectionId === 'wines-champagne' || sectionId === 'spirits'
              ? 'brightness(0.8)' 
              : 'brightness(0.8)'
          }}
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2))'
          }}
        />
        
        {/* Category Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h2 className="category-title transition-all duration-300 mb-3 text-fade-in">
              {title[language].toUpperCase()}
            </h2>
            {note && (
              <p className="category-subtitle transition-all duration-300 leading-relaxed text-fade-in" style={{ animationDelay: '0.2s' }}>
                {note[language]}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Search and Filters Section */}
      <div 
        className="relative z-10 px-4 py-4 flex-shrink-0" 
        style={{ 
          minHeight: '120px',
          background: 'transparent'
        }}
      >
        {/* Search Bar */}
        <div className="relative mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 text-white/60" />
            <input
              type="text"
              placeholder={language === 'ro' ? 'Caută în meniu...' : 'Search the menu...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 bg-black/40 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20 glow-animation"
              style={{
                backdropFilter: 'blur(8px)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            />
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2">
          {getAvailableFilters().map((filter) => (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={`filter-button flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transform hover:scale-105 ${
                activeFilters.includes(filter.id)
                  ? 'bg-white/25 border-white/40 text-white'
                  : 'bg-black/25 border-white/20 text-white/80 hover:bg-white/10'
              }`}
              style={{
                backdropFilter: 'blur(8px)',
                minWidth: 'fit-content',
                height: '40px',
                boxSizing: 'border-box'
              }}
            >
              <span className="text-base">{filter.emoji}</span>
              <span>{filter.label[language]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Menu Items Section */}
      <div 
        ref={scrollContainerRef} 
        className="relative z-10 flex-1 overflow-y-auto min-h-0"
        style={{
          background: 'transparent',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div 
          className="px-4 pb-6" 
          style={{ 
            minHeight: '400px',
            background: 'transparent'
          }}
        >
          {visibleItemsCount === 0 ? (
            <div className="text-center py-12 text-white/70">
              <p className="text-lg font-medium mb-2">
                {language === 'ro' ? 'Nu s-au găsit rezultate' : 'No results found'}
              </p>
              <p className="text-sm">
                {language === 'ro' 
                  ? 'Încearcă să modifici căutarea sau filtrele' 
                  : 'Try adjusting your search or filters'}
              </p>
            </div>
          ) : (
            <div className="grid gap-4" style={{ gridTemplateColumns: '1fr' }}>
              {itemsWithVisibility.map((item, index) => (
                item.isVisible && (
                  <div
                    key={index}
                    className="menu-item group relative backdrop-blur-xl rounded-xl border shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] border-white/20 hover:border-white/40"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      backdropFilter: 'blur(8px)',
                      minHeight: '120px'
                    }}
                  >
                    <div className="relative flex items-start p-4 h-full">
                      {item.image && (
                        <div className="flex-shrink-0 mr-4 self-start">
                          <OptimizedImage
                            src={item.image}
                            alt={item.name[language]}
                            className="w-20 h-28 rounded-lg object-cover shadow-md border transition-colors duration-300 border-white/20"
                            style={{
                              objectFit: 'cover'
                            }}
                            onError={(e) => {
                              // Hide image if it fails to load
                              const target = e.target as HTMLImageElement;
                              if (target.parentElement) {
                                target.parentElement.style.display = 'none';
                              }
                            }}
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg mb-2 transition-colors duration-300 leading-tight text-white">
                              {item.name[language]}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {item.volume && (
                                <span className="text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 rounded-full font-bold shadow-lg whitespace-nowrap">
                                  {item.volume}
                                </span>
                              )}
                              {item.alcohol && (
                                <span className="text-xs bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full font-bold shadow-lg whitespace-nowrap">
                                  {item.alcohol}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="ml-4 text-right flex-shrink-0 self-center">
                            <span className="text-xl font-bold transition-colors duration-300 whitespace-nowrap text-white">
                              {item.price}
                            </span>
                          </div>
                        </div>
                        {item.description && (
                          <p className="text-sm leading-relaxed transition-colors duration-300 mt-auto text-white/70">
                            {item.description[language]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}