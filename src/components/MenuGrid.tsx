import React from 'react';
import { Beer, Wine, Grape, Snowflake, Citrus, Coffee, ChefHat, Zap, Leaf, Flame } from 'lucide-react';
import ImagePreloader from './ImagePreloader';

interface MenuSection {
  id: string;
  title: { ro: string; en: string };
  icon: React.ReactNode;
  backgroundImage: string;
}

interface MenuGridProps {
  language: 'ro' | 'en';
  onSectionSelect: (sectionId: string) => void;
}

const menuSections: MenuSection[] = [
  {
    id: 'beer',
    title: { ro: 'BERE', en: 'BEER' },
    icon: <Beer className="w-7 h-7" />,
    backgroundImage: '/images/bere/stella.jpg'
  },
  {
    id: 'cocktails',
    title: { ro: 'COCKTAILURI', en: 'COCKTAILS' },
    icon: <Wine className="w-7 h-7" />,
    backgroundImage: '/images/cocktailuri/sara.jpg'
  },
  {
    id: 'coffee-specialties',
    title: { ro: 'SPECIALITĂȚI DIN CAFEA', en: 'COFFEE SPECIALTIES' },
    icon: <Zap className="w-6 h-6" />,
    backgroundImage: '/images/specialitati-din-cafea/espresso.jpg'
  },
  {
    id: 'specialties',
    title: { ro: 'SPECIALITĂȚI', en: 'SPECIALTIES' },
    icon: <Coffee className="w-6 h-6" />,
    backgroundImage: '/images/specialitati/frape-ciocolata.jpg'
  },
  {
    id: 'spirits',
    title: { ro: 'BĂUTURI ALCOOLICE', en: 'ALCOHOLIC DRINKS' },
    icon: <Flame className="w-7 h-7" />,
    backgroundImage: '/images/bauturi-alcoolice/vechia-romagna.jpg'
  },
  {
    id: 'soft-drinks',
    title: { ro: 'BĂUTURI RĂCORITOARE', en: 'SOFT DRINKS' },
    icon: <Snowflake className="w-7 h-7" />,
    backgroundImage: '/images/bauturi-racoritoare/cola-zero.jpg'
  },
  {
    id: 'lemonade-fresh',
    title: { ro: 'LIMONADE & FRESHURI', en: 'LEMONADE & FRESH' },
    icon: <Citrus className="w-7 h-7" />,
    backgroundImage: '/images/limonade-freshuri/lamaie.jpg'
  },
  {
    id: 'tea-specialties',
    title: { ro: 'SPECIALITĂȚI CEAI', en: 'TEA SPECIALTIES' },
    icon: <Leaf className="w-7 h-7" />,
    backgroundImage: '/images/specialitati-ceai/negru.jpg'
  },
  {
    id: 'fast-food',
    title: { ro: 'FAST FOOD', en: 'FAST FOOD' },
    icon: <ChefHat className="w-5 h-5" />,
    backgroundImage: '/images/fast-food/sandwich-sunca.jpg'
  },
  {
    id: 'hot-chocolate',
    title: { ro: 'SPECIALITĂȚI DIN CIOCOLATĂ', en: 'CHOCOLATE SPECIALTIES' },
    icon: <Coffee className="w-6 h-6" />,
    backgroundImage: '/images/specialitati-din-ciocolata/gold-clasic.jpg'
  },
  {
    id: 'wines-champagne',
    title: { ro: 'VINURI & ȘAMPANIE', en: 'WINES & CHAMPAGNE' },
    icon: <Grape className="w-7 h-7" />,
    backgroundImage: '/images/vinuri-sampanie/sampanie-gold.jpg'
  }
];

