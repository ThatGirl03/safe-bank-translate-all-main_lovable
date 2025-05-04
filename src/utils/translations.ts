import { LanguageCode } from '@/contexts/LanguageContext';

// This is a simplified translation system for demo purposes
// In a production app, you would load translations from files or an API

// Define translation types
export type TranslationKey = 
  | 'welcome'
  | 'signUp'
  | 'logIn'
  | 'name'
  | 'mobile'
  | 'email'
  | 'password'
  | 'language'
  | 'verify'
  | 'forgotPassword'
  | 'setupWizard'
  | 'chooseLanguages'
  | 'chooseBankingTopics'
  | 'allowNotifications'
  | 'setupComplete'
  | 'search'
  | 'awarenessTips'
  | 'scamAlerts'
  | 'bankingGuides'
  | 'faqs'
  | 'helpdesk'
  | 'profile'
  | 'settings'
  | 'logout'
  | 'welcomeUser'
  | 'securityAlerts'
  | 'tipOfDay'
  | 'tutorials'
  | 'quickCategories'
  | 'new'
  | 'loading'
  | 'viewAll'
  | 'readMore'
  | 'watchVideo'
  | 'shareAlert'
  | 'reportIssue'
  | 'saveForLater'
  | 'notifications'
  | 'darkMode'
  | 'highContrast'
  | 'textToSpeech'
  | 'accountSettings'
  | 'securitySettings'
  | 'privacySettings'
  | 'videoTutorials'
  | 'interactiveGuides'
  | 'securityScore'
  | 'securityChecklist'
  | 'scanQRCode';

// English translations (base)
export const en: Record<TranslationKey, string> = {
  welcome: 'Welcome to the Multilingual Awareness System – Your guide to safe mobile banking.',
  signUp: 'Sign Up',
  logIn: 'Log In',
  name: 'Name',
  mobile: 'Mobile Number',
  email: 'Email Address',
  password: 'Password',
  language: 'Preferred Language',
  verify: 'Verify',
  forgotPassword: 'Forgot Password?',
  setupWizard: 'Setup Wizard',
  chooseLanguages: 'Choose Languages',
  chooseBankingTopics: 'Choose Banking Topics',
  allowNotifications: 'Allow Notifications',
  setupComplete: "You're ready to start! Let's protect your banking experience.",
  search: 'Search tips, warnings, or learn how to protect your banking',
  awarenessTips: 'Awareness Tips',
  scamAlerts: 'Scam Alerts',
  bankingGuides: 'Banking Setup Guides',
  faqs: 'FAQs',
  helpdesk: 'Contact Helpdesk',
  profile: 'Profile',
  settings: 'Settings',
  logout: 'Logout',
  welcomeUser: 'Welcome',
  securityAlerts: "Today's Security Alerts",
  tipOfDay: 'Quick Tip of the Day: "Don\'t click unknown links!"',
  tutorials: 'Tutorials',
  quickCategories: 'Quick Categories',
  new: 'new',
  loading: 'Loading...',
  viewAll: 'View All',
  readMore: 'Read More',
  watchVideo: 'Watch Video',
  shareAlert: 'Share Alert',
  reportIssue: 'Report Issue',
  saveForLater: 'Save for Later',
  notifications: 'Notifications',
  darkMode: 'Dark Mode',
  highContrast: 'High Contrast',
  textToSpeech: 'Text to Speech',
  accountSettings: 'Account Settings',
  securitySettings: 'Security Settings',
  privacySettings: 'Privacy Settings',
  videoTutorials: 'Video Tutorials',
  interactiveGuides: 'Interactive Guides',
  securityScore: 'Security Score',
  securityChecklist: 'Security Checklist',
  scanQRCode: 'Scan QR Code'
};

