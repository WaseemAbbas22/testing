// src/utils/translations.js
import { useLanguage } from '../context/LanguageContext';

export const translations = {
  en: {
    // TopBar
    followUsOn: 'Follow us on:',
    
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    
    // Form
    getInTouch: 'Get in Touch',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNo: 'Phone No',
    email: 'E-mail',
    selectPestConcern: 'Select Pest Concern',
    selectPriorityType: 'Select Priority Type',
    message: 'Message',
    sendMessage: 'Send Message',
    writeYourMessage: 'Write your message',
    
    // Pest options
    ants: 'Ants',
    cockroaches: 'Cockroaches',
    termites: 'Termites',
    bedbugs: 'Bed Bugs',
    rodents: 'Rodents',
    
    // Priority options
    standard: 'Standard',
    urgent: 'Urgent',
    emergency: 'Emergency',
    
    // Common
    welcome: 'Welcome to our website',
    language: 'Language',
  },
  ur: {
    // TopBar
    followUsOn: 'ہمیں فالو کریں:',
    
    // Navigation
    home: 'گھر',
    about: 'ہمارے بارے میں',
    services: 'خدمات',
    contact: 'رابطہ',
    
    // Form
    getInTouch: 'رابطے میں رہیں',
    firstName: 'پہلا نام',
    lastName: 'آخری نام',
    phoneNo: 'فون نمبر',
    email: 'ای میل',
    selectPestConcern: 'کیڑے کی قسم منتخب کریں',
    selectPriorityType: 'ترجیح کی قسم منتخب کریں',
    message: 'پیغام',
    sendMessage: 'پیغام بھیجیں',
    writeYourMessage: 'اپنا پیغام لکھیں',
    
    // Pest options
    ants: 'چیونٹیاں',
    cockroaches: 'کاکروچ',
    termites: 'دیمک',
    bedbugs: 'بستر کے کیڑے',
    rodents: 'چوہے',
    
    // Priority options
    standard: 'معیاری',
    urgent: 'فوری',
    emergency: 'ہنگامی',
    
    // Common
    welcome: 'ہماری ویب سائٹ میں خوش آمدید',
    language: 'زبان',
  },
  ar: {
    // TopBar
    followUsOn: 'تابعنا على:',
    
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
    contact: 'اتصل بنا',
    
    // Form
    getInTouch: 'تواصل معنا',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    phoneNo: 'رقم الهاتف',
    email: 'البريد الإلكتروني',
    selectPestConcern: 'اختر نوع الآفة',
    selectPriorityType: 'اختر نوع الأولوية',
    message: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    writeYourMessage: 'اكتب رسالتك',
    
    // Pest options
    ants: 'النمل',
    cockroaches: 'الصراصير',
    termites: 'النمل الأبيض',
    bedbugs: 'بق الفراش',
    rodents: 'القوارض',
    
    // Priority options
    standard: 'عادي',
    urgent: 'عاجل',
    emergency: 'طارئ',
    
    // Common
    welcome: 'مرحباً بك في موقعنا',
    language: 'اللغة',
  }
};

// useTranslation hook
export const useTranslation = () => {
  const { currentLanguage } = useLanguage();
  
  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };
  
  return { t, currentLanguage };
};