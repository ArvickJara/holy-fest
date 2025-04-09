<template>
    <div class="semanas-container">
        <h1 class="main-title">Días de la Semana Santa</h1>
        <p class="description">
            Selecciona un día para ver los eventos y celebraciones específicas de la Semana Santa en Huánuco.
        </p>

        <div class="dias-grid">
            <!-- Domingo de Ramos -->
            <div class="dia-card" @click="navegarADia('domingo-ramos')">
                <div class="dia-image-container">
                    <img src="/Domingo1.png" alt="Domingo de Ramos" class="dia-image" />
                </div>
            </div>

            <!-- Lunes Santo -->
            <div class="dia-card" @click="navegarADia('lunes-santo')">
                <div class="dia-image-container">
                    <img src="/Lunes.png" alt="Lunes Santo" class="dia-image" />
                </div>
            </div>

            <!-- Martes Santo -->
            <div class="dia-card" @click="navegarADia('martes-santo')">
                <div class="dia-image-container">
                    <img src="/martes.png" alt="Martes Santo" class="dia-image" />
                </div>
            </div>

            <!-- Miércoles Santo -->
            <div class="dia-card" @click="navegarADia('miercoles-santo')">
                <div class="dia-image-container">
                    <img src="/miercoles.png" alt="Miércoles Santo" class="dia-image" />
                </div>
            </div>

            <!-- Jueves Santo -->
            <div class="dia-card" @click="navegarADia('jueves-santo')">
                <div class="dia-image-container">
                    <img src="/jueves.png" alt="Jueves Santo" class="dia-image" />
                </div>
            </div>

            <!-- Viernes Santo -->
            <div class="dia-card" @click="navegarADia('viernes-santo')">
                <div class="dia-image-container">
                    <img src="/viernes.png" alt="Viernes Santo" class="dia-image" />
                </div>
            </div>

            <!-- Sábado Santo -->
            <div class="dia-card" @click="navegarADia('sabado-santo')">
                <div class="dia-image-container">
                    <img src="/sabado.png" alt="Sábado Santo" class="dia-image" />
                </div>
            </div>

            <!-- Domingo de Resurrección -->
            <div class="dia-card" @click="navegarADia('domingo-resurreccion')">
                <div class="dia-image-container">
                    <img src="/Domingo2.png" alt="Domingo de Resurrección" class="dia-image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: 'SemanasView',
    setup() {
        const router = useRouter();

        const navegarADia = (dia) => {
            router.push(`/dia/${dia}`);
        };

        return {
            navegarADia
        };
    }
};
</script>

<style scoped>
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

.semanas-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: 'Lora', serif;
}

.main-title {
    font-size: 2.25rem;
    font-weight: 700;
    color: #713532;
    margin-bottom: 1.5rem;
    font-family: 'lostaMasta', 'Playfair Display', serif;
    letter-spacing: -0.02em;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.description {
    font-size: 1.125rem;
    color: #374151;
    margin-bottom: 2rem;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

.dias-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* Cambiado a 2 columnas fijas */
    gap: 2rem;
    margin-top: 2rem;
    max-width: 1000px;
    /* Para limitar el ancho en pantallas muy grandes */
    margin-left: auto;
    margin-right: auto;
}

.dia-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.dia-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.dia-image-container {
    height: auto;
    /* Cambiado de height fijo a auto */
    overflow: hidden;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dia-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.dia-image {
    width: 100%;
    height: auto;
    /* Cambiado para mantener proporciones originales */
    object-fit: contain;
    /* Cambiado de cover a contain */
    transition: transform 0.5s ease;
    max-height: 300px;
    /* Limitar altura máxima para consistencia */
}

.dia-title {
    padding: 1rem;
    font-family: 'lostaMasta', 'Playfair Display', serif;
    font-size: 1.25rem;
    color: #713532;
    text-align: center;
    margin: 0;
}

@media (max-width: 768px) {
    .dias-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        max-width: 500px;
    }

    .dia-image {
        max-height: 250px;
        /* Ajustar para tablets */
    }

    .main-title {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .dias-grid {
        gap: 1.25rem;
    }

    .dia-image-container {
        height: 180px;
    }

    .dia-image {
        max-height: 220px;
    }

    .dia-title {
        font-size: 1.1rem;
        padding: 0.75rem;
    }

    .main-title {
        font-size: 1.75rem;
    }

    .description {
        font-size: 1rem;
    }
}
</style>