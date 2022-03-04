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
      "links": {
        "home" : "Hoe",
        "claim": "Cms New",
        "payment": "ents"},
        
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