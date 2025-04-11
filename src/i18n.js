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
    welcomeText: 'ARG Trading and Co. is your reliable partner in supply and maintenance of high-quality industrial equipment. We offer comprehensive solutions for various industries and production needs.',
    
    // Hero section
    heroTitle: 'Reliable supply of parts to keep your production running!',
    heroSubtitle: 'Quality parts, fast delivery, with guaranteed service.',
    viewCatalog: 'View Catalog',
    contactUs: 'Contact Us',
    
    // Products section
    ourProducts: 'Our Products',
    productsDescription: 'We specialize in the supply of high-quality parts for industrial and manufacturing needs to ensure efficient operation.',
    products: {
      tools: 'Tools',
      belts: 'Belts',
      hoses: 'Hoses & Fittings',
      bearings: 'Bearings'
    },
    
    // Why Choose Us section
    whyChooseUs: {
      title: 'Why Choose Us',
      description: 'ARG is a recognized leader in the supply of industrial equipment and components. We offer a wide range of products from leading global manufacturers.'
    },
    
    // Advantages
    advantages: {
      quality: {
        title: 'Quality Products',
        text: 'We offer only high-quality products from trusted manufacturers with warranties and certification.'
      },
      delivery: {
        title: 'Fast Delivery',
        text: 'Timely delivery throughout the country and internationally with shipment tracking.'
      },
      support: {
        title: 'Professional Support',
        text: 'Our specialists provide comprehensive consultation and support for all your equipment needs.'
      }
    },
    
    learnMore: 'Learn More',
    
    // Partners section
    partners: 'Our Partners',
    
    // Call to action
    cta: {
      title: 'Need Industrial Equipment?',
      text: 'Contact us today to discuss your industrial equipment needs and get professional consultation.',
      button: 'Contact Us Now'
    }
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
  },
  catalog: {
    title: 'Product Catalog',
    comingSoon: 'Our product catalog will be available soon. Please check back later!'
  },
  about: {
    title: 'About Our Company',
    comingSoon: 'Information about our company will be available soon. Please check back later!'
  },
  delivery: {
    title: 'Delivery & Payment',
    comingSoon: 'Information about delivery and payment methods will be available soon. Please check back later!'
  },
  contacts: {
    title: 'Contact Us',
    comingSoon: 'Additional contact information will be available soon. Please check back later!'
  }
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
    welcomeText: 'ARG Trading and Co. - ваш надежный партнер в поставке и обслуживании высококачественного промышленного оборудования. Мы предлагаем комплексные решения для различных отраслей и производственных нужд.',
    
    // Hero section
    heroTitle: 'Надёжная поставка запчастей, чтобы ваше производство не останавливалось!',
    heroSubtitle: 'Точные сроки, без простоев, с гарантией качества.',
    viewCatalog: 'Смотреть каталог',
    contactUs: 'Связаться с нами',
    
    // Products section
    ourProducts: 'Наши продукты',
    productsDescription: 'Мы специализируемся на поставке дослтавке запчастей для промышленных и производственных нужд для обеспечения эффективной работы.',
    products: {
      tools: 'Инструменты',
      belts: 'Ремни',
      hoses: 'Шланги и фитинги',
      bearings: 'Подшипники'
    },
    
    // Why Choose Us section
    whyChooseUs: {
      title: 'Почему выбирают нас',
      description: 'Компания ARG - это признанный лидер в сфере поставок промышленного оборудования и комплектующих. Мы предлагаем широкий ассортимент продукции от ведущих мировых производителей.'
    },
    
    // Advantages
    advantages: {
      quality: {
        title: 'Качественные продукты',
        text: 'Мы предлагаем только высококачественную продукцию от проверенных производителей с гарантией и сертификацией.'
      },
      delivery: {
        title: 'Быстрая доставка',
        text: 'Своевременная доставка по всей стране и международная с отслеживанием грузов.'
      },
      support: {
        title: 'Профессиональная поддержка',
        text: 'Наши специалисты обеспечивают всестороннюю консультацию и поддержку по всем вопросам оборудования.'
      }
    },
    
    learnMore: 'Узнать больше',
    
    // Partners section
    partners: 'Партнеры',
    
    // Call to action
    cta: {
      title: 'Нужно промышленное оборудование?',
      text: 'Свяжитесь с нами сегодня, чтобы обсудить ваши потребности в промышленном оборудовании и получить профессиональную консультацию.',
      button: 'Связаться сейчас'
    }
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
  },
  catalog: {
    title: 'Каталог товаров',
    comingSoon: 'Наш каталог товаров будет доступен в ближайшее время. Пожалуйста, проверьте позже!'
  },
  about: {
    title: 'О нашей компании',
    comingSoon: 'Информация о нашей компании будет доступна в ближайшее время. Пожалуйста, проверьте позже!'
  },
  delivery: {
    title: 'Доставка и оплата',
    comingSoon: 'Информация о способах доставки и оплаты будет доступна в ближайшее время. Пожалуйста, проверьте позже!'
  },
  contacts: {
    title: 'Связаться с нами',
    comingSoon: 'Дополнительная контактная информация будет доступна в ближайшее время. Пожалуйста, проверьте позже!'
  }
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