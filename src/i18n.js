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
  },
  footer: {
    catalog: 'Catalog',
    products: 'Products',
    services: 'Services',
    brands: 'Brands',
    forBuyers: 'For Buyers',
    deliveryPayment: 'Delivery & Payment',
    warranty: 'Product Warranty',
    company: 'Company',
    aboutCompany: 'About Us',
    certificates: 'Certificates',
    contacts: 'Our Contacts',
    tagline: 'ARG is your most reliable partner!'
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
  },
  footer: {
    catalog: 'Каталог',
    products: 'Товары',
    services: 'Услуги',
    brands: 'Бренды',
    forBuyers: 'Покупателям',
    deliveryPayment: 'Доставка и оплата',
    warranty: 'Гарантия на товар',
    company: 'Компания',
    aboutCompany: 'О компании',
    certificates: 'Сертификаты',
    contacts: 'Наши контакты',
    tagline: 'ARG самый надежный партнер!'
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