<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <!-- Hero Section with Background Image -->
    <section class="hero">
      <div class="container">
        <div class="hero__content">
          <h1 class="hero__title">{{ t('home.heroTitle') }}</h1>
          <p class="hero__subtitle">{{ t('home.heroSubtitle') }}</p>
          <div class="hero__buttons">
            <router-link to="/catalog" class="btn btn-primary">{{ t('home.viewCatalog') }}</router-link>
            <router-link to="/contacts" class="btn btn-outline">{{ t('home.contactUs') }}</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section - Updated with navigation to catalog with category -->
    <section class="products" ref="productsSection">
      <div class="container">
        <h2 class="section-title animated fade-in-up">{{ t('home.ourProducts') }}</h2>
        <p class="section-description animated fade-in-up delay-1">{{ t('home.productsDescription') }}</p>
        
        <div class="product-grid">
          <div 
            class="product-card" 
            v-for="(product, index) in products" 
            :key="index"
            :class="{ 'animated fade-in-up': true }"
            :style="{ 'animation-delay': `${0.1 + index * 0.1}s` }"
            @click="navigateToCategory(product.categoryId)"
          >
            <div class="product-card__image">
              <img :src="product.image" :alt="product.title" loading="lazy">
            </div>
            <h3 class="product-card__title">{{ product.title }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-us" ref="whyUsSection">
      <div class="container">
        <h2 class="section-title animated fade-in-up">{{ t('home.whyChooseUs.title') }}</h2>
        
        <div class="why-us__content">
          <div class="why-us__text animated fade-in-left delay-1">
            <p class="why-us__description">{{ t('home.whyChooseUs.description') }}</p>
            
            <ul class="why-us__list">
              <li v-for="(advantage, index) in advantages" :key="index" 
                  class="animated fade-in-left"
                  :style="{ 'animation-delay': `${0.3 + index * 0.15}s` }">
                <div class="advantage">
                  <div class="advantage__icon">
                    <component :is="advantage.icon" />
                  </div>
                  <div class="advantage__content">
                    <h3 class="advantage__title">{{ advantage.title }}</h3>
                    <p class="advantage__text">{{ advantage.text }}</p>
                  </div>
                </div>
              </li>
            </ul>
            
            <router-link to="/about" class="btn btn-primary animated fade-in-up delay-4">{{ t('home.learnMore') }}</router-link>
          </div>
          
          <div class="why-us__image animated fade-in-right delay-2">
            <img src="/images/cta.svg" alt="Industrial facility" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="partners" ref="partnersSection">
      <div class="container">
        <h2 class="section-title animated fade-in-up">{{ t('home.partners') }}</h2>
        
        <div class="partners-container">
          <div class="partner-item" style="--i: 1;">
            <img src="/images/partner_ibc.svg" alt="Ibc" loading="lazy">
          </div>
          <div class="partner-item" style="--i: 2;">
            <img src="/images/partner_flow.svg" alt="Flow Technology" loading="lazy">
          </div>
          <div class="partner-item" style="--i: 3;">
            <img src="/images/partner_gates.svg" alt="Gates" loading="lazy">
          </div>
          <div class="partner-item" style="--i: 4;">
            <img src="/images/partner_dixon.svg" alt="Dixon" loading="lazy">
          </div>
          <div class="partner-item" style="--i: 5;">
            <img src="/images/partner_parker.svg" alt="Parker" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <section class="cta" ref="ctaSection">
      <div class="container">
        <div class="cta__content animated fade-in-up">
          <h2 class="cta__title">{{ t('home.cta.title') }}</h2>
          <p class="cta__text">{{ t('home.cta.text') }}</p>
          <router-link to="/contacts" class="btn btn-primary btn-large">{{ t('home.cta.button') }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, h, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const router = useRouter();

// For intersection observer animations
const productsSection = ref(null);
const whyUsSection = ref(null);
const partnersSection = ref(null);
const ctaSection = ref(null);

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
  document.querySelectorAll('section').forEach(section => observer.observe(section));
});

// Define icons as components
const QualityIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    },
    [h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' })]
  );

const DeliveryIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    },
    [
      h('rect', { x: '1', y: '3', width: '15', height: '13' }),
      h('polygon', { points: '16 8 20 8 23 11 23 16 16 16 16 8' }),
      h('circle', { cx: '5.5', cy: '18.5', r: '2.5' }),
      h('circle', { cx: '18.5', cy: '18.5', r: '2.5' })
    ]
  );

const SupportIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    },
    [h('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })]
  );

// Updated product data with categoryId
const products = computed(() => [
  {
    title: t('home.products.tools'),
    image: '/images/product_tools.svg',
    categoryId: 3  // Index of the tools category in the catalog
  },
  {
    title: t('home.products.belts'),
    image: '/images/product_belts.svg',
    categoryId: 0  // Index of the belts category in the catalog
  },
  {
    title: t('home.products.hoses'),
    image: '/images/product_hoses.svg',
    categoryId: 1  // Index of the hoses category in the catalog
  },
  {
    title: t('home.products.bearings'),
    image: '/images/product_bearings.svg',
    categoryId: 2  // Index of the bearings category in the catalog
  }
]);

// Function to navigate to catalog with selected category
const navigateToCategory = (categoryId) => {
  router.push({
    path: '/catalog',
    query: { category: categoryId }
  });
};

// Advantages data
const advantages = computed(() => [
  {
    icon: QualityIcon,
    title: t('home.advantages.quality.title'),
    text: t('home.advantages.quality.text')
  },
  {
    icon: DeliveryIcon,
    title: t('home.advantages.delivery.title'),
    text: t('home.advantages.delivery.text')
  },
  {
    icon: SupportIcon,
    title: t('home.advantages.support.title'),
    text: t('home.advantages.support.text')
  }
]);

// Partners data (remains for potential use elsewhere)
const partners = [
  { name: 'Flow Technology', logo: '/images/partner_flow.svg' },
  { name: 'Eaton', logo: '/images/partner_gates.svg' },
  { name: 'IBC', logo: '/images/partner_ibc.svg' },
  { name: 'Dixon', logo: '/images/partner_dixon.svg' },
  { name: 'Parker', logo: '/images/partner_parker.svg' }
];
</script>

<style scoped>
/* Hero Section */
.hero {
  background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/images/hero_bg.svg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 120px 0;
  position: relative;
}

.hero__content {
  max-width: 600px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s forwards;
}

.hero__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero__subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero__buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

/* Section Styles */
section {
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
  opacity: 0;
  transform: translateY(20px);
  color: white;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ff5722 0%, #ff9800 100%);
}

.section-description {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin: 0 auto;
  color: #ccc;
}

/* Products Section */
.products {
  background-color: #232323;
  color: white;
  position: relative;
  overflow: hidden;
}

.products::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(255,87,34,0.05) 0%, rgba(35,35,35,0) 70%);
  pointer-events: none;
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 50px;
  position: relative;
}

.product-card {
  background-color: #333;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  transition: transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
  position: relative;
  z-index: 1;
  cursor: pointer;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,87,34,0.1) 0%, rgba(51,51,51,0) 60%);
  z-index: -1;
}

.product-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ff5722 0%, #ff9800 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
}

.product-card:hover::after {
  transform: scaleX(1);
}

.product-card__image {
  height: 220px;
  overflow: hidden;
  position: relative;
  background-color: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card__image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(42,42,42,0) 70%);
}

.product-card__image img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  transition: transform 0.5s ease;
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2));
}

.product-card:hover .product-card__image img {
  transform: scale(1.1);
}

.product-card__title {
  padding: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: white;
  position: relative;
  border-top: 1px solid rgba(255,255,255,0.05);
}

.product-card__title::before {
  content: '';
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background-color: #ff5722;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-card__title::before {
  opacity: 1;
}

/* Why Choose Us Section */
.why-us {
  background-color: #232323;
  color: white;
}

.why-us__content {
  display: flex;
  gap: 50px;
  align-items: center;
  margin-top: 50px;
}

.why-us__text {
  flex: 1;
  opacity: 0;
  transform: translateX(-30px);
}

