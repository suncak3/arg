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
    heroTitle: 'Reliable supply of components to keep your production running!',
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
      description: 'We specialize in the supply of original industrial equipment and components from leading global manufacturers.<br><br>Our activities are not related to technology implementation — we are not an engineering company. Our strength lies in a clear understanding of the market, efficient logistics, and established direct connections with manufacturers worldwide: in Europe, USA, Canada, Japan, Australia, and other countries.<br><br>We operate throughout Kazakhstan, serving both major contract holders and end operators in the oil and gas, construction, and industrial sectors.<br><br>We support projects of companies such as TCO, KPO, NCOC, as well as local enterprises, providing effective supply support.',
      stats: {
        years: 'Years of Experience',
        clients: 'Satisfied Clients',
        partners: 'Global Partners'
      }
    },
    
    mission: {
      title: 'Our Values and Goal',
      description: 'Our goal is to provide enterprises in Kazakhstan with necessary components and equipment — quickly, accurately, without intermediaries.',
      values: {
        quality: {
          title: 'Impeccable Service Quality',
          text: 'We maintain the highest standards in all our services and operations.'
        },
        reliability: {
          title: 'Efficiency in Selection and Supply',
          text: 'We ensure quick response and delivery times for all equipment needs.'
        },
        innovation: {
          title: 'Direct Relationships with OEM Manufacturers',
          text: 'We maintain direct connections with original equipment manufacturers.'
        },
        marketKnowledge: {
          title: 'Deep Market Awareness',
          text: 'We possess extensive knowledge of the industrial equipment market.'
        },
        feedback: {
          title: 'Continuous Customer Feedback',
          text: 'We maintain constant communication with our clients to improve our service.'
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

    services: {
      title: 'Our Services',
      description: 'We provide a comprehensive range of services including:',
      items: {
        supplying: 'Supply of original equipment and components upon request',
        technical: 'Technical product selection based on specifications and operating conditions',
        search: 'Search for manufacturers and work with OEM codes',
        analogues: 'Selection of alternatives when products are discontinued',
        logistics: 'Turnkey logistics and customs support',
        tender: 'Support for participation in tenders and preparation of documentation'
      }
    },
    
    // New Industries section
    industries: {
      title: 'Industries We Serve',
      description: 'Our products are supplied to facilities and enterprises in the following industries:',
      items: {
        oil: 'Oil and gas industry',
        energy: 'Energy sector',
        chemical: 'Chemical industry',
        mining: 'Mining and metallurgical complex',
        construction: 'Civil and industrial construction'
      }
    },

    partners: {
      title: 'Our Partners',
      description: 'We work directly with manufacturers from Europe, Asia, USA, Australia, and other countries, providing customers with original products and official certificates.',
      clients: {
        title: 'Among our clients:',
        tco: 'Tengizchevroil (TCO)',
        kpo: 'Karachaganak Petroleum Operating (KPO)',
        ncoc: 'North Caspian Operating Company (NCOC)',
        other: 'Construction and industrial companies throughout Kazakhstan'
      },
      suppliers: {
        title: 'Our suppliers are industry leaders:',
        list: 'John Crane, Loctite, Siemens, Honeywell, Hempel, Tyco, Pall, and others.'
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
    pageTitle: 'Delivery & Payment',
    pageSubtitle: 'Choose the most convenient delivery and payment options for your business needs',
    
    options: {
      title: 'Delivery Options',
      timeLabel: 'Delivery time',
      costLabel: 'Cost',
      standard: {
        title: 'Standard Delivery',
        description: 'Our most cost-effective delivery option, suitable for regular orders that are not time-critical.',
        time: '7-10 business days',
        cost: 'Calculated by weight and distance'
      },
      express: {
        title: 'Express Delivery',
        description: 'Expedited delivery for orders that require faster processing and transportation.',
        time: '3-5 business days',
        cost: 'Standard rate + 30%'
      },
      international: {
        title: 'International Shipping',
        description: 'Worldwide delivery service with customs clearance assistance and international tracking.',
        time: '14-21 business days',
        cost: 'Based on destination and weight'
      },
      urgent: {
        title: 'Urgent Delivery',
        description: 'Priority service for critical parts and equipment needed for emergency maintenance.',
        time: '1-2 business days',
        cost: 'Standard rate + 75%'
      }
    },
    
    process: {
      title: 'How It Works',
      description: 'Our streamlined delivery process ensures your industrial equipment arrives safely and on time.',
      steps: {
        order: {
          title: 'Place Your Order',
          description: 'Submit your order through our online catalog, by email, or by phone with our sales department.'
        },
        confirmation: {
          title: 'Order Confirmation',
          description: 'Receive order confirmation with detailed information about your purchase and estimated delivery time.'
        },
        payment: {
          title: 'Payment Processing',
          description: 'Complete the payment using your preferred method from our available payment options.'
        },
        shipment: {
          title: 'Order Shipment',
          description: 'Your order is carefully packaged and shipped with a tracking number provided to you.'
        },
        delivery: {
          title: 'Delivery & Installation',
          description: 'Receive your equipment at the specified location, with optional installation services available.'
        }
      }
    },
    
    payment: {
      title: 'Payment Methods',
      description: 'We offer various secure payment options to accommodate your business requirements.',
      methods: {
        card: {
          title: 'Credit/Debit Card',
          description: 'Secure online payments with major cards including Visa, MasterCard, and American Express.'
        },
        bank: {
          title: 'Bank Transfer',
          description: 'Direct bank transfer with detailed invoice and payment instructions provided.'
        },
        cash: {
          title: 'Cash on Delivery',
          description: 'Available for select locations with payment collected upon delivery of goods.'
        },
        invoice: {
          title: 'Invoice Payment',
          description: 'Available for businesses with established accounts, with payment terms of 30-60 days.'
        }
      }
    },
    
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about delivery and payment.',
      items: {
        shipping: {
          question: 'How do you calculate shipping costs?',
          answer: 'Shipping costs are calculated based on the weight of the items, dimensions, destination, and chosen delivery method. For precise quotes, please contact our sales department.'
        },
        tracking: {
          question: 'How can I track my order?',
          answer: 'Once your order is shipped, you will receive a tracking number via email that allows you to monitor your delivery status in real-time through our online system.'
        },
        returns: {
          question: 'What is your return policy?',
          answer: 'We accept returns of unused items in original packaging within 14 days of delivery. Custom orders and certain specialized equipment may not be eligible for return. Please contact our customer service for details.'
        },
        international: {
          question: 'Do you handle customs clearance for international orders?',
          answer: 'Yes, we provide assistance with customs documentation, but import duties and taxes are the responsibility of the recipient and are not included in our shipping costs.'
        },
        payment: {
          question: 'Is it possible to pay in installments?',
          answer: 'Yes, for large orders we offer installment payment plans for qualified business clients. This option is subject to credit approval and requires a formal agreement.'
        }
      }
    },
    
    cta: {
      title: 'Need Custom Delivery Options?',
      text: 'For special delivery requirements or bulk orders, our logistics team is ready to develop a customized solution for your business.',
      button: 'Contact Our Team'
    },
    
    title: 'Delivery & Payment',
    comingSoon: 'Information about delivery and payment methods will be available soon. Please check back later!'
  },
  contacts: {
    pageTitle: 'Contact Us',
    pageSubtitle: 'Get in touch with our team for any inquiries or support you may need',
    
    info: {
      phone: {
        title: 'Phone',
        callUs: 'Call us'
      },
      email: {
        title: 'Email',
        writeUs: 'Write to us'
      },
      address: {
        title: 'Address',
        value: 'Astana, Yesil district, 33 Kunaeva St., office 313',
        getDirections: 'Get directions'
      },
      hours: {
        title: 'Working Hours',
        value: 'Monday to Friday: 9:00 AM - 6:00 PM'
      }
    },
    
    form: {
      title: 'Send Us a Message',
      description: 'Fill out the form below and our team will get back to you as soon as possible.',
      nameLabel: 'Your Name',
      namePlaceholder: 'Enter your full name',
      companyLabel: 'Company',
      companyPlaceholder: 'Enter your company name (optional)',
      emailLabel: 'Email Address',
      emailPlaceholder: 'Enter your email address',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'Enter your phone number (optional)',
      topicLabel: 'Topic',
      topicPlaceholder: 'Select a topic',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Please provide details about your inquiry...',
      submitButton: 'Send Message',
      submitting: 'Sending...',
      successMessage: 'Your message has been sent successfully. We will contact you shortly.',
      errorMessage: 'There was an error sending your message. Please try again later.',
      
      topics: {
        product: 'Product Inquiry',
        service: 'Service Request',
        quote: 'Request a Quote',
        partnership: 'Partnership Opportunity',
        other: 'Other'
      }
    },
    
    officeLocation: {
      title: 'Our Main Office',
      address: 'Astana, Yesil district, 33 Kunaeva St., office 313',
      directions: 'Located in the central business district, near Central Station.',
      hoursTitle: 'Working Hours',
      hours: 'Monday to Friday: 9:00 AM - 6:00 PM'
    },
    
    cta: {
      title: 'Have Urgent Questions?',
      text: 'For immediate assistance, don\'t hesitate to call our support team directly.',
      button: 'Contact Us Now'
    },
    
    title: 'Contact Us',
    comingSoon: 'Additional contact information will be available soon. Please check back later!'
  },

  catalog: {
    pageTitle: 'Product Catalog',
    pageSubtitle: 'Browse our comprehensive range of industrial equipment and components',
    
    categories: {
      title: 'Product Categories',
      belts: 'Belts',
      beltsDescription: 'High-quality industrial belts designed for reliable power transmission in various applications.',
      hoses: 'Hoses & Fittings',
      hosesDescription: 'Durable industrial hoses and fittings designed to withstand high pressure and extreme temperatures.',
      bearings: 'Bearings',
      bearingsDescription: 'Precision-engineered bearings designed for smooth operation and long service life in demanding applications.',
      tools: 'Tools',
      toolsDescription: 'Professional-grade tools built for precision and durability in industrial environments.'
    },
    
    brands: {
      title: 'Our Brands',
      filterTitle: 'Filter by Brand',
      all: 'All Brands',
      viewProducts: 'View Products',
      
      // Brand descriptions
      gatesDescription: 'Global leader in power transmission and fluid power products with over 100 years of innovation.',
      continentalDescription: "One of the world's largest manufacturers of technical rubber products and automotive components.",
      optibeltDescription: 'German manufacturer of high-performance drive belts with excellent power transmission efficiency.',
      dunhamDescription: 'Specializes in high-quality HVAC systems and components for industrial applications.',
      csiDescription: 'Leading provider of precision measurement instruments and monitoring solutions.',
      bioflexDescription: 'Innovative manufacturer of flexible hose solutions for demanding industrial environments.',
      parkerDescription: 'Global leader in motion and control technologies, providing engineered solutions for industrial applications.',
      statsDescription: 'UK-based supplier of specialized industrial components with focus on quality and reliability.',
      knowsleyDescription: 'Expert in fluid transfer systems with comprehensive range of industrial hoses and fittings.',
      kuriyamaDescription: 'Manufacturer of industrial rubber, plastic and composite hoses for various applications.',
      fagDescription: 'Premium bearing manufacturer known for high precision and reliability in demanding conditions.',
      skfDescription: 'World leader in bearing technology offering solutions for various industrial applications.',
      nskDescription: 'Global manufacturer of rolling bearings, linear technology, and automotive components.',
      nachiDescription: 'Japanese manufacturer of high-precision bearings and cutting tools for industrial applications.',
      ntnDescription: 'Leading bearing manufacturer with innovative solutions for demanding industrial environments.',
      inaDescription: 'Specializes in needle roller bearings and precision components for industrial applications.',
      roebuckDescription: 'Provider of high-quality hand tools and industrial equipment with focus on durability.',
      eclipseDescription: 'Manufacturer of precision measuring and cutting tools for professional applications.',
      cutlineDescription: 'Specializes in advanced cutting tools and equipment for industrial manufacturing.',
      mcmasterDescription: 'Supplier of industrial hardware, tools, and maintenance equipment for factories and businesses.',
      genericDescription: 'Quality manufacturer providing reliable industrial components for your business needs.'
    },
    
    products: {
      title: 'Products',
      code: 'Product Code',
      brand: 'Brand',
      specifications: 'Specifications',
      description: 'Description',
      viewDetails: 'View Details',
      inquire: 'Request Quote',
      addToInquiry: 'Add to Inquiry',
      addedToInquiry: 'added to inquiry list'
    },
    
    back: 'Back to Brands',
    
    cta: {
      title: 'Need Industrial Equipment?',
      text: 'Contact us today to discuss your industrial equipment needs and get professional consultation.',
      button: 'Contact Us Now'
    }
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
    heroTitle: 'Надёжная поставка комплектующих, чтобы ваше производство не останавливалось!',
    heroSubtitle: 'Точные сроки, без простоев, с гарантией качества.',
    viewCatalog: 'Смотреть каталог',
    contactUs: 'Связаться с нами',
    
    // Products section
    ourProducts: 'Наши продукты',
    productsDescription: 'Мы специализируемся на поставке запчастей для промышленных и производственных нужд для обеспечения эффективной работы.',
    products: {
      tools: 'Инструменты',
      belts: 'Ремни',
      hoses: 'Шланги и фитинги',
      bearings: 'Подшипники'
    },
    
    // Why Choose Us section
    whyChooseUs: {
      title: 'Почему выбирают нас',
      description: 'ARG Trading & Co. — надёжный поставщик промышленного оборудования и комплектующих. Мы работаем с ведущими производителями по всему миру, обеспечивая предприятия Казахстана качественной продукцией и высоким уровнем сервиса. Наша компания ориентирована на прямые поставки от OEM-производителей, гарантируя подлинность, оперативность и соответствие международным стандартам.'
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
    heroTitle: 'О компании ARG Trading & Co.',
    heroSubtitle: 'Ваш надежный партнер в поставке промышленного оборудования более 10 лет',
    
    overview: {
      title: 'О компании',
      description: 'Мы специализируемся на поставках оригинального промышленного оборудования и комплектующих от ведущих мировых производителей.<br><br>Наша деятельность не связана с внедрением технологий — мы не являемся инжиниринговой компанией. Наша сила — в чётком понимании рынка, эффективной логистике и налаженных прямых связях с заводами-изготовителями по всему миру: в Европе, США, Канаде, Японии, Австралии и других странах.<br><br>Мы работаем по всему Казахстану, обслуживая как крупных контрактодержателей, так и конечных операторов в нефтегазовой, строительной и промышленной сферах.<br><br>Мы сопровождаем проекты таких компаний, как ТШО, КПО, NCOC, а также локальных предприятий, предоставляя эффективную поддержку в снабжении.',
      stats: {
        years: 'Лет опыта',
        clients: 'Довольных клиентов',
        partners: 'Глобальных партнеров'
      }
    },
    
    mission: {
      title: 'Наши ценности и цель',
      description: 'Наша цель: Обеспечивать предприятия Казахстана необходимыми комплектующими и оборудованием — быстро, точно, без посредников.',
      values: {
        quality: {
          title: 'Безупречное качество услуг',
          text: 'Мы поддерживаем высочайшие стандарты во всех наших услугах и операциях.'
        },
        reliability: {
          title: 'Оперативность в подборе и поставках',
          text: 'Мы обеспечиваем быстрое реагирование и сроки доставки для всех потребностей в оборудовании.'
        },
        innovation: {
          title: 'Прямые отношения с OEM-производителями',
          text: 'Мы поддерживаем прямые связи с оригинальными производителями оборудования.'
        },
        marketKnowledge: {
          title: 'Глубокая осведомлённость о рынке',
          text: 'Мы обладаем обширными знаниями рынка промышленного оборудования.'
        },
        feedback: {
          title: 'Постоянная обратная связь с клиентами',
          text: 'Мы поддерживаем постоянную коммуникацию с нашими клиентами для улучшения нашего сервиса.'
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

    services: {
      title: 'Услуги',
      description: 'Мы предоставляем комплекс услуг, включающих:',
      items: {
        supplying: 'Поставку оригинального оборудования и комплектующих под заказ',
        technical: 'Технический подбор продукции на основе спецификаций и условий эксплуатации',
        search: 'Поиск заводов-изготовителей и работа по OEM-кодам',
        analogues: 'Подбор аналогов при снятии с производства',
        logistics: 'Логистику и таможенное сопровождение "под ключ"',
        tender: 'Поддержку в участии в тендерах и подготовке документации'
      }
    },
    
    // New Industries section in Russian
    industries: {
      title: 'Отрасли',
      description: 'Наша продукция поставляется на объекты и предприятия в следующих отраслях:',
      items: {
        oil: 'Нефтегазовая промышленность',
        energy: 'Энергетика',
        chemical: 'Химическая промышленность',
        mining: 'Горно-металлургический комплекс',
        construction: 'Гражданское и промышленное строительство'
      }
    },

    partners: {
      title: 'Партнёры',
      description: 'Мы работаем напрямую с производителями из Европы, Азии, США, Австралии и других стран, предоставляя клиентам оригинальную продукцию и официальные сертификаты.',
      clients: {
        title: 'Среди наших клиентов:',
        tco: 'Тенгизшевройл (TCO)',
        kpo: 'Карачаганак Петролиум Оперейтинг (KPO)',
        ncoc: 'Норт Каспиан Оперейтинг Компани (NCOC)',
        other: 'Строительные и промышленные компании по всей РК'
      },
      suppliers: {
        title: 'Наши поставщики — лидеры отрасли:',
        list: 'John Crane, Loctite, Siemens, Honeywell, Hempel, Tyco, Pall и другие.'
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
    pageTitle: 'Доставка и оплата',
    pageSubtitle: 'Выберите наиболее удобные варианты доставки и оплаты для ваших бизнес-потребностей',
    
    options: {
      title: 'Варианты доставки',
      timeLabel: 'Срок доставки',
      costLabel: 'Стоимость',
      standard: {
        title: 'Стандартная доставка',
        description: 'Наиболее экономичный вариант доставки, подходящий для регулярных заказов, не требующих срочности.',
        time: '7-10 рабочих дней',
        cost: 'Рассчитывается по весу и расстоянию'
      },
      express: {
        title: 'Экспресс-доставка',
        description: 'Ускоренная доставка для заказов, требующих более быстрой обработки и транспортировки.',
        time: '3-5 рабочих дней',
        cost: 'Стандартный тариф + 30%'
      },
      international: {
        title: 'Международная доставка',
        description: 'Доставка по всему миру с помощью в таможенном оформлении и международным отслеживанием.',
        time: '14-21 рабочий день',
        cost: 'В зависимости от пункта назначения и веса'
      },
      urgent: {
        title: 'Срочная доставка',
        description: 'Приоритетный сервис для критически важных деталей и оборудования, необходимых для аварийного обслуживания.',
        time: '1-2 рабочих дня',
        cost: 'Стандартный тариф + 75%'
      }
    },
    
    process: {
      title: 'Как это работает',
      description: 'Наш оптимизированный процесс доставки гарантирует, что ваше промышленное оборудование прибудет безопасно и вовремя.',
      steps: {
        order: {
          title: 'Разместите заказ',
          description: 'Отправьте заказ через наш онлайн-каталог, по электронной почте или по телефону в наш отдел продаж.'
        },
        confirmation: {
          title: 'Подтверждение заказа',
          description: 'Получите подтверждение заказа с подробной информацией о вашей покупке и предполагаемом времени доставки.'
        },
        payment: {
          title: 'Обработка платежа',
          description: 'Завершите оплату, используя предпочитаемый вами способ из доступных вариантов оплаты.'
        },
        shipment: {
          title: 'Отправка заказа',
          description: 'Ваш заказ тщательно упаковывается и отправляется с предоставлением вам номера для отслеживания.'
        },
        delivery: {
          title: 'Доставка и установка',
          description: 'Получите ваше оборудование в указанном месте, с дополнительными услугами по установке при необходимости.'
        }
      }
    },
    
    payment: {
      title: 'Способы оплаты',
      description: 'Мы предлагаем различные безопасные варианты оплаты, чтобы удовлетворить ваши бизнес-требования.',
      methods: {
        card: {
          title: 'Кредитная/дебетовая карта',
          description: 'Безопасные онлайн-платежи с использованием основных карт, включая Visa, MasterCard и American Express.'
        },
        bank: {
          title: 'Банковский перевод',
          description: 'Прямой банковский перевод с предоставлением подробного счета и инструкций по оплате.'
        },
        cash: {
          title: 'Наличные при доставке',
          description: 'Доступно для определенных мест с оплатой при доставке товара.'
        },
        invoice: {
          title: 'Оплата по счету',
          description: 'Доступно для компаний с установленными счетами, со сроками оплаты 30-60 дней.'
        }
      }
    },
    
    faq: {
      title: 'Часто задаваемые вопросы',
      description: 'Найдите ответы на распространенные вопросы о доставке и оплате.',
      items: {
        shipping: {
          question: 'Как вы рассчитываете стоимость доставки?',
          answer: 'Стоимость доставки рассчитывается на основе веса предметов, размеров, пункта назначения и выбранного способа доставки. Для получения точных расценок, пожалуйста, свяжитесь с нашим отделом продаж.'
        },
        tracking: {
          question: 'Как я могу отследить мой заказ?',
          answer: 'После отправки заказа вы получите номер отслеживания по электронной почте, который позволит вам контролировать статус доставки в режиме реального времени через нашу онлайн-систему.'
        },
        returns: {
          question: 'Какова ваша политика возврата?',
          answer: 'Мы принимаем возврат неиспользованных товаров в оригинальной упаковке в течение 14 дней после доставки. Индивидуальные заказы и определенное специализированное оборудование могут не подлежать возврату. Пожалуйста, свяжитесь с нашей службой поддержки клиентов для получения подробностей.'
        },
        international: {
          question: 'Вы занимаетесь таможенным оформлением для международных заказов?',
          answer: 'Да, мы оказываем помощь с таможенной документацией, но импортные пошлины и налоги являются ответственностью получателя и не включены в стоимость доставки.'
        },
        payment: {
          question: 'Возможна ли оплата в рассрочку?',
          answer: 'Да, для крупных заказов мы предлагаем планы оплаты в рассрочку для квалифицированных бизнес-клиентов. Этот вариант подлежит одобрению кредита и требует формального соглашения.'
        }
      }
    },
    
    cta: {
      title: 'Нужны индивидуальные варианты доставки?',
      text: 'Для особых требований к доставке или крупных заказов наша логистическая команда готова разработать индивидуальное решение для вашего бизнеса.',
      button: 'Связаться с нашей командой'
    },
    
    title: 'Доставка и оплата',
    comingSoon: 'Информация о способах доставки и оплаты будет доступна в ближайшее время. Пожалуйста, проверьте позже!'
  },
  contacts: {
    pageTitle: 'Свяжитесь с нами',
    pageSubtitle: 'Обратитесь к нашей команде с любыми вопросами или для получения поддержки',
    
    info: {
      phone: {
        title: 'Телефон',
        callUs: 'Позвонить нам'
      },
      email: {
        title: 'Электронная почта',
        writeUs: 'Написать нам'
      },
      address: {
        title: 'Адрес',
        value: 'г. Астана, район Есиль, ул. Кунаева 33, офис 313',
        getDirections: 'Проложить маршрут'
      },
      hours: {
        title: 'Рабочие часы',
        value: 'Понедельник - Пятница: 9:00 - 18:00'
      }
    },
    
    form: {
      title: 'Отправить сообщение',
      description: 'Заполните форму ниже, и наша команда свяжется с вами в ближайшее время.',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Введите ваше полное имя',
      companyLabel: 'Компания',
      companyPlaceholder: 'Введите название вашей компании (необязательно)',
      emailLabel: 'Адрес электронной почты',
      emailPlaceholder: 'Введите ваш адрес электронной почты',
      phoneLabel: 'Номер телефона',
      phonePlaceholder: 'Введите ваш номер телефона (необязательно)',
      topicLabel: 'Тема',
      topicPlaceholder: 'Выберите тему',
      messageLabel: 'Ваше сообщение',
      messagePlaceholder: 'Пожалуйста, предоставьте подробности о вашем запросе...',
      submitButton: 'Отправить сообщение',
      submitting: 'Отправка...',
      successMessage: 'Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.',
      errorMessage: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз позже.',
      
      topics: {
        product: 'Запрос о продукте',
        service: 'Запрос на обслуживание',
        quote: 'Запрос цены',
        partnership: 'Возможность партнерства',
        other: 'Другое'
      }
    },
    
    officeLocation: {
      title: 'Наш главный офис',
      address: 'г. Астана, район Есиль, ул. Кунаева 33, офис 313',
      directions: 'Расположен в центральном деловом районе, рядом с Центральным вокзалом.',
      hoursTitle: 'Рабочие часы',
      hours: 'Понедельник - Пятница: 9:00 - 18:00'
    },
    
    cta: {
      title: 'Есть срочные вопросы?',
      text: 'Для немедленной помощи, не стесняйтесь позвонить нашей команде поддержки напрямую.',
      button: 'Связаться с нами сейчас'
    },
    
    title: 'Связаться с нами',
    comingSoon: 'Дополнительная контактная информация будет доступна в ближайшее время. Пожалуйста, проверьте позже!'
  },

  catalog: {
    pageTitle: 'Каталог продукции',
    pageSubtitle: 'Ознакомьтесь с нашим полным ассортиментом промышленного оборудования и комплектующих',
    
    categories: {
      title: 'Категории продукции',
      belts: 'Ремни',
      beltsDescription: 'Высококачественные промышленные ремни, разработанные для надежной передачи энергии в различных приложениях.',
      hoses: 'Шланги и фитинги',
      hosesDescription: 'Прочные промышленные шланги и фитинги, предназначенные для работы под высоким давлением и при экстремальных температурах.',
      bearings: 'Подшипники',
      bearingsDescription: 'Высокоточные подшипники, разработанные для плавной работы и длительного срока службы в тяжелых условиях эксплуатации.',
      tools: 'Инструменты',
      toolsDescription: 'Профессиональные инструменты, созданные для обеспечения точности и долговечности в промышленных условиях.'
    },
    
    brands: {
      title: 'Наши бренды',
      filterTitle: 'Фильтр по бренду',
      all: 'Все бренды',
      viewProducts: 'Посмотреть продукцию',
      
      // Brand descriptions
      gatesDescription: 'Мировой лидер в области продуктов для передачи энергии и гидравлики с более чем 100-летним опытом инноваций.',
      continentalDescription: 'Один из крупнейших в мире производителей технических резиновых изделий и автомобильных компонентов.',
      optibeltDescription: 'Немецкий производитель высокоэффективных приводных ремней с превосходной эффективностью передачи энергии.',
      dunhamDescription: 'Специализируется на высококачественных системах HVAC и компонентах для промышленных приложений.',
      csiDescription: 'Ведущий поставщик прецизионных измерительных приборов и решений для мониторинга.',
      bioflexDescription: 'Инновационный производитель гибких шланговых решений для требовательных промышленных сред.',
      parkerDescription: 'Мировой лидер в технологиях движения и управления, предоставляющий инженерные решения для промышленных приложений.',
      statsDescription: 'Британский поставщик специализированных промышленных компонентов с акцентом на качество и надежность.',
      knowsleyDescription: 'Эксперт в системах передачи жидкостей с полным ассортиментом промышленных шлангов и фитингов.',
      kuriyamaDescription: 'Производитель промышленных резиновых, пластиковых и композитных шлангов для различных применений.',
      fagDescription: 'Премиальный производитель подшипников, известный высокой точностью и надежностью в сложных условиях.',
      skfDescription: 'Мировой лидер в технологии подшипников, предлагающий решения для различных промышленных применений.',
      nskDescription: 'Глобальный производитель роликовых подшипников, линейных технологий и автомобильных компонентов.',
      nachiDescription: 'Японский производитель высокоточных подшипников и режущих инструментов для промышленных применений.',
      ntnDescription: 'Ведущий производитель подшипников с инновационными решениями для требовательных промышленных сред.',
      inaDescription: 'Специализируется на игольчатых роликовых подшипниках и прецизионных компонентах для промышленных применений.',
      roebuckDescription: 'Поставщик высококачественных ручных инструментов и промышленного оборудования с акцентом на долговечность.',
      eclipseDescription: 'Производитель прецизионных измерительных и режущих инструментов для профессиональных применений.',
      cutlineDescription: 'Специализируется на передовых режущих инструментах и оборудовании для промышленного производства.',
      mcmasterDescription: 'Поставщик промышленного оборудования, инструментов и оборудования для обслуживания фабрик и предприятий.',
      genericDescription: 'Качественный производитель, предоставляющий надежные промышленные компоненты для вашего бизнеса.'
    },
    
    products: {
      title: 'Продукция',
      code: 'Код товара',
      brand: 'Бренд',
      specifications: 'Характеристики',
      description: 'Описание',
      viewDetails: 'Детали',
      inquire: 'Запросить цену',
      addToInquiry: 'Добавить в запрос',
      addedToInquiry: 'добавлен в список запросов'
    },
    
    back: 'Назад к брендам',
    
    cta: {
      title: 'Нужно промышленное оборудование?',
      text: 'Свяжитесь с нами сегодня, чтобы обсудить ваши потребности в промышленном оборудовании и получить профессиональную консультацию.',
      button: 'Связаться сейчас'
    }
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