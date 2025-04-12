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

    <!-- Our Mission Section - Redesigned -->
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
          <div class="certificate-item animated fade-in-up" style="--i: 2;" v-for="(certificate, index) in certificates" :key="index">
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
import { ref, onMounted, h } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Section refs for animation
const overviewSection = ref(null);
const missionSection = ref(null);
const certificatesSection = ref(null);
const ctaSection = ref(null);

// Initialize intersection observer for scroll animations
onMounted(() => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class to the section
        entry.target.classList.add('visible');
        
        // Find and animate all elements with animation classes
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

// Values icons
const QualityIcon = () => h('svg', { 
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

const ReliabilityIcon = () => h('svg', { 
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

const InnovationIcon = () => h('svg', { 
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


// Certificates data
const certificates = [
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
];
</script>

<style scoped>
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

/* Our Team Section */
.our-team {
  background-color: #1e1e1e;
  color: white;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.team-member {
  background-color: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.team-member__photo {
  height: 300px;
  overflow: hidden;
}

.team-member__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-member:hover .team-member__photo img {
  transform: scale(1.05);
}

.team-member__info {
  padding: 20px;
  text-align: center;
}

.team-member__name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.team-member__position {
  font-size: 0.9rem;
  color: #ccc;
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
}
</style>