.why-us__description {
  margin-bottom: 30px;
  color: #ccc;
  line-height: 1.7;
}

.why-us__list {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.advantage {
  display: flex;
  margin-bottom: 25px;
}

.advantage__icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,87,34,0.15);
  border-radius: 50%;
  color: #ff5722;
  margin-right: 20px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.advantage__icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid rgba(255,87,34,0.3);
  top: 0;
  left: 0;
  animation: pulse 2s infinite;
}

.advantage:hover .advantage__icon {
  transform: scale(1.1);
  background-color: rgba(255,87,34,0.25);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.advantage__title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.advantage__text {
  color: #ccc;
  line-height: 1.6;
}

.why-us__image {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  opacity: 0;
  transform: translateX(30px);
}

.why-us__image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  background-color: #f9f9f9;
  padding: 20px;
}

/* Partners Section */
.partners {
  background-color: #1a1a1a;
  color: white;
  position: relative;
  padding: 100px 0;
  overflow: hidden;
}

.partners::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle at center, rgba(255,87,34,0.1) 0%, transparent 70%);
  opacity: 0.5;
}

.partners .section-title {
  margin-bottom: 60px;
  position: relative;
}

.partners .section-title::after {
  background: #ff5722;
}

.partners-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.partner-item {
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  width: 220px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
  position: relative;
  animation: fadeIn 1s forwards;
  animation-delay: calc(var(--i) * 0.1s);
  opacity: 0;
}

.partner-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff5722, #ff9800);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.partner-item:hover {
  transform: translateY(-5px);
}

.partner-item:hover::before {
  transform: scaleX(1);
}

.partner-item img {
  max-width: 85%;
  max-height: 85%;
  object-fit: contain;
}

/* Call To Action Section */
.cta {
  background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('/images/cta-bg.svg');
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
  background: linear-gradient(45deg, rgba(255,87,34,0.2) 0%, rgba(0,0,0,0) 70%);
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
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.cta__text {
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
  line-height: 1.7;
  text-shadow: 0 1px 5px rgba(0,0,0,0.2);
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

.btn-outline {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background-color: white;
  color: #333;
  transform: translateY(-2px);
}

.btn-large {
  padding: 15px 35px;
  font-size: 1.1rem;
}

/* Animation Keyframes */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in-up { animation-name: fadeInUp; }
.fade-in-left { animation-name: fadeInLeft; }
.fade-in-right { animation-name: fadeInRight; }
.fade-in { animation-name: fadeIn; }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }

/* Additional animation styles */
.animated {
  opacity: 0;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-play-state: paused;
}
section.visible .animated {
  animation-play-state: running;
}

.hero .animated {
  animation-play-state: running !important;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .hero { padding: 100px 0; }
  .hero__title { font-size: 2.2rem; }
  .why-us__content { flex-direction: column; }
  .why-us__image { order: -1; margin-bottom: 30px; }
  .partners-container { gap: 20px; }
  .product-grid { gap: 25px; }
  .product-card__image { height: 220px; }
}

@media (max-width: 768px) {
  section { padding: 60px 0; }
  .hero { padding: 80px 0; }
  .hero__title { font-size: 2rem; }
  .section-title { font-size: 1.8rem; }
  .partners-container { flex-direction: column; align-items: center; }
  .partner-item { width: 60%; }
  .product-grid { grid-template-columns: 1fr; max-width: 450px; margin: 0 auto; }
}

@media (max-width: 576px) {
  .hero { padding: 60px 0; }
  .hero__title { font-size: 1.8rem; }
  .hero__subtitle { font-size: 1rem; }
  .section-title { font-size: 1.6rem; }
  .product-card__image { height: 200px; }
  .advantage { flex-direction: column; }
  .advantage__icon { margin-bottom: 15px; margin-right: 0; }
  .btn { width: 100%; margin-bottom: 10px; }
}

.company-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  box-shadow: none;
  width: 120px;
  height: 120px;
  z-index: 10;
}

.company-logo img {
  max-width: 100%;
  max-height: 100%;
  filter: none;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>