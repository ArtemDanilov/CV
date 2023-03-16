import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend"

import homePl from "./locales/pl/home.json";
import homeEN from "./locales/en/home.json";
import cvEn from './assets/files/cv_en.pdf';
import cvPl from './assets/files/cv_pl.pdf';

const resources = {
    pl: {
      translation: {
        ...homePl,
        file_to_download: cvPl
      }
    },
    en: {
      translation: {
        ...homeEN,
        file_to_download: cvEn
      }
    },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    resources,
    lng: "pl",
    fallbackLng: "pl",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;

