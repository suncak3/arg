<!-- src/views/ContactView.vue -->
<template>
    <div class="contacts">
      <!-- Hero Section with professional background -->
      <section class="contacts-hero">
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
          <div class="contacts-hero__content">
            <h1 class="contacts-hero__title animated fade-in-up">{{ t('contacts.pageTitle') }}</h1>
            <p class="contacts-hero__subtitle animated fade-in-up delay-1">{{ t('contacts.pageSubtitle') }}</p>
          </div>
        </div>
      </section>
  
      <!-- Contact Information Section -->
      <section class="contact-info" ref="contactInfoSection">
        <div class="container">
          <div class="info-grid">
            <div class="contact-card animated fade-in-up" v-for="(item, index) in contactInfoItems" :key="index" :style="{'--i': index + 2}">
              <div class="contact-icon">
                <component :is="item.icon" />
              </div>
              <h3 class="contact-title">{{ item.title }}</h3>
              <p class="contact-value">{{ item.value }}</p>
              <a v-if="item.link" :href="item.link" class="contact-link">{{ item.linkText }}</a>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Contact Form Section -->
      <section class="contact-form-section" ref="contactFormSection">
        <div class="container">
          <div class="form-container">
            <div class="form-header">
              <h2 class="section-title animated fade-in-up">{{ t('contacts.form.title') }}</h2>
              <p class="section-description animated fade-in-up delay-1">{{ t('contacts.form.description') }}</p>
            </div>
            
            <form class="contact-form animated fade-in-up delay-2" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">{{ t('contacts.form.nameLabel') }}</label>
                <input type="text" id="name" v-model="formData.name" :placeholder="t('contacts.form.namePlaceholder')" required>
              </div>
  
              <div class="form-group">
                <label for="company">{{ t('contacts.form.companyLabel') }}</label>
                <input type="text" id="company" v-model="formData.company" :placeholder="t('contacts.form.companyPlaceholder')">
              </div>
  
              <div class="form-group">
                <label for="email">{{ t('contacts.form.emailLabel') }}</label>
                <input type="email" id="email" v-model="formData.email" :placeholder="t('contacts.form.emailPlaceholder')" required>
              </div>
  
              <div class="form-group">
                <label for="phone">{{ t('contacts.form.phoneLabel') }}</label>
                <input type="tel" id="phone" v-model="formData.phone" :placeholder="t('contacts.form.phonePlaceholder')">
              </div>
  
              <div class="form-group full-width">
                <label for="topic">{{ t('contacts.form.topicLabel') }}</label>
                <select id="topic" v-model="formData.topic" required>
                  <option value="" disabled selected>{{ t('contacts.form.topicPlaceholder') }}</option>
                  <option v-for="(option, index) in topicOptions" :key="index" :value="option.value">{{ option.label }}</option>
                </select>
              </div>
  
              <div class="form-group full-width">
                <label for="message">{{ t('contacts.form.messageLabel') }}</label>
                <textarea id="message" v-model="formData.message" :placeholder="t('contacts.form.messagePlaceholder')" rows="5" required></textarea>
              </div>
  
              <div class="form-actions">
                <button type="submit" class="btn btn-primary btn-large" :disabled="isSubmitting">
                  <span v-if="isSubmitting">{{ t('contacts.form.submitting') }}</span>
                  <span v-else>{{ t('contacts.form.submitButton') }}</span>
                </button>
              </div>
              
              <div v-if="formMessage" class="form-message" :class="{'success': formSuccess, 'error': !formSuccess}">
                {{ formMessage }}
              </div>
            </form>
          </div>
        </div>
      </section>
  
      <!-- Map Section -->
      <section class="map-section" ref="mapSection">
        <div class="map-container">
          <div class="map-overlay">
            <div class="container">
              <div class="map-card animated fade-in-right">
                <h3 class="map-card-title">{{ t('contacts.officeLocation.title') }}</h3>
                <div class="map-card-content">
                  <p class="address">{{ t('contacts.officeLocation.address') }}</p>
                  <p class="directions">{{ t('contacts.officeLocation.directions') }}</p>
                  <div class="working-hours">
                    <h4>{{ t('contacts.officeLocation.hoursTitle') }}</h4>
                    <p>{{ t('contacts.officeLocation.hours') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="map-placeholder">
            <!-- This would be replaced with an actual map implementation -->
            <div class="map-iframe-container">
              <iframe 
                src="https://www.google.com/maps?q=г.+Астана,+ул.+Сыганак+60/2&output=embed" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Call To Action -->
      <section class="cta" ref="ctaSection">
        <div class="container">
          <div class="cta__content animated fade-in-up">
            <h2 class="cta__title">{{ t('contacts.cta.title') }}</h2>
            <p class="cta__text">{{ t('contacts.cta.text') }}</p>
            <a href="#" class="btn btn-primary btn-large" @click.prevent="scrollToForm">{{ t('contacts.cta.button') }}</a>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, h } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const { t, locale } = useI18n();
  
  // Section refs for animation and scrolling
  const contactInfoSection = ref(null);
  const contactFormSection = ref(null);
  const mapSection = ref(null);
  const ctaSection = ref(null);
  
  // Form data
  const formData = ref({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  });
  
  const isSubmitting = ref(false);
  const formMessage = ref('');
  const formSuccess = ref(false);
  
  // Scroll to form function for CTA button
  const scrollToForm = () => {
    contactFormSection.value.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  // Form submission handler
  const submitForm = async () => {
    isSubmitting.value = true;
    formMessage.value = '';
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      formMessage.value = t('contacts.form.successMessage');
      formSuccess.value = true;
      
      // Reset the form
      formData.value = {
        name: '',
        company: '',
        email: '',
        phone: '',
        topic: '',
        message: ''
      };
      
    } catch (error) {
      // Handle error
      formMessage.value = t('contacts.form.errorMessage');
      formSuccess.value = false;
    } finally {
      isSubmitting.value = false;
    }
  };
  
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
  
  // Icons Components
  const PhoneIcon = () => h('svg', { 
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
    h('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
  ]);
  
  const EmailIcon = () => h('svg', { 
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
    h('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
    h('polyline', { points: '22,6 12,13 2,6' })
  ]);
  
  const LocationIcon = () => h('svg', { 
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
    h('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
    h('circle', { cx: '12', cy: '10', r: '3' })
  ]);
  
  const ClockIcon = () => h('svg', { 
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
    h('polyline', { points: '12 6 12 12 16 14' })
  ]);
  
  // Contact information
  const contactInfoItems = computed(() => [
    {
      icon: PhoneIcon,
      title: t('contacts.info.phone.title'),
      value: "+7 (708) 103 48 23",
      link: "tel:+7 (708) 103 48 23",
      linkText: t('contacts.info.phone.callUs')
    },
    {
      icon: EmailIcon,
      title: t('contacts.info.email.title'),
      value: "info@argcorp.net",
      link: "info@argcorp.net",
      linkText: t('contacts.info.email.writeUs')
    },
    {
      icon: LocationIcon,
      title: t('contacts.info.address.title'),
      value: t('contacts.info.address.value'),
      link: "https://maps.google.com",
      linkText: t('contacts.info.address.getDirections')
    },
    {
      icon: ClockIcon,
      title: t('contacts.info.hours.title'),
      value: t('contacts.info.hours.value')
    }
  ]);
  
  // Topic options for form select
  const topicOptions = computed(() => [
    { value: 'product', label: t('contacts.form.topics.product') },
    { value: 'service', label: t('contacts.form.topics.service') },
    { value: 'quote', label: t('contacts.form.topics.quote') },
    { value: 'partnership', label: t('contacts.form.topics.partnership') },
    { value: 'other', label: t('contacts.form.topics.other') }
  ]);
  </script>
  
  <style scoped>
  /* Hero Section - Professional design with dynamic elements */
  .contacts-hero {
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
  
  .contacts-hero__content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  
  .contacts-hero__title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    position: relative;
    display: inline-block;
  }
  
  .contacts-hero__title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #ff5722 30%, #ff9800 100%);
  }
  
  .contacts-hero__subtitle {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    opacity: 0.9;
    max-width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
  }
  
  /* Contact Info Section */
  .contact-info {
    background-color: #1e1e1e;
    color: white;
    padding: 80px 0;
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  
  .contact-card {
    background-color: #2a2a2a;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contact-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .contact-icon {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 87, 34, 0.15);
    border-radius: 50%;
    color: #ff5722;
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }
  
  .contact-card:hover .contact-icon {
    background-color: rgba(255, 87, 34, 0.25);
    transform: scale(1.1);
  }
  
  .contact-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .contact-value {
    color: #ccc;
    margin-bottom: 15px;
    line-height: 1.6;
  }
  
  .contact-link {
    color: #ff5722;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    margin-top: auto;
  }
  
  .contact-link:hover {
    color: #ff9800;
    text-decoration: underline;
  }
  
  /* Contact Form Section */
  .contact-form-section {
    background-color: #232323;
    color: white;
    padding: 100px 0;
  }
  
  .form-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .form-header {
    margin-bottom: 40px;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 15px;
    color: white;
    text-align: center;
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
    margin-bottom: 1rem;
    color: #ccc;
    line-height: 1.7;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    background-color: #2a2a2a;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-group.full-width {
    grid-column: span 2;
  }
  
  label {
    margin-bottom: 8px;
    font-weight: 500;
    color: #ddd;
  }
  
  input, select, textarea {
    padding: 12px 15px;
    border: 1px solid #444;
    border-radius: 5px;
    background-color: #333;
    color: white;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  input:focus, select:focus, textarea:focus {
    border-color: #ff5722;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.2);
  }
  
  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 16px;
    padding-right: 45px;
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
  
  .form-actions {
    grid-column: span 2;
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  
  .form-message {
    grid-column: span 2;
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    font-weight: 500;
  }
  
  .form-message.success {
    background-color: rgba(76, 175, 80, 0.2);
    color: #4CAF50;
    border: 1px solid rgba(76, 175, 80, 0.3);
  }
  
  .form-message.error {
    background-color: rgba(244, 67, 54, 0.2);
    color: #F44336;
    border: 1px solid rgba(244, 67, 54, 0.3);
  }
  
  /* Map Section */
  .map-section {
    background-color: #1e1e1e;
    color: white;
    position: relative;
  }
  
  .map-container {
    position: relative;
    height: 500px;
  }
  
  .map-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  
  .map-iframe-container {
    width: 100%;
    height: 100%;
  }
  
  .map-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    pointer-events: none;
  }
  
  .map-card {
    background-color: rgba(26, 26, 26, 0.9);
    border-radius: 10px;
    padding: 30px;
    width: 350px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    pointer-events: auto;
    border-left: 4px solid #ff5722;
  }
  
  .map-card-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: white;
  }
  
  .map-card-content {
    color: #ddd;
  }
  
  .address {
    margin-bottom: 15px;
    line-height: 1.6;
  }
  
  .directions {
    margin-bottom: 20px;
    color: #bbb;
    font-size: 0.95rem;
  }
  
  .working-hours h4 {
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: white;
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
    border: none;
  }
  
  .btn-primary {
    background-color: #ff5722;
    color: white;
  }
  
  .btn-primary:hover {
    background-color: #e64a19;
    transform: translateY(-2px);
  }
  
  .btn-primary:disabled {
    background-color: #aaa;
    transform: none;
    cursor: not-allowed;
  }
  
  .btn-large {
    padding: 15px 35px;
    font-size: 1.1rem;
  }
  
  /* Container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
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
  .contacts-hero .animated {
    animation-play-state: running !important;
  }
  
  /* Responsive Styles */
  @media (max-width: 1200px) {
    .info-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
  
  @media (max-width: 992px) {
    .contacts-hero {
      padding: 120px 0 100px;
    }
    
    .contacts-hero__title {
      font-size: 2.8rem;
    }
    
    .contacts-hero__subtitle {
      max-width: 100%;
    }
    
    .section-title {
      font-size: 2.2rem;
    }
    
    .map-container {
      height: 400px;
    }
    
    .map-card {
      width: 300px;
      display: none !important;
    }
  }
  
  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }
    
    .contacts-hero {
      padding: 80px 0;
    }
    
    .contacts-hero__title {
      font-size: 2.5rem;
    }
    
    .contacts-hero__subtitle {
      font-size: 1.1rem;
    }
    
    .info-grid {
      grid-template-columns: 1fr;
    }
    
    .contact-form {
      grid-template-columns: 1fr;
      padding: 25px;
    }
    
    .form-group.full-width {
      grid-column: span 1;
    }
    
    .form-actions {
      grid-column: span 1;
    }
    
    .form-message {
      grid-column: span 1;
    }
    
    .map-card {
      width: 100%;
      margin: 20px;
    }
    
    .particle-1, .particle-5 {
      opacity: 0.3;
    }
  }
  
  @media (max-width: 576px) {
    .contacts-hero {
      padding: 70px 0 60px;
    }
    
    .contacts-hero__title {
      font-size: 2rem;
    }
    
    .contacts-hero__title::after {
      width: 60px;
      bottom: -10px;
    }
    
    .contacts-hero__subtitle {
      font-size: 1rem;
    }
    
    .contact-card {
      padding: 20px;
    }
    
    .map-container {
      height: 350px;
    }
    
    .btn {
      width: 100%;
    }
    
    .particle-2, .particle-4, .particle-6 {
      opacity: 0.2;
    }
  }
  </style>