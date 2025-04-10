<!-- src/components/Header.vue -->
<template>
    <header class="header">
      <div class="container">
        <div class="header__content">
          <!-- Logo -->
          <div class="header__logo">
            <router-link to="/">
              <img src="/Logo.svg" alt="ARG Trading" class="logo-img" />
            </router-link>
            <p class="company-description" v-if="!isMobileOrTablet">
              {{ t('header.companyDescription') }}
            </p>
          </div>
  
          <!-- Navigation for desktop -->
          <nav class="header__nav" v-if="!isMobileOrTablet">
            <ul class="nav-list">
              <li class="nav-item">
                <router-link to="/catalog" class="nav-link">{{ t('header.catalog') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">{{ t('header.about') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/delivery" class="nav-link">{{ t('header.delivery') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contacts" class="nav-link">{{ t('header.contacts') }}</router-link>
              </li>
            </ul>
          </nav>
  
          <!-- Right side controls for mobile/tablet -->
          <div class="header__controls" v-if="isMobileOrTablet">
            <!-- Language switcher for desktop -->
            <div class="language-switcher" v-if="!isMobileOrTablet" @click="toggleLanguageMenu">
              <div class="current-language">
                {{ currentLocale.toUpperCase() }}
                <span class="language-arrow"></span>
              </div>
              <div class="language-dropdown" v-show="languageMenuOpen">
                <div 
                  v-for="locale in availableLocales" 
                  :key="locale"
                  class="language-option"
                  :class="{ 'active': locale === currentLocale }"
                  @click="changeLanguage(locale)"
                >
                  {{ locale.toUpperCase() }}
                </div>
              </div>
            </div>
  
            <!-- Mobile menu button -->
            <div 
              class="mobile-menu-toggle" 
              :class="{ 'active': mobileMenuOpen }" 
              @click="toggleMobileMenu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
  
          <!-- Language switcher for desktop -->
          <div class="language-switcher" v-if="!isMobileOrTablet" @click="toggleLanguageMenu">
            <div class="current-language">
              {{ currentLocale.toUpperCase() }}
              <span class="language-arrow"></span>
            </div>
            <div class="language-dropdown" v-show="languageMenuOpen">
              <div 
                v-for="locale in availableLocales" 
                :key="locale"
                class="language-option"
                :class="{ 'active': locale === currentLocale }"
                @click="changeLanguage(locale)"
              >
                {{ locale.toUpperCase() }}
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Mobile menu dropdown -->
      <div class="mobile-menu" :class="{ 'mobile-open': mobileMenuOpen }">
        <nav class="mobile-nav">
          <ul class="mobile-nav-list">
            <li class="mobile-nav-item">
              <router-link to="/catalog" class="mobile-nav-link" @click="closeMobileMenu">
                {{ t('header.catalog') }}
              </router-link>
            </li>
            <li class="mobile-nav-item">
              <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">
                {{ t('header.about') }}
              </router-link>
            </li>
            <li class="mobile-nav-item">
              <router-link to="/delivery" class="mobile-nav-link" @click="closeMobileMenu">
                {{ t('header.delivery') }}
              </router-link>
            </li>
            <li class="mobile-nav-item">
              <router-link to="/contacts" class="mobile-nav-link" @click="closeMobileMenu">
                {{ t('header.contacts') }}
              </router-link>
            </li>
            <li class="mobile-nav-item language-item">
              <span class="mobile-nav-label">{{ t('header.language') }}</span>
              <div class="mobile-language-options">
                <button 
                  v-for="locale in availableLocales" 
                  :key="locale"
                  class="mobile-language-btn"
                  :class="{ 'active': locale === currentLocale }"
                  @click="changeLanguage(locale)"
                >
                  {{ locale.toUpperCase() }}
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  // i18n setup
  const { t, locale } = useI18n();
  
  // Available languages
  const availableLocales = ['en', 'ru'];
  const currentLocale = computed(() => locale.value);
  
  // Mobile menu state
  const mobileMenuOpen = ref(false);
  const languageMenuOpen = ref(false);
  const windowWidth = ref(window.innerWidth);
  const isMobile = computed(() => windowWidth.value < 768);
  const isTablet = computed(() => windowWidth.value >= 768 && windowWidth.value < 992);
  const isMobileOrTablet = computed(() => windowWidth.value < 992);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    // Close language menu if open
    if (mobileMenuOpen.value) {
      languageMenuOpen.value = false;
    }
  };
  
  // Close mobile menu
  const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
  };
  
  // Toggle language menu
  const toggleLanguageMenu = (event) => {
    event.stopPropagation();
    languageMenuOpen.value = !languageMenuOpen.value;
  };
  
  // Change language
  const changeLanguage = (newLocale) => {
    locale.value = newLocale;
    languageMenuOpen.value = false;
  };
  
  // Close dropdowns when clicking outside
  const closeDropdowns = (event) => {
    // Don't close if clicking inside language switcher
    if (!event.target.closest('.language-switcher') && 
        !event.target.closest('.mobile-language-options')) {
      languageMenuOpen.value = false;
    }
    
    // Don't close mobile menu if clicking inside mobile menu or toggle
    if (!event.target.closest('.mobile-menu') && 
        !event.target.closest('.mobile-menu-toggle') && 
        mobileMenuOpen.value) {
      closeMobileMenu();
    }
  };
  
  // Handle window resize
  const handleResize = () => {
    windowWidth.value = window.innerWidth;
    if (!isMobileOrTablet.value) {
      mobileMenuOpen.value = false;
    }
  };
  
  // Handle escape key to close menus
  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      languageMenuOpen.value = false;
      mobileMenuOpen.value = false;
    }
  };
  
  // Prevent body scrolling when mobile menu is open
  const toggleBodyScroll = () => {
    if (mobileMenuOpen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  // Watch for changes to mobileMenuOpen
  const watchMobileMenu = () => {
    toggleBodyScroll();
  };
  
  // Lifecycle hooks
  onMounted(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', closeDropdowns);
    document.addEventListener('keydown', handleEscKey);
    watchMobileMenu();
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('click', closeDropdowns);
    document.removeEventListener('keydown', handleEscKey);
    document.body.style.overflow = '';
  });
  </script>
  
  <style scoped>
  .header {
    background-color: #222;
    color: white;
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  /* Logo styles */
  .header__logo {
    display: flex;
    align-items: center;
  }
  
  .header__logo a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
  }
  
  .logo-img {
    height: 50px;
    margin-right: 10px;
    transition: transform 0.3s ease;
  }
  
  .logo-text {
    display: flex;
    flex-direction: column;
  }
  
  .logo-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    color: #fff;
    opacity: 0.8;
  }
  
  .company-description {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    margin-left: 20px;
    max-width: 300px;
    color: #ccc;
    font-weight: 400;
  }
  
  /* Header controls (right side for mobile) */
  .header__controls {
    display: flex;
    align-items: center;
  }
  
  /* Navigation styles */
  .header__nav {
    margin-left: auto;
    margin-right: 20px;
  }
  
  .nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    margin: 0 15px;
  }
  
  .nav-link {
    font-family: 'Montserrat', sans-serif;
    color: white;
    text-decoration: none;
    font-size: 16px;
    position: relative;
    transition: color 0.3s ease;
    font-weight: 500;
  }
  
  .nav-link:hover {
    color: #ff5722;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #ff5722;
    transition: width 0.3s ease;
  }
  
  .nav-link:hover::after,
  .router-link-active::after {
    width: 100%;
  }
  
  .router-link-active {
    color: #ff5722;
  }
  
  /* Language switcher styles */
  .language-switcher {
    position: relative;
    cursor: pointer;
    z-index: 10;
  }
  
  .current-language {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    transition: background-color 0.3s ease;
  }
  
  .current-language:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .language-arrow {
    display: inline-block;
    margin-left: 5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
    transition: transform 0.3s ease;
  }
  
  .language-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 5px;
    background-color: #333;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    animation: fadeIn 0.2s ease-out;
  }
  
  .language-option {
    padding: 8px 20px;
    white-space: nowrap;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    transition: background-color 0.2s ease;
  }
  
  .language-option:hover {
    background-color: #444;
  }
  
  .language-option.active {
    background-color: #ff5722;
    color: white;
  }
  
  /* Mobile menu toggle */
  .mobile-menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    cursor: pointer;
    margin-left: 15px;
    z-index: 1001;
  }
  
  .mobile-menu-toggle span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 3px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .mobile-menu-toggle.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  
  .mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-toggle.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
  
  /* Mobile menu dropdown */
  .mobile-menu {
    position: fixed;
    top: 70px;
    right: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #222;
    transition: right 0.3s ease;
    z-index: 1000;
    overflow-y: auto;
  }
  
  .mobile-menu.mobile-open {
    right: 0;
  }
  
  .mobile-nav {
    padding: 20px;
  }
  
  .mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .mobile-nav-item {
    margin: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 20px;
  }
  
  .mobile-nav-link {
    font-family: 'Montserrat', sans-serif;
    color: white;
    text-decoration: none;
    font-size: 18px;
    display: block;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .mobile-nav-link:hover,
  .mobile-nav-link.router-link-active {
    color: #ff5722;
  }
  
  .language-item {
    display: flex;
    flex-direction: column;
  }
  
  .mobile-nav-label {
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }
  
  .mobile-language-options {
    display: flex;
    gap: 10px;
  }
  
  .mobile-language-btn {
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 8px 15px;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .mobile-language-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .mobile-language-btn.active {
    background-color: #ff5722;
    border-color: #ff5722;
  }
  
  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .header__logo:hover .logo-img {
    transform: scale(1.05);
  }
  
  /* Responsive styles */
  @media (max-width: 992px) {
    .company-description {
      display: none;
    }
    
    .header__content {
      justify-content: space-between;
    }
    
    .header__logo {
      flex: 1;
    }
  }
</style>