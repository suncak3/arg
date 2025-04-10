<!-- src/App.vue -->
<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <!-- Footer will be added later -->
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>