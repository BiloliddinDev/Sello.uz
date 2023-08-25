import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Uzbdata from "./Lang/Uzb/Uzblang.json";
import Rudata from "./Lang/Ru/Rulang.json";

i18n.use(initReactI18next).init({
  resources: {
    uzb: {
      translation: Uzbdata,
    },
    ru: {
      translation: Rudata,
    },
  },
  lng: "ru",
  fallbackLng: "ru",

  interpolation: {
    escapeValue: false,
  },
});
