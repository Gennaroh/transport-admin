import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import hu from "./locales/hu/hu.json";

i18n.use(initReactI18next).init({
  fallbackLng: "hu",
  lng: "hu",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    hu: {
      translation: hu,
    },
  },
});

export default i18n;
