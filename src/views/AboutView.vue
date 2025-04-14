<!-- src/views/AboutView.vue -->
<template>
  <div class="about">
    <!-- Hero Section with professional background -->
    <section class="about-hero">
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
        <div class="about-hero__content">
          <h1 class="about-hero__title animated fade-in-up">{{ t('about.heroTitle') }}</h1>
          <p class="about-hero__subtitle animated fade-in-up delay-1">{{ t('about.heroSubtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Company Overview Section -->
    <section class="company-overview" ref="overviewSection">
      <div class="container">
        <h2 class="section-title animated fade-in-up">{{ t('about.overview.title') }}</h2>
        
        <div class="overview-content">
          <div class="overview-text animated fade-in-left delay-1">
            <p v-html="t('about.overview.description')"></p>
            <div class="stats-container">
              <div class="stat-item animated fade-in-up" style="--i: 2;">
                <div class="stat-number">10+</div>
                <div class="stat-label">{{ t('about.overview.stats.years') }}</div>
              </div>
              <div class="stat-item animated fade-in-up" style="--i: 3;">
                <div class="stat-number">1000+</div>
                <div class="stat-label">{{ t('about.overview.stats.clients') }}</div>
              </div>
              <div class="stat-item animated fade-in-up" style="--i: 4;">
                <div class="stat-number">50+</div>
                <div class="stat-label">{{ t('about.overview.stats.partners') }}</div>
              </div>
            </div>
          </div>
          <div class="overview-image animated fade-in-right delay-2">
            <img src="/images/hero_bg.svg" alt="Company Overview" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Our Mission Section - Redesigned to "Our Values and Goal" -->
    <section class="our-mission" ref="missionSection">
      <div class="container">
        <h2 class="section-title animated fade-in-up">{{ t('about.mission.title') }}</h2>
        
        <div class="mission-content">
          <div class="mission-text animated fade-in-up delay-1">
            <p v-html="t('about.mission.description')"></p>
          </div>
          
          <div class="mission-values-grid">
            <div class="value-card animated fade-in-up" style="--i: 2;">
              <div class="value-icon">
                <QualityIcon />
              </div>
              <h3>{{ t('about.mission.values.quality.title') }}</h3>
              <p>{{ t('about.mission.values.quality.text') }}</p>
            </div>
            
            <div class="value-card animated fade-in-up" style="--i: 3;">
              <div class="value-icon">
                <ReliabilityIcon />
              </div>
              <h3>{{ t('about.mission.values.reliability.title') }}</h3>
              <p>{{ t('about.mission.values.reliability.text') }}</p>
            </div>
            
            <div class="value-card animated fade-in-up" style="--i: 4;">
              <div class="value-icon">
                <InnovationIcon />
              </div>
              <h3>{{ t('about.mission.values.innovation.title') }}</h3>
              <p>{{ t('about.mission.values.innovation.text') }}</p>
            </div>
            
            <div class="value-card animated fade-in-up" style="--i: 5;">
              <div class="value-icon">
                <MarketKnowledgeIcon />
              </div>
              <h3>{{ t('about.mission.values.marketKnowledge.title') }}</h3>
              <p>{{ t('about.mission.values.marketKnowledge.text') }}</p>
            </div>
            
            <div class="value-card animated fade-in-up" style="--i: 6;">
              <div class="value-icon">
                <FeedbackIcon />
              </div>
              <h3>{{ t('about.mission.values.feedback.title') }}</h3>
              <p>{{ t('about.mission.values.feedback.text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
    <div class="container">
      <h2 class="section-title">{{ t('about.services.title') }}</h2>
      <p class="section-description">{{ t('about.services.description') }}</p>

      <div class="services-list">
        <div
          class="service-item"
          v-for="(item, index) in serviceItems"
          :key="index"
        >
          <div class="service-icon">
            <ServiceIcon />
          </div>
          <p class="service-text">{{ item }}</p>
        </div>
      </div>
    </div>
  </section>

    <!-- Industries Section -->
    <section class="industries" ref="industriesSection">
  <div class="container">
    <h2 class="section-title animated fade-in-up">{{ t('about.industries.title') }}</h2>
    <p class="section-description animated fade-in-up delay-1">{{ t('about.industries.description') }}</p>
    
    <div class="industries-list">
      <div class="industry-item" v-for="(item, index) in industryItems" :key="index">
        <div class="service-icon">
          <ServiceIcon />
        </div>
        <p class="service-text">{{ item }}</p>
      </div>
    </div>
  </div>
</section>


    <!-- Partners Section -->
    <section class="partners" ref="partnersSection">
  <div class="container">
    <h2 class="section-title animated fade-in-up">{{ t('about.partners.title') }}</h2>
    <p class="section-description animated fade-in-up delay-1">{{ t('about.partners.description') }}</p>
    
    <div class="partners-content">
      <div class="clients-section animated fade-in-left delay-2">
        <h3 class="subsection-title">{{ t('about.partners.clients.title') }}</h3>
        <ul class="client-list">
          <li v-for="(client, index) in clientItems" :key="index" class="client-item" :style="`--i: ${index + 3};`">
            {{ client }}
          </li>
        </ul>
      </div>
      
      <div class="suppliers-section animated fade-in-right delay-2">
        <h3 class="subsection-title">{{ t('about.partners.suppliers.title') }}</h3>
        <p class="suppliers-text">{{ t('about.partners.suppliers.text') }}</p>
        <div class="supplier-logos">
          <!-- Placeholder logos for key suppliers -->
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- Certificates Section -->
    <section class="certificates" ref="certificatesSection">
      <div class="container">
        <h2 class="section-title animated fade-in-up">{{ t('about.certificates.title') }}</h2>
        <p class="section-description animated fade-in-up delay-1">{{ t('about.certificates.description') }}</p>
        
        <div class="certificates-grid">
          <div 
            class="certificate-item animated fade-in-up" 
            style="--i: 2;" 
            v-for="(certificate, index) in certificates" 
            :key="index"
          >
            <div class="certificate-image">
              <img :src="certificate.image" :alt="certificate.name" loading="lazy">
            </div>
            <div class="certificate-info">
              <h3 class="certificate-name">{{ certificate.name }}</h3>
              <p class="certificate-description">{{ certificate.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <section class="cta" ref="ctaSection">
      <div class="container">
        <div class="cta__content animated fade-in-up">
          <h2 class="cta__title">{{ t('about.cta.title') }}</h2>
          <p class="cta__text">{{ t('about.cta.text') }}</p>
          <router-link to="/contacts" class="btn btn-primary btn-large">{{ t('about.cta.button') }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
/* --- IMPORTS --- */
import { ref, onMounted, h, computed } from 'vue';
import { useI18n } from 'vue-i18n';

/* --- SETUP I18N --- */
const { t } = useI18n();


/* --- SECTION REFS --- */
const overviewSection = ref(null);
const missionSection = ref(null);
const servicesSection = ref(null);
const industriesSection = ref(null);
const partnersSection = ref(null);
const certificatesSection = ref(null);
const ctaSection = ref(null);

/* --- COMPUTED PROPERTIES --- */
const certificates = computed(() => [
  {
    name: 'ISO 9001:2015',
    description: t('about.certificates.items.iso9001'),
    image: '/images/iso_9001-2015.png'
  },
  {
    name: 'ISO 14001:2015',
    description: t('about.certificates.items.iso14001'),
    image: '/images/iso_1401.png'
  },
  {
    name: 'OHSAS 18001',
    description: t('about.certificates.items.ohsas18001'),
    image: '/images/ohsas_18001.png'
  }
]);

// Correctly access the array items with computed properties
const serviceItems = computed(() => {
  const rawText = t('about.services.items');
  return rawText
    .split('|')
    .filter((item) => item.trim() !== '')
});

const industryItems = computed(() => {
  const rawText = t('about.industries.items');
  return rawText
    .split('|')
    .filter((item) => item.trim() !== '')
});

const clientItems = computed(() => {
  const rawText = t('about.partners.clients.items');
  return rawText
    .split('|')
    .filter((item) => item.trim() !== '')
});

/* --- HELPER FUNCTIONS --- */
// Function to get appropriate industry icon based on index
const getIndustryIcon = (index) => {
  // Create a factory function that returns a component
  switch (index) {
    case 0: // Oil and gas
      return OilGasIcon;
    case 1: // Energy
      return EnergyIcon;
    case 2: // Chemical
      return ChemicalIcon;
    case 3: // Mining
      return MiningIcon;
    case 4: // Construction
      return ConstructionIcon;
    default:
      return OilGasIcon; // Default icon as fallback
  }
};

/* --- ICON COMPONENTS --- */
const QualityIcon = () =>
  h('svg', { 
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
    h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' })
  ]);

const ReliabilityIcon = () =>
  h('svg', { 
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
    h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
  ]);

const InnovationIcon = () =>
  h('svg', { 
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
    h('circle', { cx: '12', cy: '12', r: '10' }),
    h('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
    h('path', { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' })
  ]);

const MarketKnowledgeIcon = () =>
  h('svg', { 
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
    h('path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' }),
    h('path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' })
  ]);

const FeedbackIcon = () =>
  h('svg', { 
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
    h('path', { d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' })
  ]);

// New icons for added sections as separate components
const ServiceIcon = () =>
  h('svg', { 
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
    h('circle', { cx: '12', cy: '12', r: '10' }),
    h('polyline', { points: '8 12 12 16 16 12' }),
    h('line', { x1: '12', y1: '8', x2: '12', y2: '16' })
  ]);

// Define individual industry icons instead of a dynamic component
const OilGasIcon = () =>
  h('svg', { 
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
    h('path', { d: 'M3 22h18' }),
    h('path', { d: 'M10 10v12' }),
    h('path', { d: 'M14 10v12' }),
    h('path', { d: 'M10 14h4' }),
    h('path', { d: 'M8 2h8l4 8H4l4-8z' })
  ]);

const EnergyIcon = () =>
  h('svg', { 
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
    h('path', { d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' })
  ]);

const ChemicalIcon = () =>
  h('svg', { 
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
    h('path', { d: 'M8 3v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3' }),
    h('path', { d: 'M10 12h4' }),
    h('path', { d: 'M9 8h6' }),
    h('path', { d: 'M10 20v-8a2 2 0 0 1 4 0v8' }),
    h('path', { d: 'M7 20h10' })
  ]);

const MiningIcon = () =>
  h('svg', { 
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
    h('path', { d: 'M14 10a2 2 0 0 1-2 2c-1.9 0-3-1.7-3-3.5S10.1 5 12 5a2 2 0 0 1 2 2' }),
    h('path', { d: 'M12 15v4' }),
    h('path', { d: 'M10 19h4' }),
    h('circle', { cx: '12', cy: '12', r: '10' })
  ]);

const ConstructionIcon = () =>
  h('svg', { 
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
    h('path', { d: 'M2 21v-2a4 4 0 0 1 4-4h14' }),
    h('path', { d: 'M12 7V3h6v4' }),
    h('path', { d: 'M12 7H8a2 2 0 0 0-2 2v4a2 2 0 0 0 4 0v-1' }),
    h('path', { d: 'M16 15V5h2' }),
    h('line', { x1: '16', y1: '11', x2: '22', y2: '11' })
  ]);

/* --- INTERSECTION OBSERVER FOR ANIMATIONS --- */
onMounted(() => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Animate elements within the section
        const animatedElements = entry.target.querySelectorAll('.animated');
        animatedElements.forEach(el => {
          el.style.animationPlayState = 'running';
        });
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});
</script>

<style scoped>
/* --- Your CSS remains the same --- */

/* Hero Section - Professional design with dynamic elements */
.about-hero {
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

.about-hero__content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

.about-hero__title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
  display: inline-block;
}

.about-hero__title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #ff5722 30%, #ff9800 100%);
}

.about-hero__subtitle {
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

.section-title.centered {
  text-align: center;
}

.section-title.centered::after {
  left: 50%;
  transform: translateX(-50%);
}

.section-description {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: #ccc;
}

/* Company Overview Section */
.company-overview {
  background-color: #1e1e1e;
  color: white;
}

.overview-content {
  display: flex;
  gap: 60px;
  align-items: center;
  margin-top: 50px;
}

.overview-text {
  flex: 1;
}

.overview-text p {
  margin-bottom: 30px;
  color: #ccc;
  line-height: 1.7;
  font-size: 1.15rem;
}

.stats-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #ff5722;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1rem;
  color: #ddd;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.overview-image {
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.overview-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Our Mission Section - Redesigned */
.our-mission {
  background-color: #232323;
  color: white;
  position: relative;
}

.our-mission::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/subtle-pattern.png');
  opacity: 0.05;
  pointer-events: none;
}

.mission-content {
  padding: 20px 0;
}

.mission-text {
  max-width: 800px;
  margin: 0 auto 50px;
  text-align: center;
}

.mission-text p {
  color: #ccc;
  line-height: 1.7;
  font-size: 1.15rem;
}

.mission-values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.value-card {
  background-color: rgba(42, 42, 42, 0.6);
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  background-color: rgba(42, 42, 42, 0.8);
  border-color: rgba(255, 87, 34, 0.2);
}

.value-card .value-icon {
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

.value-card:hover .value-icon {
  background-color: rgba(255, 87, 34, 0.25);
  transform: scale(1.1);
}

.value-card .value-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid rgba(255, 87, 34, 0.3);
  top: 0;
  left: 0;
  animation: pulse 2s infinite;
}

.value-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: white;
}

.value-card p {
  color: #ccc;
  line-height: 1.6;
}

/* Services Section */
.services {
  background-color: #1e1e1e;
  color: white;
  position: relative;
}

.services::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(30deg, rgba(255, 87, 34, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(255, 87, 34, 0.03) 87.5%, rgba(255, 87, 34, 0.03)),
                    linear-gradient(150deg, rgba(255, 87, 34, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(255, 87, 34, 0.03) 87.5%, rgba(255, 87, 34, 0.03));
  background-size: 60px 60px;
  opacity: 0.3;
  pointer-events: none;
}

.services-list {
  max-width: 900px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-item {
  display: flex;
  align-items: center;
  background-color: rgba(42, 42, 42, 0.6);
  border-radius: 8px;
  padding: 20px 30px;
  transition: all 0.3s ease;
  border-left: 4px solid #ff5722;
  animation-delay: calc(0.1s * var(--i));
}

.service-item:hover {
  transform: translateX(10px);
  background-color: rgba(42, 42, 42, 0.8);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.service-icon {
  min-width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff5722;
  margin-right: 20px;
}

.service-text {
  font-size: 1.1rem;
  color: #eee;
  line-height: 1.6;
}

/* Industries Section */
.industries {
  background-color: #232323;
  color: white;
  position: relative;
}

.industries::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(255, 87, 34, 0.1) 2px, transparent 2px);
  background-size: 30px 30px;
  opacity: 0.2;
  pointer-events: none;
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.industry-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 20px;
  background-color: rgba(42, 42, 42, 0.6);
  border-radius: 8px;
  transition: all 0.3s ease;
  border-top: 3px solid transparent;
  animation-delay: calc(0.1s * var(--i));
}

.industry-item:hover {
  transform: translateY(-10px);
  border-top-color: #ff5722;
  background-color: rgba(42, 42, 42, 0.8);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.industry-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 87, 34, 0.1);
  border-radius: 50%;
  color: #ff5722;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.industry-item:hover .industry-icon {
  background-color: rgba(255, 87, 34, 0.2);
  transform: scale(1.1);
}

.industry-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
}

/* Partners Section */
.partners {
  background-color: #1e1e1e;
  color: white;
}

.partners-content {
  display: flex;
  gap: 60px;
  margin-top: 40px;
}

.clients-section, .suppliers-section {
  flex: 1;
}

.subsection-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
  position: relative;
  padding-bottom: 10px;
}

.subsection-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: #ff5722;
}

.client-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.client-item {
  position: relative;
  padding: 15px 0 15px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.1rem;
  color: #ddd;
  transition: all 0.3s ease;
  animation-delay: calc(0.1s * var(--i));
}

.client-item:hover {
  color: #ff5722;
  padding-left: 35px;
}

.client-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: #ff5722;
  border-radius: 50%;
}

.suppliers-text {
  color: #ccc;
  line-height: 1.7;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.supplier-logos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.supplier-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  height: 100px;
  transition: all 0.3s ease;
}

.supplier-logo:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px);
}

.placeholder-logo {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* Certificates Section */
.certificates {
  background-color: #232323;
  color: white;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.certificate-item {
  background-color: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certificate-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.certificate-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
}

.certificate-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.certificate-info {
  padding: 20px;
}

.certificate-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.certificate-description {
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.5;
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
.about-hero .animated {
  animation-play-state: running !important;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .about-hero__title {
    font-size: 3rem;
  }
  
  .supplier-logos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .overview-content {
    flex-direction: column;
    gap: 40px;
  }
  
  .certificates-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .about-hero {
    padding: 120px 0 100px;
  }
  
  .about-hero__title {
    font-size: 2.8rem;
  }
  
  .about-hero__subtitle {
    max-width: 100%;
  }
  
  .mission-values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .partners-content {
    flex-direction: column;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  section {
    padding: 60px 0;
  }
  
  .about-hero {
    padding: 80px 0;
  }
  
  .about-hero__title {
    font-size: 2.5rem;
  }
  
  .about-hero__subtitle {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .stats-container {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .stat-item {
    width: 45%;
    margin-bottom: 20px;
  }
  
  .particle-1, .particle-5 {
    opacity: 0.3;
  }
  
  .industries-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .about-hero {
    padding: 70px 0 60px;
  }
  
  .about-hero__title {
    font-size: 2rem;
  }
  
  .about-hero__title::after {
    width: 60px;
    bottom: -10px;
  }
  
  .about-hero__subtitle {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .certificates-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-item {
    width: 100%;
  }
  
  .mission-values-grid {
    grid-template-columns: 1fr;
  }
  
  .value-card {
    padding: 25px 20px;
  }
  
  .btn {
    width: 100%;
  }
  
  .particle-2, .particle-4, .particle-6 {
    opacity: 0.2;
  }
  
  .industries-grid {
    grid-template-columns: 1fr;
  }
  
  .supplier-logos {
    grid-template-columns: 1fr;
  }
}

</style>