export default function MenuGrid({ language, onSectionSelect }: MenuGridProps) {
  // Preload background images for menu grid
  const backgroundImages = React.useMemo(() => {
    return menuSections.map(section => section.backgroundImage);
  }, []);

  // Split sections into groups for custom layout
  const firstRowSections = menuSections.slice(0, 2); // Beer, Cocktails
  const cocktailsSection = menuSections[1]; // Cocktails
  const remainingSections = menuSections.slice(3); // All others after coffee specialties

  return (
    <div className="px-6 py-8 fadeInUp">
      {/* Preload background images */}
      <ImagePreloader images={backgroundImages} />
      
      {/* Custom layout: 2x1x2 pattern */}
      <div className="space-y-3">
        {/* First row: Beer and Coffee Specialties */}
        <div className="grid grid-cols-2 gap-3">
          {/* Beer section */}
          <button
            key={firstRowSections[0].id}
            onClick={() => onSectionSelect(firstRowSections[0].id)}
            className="menu-grid-item group relative overflow-hidden transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]"
            style={{
              aspectRatio: '1.1',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              animationDelay: '0s'
            }}
          >
            {/* Background Image */}
            <div 
              className="menu-grid-background absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ 
                backgroundImage: `url("${firstRowSections[0].backgroundImage}")`,
                filter: firstRowSections[0].id === 'beer' || firstRowSections[0].id === 'wines-spirits' ? 'brightness(1.2)' : undefined,
                backgroundPosition: firstRowSections[0].id === 'beer' ? 'center 15%' : 'center 20%'
              }}
            />
            
            {/* Dark Gradient Overlay */}
            <div 
              className="absolute inset-0 transition-all duration-300"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
            />
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
              {/* Icon */}
              <div className="mb-2 p-2.5 rounded-full backdrop-blur-sm border group-hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center bg-white/20 border-white/30 text-white group-hover:bg-white/30">
                <div className="w-7 h-7 flex items-center justify-center">
                  {firstRowSections[0].icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-xs leading-tight drop-shadow-lg transition-colors duration-300 text-white">
                {firstRowSections[0].title[language]}
              </h3>
            </div>
          </button>
          
          {/* Coffee Specialties section */}
          <button
            key={menuSections[2].id}
            onClick={() => onSectionSelect(menuSections[2].id)}
            className="menu-grid-item group relative overflow-hidden transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]"
            style={{
              aspectRatio: '1.1',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              animationDelay: '0.2s'
            }}
          >
            {/* Background Image */}
            <div 
              className="menu-grid-background absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ 
                backgroundImage: `url("${menuSections[2].backgroundImage}")`,
                backgroundPosition: 'center 20%'
              }}
            />
            
            {/* Dark Gradient Overlay */}
            <div 
              className="absolute inset-0 transition-all duration-300"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
            />
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
              {/* Icon */}
              <div className="mb-2 p-2.5 rounded-full backdrop-blur-sm border group-hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center bg-white/20 border-white/30 text-white group-hover:bg-white/30">
                <div className="w-7 h-7 flex items-center justify-center">
                  {menuSections[2].icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-xs leading-tight drop-shadow-lg transition-colors duration-300 text-white">
                {menuSections[2].title[language]}
              </h3>
            </div>
          </button>
        </div>
        
        {/* Second row: Cocktails full width */}
        <div className="w-full">
          <button
            key={cocktailsSection.id}
            onClick={() => onSectionSelect(cocktailsSection.id)}
            className="menu-grid-item group relative overflow-hidden transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] w-full"
            style={{
              aspectRatio: '2.2/1',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              animationDelay: '0.1s'
            }}
          >
            {/* Background Image */}
            <div 
              className="menu-grid-background absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ 
                backgroundImage: `url("${cocktailsSection.backgroundImage}")`,
                backgroundPosition: 'center 20%'
              }}
            />
            
            {/* Dark Gradient Overlay */}
            <div 
              className="absolute inset-0 transition-all duration-300"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
            />
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
              {/* Icon */}
              <div className="mb-3 p-3 rounded-full backdrop-blur-sm border group-hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center bg-white/20 border-white/30 text-white group-hover:bg-white/30">
                <div className="w-8 h-8 flex items-center justify-center">
                  {cocktailsSection.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-sm leading-tight drop-shadow-lg transition-colors duration-300 text-white">
                {cocktailsSection.title[language]}
              </h3>
            </div>
          </button>
        </div>
        
        {/* Remaining sections in 2 column grid */}
        <div className="grid grid-cols-2 gap-3">
          {remainingSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onSectionSelect(section.id)}
              className="menu-grid-item group relative overflow-hidden transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]"
              style={{
                aspectRatio: '1.1',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                animationDelay: `${(index + 3) * 0.1}s`
              }}
            >
              {/* Background Image */}
              <div 
                className="menu-grid-background absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url("${section.backgroundImage}")`,
                  filter: section.id === 'beer' || section.id === 'wines-spirits' ? 'brightness(1.2)' : undefined,
                  backgroundPosition: section.id === 'beer' ? 'center 15%' : 
                                    section.id === 'wines-champagne' ? 'center 20%' : 
                                    section.id === 'spirits' ? 'center 20%' : 
                                    section.id === 'soft-drinks' ? 'center 20%' : 
                                    section.id === 'lemonade-fresh' ? 'center 20%' : 
                                    section.id === 'tea-specialties' ? 'center 20%' : 
                                    section.id === 'fast-food' ? 'center 20%' : 
                                    section.id === 'hot-chocolate' ? 'center 20%' : 'center 20%'
                }}
              />
              
              {/* Dark Gradient Overlay */}
              <div 
                className="absolute inset-0 transition-all duration-300"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
              />
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
                {/* Icon */}
                <div className="mb-2 p-2.5 rounded-full backdrop-blur-sm border group-hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center bg-white/20 border-white/30 text-white group-hover:bg-white/30">
                  <div className="w-7 h-7 flex items-center justify-center">
                    {section.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-xs leading-tight drop-shadow-lg transition-colors duration-300 text-white">
                  {section.title[language]}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}