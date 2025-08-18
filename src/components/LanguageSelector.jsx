// src/components/LanguageSelector.jsx
import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

 const languages = [
  {
    code: 'en',
    name: 'ENG',
    fullName: 'English',
    flag: 'https://flagcdn.com/w20/us.png' // US flag
  },
  {
    code: 'ur',
    name: 'اردو',
    fullName: 'Urdu',
    flag: 'https://cdn.countryflags.com/thumbs/china/flag-square-250.png' // Pakistan flag
  },
  {
    code: 'ar',
    name: 'عربي',
    fullName: 'Arabic',
    flag: 'https://flagcdn.com/w20/sa.png' // Saudi Arabia flag
  }
];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (langCode) => {
    onLanguageChange(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Current Language Display */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors duration-200 min-w-[100px] text-white"
        aria-label="Select Language"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm font-medium 2xl:text-lg">{currentLang.name}</span>
        <FaChevronDown 
          className={`w-3 h-3 2xl:w-4 2xl:h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[140px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                currentLanguage === language.code ? 'bg-green-50 text-green-700' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium 2xl:text-base">{language.name}</span>
                <span className="text-xs text-gray-500 2xl:text-sm">{language.fullName}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;