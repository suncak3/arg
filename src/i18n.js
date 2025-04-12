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
    heroTitle: 'About ARG Trading and Co.',
    heroSubtitle: 'Your reliable partner in industrial equipment supply for over a decade',
    
    overview: {
      title: 'Company Overview',
      description: 'ARG Trading and Co. is a recognized leader in the supply of industrial equipment and components. Since our founding, we have built a reputation for reliability, quality, and outstanding service.<br><br>We specialize in providing a wide range of industrial equipment from leading global manufacturers. Our comprehensive inventory includes tools, belts, hoses, fittings, bearings, and more - everything needed to keep your production running efficiently.<br><br>Our team of experienced professionals is dedicated to helping you find the right solution for your specific needs, ensuring minimal downtime and maximum productivity.',
      stats: {
        years: 'Years of Experience',
        clients: 'Satisfied Clients',
        partners: 'Global Partners'
      }
    },
    
    mission: {
      title: 'Our Mission & Values',
      description: 'Our mission is to become the most reliable partner for industrial enterprises by providing high-quality equipment and components that ensure uninterrupted operation of production facilities.<br><br>We strive to establish long-term relationships with our clients based on mutual trust, timely delivery, and professional service.',
      values: {
        quality: {
          title: 'Quality',
          text: 'We offer only certified products from trusted manufacturers with full warranty support.'
        },
        reliability: {
          title: 'Reliability',
          text: 'Timely delivery and professional service are the foundation of our business approach.'
        },
        innovation: {
          title: 'Innovation',
          text: 'We continuously monitor market trends to offer the most advanced solutions.'
        }
      }
    },
    
    team: {
      title: 'Our Professional Team',
      description: 'The strength of ARG Trading and Co. lies in our team of dedicated professionals with years of experience in the industrial equipment sector.',
      positions: {
        ceo: 'Chief Executive Officer',
        salesDirector: 'Sales Director',
        techDirector: 'Technical Director',
        logisticsManager: 'Logistics Manager'
      }
    },
    
    certificates: {
      title: 'Certificates & Quality Assurance',
      description: 'We adhere to international quality standards and hold all necessary certifications for our business operations.',
      items: {
        iso9001: 'Quality Management System certification, ensuring consistent delivery of products and services that meet customer requirements.',
        iso14001: 'Environmental Management System certification, demonstrating our commitment to minimizing environmental impact.',
        ohsas18001: 'Occupational Health and Safety Management certification, ensuring safe and healthy workplace conditions.'
      }
    },
    
    cta: {
      title: 'Ready to Collaborate?',
      text: 'Contact our team today to discuss how we can help you find the perfect industrial equipment solutions for your business needs.',
      button: 'Contact Us Now'
    },
    
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
    heroTitle: 'О компании ARG Trading and Co.',
    heroSubtitle: 'Ваш надежный партнер в поставке промышленного оборудования более 10 лет',
    
    overview: {
      title: 'О компании',
      description: 'ARG Trading and Co. - признанный лидер в сфере поставок промышленного оборудования и комплектующих. С момента основания мы заработали репутацию надежного поставщика, гарантирующего высокое качество и превосходный сервис.<br><br>Мы специализируемся на поставке широкого ассортимента промышленного оборудования от ведущих мировых производителей. Наш ассортимент включает инструменты, ремни, шланги, фитинги, подшипники и многое другое - все, что необходимо для бесперебойной работы вашего производства.<br><br>Наша команда опытных профессионалов поможет вам найти правильное решение для ваших конкретных потребностей, обеспечивая минимальное время простоя и максимальную производительность.',
      stats: {
        years: 'Лет опыта',
        clients: 'Довольных клиентов',
        partners: 'Глобальных партнеров'
      }
    },
    
    mission: {
      title: 'Наша миссия и ценности',
      description: 'Наша миссия - стать самым надежным партнером для промышленных предприятий, поставляя высококачественное оборудование и комплектующие, обеспечивающие бесперебойную работу производственных мощностей.<br><br>Мы стремимся устанавливать долгосрочные отношения с нашими клиентами на основе взаимного доверия, своевременной доставки и профессионального обслуживания.',
      values: {
        quality: {
          title: 'Качество',
          text: 'Мы предлагаем только сертифицированную продукцию от проверенных производителей с полной гарантийной поддержкой.'
        },
        reliability: {
          title: 'Надёжность',
          text: 'Своевременная доставка и профессиональное обслуживание - основа нашего подхода к бизнесу.'
        },
        innovation: {
          title: 'Инновации',
          text: 'Мы постоянно следим за тенденциями рынка, чтобы предлагать самые передовые решения.'
        }
      }
    },
    
    team: {
      title: 'Наша профессиональная команда',
      description: 'Сила ARG Trading and Co. заключается в нашей команде преданных своему делу профессионалов с многолетним опытом работы в секторе промышленного оборудования.',
      positions: {
        ceo: 'Генеральный директор',
        salesDirector: 'Директор по продажам',
        techDirector: 'Технический директор',
        logisticsManager: 'Менеджер по логистике'
      }
    },
    
    certificates: {
      title: 'Сертификаты и гарантия качества',
      description: 'Мы придерживаемся международных стандартов качества и имеем все необходимые сертификаты для ведения нашей деятельности.',
      items: {
        iso9001: 'Сертификация системы менеджмента качества, обеспечивающая постоянную поставку продуктов и услуг, отвечающих требованиям клиентов.',
        iso14001: 'Сертификация системы экологического менеджмента, демонстрирующая нашу приверженность минимизации воздействия на окружающую среду.',
        ohsas18001: 'Сертификация системы менеджмента охраны здоровья и безопасности труда, обеспечивающая безопасные и здоровые условия работы.'
      }
    },
    
    cta: {
      title: 'Готовы к сотрудничеству?',
      text: 'Свяжитесь с нашей командой сегодня, чтобы обсудить, как мы можем помочь вам найти идеальные решения в области промышленного оборудования для ваших бизнес-потребностей.',
      button: 'Связаться сейчас'
    },
    
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