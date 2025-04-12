<!-- src/views/CatalogView.vue -->
<template>
  <div class="catalog">
    <!-- Hero Section -->
    <section class="catalog-hero">
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
        <div class="catalog-hero__content">
          <h1 class="catalog-hero__title animated fade-in-up">{{ t('catalog.pageTitle') }}</h1>
          <p class="catalog-hero__subtitle animated fade-in-up delay-1">{{ t('catalog.pageSubtitle') }}</p>
        </div>
      </div>
    </section>
  
    <!-- Category Cards Section -->
    <section class="categories">
      <div class="container">
        <h2 class="section-title">{{ t('catalog.categories.title') }}</h2>
  
        <!-- Category Cards -->
        <div class="category-cards">
          <div 
            v-for="(category, index) in productCategories" 
            :key="index"
            class="category-card"
            :class="{ active: activeCategory === index }"
            @click="setActiveCategory(index)"
          >
            <div class="category-icon">
              <img :src="getCategoryImage(index)" :alt="category.title" class="category-image">
            </div>
            <div class="category-name">{{ category.title }}</div>
          </div>
        </div>
  
        <!-- Selected Category Content -->
        <div v-if="activeCategory !== null" class="selected-category">
          <h3 class="category-title">{{ productCategories[activeCategory].title }}</h3>
          <p class="category-description">
            {{ productCategories[activeCategory].description }}
          </p>
  
          <!-- Brands Grid (Now with brand images, no “View Products” button) -->
          <div class="brands-section">
            <h4 class="brands-title">{{ t('catalog.brands.title') }}</h4>
  
            <div class="brands-grid">
              <div 
                v-for="(brand, bIndex) in productCategories[activeCategory].brands" 
                :key="bIndex"
                class="brand-card"
              >
                <!-- Brand Image instead of capital letter -->
                <div class="brand-logo">
                  <img 
                    :src="getBrandImage(brand)" 
                    :alt="brand" 
                    class="brand-image" 
                  />
                </div>
                <h5 class="brand-name">{{ brand }}</h5>
                <p class="brand-description">{{ getBrandDescription(brand) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Call To Action -->
    <section class="cta">
      <div class="container">
        <div class="cta__content animated fade-in-up">
          <h2 class="cta__title">{{ t('catalog.cta.title') }}</h2>
          <p class="cta__text">{{ t('catalog.cta.text') }}</p>
          <router-link to="/contacts" class="btn btn-primary btn-large">
            {{ t('catalog.cta.button') }}
          </router-link>
        </div>
      </div>
    </section>
  
    <!-- Success notification (if still used for something else) -->
    <div v-if="showNotification" class="notification">
      <div class="notification-content">
        <span>{{ notificationMessage }}</span>
        <button class="close-notification" @click="showNotification = false">×</button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
  
const { t } = useI18n();
const route = useRoute();
const router = useRouter();
  
// State
const activeCategory = ref(null);
const showNotification = ref(false);
const notificationMessage = ref('');
  
// Brand images (adjust paths to match your actual files)
const brandImages = {
  'Gates': '/images/gates-belts.webp',
  'Continental (Contitech)': '/images/continental.jpg',
  'Optibelt': '/images/optibelt-belts.jpg',
  'Dunham Bush': '/images/dunham_bash.png',
  'CSI/Ametek': '/images/csi.jpg',
  'Bioflex': '/images/bioflex.jpg',
  'Parker': '/images/partner_parker.svg',
  'Stats UK Ltd': '/images/stats.jpg',
  'Knowsley': '/images/knowsley.webp',
  'Kuriyama': '/images/kuriyama.webp',
  'FAG': '/images/fag-bearings.webp',
  'SKF': '/images/skf-bearing.jpg',
  'NSK': '/images/nsk.webp',
  'NACHI': '/images/nachi.jpg',
  'NTN': '/images/ntn.webp',
  'INA': '/images/ina.jpg',
  'Roebuck': '/images/roebuck_tools.jpg',
  'Eclipse': '/images/eclipse.png',
  'Cutline': '/images/cutline.jpg',
  'McMaster': '/images/mcmaster.png'
};
  
// Catalog categories as a computed property (translation will update immediately)
const productCategories = computed(() => [
  {
    title: t('catalog.categories.belts'),
    description: t('catalog.categories.beltsDescription'),
    brands: [
      'Gates', 'Continental (Contitech)', 'Optibelt', 'Dunham Bush'
    ]
  },
  {
    title: t('catalog.categories.hoses'),
    description: t('catalog.categories.hosesDescription'),
    brands: [
      'Gates', 'CSI/Ametek', 'Bioflex', 'Parker', 'Stats UK Ltd', 
      'Knowsley', 'Kuriyama'
    ]
  },
  {
    title: t('catalog.categories.bearings'),
    description: t('catalog.categories.bearingsDescription'),
    brands: [
      'FAG', 'SKF', 'NSK', 'NACHI', 'NTN', 'INA'
    ]
  },
  {
    title: t('catalog.categories.tools'),
    description: t('catalog.categories.toolsDescription'),
    brands: [
      'Roebuck', 'Eclipse', 'Cutline', 'McMaster'
    ]
  }
]);
  
// Helper: Return category image path
function getCategoryImage(index) {
  const imagePaths = [
    '/images/product_belts.svg',
    '/images/product_hoses.svg',
    '/images/product_bearings.svg',
    '/images/product_tools.svg'
  ];
  return imagePaths[index];
}
  
// Helper: Return brand image (if missing, show a fallback)
function getBrandImage(brand) {
  return brandImages[brand] || '/images/brands/brand_fallback.png';
}
  
// Helper: Return brand description
function getBrandDescription(brand) {
  const descriptions = {
    'Gates': t('catalog.brands.gatesDescription'),
    'Continental (Contitech)': t('catalog.brands.continentalDescription'),
    'Optibelt': t('catalog.brands.optibeltDescription'),
    'Dunham Bush': t('catalog.brands.dunhamDescription'),
    'CSI/Ametek': t('catalog.brands.csiDescription'),
    'Bioflex': t('catalog.brands.bioflexDescription'),
    'Parker': t('catalog.brands.parkerDescription'),
    'Stats UK Ltd': t('catalog.brands.statsDescription'),
    'Knowsley': t('catalog.brands.knowsleyDescription'),
    'Kuriyama': t('catalog.brands.kuriyamaDescription'),
    'FAG': t('catalog.brands.fagDescription'),
    'SKF': t('catalog.brands.skfDescription'),
    'NSK': t('catalog.brands.nskDescription'),
    'NACHI': t('catalog.brands.nachiDescription'),
    'NTN': t('catalog.brands.ntnDescription'),
    'INA': t('catalog.brands.inaDescription'),
    'Roebuck': t('catalog.brands.roebuckDescription'),
    'Eclipse': t('catalog.brands.eclipseDescription'),
    'Cutline': t('catalog.brands.cutlineDescription'),
    'McMaster': t('catalog.brands.mcmasterDescription')
  };
  return descriptions[brand] || t('catalog.brands.genericDescription');
}
  
// Mark a category as active
function setActiveCategory(index) {
  activeCategory.value = index;
}
  
// On mount, parse ?category=… from route
onMounted(() => {
  if (route.query.category) {
    const categoryIndex = parseInt(route.query.category, 10);
    if (!isNaN(categoryIndex) && categoryIndex >= 0 && categoryIndex < productCategories.value.length) {
      activeCategory.value = categoryIndex;
    } else {
      activeCategory.value = 0;
    }
  } else {
    activeCategory.value = 0;
  }
});
  
// Watch activeCategory -> update route
watch(activeCategory, (newValue) => {
  if (newValue !== null) {
    router.replace({ query: { ...route.query, category: newValue } });
  }
});
</script>
  
<style scoped>
/* ---------------------------------- */
/* Hero Section (same as About style) */
/* ---------------------------------- */
.catalog-hero {
  position: relative;
  color: white;
  padding: 140px 0 120px;
  overflow: hidden;
  background-color: #1a1a1a;
}
  
.catalog-hero .hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
  
.catalog-hero .animated-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%);
  animation: gradientShift 15s ease infinite;
  background-size: 400% 400%;
}
  
