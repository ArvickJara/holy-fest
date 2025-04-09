<template>
    <header class="site-header">
        <div class="header-container">
            <!-- Logo con enlace a inicio -->
            <router-link to="/" class="logo-container">
                <img src="/logo-semana-santa.webp" alt="Logo de la semana santa" class="logo"/>
            </router-link>

            <!-- Botón de menú móvil -->
            <button class="mobile-menu-button" @click="toggleMenu" aria-label="Menú principal"
                :aria-expanded="menuOpen">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>

            <!-- Navegación principal -->
            <nav class="main-nav" :class="{ 'open': menuOpen }">
                <router-link to="/" class="nav-link" @click="closeMenu">Inicio</router-link>
                <router-link to="/semanas" class="nav-link" @click="closeMenu">Semana</router-link>
                <!-- <router-link to="/eventos" class="nav-link" @click="closeMenu">Eventos</router-link> -->
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            menuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
            // Bloquear scroll cuando el menú está abierto en móvil
            document.body.style.overflow = this.menuOpen ? 'hidden' : '';
        },
        closeMenu() {
            if (this.menuOpen) {
                this.menuOpen = false;
                document.body.style.overflow = '';
            }
        }
    },
    mounted() {
        // Cerrar menú al cambiar el tamaño de la ventana
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.menuOpen) {
                this.closeMenu();
            }
        });
    },
    beforeUnmount() {
        // Limpiar event listener
        window.removeEventListener('resize', this.closeMenu);
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;500;600&display=swap');

@font-face {
    font-family: 'lostaMasta';
    src: url('/fonts/lostamasta.woff2') format('woff2'),
        url('/fonts/lostamasta.woff') format('woff'),
        url('/fonts/lostamasta.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

.site-header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    /* Centrar horizontalmente */
    height: 70px;
    width: auto;
    /* Cambiado a auto para que se ajuste al contenido */
    max-width: 220px;
    /* Establecer un ancho máximo */
}

.logo {
    max-width: 100%;
    /* Asegurar que no se desborde */
    height: auto;
    max-height: 65px;
    object-fit: contain;
    display: block;
    /* Eliminar espacio adicional debajo de la imagen */
}

.main-nav {
    display: flex;
    gap: 25px;
}

.nav-link {
    color: #4a4a4a;
    text-decoration: none;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 0.3s ease;
    position: relative;
    font-family: 'lostaMasta', 'Playfair Display', serif;
    /* Añadido */
    font-size: 1.2rem;
    /* Ajustar tamaño para la nueva fuente */
    letter-spacing: 0.02em;
    /* Mejorar legibilidad */
}

.nav-link:hover {
    color: #8C40AC;
}

/* Indicador de enlace activo */
.router-link-active {
    color: #8C40AC;
    font-weight: 700;
    /* Agregado para poner en negrita */
}

.router-link-active::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;


    border-radius: 1px;
}

/* Botón de menú móvil */
.mobile-menu-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 110;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px 0;
    background-color: #4a4a4a;
    border-radius: 3px;
    transition: all 0.3s ease;
}

/* Estilos responsivos */
@media (max-width: 768px) {

    .header-container {
        padding: 0 15px;
        height: 80px;
    }

    .logo-container {
        height: 60px;
        max-width: 180px;
    }

    .logo {
        max-height: 55px;
    }

    .mobile-menu-button {
        display: block;
    }

    .main-nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 300px;
        height: 100vh;
        background-color: #f3f1f3;
        flex-direction: column;
        padding: 80px 30px 30px;
        transition: all 0.3s ease;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        z-index: 100;
    }

    .main-nav.open {
        right: 0;
    }

    .nav-link {
        padding: 15px 0;
        font-size: 1.3rem;
        /* Ligeramente más grande en móvil */
        border-bottom: 1px solid #eee;
        width: 100%;
    }

    /* Animación del botón hamburguesa */
    .open .bar:nth-child(1) {
        transform: rotate(45deg) translate(5px, 6px);
    }

    .open .bar:nth-child(2) {
        opacity: 0;
    }

    .open .bar:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -8px);
    }
}

@media (max-width: 480px) {
    .logo {
        width: 120px;
    }

    .header-container {
        height: 60px;
    }

    .header-container {
        padding: 0 10px;
        height: 70px;
    }

    .logo-container {
        height: 50px;
        max-width: 140px;
    }

    .logo {
        max-height: 45px;
    }
}
</style>