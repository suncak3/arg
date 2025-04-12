<!-- src/views/DeliveryView.vue -->
<template>
    <div class="delivery">
      <!-- Hero Section with professional background -->
      <section class="delivery-hero">
        <div class="hero-background">
          <div class="animated-gradient"></div>
          <div class="accent-line"></div>
          <div class="particle-container">
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
            <div class="particle particle-4"></div>
            <div class="particle particle-5"></div>
            <div class="particle particle-6"></div>
          </div>
        </div>
        <div class="container">
          <div class="delivery-hero__content">
            <h1 class="delivery-hero__title animated fade-in-up">{{ t('delivery.pageTitle') }}</h1>
            <p class="delivery-hero__subtitle animated fade-in-up delay-1">{{ t('delivery.pageSubtitle') }}</p>
          </div>
        </div>
      </section>
  
      <!-- Delivery Options Section -->
      <section class="delivery-options" ref="deliveryOptionsSection">
        <div class="container">
          <h2 class="section-title animated fade-in-up">{{ t('delivery.options.title') }}</h2>
          
          <div class="options-grid">
            <div class="option-card animated fade-in-up"
                 v-for="(option, index) in deliveryOptions"
                 :key="index"
                 :style="{ '--i': index + 2 }">
              <div class="option-icon">
                <component :is="option.icon" />
              </div>
              <h3 class="option-title">{{ option.title }}</h3>
              <p class="option-description">{{ option.description }}</p>
              <div class="option-details">
                <div class="detail-item">
                  <span class="detail-label">{{ t('delivery.options.timeLabel') }}:</span>
                  <span class="detail-value">{{ option.time }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">{{ t('delivery.options.costLabel') }}:</span>
                  <span class="detail-value">{{ option.cost }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Delivery Process Section -->
      <section class="delivery-process" ref="deliveryProcessSection">
        <div class="container">
          <h2 class="section-title animated fade-in-up">{{ t('delivery.process.title') }}</h2>
          <p class="section-description animated fade-in-up delay-1">{{ t('delivery.process.description') }}</p>
          
          <div class="process-steps">
            <div class="process-step animated fade-in-up"
                 v-for="(step, index) in deliverySteps"
                 :key="index"
                 :style="{ '--i': index + 2 }">
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-description">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Payment Methods Section -->
      <section class="payment-methods" ref="paymentMethodsSection">
        <div class="container">
          <h2 class="section-title animated fade-in-up">{{ t('delivery.payment.title') }}</h2>
          <p class="section-description animated fade-in-up delay-1">{{ t('delivery.payment.description') }}</p>
          
          <div class="payment-options-grid">
            <div class="payment-option animated fade-in-up"
                 v-for="(method, index) in paymentMethods"
                 :key="index"
                 :style="{ '--i': index + 2 }">
              <div class="payment-icon">
                <component :is="method.icon" />
              </div>
              <h3 class="payment-title">{{ method.title }}</h3>
              <p class="payment-description">{{ method.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section class="faq-section" ref="faqSection">
        <div class="container">
          <h2 class="section-title animated fade-in-up">{{ t('delivery.faq.title') }}</h2>
          <p class="section-description animated fade-in-up delay-1">{{ t('delivery.faq.description') }}</p>
          
          <div class="faq-list">
            <div class="faq-item animated fade-in-up"
                 v-for="(item, index) in faqItems"
                 :key="index"
                 :style="{ '--i': index + 2 }"
                 @click="toggleFaq(index)">
              <div class="faq-question" :class="{ active: item.isOpen }">
                <h3>{{ item.question }}</h3>
                <div class="faq-toggle">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       stroke="currentColor"
                       stroke-width="2"
                       stroke-linecap="round"
                       stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12" class="horizontal-line" :class="{ hidden: item.isOpen }"></line>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ open: item.isOpen }">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call To Action -->
      <section class="cta" ref="ctaSection">
        <div class="container">
          <div class="cta__content animated fade-in-up">
            <h2 class="cta__title">{{ t('delivery.cta.title') }}</h2>
            <p class="cta__text">{{ t('delivery.cta.text') }}</p>
            <router-link to="/contacts" class="btn btn-primary btn-large">{{ t('delivery.cta.button') }}</router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, h } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  
  // Section refs for animation
  const deliveryOptionsSection = ref(null);
  const deliveryProcessSection = ref(null);
  const paymentMethodsSection = ref(null);
  const faqSection = ref(null);
  const ctaSection = ref(null);
  
  // Intersection Observer for scroll animations
  onMounted(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };
  
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const animatedElements = entry.target.querySelectorAll('.animated');
          animatedElements.forEach(el => {
            el.style.animationPlayState = 'running';
          });
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all sections that need animation
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  });
  
  // Icons Components
  const TruckIcon = () => h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    width: '24', 
    height: '24', 
    viewBox: '0 0 24 24', 
    fill: 'none', 
    stroke: 'currentColor', 
    'stroke-width': '2', 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round' 
  }, [
    h('rect', { x: '1', y: '3', width: '15', height: '13' }),
    h('polygon', { points: '16 8 20 8 23 11 23 16 16 16 16 8' }),
    h('circle', { cx: '5.5', cy: '18.5', r: '2.5' }),
    h('circle', { cx: '18.5', cy: '18.5', r: '2.5' })
  ]);
  
  const ShipIcon = () => h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    width: '24', 
    height: '24', 
    viewBox: '0 0 24 24', 
    fill: 'none', 
    stroke: 'currentColor', 
    'stroke-width': '2', 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round' 
  }, [
    h('path', { d: 'M21 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3' }),
    h('path', { d: 'M12 22V8' }),
    h('path', { d: 'M2 9v12h20V9' }),
    h('path', { d: 'M12 5.5A2.5 2.5 0 0 1 14.5 8h-5A2.5 2.5 0 0 1 12 5.5z' })
  ]);
  
  const PlaneIcon = () => h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    width: '24', 
    height: '24', 
    viewBox: '0 0 24 24', 
    fill: 'none', 
    stroke: 'currentColor', 
    'stroke-width': '2', 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round' 
  }, [
    h('path', { d: 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z' })
  ]);
  
  const CourierIcon = () => h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    width: '24', 
    height: '24', 
    viewBox: '0 0 24 24', 
    fill: 'none', 
    stroke: 'currentColor', 
    'stroke-width': '2', 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round' 
  }, [
    h('path', { d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' }),
    h('path', { d: 'M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z' }),
    h('path', { d: 'M12 11h4' }),
    h('path', { d: 'M12 16h4' }),
    h('path', { d: 'M8 11h.01' }),
    h('path', { d: 'M8 16h.01' })
  ]);
  
  const CreditCardIcon = () => h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    width: '24', 
    height: '24', 
    viewBox: '0 0 24 24', 
    fill: 'none', 
    stroke: 'currentColor', 
    'stroke-width': '2', 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round' 
  }, [
    h('rect', { x: '1', y: '4', width: '22', height: '16', rx: '2', ry: '2' }),
    h('line', { x1: '1', y1: '10', x2: '23', y2: '10' })
  ]);
  
  const BankIcon = () => h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    width: '24', 
    height: '24', 
    viewBox: '0 0 24 24', 
    fill: 'none', 
    stroke: 'currentColor', 
    'stroke-width': '2', 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round' 
  }, [
    h('polygon', { points: '12 2 22 8.5 12 15 2 8.5 12 2' }),
    h('line', { x1: '12', y1: '15', x2: '12', y2: '22' }),
    h('line', { x1: '2', y1: '8.5', x2: '2', y2: '19' }),
    h('line', { x1: '22', y1: '8.5', x2: '22', y2: '19' }),
    h('line', { x1: '2', y1: '19', x2: '22', y2: '19' })
  ]);
  
  const CashIcon = () => h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    width: '24', 
    height: '24', 
    viewBox: '0 0 24 24', 
    fill: 'none', 
    stroke: 'currentColor', 
    'stroke-width': '2', 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round' 
  }, [
    h('rect', { x: '2', y: '6', width: '20', height: '12', rx: '2' }),
    h('circle', { cx: '12', cy: '12', r: '2' }),
    h('path', { d: 'M6 12h.01M18 12h.01' })
  ]);
  
  const ReceiptIcon = () => h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    width: '24', 
    height: '24', 
    viewBox: '0 0 24 24', 
    fill: 'none', 
    stroke: 'currentColor', 
    'stroke-width': '2', 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round' 
  }, [
    h('path', { d: 'M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z' }),
    h('path', { d: 'M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8' }),
    h('path', { d: 'M12 17.5v-11' })
  ]);
  
  // Reactive Delivery Options (updates when language changes)
  const deliveryOptions = computed(() => [
    {
      icon: TruckIcon,
      title: t('delivery.options.standard.title'),
      description: t('delivery.options.standard.description'),
      time: t('delivery.options.standard.time'),
      cost: t('delivery.options.standard.cost')
    },
    {
      icon: CourierIcon,
      title: t('delivery.options.express.title'),
      description: t('delivery.options.express.description'),
      time: t('delivery.options.express.time'),
      cost: t('delivery.options.express.cost')
    },
    {
      icon: ShipIcon,
      title: t('delivery.options.international.title'),
      description: t('delivery.options.international.description'),
      time: t('delivery.options.international.time'),
      cost: t('delivery.options.international.cost')
    },
    {
      icon: PlaneIcon,
      title: t('delivery.options.urgent.title'),
      description: t('delivery.options.urgent.description'),
      time: t('delivery.options.urgent.time'),
      cost: t('delivery.options.urgent.cost')
    }
  ]);
  
  // Reactive Delivery Process Steps
  const deliverySteps = computed(() => [
    {
      title: t('delivery.process.steps.order.title'),
      description: t('delivery.process.steps.order.description')
    },
    {
      title: t('delivery.process.steps.confirmation.title'),
      description: t('delivery.process.steps.confirmation.description')
    },
    {
      title: t('delivery.process.steps.payment.title'),
      description: t('delivery.process.steps.payment.description')
    },
    {
      title: t('delivery.process.steps.shipment.title'),
      description: t('delivery.process.steps.shipment.description')
    },
    {
      title: t('delivery.process.steps.delivery.title'),
      description: t('delivery.process.steps.delivery.description')
    }
  ]);
  
  // Reactive Payment Methods
  const paymentMethods = computed(() => [
    {
      icon: CreditCardIcon,
      title: t('delivery.payment.methods.card.title'),
      description: t('delivery.payment.methods.card.description')
    },
    {
      icon: BankIcon,
      title: t('delivery.payment.methods.bank.title'),
      description: t('delivery.payment.methods.bank.description')
    },
    {
      icon: CashIcon,
      title: t('delivery.payment.methods.cash.title'),
      description: t('delivery.payment.methods.cash.description')
    },
    {
      icon: ReceiptIcon,
      title: t('delivery.payment.methods.invoice.title'),
      description: t('delivery.payment.methods.invoice.description')
    }
  ]);
  
  // Create a reactive state for FAQ open toggles
  const faqOpenStates = ref([false, false, false, false, false]);
  
  // Reactive FAQ Items combining translations with open state
  const faqItems = computed(() => [
    {
      question: t('delivery.faq.items.shipping.question'),
      answer: t('delivery.faq.items.shipping.answer'),
      isOpen: faqOpenStates.value[0]
    },
    {
      question: t('delivery.faq.items.tracking.question'),
      answer: t('delivery.faq.items.tracking.answer'),
      isOpen: faqOpenStates.value[1]
    },
    {
      question: t('delivery.faq.items.returns.question'),
      answer: t('delivery.faq.items.returns.answer'),
      isOpen: faqOpenStates.value[2]
    },
    {
      question: t('delivery.faq.items.international.question'),
      answer: t('delivery.faq.items.international.answer'),
      isOpen: faqOpenStates.value[3]
    },
    {
      question: t('delivery.faq.items.payment.question'),
      answer: t('delivery.faq.items.payment.answer'),
      isOpen: faqOpenStates.value[4]
    }
  ]);
  
  // Toggle FAQ item state
  const toggleFaq = (index) => {
    faqOpenStates.value[index] = !faqOpenStates.value[index];
  };
  </script>
  
  <style scoped>
  /* Hero Section - Professional design with dynamic elements */
  .delivery-hero {
    position: relative;
    color: white;
    padding: 140px 0 120px;
    overflow: hidden;
    background-color: #1a1a1a;
  }
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  
  .animated-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%);
    animation: gradientShift 15s ease infinite;
    background-size: 400% 400%;
  }
  
  .accent-line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(255, 87, 34, 0) 0%, 
      rgba(255, 87, 34, 0.3) 15%, 
      rgba(255, 87, 34, 0.7) 50%, 
      rgba(255, 87, 34, 0.3) 85%, 
      rgba(255, 87, 34, 0) 100%);
    transform: translateY(-50%);
    opacity: 0.4;
    z-index: 1;
  }
  
  .particle-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .particle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 87, 34, 0.15);
    box-shadow: 0 0 20px 2px rgba(255, 87, 34, 0.1);
    opacity: 0.5;
    z-index: 1;
  }
  
  .particle-1 {
    top: 15%;
    left: 10%;
    width: 120px;
    height: 120px;
  }
  
  .particle-2 {
    top: 68%;
    left: 25%;
    width: 80px;
    height: 80px;
  }
  
  .particle-3 {
    top: 32%;
    left: 55%;
    width: 60px;
    height: 60px;
  }
  
  .particle-4 {
    top: 70%;
    left: 80%;
    width: 100px;
    height: 100px;
  }
  
  .particle-5 {
    top: 20%;
    left: 85%;
    width: 70px;
    height: 70px;
  }
  
  .particle-6 {
    top: 45%;
    left: 40%;
    width: 90px;
    height: 90px;
  }
  
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  .delivery-hero__content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  
  .delivery-hero__title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    position: relative;
    display: inline-block;
  }
  
  .delivery-hero__title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #ff5722 30%, #ff9800 100%);
  }
  
  .delivery-hero__subtitle {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    opacity: 0.9;
    max-width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
  }
  
  /* Section Styles */
  section {
    padding: 100px 0;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 15px;
    color: white;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #ff5722 0%, #ff9800 100%);
  }
  
  .section-description {
    margin-bottom: 3rem;
    max-width: 800px;
    color: #ccc;
    line-height: 1.7;
  }
  
  /* Delivery Options Section */
  .delivery-options {
    background-color: #1e1e1e;
    color: white;
  }
  
  .options-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 40px;
  }
  
  .option-card {
    background-color: #2a2a2a;
    border-radius: 10px;
    padding: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  
  .option-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #ff5722 0%, #ff9800 100%);
  }
  
  .option-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .option-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 87, 34, 0.15);
    border-radius: 50%;
    color: #ff5722;
    margin-bottom: 20px;
  }
  
  .option-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
  }
  
  .option-description {
    color: #ccc;
    margin-bottom: 20px;
    line-height: 1.6;
    flex-grow: 1;
  }
  
  .option-details {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 6px;
    margin-top: auto;
  }
  
  .detail-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .detail-item:last-child {
    margin-bottom: 0;
  }
  
  .detail-label {
    color: #aaa;
  }
  
  .detail-value {
    font-weight: 600;
  }
  
  /* Delivery Process Section */
  .delivery-process {
    background-color: #232323;
    color: white;
  }
  
  .process-steps {
    margin-top: 50px;
    max-width: 800px;
  }
  
  .process-step {
    display: flex;
    margin-bottom: 40px;
    position: relative;
  }
  
  .process-step:last-child {
    margin-bottom: 0;
  }
  
  .process-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 60px;
    left: 35px;
    width: 2px;
    height: calc(100% - 20px);
    background: linear-gradient(180deg, #ff5722 0%, rgba(255, 87, 34, 0.1) 100%);
  }
  
  .step-number {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #ff5722 0%, #ff9800 100%);
    border-radius: 50%;
    font-size: 1.6rem;
    font-weight: 700;
    color: white;
    margin-right: 25px;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    box-shadow: 0 5px 15px rgba(255, 87, 34, 0.3);
  }
  
  .step-content {
    padding-top: 10px;
  }
  
  .step-title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .step-description {
    color: #ccc;
    line-height: 1.6;
  }
  
  /* Payment Methods Section */
  .payment-methods {
    background-color: #1e1e1e;
    color: white;
  }
  
  .payment-options-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-top: 40px;
  }
  
  .payment-option {
    background-color: #2a2a2a;
    border-radius: 10px;
    padding: 25px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .payment-option:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .payment-icon {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 87, 34, 0.15);
    border-radius: 50%;
    color: #ff5722;
    margin: 0 auto 20px;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .payment-option:hover .payment-icon {
    background-color: rgba(255, 87, 34, 0.25);
    transform: scale(1.1);
  }
  
  .payment-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 15px;
  }
  
  .payment-description {
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  /* FAQ Section */
  .faq-section {
    background-color: #232323;
    color: white;
  }
  
  .faq-list {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .faq-item {
    background-color: #2a2a2a;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .faq-item:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .faq-question {
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  
  .faq-question::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(255, 87, 34, 0) 0%, 
      rgba(255, 87, 34, 0.3) 50%, 
      rgba(255, 87, 34, 0) 100%);
    opacity: 0.3;
  }
  
  .faq-question h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
  }
  
  .faq-toggle {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: #ff5722;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .faq-question.active .faq-toggle {
    transform: rotate(180deg);
  }
  
  .horizontal-line {
    transition: all 0.3s ease;
  }
  
  .horizontal-line.hidden {
    opacity: 0;
  }
  
  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease, padding 0.5s ease;
    padding: 0 30px;
  }
  
  .faq-answer.open {
    max-height: 300px;
    padding: 20px 30px 30px;
  }
  
  .faq-answer p {
    color: #ccc;
    line-height: 1.7;
    margin: 0;
  }
  
  /* Call To Action Section */
  .cta {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/cta-bg.svg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  
  .cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 87, 34, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
    z-index: 1;
  }
  
  .cta__content {
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  
  .cta__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .cta__text {
    margin-bottom: 2.5rem;
    font-size: 1.2rem;
    line-height: 1.7;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  }
  
  /* Button Styles */
  .btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    text-decoration: none;
  }
  
  .btn-primary {
    background-color: #ff5722;
    color: white;
    border: none;
  }
  
  .btn-primary:hover {
    background-color: #e64a19;
    transform: translateY(-2px);
  }
  
  .btn-large {
    padding: 15px 35px;
    font-size: 1.1rem;
  }
  
  /* Animation keyframes */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .fade-in-up {
    animation-name: fadeInUp;
  }
  
  .fade-in-left {
    animation-name: fadeInLeft;
  }
  
  .fade-in-right {
    animation-name: fadeInRight;
  }
  
  .fade-in {
    animation-name: fadeIn;
  }
  
  .delay-1 {
    animation-delay: 0.2s;
  }
  
  .delay-2 {
    animation-delay: 0.4s;
  }
  
  .delay-3 {
    animation-delay: 0.6s;
  }
  
  .delay-4 {
    animation-delay: 0.8s;
  }
  
  /* Animation triggering on scroll */
  .animated {
    opacity: 0;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
    animation-play-state: paused;
  }
  
  section.visible .animated {
    animation-play-state: running;
  }
  
  /* Make sure the hero section animations always play */
  .delivery-hero .animated {
    animation-play-state: running !important;
  }
  
  /* Responsive Styles */
  @media (max-width: 1200px) {
    .payment-options-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
  
  @media (max-width: 992px) {
    .options-grid {
      grid-template-columns: 1fr;
    }
    
    .delivery-hero {
      padding: 120px 0 100px;
    }
    
    .delivery-hero__title {
      font-size: 2.8rem;
    }
    
    .delivery-hero__subtitle {
      max-width: 100%;
    }
    
    .section-title {
      font-size: 2.2rem;
    }
  }
  
  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }
    
    .delivery-hero {
      padding: 80px 0;
    }
    
    .delivery-hero__title {
      font-size: 2.5rem;
    }
    
    .delivery-hero__subtitle {
      font-size: 1.1rem;
    }
    
    .payment-options-grid {
      grid-template-columns: 1fr;
    }
    
    .process-step {
      flex-direction: column;
    }

    .process-step:not(:last-child)::after {
        content: none;
    }
    
    .step-number {
      margin-bottom: 15px;
      margin-right: 0;
    }
    
    .process-step:not(:last-child)::after {
      left: 35px;
      top: 70px;
      width: 2px;
      height: calc(100% - 90px);
    }
    
    .particle-1, .particle-5 {
      opacity: 0.3;
    }
  }
  
  @media (max-width: 576px) {
    .delivery-hero {
      padding: 70px 0 60px;
    }
    
    .delivery-hero__title {
      font-size: 2rem;
    }
    
    .delivery-hero__title::after {
      width: 60px;
      bottom: -10px;
    }
    
    .delivery-hero__subtitle {
      font-size: 1rem;
    }
    
    .option-card {
      padding: 20px;
    }
    
    .faq-question {
      padding: 15px 20px;
    }
    
    .faq-answer.open {
      padding: 15px 20px 20px;
    }
    
    .btn {
      width: 100%;
    }
    
    .particle-2, .particle-4, .particle-6 {
      opacity: 0.2;
    }
  }
</style>
  