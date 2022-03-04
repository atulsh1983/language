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
        "login": "Log In",
        "addusers": "Add Users",
        "manageusers": "Manage Users",
        "manageOrg": "Manage Organization"
      },
      "links": {
        "home": "Home",
        "claim": "Claims New",
        "payment": "Payments"
      },
      "navbar": {
        "Home": "Home",
        "UserName": "User Name",
        "name": "Bizom",
        "Logout": "Logout"
      },
     
      "userList": {
        "zoneManager": "ZONE MANAGER(s)",
        "whManager": "WAREHOUSE MANAGER(s)",
        "salesSupervisor": "SALES Supervisor(s)",
        "dsManager": "DISTRIBUTOR SALES MANAGER(s)",
        "deliveryPerson": "DELIVERY PERSON(s)",
        "salsman": "SALESMAN(s)"
      },
      "organizationList":
      {
        "zones": "ZONE(s)",
        "warehouse": "WAREHOUSE(s)",
        "wsArea": "WAREHOUSE AREA(s)",
        "outlet": "OUTLET(s)",
        "distributor": "DISTRIBUTOR(s)",
        "dsArea": "DISTRIBUTOR AREA(s)",
      },
      "homePage": {
        "Orders": "Orders",
        "Recieved": "Recieved",
        "InProcess": "In Process",
        "Completed": "Completed",
        "Pending": "Pending",
        "Invoices": "Invoices",
        "chartlabel": "Sales Return",
        "claim": "Claim",
        "approved": "Approved",
        "new": "New",
        "users": "Users",
        "organization": "Organization"
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
        "login": "প্রবেশ করুন",
        "addusers": "যোগ করুন",
        "manageusers": "পরিচালনা ব্যবহারকারী",
        "manageOrg": "পরিচালনা সংগঠন"
      },
      "links": {
        "home": "বাড়ি  ",
        "claim": "নতুন দাবি",
        "payment": "অর্থপ্রদান"
      },
      "navbar": {
        "Home": "বাড়ি",
        "UserName": "ব্যবহারকারীর নাম",
        "name": "Bizom",
        "Logout": "প্রস্থান"
      },
      "homePage": {
        "Orders": "আদেশ",
        "Recieved": "প্রাপ্ত",
        "InProcess": "প্রক্রিয়াধীন",
        "Completed": "সম্পন্ন",
        "Pending": "বিচারাধীন",
        "Invoices": "চালান",
        "chartlabel": "বিক্রয় রিটার্ন",
        "users": "ব্যবহারকারীদের",
        "organization": "সংগঠন"
      },
      "userList": {
        "zoneManager": " জোন ম্যানেজার",
        "whManager": "গুদাম ব্যবস্থাপক",
        "salesSupervisor": "সেলস সুপারভাইজার",
        "dsManager": "ডিস্ট্রিবিউটর সেলস ম্যানেজার",
        "deliveryPerson": "জন ডেলিভারি ব্যক্তি",
        "salsman": "জন সেলসম্যান",
      },
      "organizationList":
      {
        "zones": "অঞ্চল(গুলি)",
        "warehouse": "গুদাম(গুলি)",
        "wsArea": "টি গুদামঘর এলাকা(গুলি)",
        "outlet": "টি আউটলেট",
        "distributor": "জন পরিবেশক",
        "dsArea": "ডিস্ট্রিবিউটর এলাকা(গুলি)"
      },
      "homePage": {
        "Orders": "আদেশ",
        "Recieved": "প্রাপ্ত",
        "InProcess": "প্রক্রিয়াধীন",
        "Completed": "সম্পন্ন",
        "Pending": "বিচারাধীন",
        "Invoices": "চালান",
        "chartlabel": "বিক্রয় রিটার্ন",
        "users": "ব্যবহারকারীদের",
        "claim": "দাবি",
        "approved": "অনুমোদিত",
        "new": "নতুন"

      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;