.catalog-hero .accent-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 87, 34, 0) 0%,
    rgba(255, 87, 34, 0.3) 15%,
    rgba(255, 87, 34, 0.7) 50%,
    rgba(255, 87, 34, 0.3) 85%,
    rgba(255, 87, 34, 0) 100%
  );
  transform: translateY(-50%);
  opacity: 0.4;
  z-index: 1;
}
  
.catalog-hero .particle-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
  
.catalog-hero .particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 87, 34, 0.15);
  box-shadow: 0 0 20px 2px rgba(255, 87, 34, 0.1);
  opacity: 0.5;
  z-index: 1;
}
  
.catalog-hero .particle-1 {
  top: 15%;
  left: 10%;
  width: 120px;
  height: 120px;
}
  
.catalog-hero .particle-2 {
  top: 68%;
  left: 25%;
  width: 80px;
  height: 80px;
}
  
.catalog-hero .particle-3 {
  top: 32%;
  left: 55%;
  width: 60px;
  height: 60px;
}
  
.catalog-hero .particle-4 {
  top: 70%;
  left: 80%;
  width: 100px;
  height: 100px;
}
  
.catalog-hero .particle-5 {
  top: 20%;
  left: 85%;
  width: 70px;
  height: 70px;
}
  
.catalog-hero .particle-6 {
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
  
.catalog-hero__content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}
  
