// src/i18n.js
import { createI18n } from 'vue-i18n';

// English translations
const en = {
  header: {
    companyDescription: 'Supply and maintenance of industrial equipment',
    catalog: 'Catalog',
    about: 'About us',
    delivery: 'Delivery & Payment',
    contacts: 'Contacts',
    language: 'Language'
  },
  home: {
    welcomeTitle: 'Industrial Equipment Solutions',
    welcomeText: 'ARG Trading and Co. is your reliable partner in supply and maintenance of high-quality industrial equipment. We offer comprehensive solutions for various industries and production needs.'
  }
  // Add more translation sections as needed
};

// Russian translations
const ru = {
  header: {
    companyDescription: 'Поставка и сервисное обслуживание промышленного оборудования',
    catalog: 'Каталог',
    about: 'О компании',
    delivery: 'Доставка и оплата',
    contacts: 'Контакты',
    language: 'Язык'
  },
  home: {
    welcomeTitle: 'Решения в области промышленного оборудования',
    welcomeText: 'ARG Trading and Co. - ваш надежный партнер в поставке и обслуживании высококачественного промышленного оборудования. Мы предлагаем комплексные решения для различных отраслей и производственных нужд.'
  }
  // Add more translation sections as needed
};

// Create i18n instance
const i18n = createI18n({
  legacy: false, // Use composition API
  locale: 'ru', // Default locale
  fallbackLocale: 'en',
  messages: {
    en,
    ru
  }
});

export default i18n;