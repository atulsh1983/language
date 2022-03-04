// import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import { initReactI18next } from 'react-i18next';

// i18n
//   // load translation using http -> see /public/locales
//   // learn more: https://github.com/i18next/i18next-http-backend
//   .use(Backend)
//   // detect user language
//   // learn more: https://github.com/i18next/i18next-browser-languageDetector
//   .use(LanguageDetector)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // init i18next
//   // for all options read: https://www.i18next.com/overview/configuration-options
//   .init({
//     fallbackLng: 'en',
//     debug: true,

//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//   });

// export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {

    translation: {
      "title": "Login to Localizz",
      "keywords": {
        "email": "Email Address",
        "password": "Password",
      },
      "btnText": {
        "login": "Log In"
      },
      "navbar":{
        "Home":"Home",     
        "UserName": "User Name",
        "name":"Bizom",
        "Logout":"Logout"
      },
      "homePage":{
        "Orders":"Orders",
        "Recieved":"Recieved",
        "InProcess":"In Process",
        "Completed":"Completed",
        "Pending":"Pending",
        "Invoices":"Invoices"
       
      }
      

    }
  },
  fr: {
    translation: {
      "keywords": {
        "email": "E-Mail-Addresse",
        "title": "Willkommen bei Localizz",
        "password": "Passwort",
      },
      "btnText": {
        "login": "Einloggen"
      },
      "navbar":{
        "Home":"Zuhause",     
        "UserName": "Nutzername",
        "name":"Bizom",
        "Logout":"Ausloggen"
      },
      "homePage":{
        "Orders":"আদেশ",
        "Recieved":"প্রাপ্ত",
        "InProcess":"প্রক্রিয়াধীন",
        "Completed":"সম্পন্ন",
        "Pending":"বিচারাধীন",
        "Invoices":"চালান"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang')? localStorage.getItem('lang') : 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;