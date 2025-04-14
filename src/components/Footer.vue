<!-- src/components/Footer.vue -->
<template>
    <footer class="footer">
      <div class="container">
        <div class="footer__top">
          <!-- Footer Logo -->
          <div class="footer__logo">
            <p class="footer__company-name">ARG Trading and Co.</p>
            <p class="footer__company-desc">{{ t('header.companyDescription') }}</p>
  
            <!-- Social Media Links -->
            <div class="footer__social">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
  
          <div class="footer__content">
            <!-- Footer Columns -->
            <div class="footer__columns">
              <!-- Catalog Column -->
              <div class="footer__column">
                <h3 class="footer__title">{{ t('footer.catalog') }}</h3>
                <ul class="footer__list">
                  <li class="footer__item">
                    <span class="footer__link">{{ t('footer.products') }}</span>
                  </li>
                  <li class="footer__item">
                    <span class="footer__link">{{ t('footer.brands') }}</span>
                  </li>
                </ul>
              </div>
  
              <!-- For Buyers Column -->
              <div class="footer__column">
                <h3 class="footer__title">{{ t('footer.forBuyers') }}</h3>
                <ul class="footer__list">
                  <li class="footer__item">
                    <span class="footer__link">{{ t('footer.deliveryPayment') }}</span>
                  </li>
                  <li class="footer__item">
                    <span class="footer__link">{{ t('footer.warranty') }}</span>
                  </li>
                </ul>
              </div>
  
              <!-- Company Column -->
              <div class="footer__column">
                <h3 class="footer__title">{{ t('footer.company') }}</h3>
                <ul class="footer__list">
                  <li class="footer__item">
                    <span class="footer__link">{{ t('footer.aboutCompany') }}</span>
                  </li>
                  <li class="footer__item">
                    <span class="footer__link">{{ t('footer.certificates') }}</span>
                  </li>
                </ul>
              </div>
  
              <!-- Contacts Column -->
              <div class="footer__column">
                <h3 class="footer__title">{{ t('footer.contacts') }}</h3>
                <ul class="footer__list contact-list">
                  <li class="footer__item contact-item">
                    <div class="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span class="contact-link">+7 (708) 103 48 23</span>
                  </li>
                  <li class="footer__item contact-item">
                    <div class="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <a href="mailto:info@argcorp.net" class="contact-link">info@argcorp.net</a>
                  </li>
                  <li class="footer__item contact-item">
                    <div class="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span class="contact-text">г.Астана, ул. Сыганак 60/2</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Footer Bottom -->
        <div class="footer__bottom">
          <div class="footer__copyright">
            {{ currentYear }} © ARG
          </div>
          <div class="footer__tagline">
            {{ t('footer.tagline') }}
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  // i18n setup
  const { t } = useI18n();
  
  // Current year for copyright
  const currentYear = computed(() => new Date().getFullYear());
  </script>
  
  <style scoped>
  .footer {
    background-color: #222;
    color: #fff;
    padding: 60px 0 20px;
    margin-top: auto;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    gap: 50px;
  }
  
  .footer__logo {
    flex: 0 0 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .footer-logo-img {
    height: 60px;
    margin-bottom: 15px;
    transition: transform 0.3s ease;
  }
  
  .footer__logo:hover .footer-logo-img {
    transform: scale(1.05);
  }
  
  .footer__company-name {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #ff5722;
    margin-bottom: 10px;
  }
  
  .footer__company-desc {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #ccc;
    margin-bottom: 25px;
    line-height: 1.5;
  }
  
  .footer__social {
    display: flex;
    gap: 15px;
    margin-top: auto;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: #fff;
    transition: all 0.3s ease;
  }
  
  .social-link:hover {
    background-color: #ff5722;
    transform: translateY(-3px);
  }
  
  .footer__content {
    flex: 1;
  }
  
  .footer__columns {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  
  .footer__title {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #fff;
    position: relative;
    padding-bottom: 10px;
  }
  
  .footer__title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 2px;
    background-color: #ff5722;
  }
  
  .footer__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer__item {
    margin-bottom: 12px;
  }
  
  .footer__link {
    font-family: 'Montserrat', sans-serif;
    color: #ccc;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease, transform 0.2s ease;
    display: inline-block;
  }
  
  .footer__link:hover {
    color: #ff5722;
    transform: translateX(5px);
  }
  
  /* Contact styles */
  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .contact-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    margin-right: 12px;
    color: #ff5722;
    transition: background-color 0.3s ease;
  }
  
  .contact-link, .contact-text {
    font-family: 'Montserrat', sans-serif;
    color: #ccc;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
  }
  
  .contact-link:hover {
    color: #ff5722;
  }
  
  .contact-item:hover .contact-icon {
    background-color: rgba(255, 87, 34, 0.2);
  }
  
  /* Footer bottom */
  .footer__bottom {
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer__copyright, .footer__tagline {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #999;
  }
  
  /* Responsive styles */
  @media (max-width: 1200px) {
    .footer__top {
      flex-direction: column;
      gap: 30px;
    }
    
    .footer__logo {
      flex: 0 0 100%;
      max-width: 300px;
    }
    
    .footer__columns {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  @media (max-width: 992px) {
    .footer__columns {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 20px;
    }
  }
  
  @media (max-width: 576px) {
    .footer__columns {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    
    .footer {
      padding: 40px 0 20px;
    }
    
    .footer__bottom {
      flex-direction: column;
      gap: 10px;
      text-align: center;
    }
    
    .footer__copyright {
      order: 2;
    }
    
    .footer__tagline {
      order: 1;
      margin-bottom: 10px;
    }
  }
</style>