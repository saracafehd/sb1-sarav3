import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import ImagePreloader from './components/ImagePreloader';
import MenuGrid from './components/MenuGrid';
import MenuSection from './components/MenuSection';
import { menuData } from './data/menuData';

type Language = 'ro' | 'en';

function AppContent() {
  const { theme } = useTheme();
  const [language, setLanguage] = useState<Language>('ro');
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [navigationHistory, setNavigationHistory] = useState<(string | null)[]>([null]);

  // Preload critical images from all sections
  const criticalImages = React.useMemo(() => {
    const images: string[] = [];
    
    // Get first few images from each section for faster initial loading
    menuData.forEach(section => {
      section.items.slice(0, 3).forEach(item => {
        if (item.image) {
          images.push(item.image);
        }
      });
    });
    
    return images.filter((url, index, array) => array.indexOf(url) === index);
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (state && state.section) {
        setCurrentSection(state.section);
        // Update navigation history to match browser state
        if (state.section === null) {
          setNavigationHistory([null]);
        }
      } else {
        setCurrentSection(null);
        setNavigationHistory([null]);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Initialize browser history state
    if (!window.history.state || window.history.state.section === undefined) {
      window.history.replaceState({ section: null }, '', window.location.pathname);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ro' ? 'en' : 'ro');
  };

  const handleSectionSelect = (sectionId: string) => {
    setCurrentSection(sectionId);
    // Add to navigation history
    setNavigationHistory(prev => [...prev, sectionId]);
    // Push new state to browser history
    window.history.pushState({ section: sectionId }, '', `#${sectionId}`);
  };

  const handleBack = () => {
    // Always go back to main menu from any section
    if (currentSection !== null) {
      setCurrentSection(null);
      setNavigationHistory([null]);
      // Push state to go back to main menu
      window.history.pushState({ section: null }, '', window.location.pathname);
    }
  };

  const getCurrentSectionData = () => {
    const sectionMap: { [key: string]: number } = {
      'beer': 0,
      'cocktails': 1,
      'coffee-specialties': 2,
      'specialties': 3,
      'spirits': 4,
      'soft-drinks': 5,
      'lemonade-fresh': 6,
      'tea-specialties': 7,
      'fast-food': 8,
      'hot-chocolate': 9,
      'wines-champagne': 10
    };
    
    const index = sectionMap[currentSection || ''];
    return menuData[index];
  };

  if (currentSection) {
    const sectionData = getCurrentSectionData();
    if (sectionData) {
      return (
        <MenuSection
          title={sectionData.title}
          items={sectionData.items}
          note={sectionData.note}
          language={language}
          onBack={handleBack}
          onLanguageToggle={toggleLanguage}
          sectionId={currentSection}
        />
      );
    }
  }

  return (
    <div 
      className="min-h-screen relative transition-all duration-300 bg-gradient-to-br from-amber-950 via-stone-900 to-neutral-900"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 opacity-25"
        style={{
          backgroundImage: 'url("/background.png")',
          zIndex: 0
        }}
      />

      {/* Compact Header */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(16px)',
          borderRadius: '0 0 24px 24px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
        }}
      >
        <div className="px-4 py-4">
          <div className="flex items-start justify-between gap-3">
            {/* Left: Back button (invisible spacer) */}
            <div className="w-12 flex-shrink-0">
              {/* Invisible spacer to balance the language button */}
            </div>
            
            {/* Center: Logo stretching full width */}
            <div className="flex-1 flex justify-center px-4">
              <div className="flex flex-col items-center">
                <img 
                  src="/saralogo.png" 
                  alt="Sara Caffe" 
                  className="header-logo logo-pulse-effect transition-all duration-300"
                  style={{ 
                    height: '50px',
                    width: '100%',
                    maxWidth: '300px',
                    objectFit: 'contain',
                    filter: theme === 'dark' 
                      ? 'drop-shadow(0 0 12px rgba(255, 50, 50, 0.8)) drop-shadow(0 0 20px rgba(255, 0, 0, 0.4))' 
                      : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                  }}
                />
                <p className={`text-xs italic font-light leading-tight mt-1 transition-colors duration-300 ${
                  'text-white/70'
                }`}>
                  {language === 'ro' ? 'Un loc plin de savoare din 2004' : 'A place full of flavor since 2004'}
                </p>
              </div>
            </div>
            
            {/* Right: Language Toggle */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <button
                onClick={toggleLanguage}
                className="flex-shrink-0 px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border relative text-white border-white/30 hover:border-white/60"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
                  zIndex: 50
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
        </div>
      </div>

      {/* Menu Grid with top padding for fixed header */}
      <div className="pt-24 relative">
        <MenuGrid language={language} onSectionSelect={handleSectionSelect} />
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-8">
        {/* Separator Line */}
        <div className="w-full h-px mb-6 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div className="px-4 py-6 text-center">
          <p 
            className="font-medium text-sm transition-colors duration-300 text-white/60"
          >
            © 2025 Meniu Digital – Toate prețurile sunt în lei
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;