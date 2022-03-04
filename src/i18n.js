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
      "title": "Bizom Login",
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
        "Invoices":"Invoices",
        "chartlabel":"Sales Return",
        "users" : "Users"     
      }
    }
  },
  fr: {
    translation: {
      "keywords": {
        "email": "ইমেইল ঠিকানা",
        "title": "Bizom Login",
        "password": "পাসওয়ার্ড",
      },
      "btnText": {
        "login": "প্রবেশ করুন"
      },
      "navbar":{
        "Home":"বাড়ি",     
        "UserName": "ব্যবহারকারীর নাম",
        "name":"Bizom",
        "Logout":"প্রস্থান"
      },
      "homePage":{
        "Orders":"আদেশ",
        "Recieved":"প্রাপ্ত",
        "InProcess":"প্রক্রিয়াধীন",
        "Completed":"সম্পন্ন",
        "Pending":"বিচারাধীন",
        "Invoices":"চালান",
        "chartlabel":"বিক্রয় রিটার্ন",
        "users" : "ব্যবহারকারীদের"    
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