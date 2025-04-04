<template>
  <Navbar />
  <div class="container">
    <main class="main-content">
      <router-view></router-view>
    </main>
    <footer class="site-footer">
      &copy; 2025 LTD | Dircetur Huánuco - Todos los derechos reservados
    </footer>
  </div>
</template>

<script setup>

import Navbar from './components/Navbar.vue';

</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.main-content {
  min-height: 70vh;
}

.site-footer {
  margin-top: 80px;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #ddd;
  color: #666;
}
</style>