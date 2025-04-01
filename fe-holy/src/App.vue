<template>
  <div class="container">
    <header class="header">
      <h1 class="site-title">Holy Fest</h1>
      <nav class="main-nav">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/organizaciones" class="nav-link">Organizaciones</router-link>
        <!-- <router-link to="/eventos" class="nav-link">Eventos</router-link> -->
      </nav>
    </header>
    <main class="main-content">
      <router-view></router-view>
    </main>
    <footer class="site-footer">
      &copy; 2025 LTD - Todos los derechos reservados
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

.site-title {
  margin: 0;
  color: #5b21b6;
  /* Color morado para mantener coherencia con la página de inicio */
  font-size: 2rem;
}

.main-nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #f0f0f0;
}

.nav-link.router-link-active {
  color: #5b21b6;
  border-bottom: 2px solid #5b21b6;
}

.main-content {
  min-height: 70vh;
}

.site-footer {
  margin-top: 30px;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #ddd;
  color: #666;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    text-align: center;
  }

  .main-nav {
    margin-top: 15px;
  }
}
</style>