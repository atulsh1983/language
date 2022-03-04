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
      "links": {
        "home" : "Home",
        "claim": "Claims New",
        "payment": "Payments"
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
      "links": {
        "home" : "Hoe",
        "claim": "Cms New",
        "payment": "ents"},
        
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