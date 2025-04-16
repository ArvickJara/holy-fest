<template>
  <Navbar />
  <div class="container">
    <main class="main-content">
      <router-view></router-view>
    </main>
    <!-- <footer class="site-footer">
      &copy; 2025 LTD | Dircetur Huánuco - Todos los derechos reservados
    </footer> -->
  </div>
  <footer class="site-footer">
    <div class="footer-content">
      <!-- Logotipos de colaboradores -->
      <div class="footer-logos">


        <!-- <a href="https://www.visithuanuco.com/" target="_blank" class="logo-link">
          <img src="/Visithuanuco.svg" alt="Visita Huánuco" class="footer-logo">
        </a> -->

        <a href="https://udh.sistemasudh.com/carrera/sistemas-e-informatica" target="_blank" class="logo-link">
          <img src="/Logo SistemasUDHconescudo.png" alt="Sistemas UDH" class="footer-logo logo-destacado">
        </a>
        <!-- <a href="https://www.regionhuanuco.gob.pe/" target="_blank" class="logo-link">
          <img src="/Huanucoparaelmundo.svg" alt="Huánuco para el mundo" class="footer-logo">
        </a> -->
        <a href="https://www.facebook.com/dircetur.huanuco/?locale=es_LA" target="_blank" class="logo-link">
          <img src="/Dircetur_huanuco.svg" alt="Dircetur Huánuco" class="footer-logo logo-destacado">
        </a>
      </div>

      <!-- Información de copyright -->
      <div class="copyright">
        &copy; 2025 LTD | Dircetur Huánuco - Todos los derechos reservados
      </div>
    </div>
  </footer>
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
  background-color: #3C4048;
  color: white;
  padding: 30px 0;
  width: 100%;

}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logos {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 25px;
  overflow-x: auto;
  padding: 10px 0;
  width: 100%;
}

.logo-link {
  display: block;
  transition: opacity 0.3s ease;
}

.logo-link:hover {
  opacity: 0.8;
}

.footer-logo {
  height: 50px;
  /* filter: brightness(0) invert(1); */
  /* Hace que los logos sean blancos */
  object-fit: contain;
}

.copyright {
  font-size: 0.9rem;
  opacity: 0.8;
  text-align: center;
}

.logo-destacado {
  height: 70px;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-logos {
    gap: 20px;
  }

  .footer-logo {
    height: 40px;
  }

  .logo-destacado {
    height: 55px;
  }
}

@media (max-width: 480px) {
  .footer-logos {
    gap: 15px;
    justify-content: center;
    padding-bottom: 15px;
  }

  .footer-logo {
    height: 30px;
    margin-bottom: 0px;
  }

  .logo-destacado {
    height: 50px;
  }
}
</style>