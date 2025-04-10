<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>{{ t('home.welcomeTitle') }}</h1>
        <p>{{ t('home.welcomeText') }}</p>
      </div>
    </section>
    <!-- More content will be added later -->
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.hero {
  background-color: #f8f8f8;
  padding: 80px 0;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.hero p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  color: #666;
}
</style>