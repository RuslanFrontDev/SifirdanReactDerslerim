// 1. ornek adi halda 
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// const resources = {
//    en: {
//       translation: {
//          "key": "hello world"
//       }
//    },
//    tr: {
//       translation: {
//          "key": "salam dunya"
//       }
//    },

// }

// i18n
//    .use(initReactI18next)
//    .init({
//       lng: 'tr',
//       debug: true,
//       resources
//    })

// export default i18n
// 2. ornek backend ile 
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
// eger lng:'tr' deye vermek yerine fallbackLng :'tr' deye vermek daha eladir. çünki istifadəçinin ist etmək istədiyi dil yoxsa avtamatik olaraq dil seçib istifadəçiyə bildirir
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
   .use(initReactI18next)
   .use(Backend)
   .use(LanguageDetector)
   .init({
      // lng: 'tr',
      fallbackLng: 'en',
      // eger linkden almaq istesek
      loadPath:'http://localhost/langguage-php/index.php?lang={{lng}}'
   })

export default i18n