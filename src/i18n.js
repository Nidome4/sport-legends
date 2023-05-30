import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar los archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationDE from './locales/de/translation.json';

// Configurar el objeto de opciones de i18next
const options = {
  // Utilizar un solo idioma como fallback si una traducción específica no está disponible
  fallbackLng: 'en',
  
  // Configurar la detección automática del idioma del navegador
  detection: {
    order: ['navigator'],
  },
  
  // Definir las traducciones por idioma
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
    de: {
      translation: translationDE,
    },
  },
  
  // Inicializar react-i18next
  react: {
    wait: true,
  },
};

// Inicializar i18next
i18n
  .use(initReactI18next)
  .init(options);

export default i18n;

