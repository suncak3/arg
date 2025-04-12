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