// isiZulu translations (example)
export const zu: Record<TranslationKey, string> = {
  welcome: 'Siyakwamukela ku-Multilingual Awareness System - Umholi wakho wokuphephisa i-mobile banking.',
  signUp: 'Bhalisa',
  logIn: 'Ngena',
  name: 'Igama',
  mobile: 'Inombolo Yeselula',
  email: 'Ikheli le-imeyili',
  password: 'Iphasiwedi',
  language: 'Ulimi Olukhethiwe',
  verify: 'Qinisekisa',
  forgotPassword: 'Ukhohlwe iphasiwedi?',
  setupWizard: 'Isiza Sokulungisa',
  chooseLanguages: 'Khetha Izilimi',
  chooseBankingTopics: 'Khetha Izihloko Zebhange',
  allowNotifications: 'Vumela Izaziso',
  setupComplete: "Usukulungele ukuqala! Masivikeleni i-banking experience yakho.",
  search: 'Sesha amathiphu, izexwayiso, noma ufunde indlela yokuvikela i-banking yakho',
  awarenessTips: 'Amathiphu Wokuqwashisa',
  scamAlerts: 'Izexwayiso Ze-scam',
  bankingGuides: 'Izihlahla Zokulungisa Ibhange',
  faqs: 'Imibuzo Evame Ukubuzwa',
  helpdesk: 'Shayela Usizo',
  profile: 'Iphrofayela',
  settings: 'Izilungiselelo',
  logout: 'Phuma',
  welcomeUser: 'Siyakwamukela',
  securityAlerts: "Izexwayiso Zezokuphepha Zanamuhla",
  tipOfDay: 'Ithiphu Elisheshayo Losuku: "Ungakliki amalinki angaziwa!"',
  tutorials: 'Izifundo',
  quickCategories: 'Izigaba Ezisheshayo',
  new: 'okusha',
  loading: 'Iyalayisha...',
  viewAll: 'Buka Konke',
  readMore: 'Funda Kabanzi',
  watchVideo: 'Buka Ividiyo',
  shareAlert: 'Yabelana Ngesexwayiso',
  reportIssue: 'Bika Inkinga',
  saveForLater: 'Londolozela Kamuva',
  notifications: 'Izaziso',
  darkMode: 'Isimo Esimnyama',
  highContrast: 'Ukuqhathanisa Okuphezulu',
  textToSpeech: 'Umbhalo Uya Ekukhulumeni',
  accountSettings: 'Izilungiselelo Ze-akhawunti',
  securitySettings: 'Izilungiselelo Zokuphepha',
  privacySettings: 'Izilungiselelo Zobumfihlo',
  videoTutorials: 'Izifundo Zevidiyo',
  interactiveGuides: 'Izihlahla Ezisebenzisanayo',
  securityScore: 'Amamaki Ezokuphepha',
  securityChecklist: 'Uhlu Lokuhlola Lokuphepha',
  scanQRCode: 'Skena Ikhodi ye-QR'
};

// Sesotho translations (example)
export const st: Record<TranslationKey, string> = {
  welcome: 'O amohetswe ho Multilingual Awareness System - Motataisi wa hao wa ho boloka banka ea mobile e sireletsehile.',
  signUp: 'Ngodisa',
  logIn: 'Kena',
  name: 'Lebitso',
  mobile: 'Nomoro ea Mohala',
  email: 'Aterese ea Email',
  password: 'Password',
  language: 'Puo e Ratoang',
  verify: 'Netefatsa',
  forgotPassword: 'U lebetse Password?',
  setupWizard: 'Mohlala oa ho Seta',
  chooseLanguages: 'Kgetha Lipuo',
  chooseBankingTopics: 'Kgetha Lihlooho tsa ho Banka',
  allowNotifications: 'Lumella Litsebiso',
  setupComplete: "U se u loketse ho qala! Ha re sireletse boiphihlelo ba hau ba ho banka.",
  search: 'Batla malebela, litemoso, kapa ithute kamoo o ka sireletsang ho banka ha hau',
  awarenessTips: 'Malebela a Temoho',
  scamAlerts: 'Litemoso tsa Scam',
  bankingGuides: 'Litataiso tsa ho Seta Banka',
  faqs: 'Lipotso tse Botsoang Khafetsa',
  helpdesk: 'Ikopanye le Help Desk',
  profile: 'Profaele',
  settings: 'Lisetho',
  logout: 'Tsoa',
  welcomeUser: 'O amohetswe',
  securityAlerts: "Litemoso tsa Polokeho tsa Kajeno",
  tipOfDay: 'Molebela o Potlakileng oa Letsatsi: "Se ke oa klika li-link tse sa tsejoeng!"',
  tutorials: 'Lithuto',
  quickCategories: 'Mefuta e Potlakileng',
  new: 'ncha',
  loading: 'Ea laisa...',
  viewAll: 'Sheba Tsohle',
  readMore: 'Bala Haholwanyane',
  watchVideo: 'Sheba Video',
  shareAlert: 'Arolelana Temoso',
  reportIssue: 'Tlaleha Bothata',
  saveForLater: 'Boloka Bakeng sa Hamorao',
  notifications: 'Litsebiso',
  darkMode: 'Mokgwa o Lefifi',
  highContrast: 'Phapang e Phahameng',
  textToSpeech: 'Mongolo ho Puo',
  accountSettings: 'Litlhophiso tsa Akhaonte',
  securitySettings: 'Litlhophiso tsa Tshireletso',
  privacySettings: 'Litlhophiso tsa Lekunutu',
  videoTutorials: 'Lithuto tsa Video',
  interactiveGuides: 'Litataiso tse Sebetsang',
  securityScore: 'Matshwao a Tshireletso',
  securityChecklist: 'Lenane la Tshireletso',
  scanQRCode: 'Scan QR Code'
};

// Other languages would be defined similarly

const translations: Record<LanguageCode, Record<TranslationKey, string>> = {
  en,
  zu,
  st,
  xh: en, // Placeholder - would need real translations
  af: en, // Placeholder - would need real translations
  ts: en, // Placeholder - would need real translations
  nr: en, // Placeholder - would need real translations
  nso: en, // Placeholder - would need real translations
  ve: en, // Placeholder - would need real translations
  tn: en, // Placeholder - would need real translations
  ss: en, // Placeholder - would need real translations
};

// Helper function to get translations
export const getTranslation = (
  language: LanguageCode,
  key: TranslationKey
): string => {
  if (!translations[language]) {
    return translations.en[key] || key;
  }
  return translations[language][key] || translations.en[key] || key;
};