.catalog-hero__title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
  display: inline-block;
}
  
.catalog-hero__title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #ff5722 30%, #ff9800 100%);
}
  
.catalog-hero__subtitle {
  font-size: 1.4rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
}
  
/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
  
/* Section */
section {
  padding: 60px 0;
}
  
/* Section Titles */
.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  color: white;
}
  
.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ff5722 0%, #ff9800 100%);
}
  
/* Categories Section */
.categories {
  background-color: #232323;
  color: white;
}
  
.category-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
  
.category-card {
  background-color: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  width: 220px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}
  
.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #ff5722;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
  
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
  
.category-card:hover::before,
.category-card.active::before {
  transform: scaleX(1);
}
  
.category-card.active {
  background-color: #333;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
  
.category-icon {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  overflow: hidden;
}
  
.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
  
.category-card:hover .category-image,
.category-card.active .category-image {
  transform: scale(1.05);
}
  
.category-name {
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
  
/* Selected Category Content */
.selected-category {
  margin-top: 40px;
}
  
.category-title {
  font-size: 1.8rem;
  margin-bottom: 15px;
  text-align: center;
}
  
.category-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #ccc;
  line-height: 1.6;
}
  
/* Brands Section */
.brands-section {
  margin-top: 40px;
}
  
.brands-title {
  font-size: 1.5rem;
  margin-bottom: 25px;
  text-align: center;
}
  
.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}
  
.brand-card {
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: default;
}
  
.brand-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
  
.brand-logo {
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden;
}
  
.brand-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
  
.brand-name {
  font-size: 1.2rem;
  margin-bottom: 12px;
}
  
.brand-description {
  color: #bbb;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}
  
/* CTA Section */
.cta {
  background-color: #1a1a1a;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/cta-bg.svg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 80px 0;
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
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
}
  
.cta__title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}
  
.cta__text {
  margin-bottom: 2rem;
  opacity: 0.9;
}
  
.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}
  
.btn-primary {
  background-color: #ff5722;
  color: white;
  border: none;
}
  
.btn-primary:hover {
  background-color: #e64a19;
}
  
.btn-large {
  padding: 15px 35px;
  font-size: 1.1rem;
}
  
/* Notification */
.notification {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
}
  
.notification-content {
  background-color: #333;
  color: white;
  padding: 15px 20px;
  border-radius: 6px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  border-left: 4px solid #ff5722;
  animation: slideIn 0.3s ease;
}
  
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
  
.close-notification {
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  margin-left: 15px;
  font-size: 1.2rem;
}
  
/* Responsive */
@media (max-width: 992px) {
  .category-cards {
    gap: 15px;
  }
  .category-card {
    width: 180px;
  }
  .category-icon {
    height: 140px;
  }
}
  
@media (max-width: 768px) {
  .catalog-hero__title {
    font-size: 2rem;
  }
  .category-cards {
    gap: 10px;
  }
  .category-card {
    width: 160px;
  }
  .category-icon {
    height: 120px;
  }
  .category-name {
    font-size: 0.9rem;
    padding: 12px 10px;
  }
  .brands-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
}
  
@media (max-width: 576px) {
  .catalog-hero__title {
    font-size: 1.8rem;
  }
  .catalog-hero__subtitle {
    font-size: 1rem;
  }
  .section-title {
    font-size: 1.6rem;
  }
  .category-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .category-card {
    width: 100%;
  }
  .category-title {
    font-size: 1.5rem;
  }
  .brands-grid {
    grid-template-columns: 1fr;
  }
  .notification {
    left: 15px;
    right: 15px;
    bottom: 15px;
  }
  .notification-content {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
