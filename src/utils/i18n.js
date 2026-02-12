import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from '../locales/en.json';
import faTranslations from '../locales/fa.json';
import psTranslations from '../locales/ps.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  fa: {
    translation: faTranslations,
  },
  ps: {
    translation: psTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    react: {
      useSuspense: false,
    },
  });

// ensure document direction (rtl/ltr) and lang attribute follow selected language
const setDirectionAndLang = (lng) => {
  const rtlLangs = ['fa', 'ps'];
  document.documentElement.dir = rtlLangs.includes(lng) ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
  // update CSS variable fallback (keeps non-MUI content consistent)
};

// apply initial dir & lang
setDirectionAndLang(i18n.language || 'en');

// update on change
i18n.on('languageChanged', (lng) => {
  setDirectionAndLang(lng);
});

export default i18n;