// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../public/locales/en/translation.json";
import arTranslations from "../public/locales/ar/translation.json";

const resources = {
  en: { translation: enTranslations },
  ar: { translation: arTranslations },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false, // react already escapes by default
  },
});

export default i18n;
