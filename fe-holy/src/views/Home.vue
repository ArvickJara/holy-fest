<template>
    <div class="home-container">
        <!-- Lado izquierdo con la imagen -->
        <div class="left-section">
            <img src="/aea.webp" alt="Jesús de Semana Santa" class="jesus-image" />
        </div>

        <div class="right-section">
            <router-link to="/semanas">
                <button class="action-button">
                    Vivir la Semana Santa
                </button>
            </router-link>
            <!-- <h1 class="main-title">
                Semana Santa en Huánuco
            </h1> -->

            <p class="description">
                Una tradición centenaria que une fe, cultura y devoción.
                Descubre los eventos y actividades organizados por las diferentes
                instituciones de nuestra hermosa ciudad de <strong>Huánuco</strong>.
            </p>

        </div>
    </div>
</template>

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

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.home-container {
    display: flex;
    flex-direction: column;
    /* min-height: 80vh; */
    background-color: #FFF8F8;
    font-family: 'Lora', serif;
    border-radius: 12px;
}



.image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.jesus-image {
    max-height: 30vh;
    max-width: 90%;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.right-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
}

.main-title {
    font-size: 2.25rem;
    font-weight: 700;
    color: #8C40AC;
    margin-bottom: 1.5rem;
    font-family: 'lostaMasta', 'Playfair Display', serif;
    letter-spacing: -0.02em;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.description {
    font-size: 1.125rem;
    color: #374151;
    margin-top: 1.5rem;
    /* Añadido: espacio superior */
    margin-bottom: 2rem;
    padding-top: 0.5rem;
    /* Añadido: padding superior */
    font-family: 'Lora', serif;
    line-height: 1.6;
}

.action-button {
    background-color: #693382;
    color: white;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: background-color 0.3s, transform 0.3s;
    border: none;
    cursor: pointer;
    font-family: 'Lora', serif;
    letter-spacing: 0.03em;
    font-size: 1.25rem;

    animation: bounce 0.8s ease-in-out infinite;
}

.action-button:hover {
    background-color: #4F1C51;
    animation-play-state: paused;
}

.left-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 15px;
    width: 100%;
    box-sizing: border-box;
}

@media (min-width: 768px) {
    .home-container {
        flex-direction: row;
    }

    .left-section {
        width: 50%;
        padding: 3rem;
    }

    .right-section {
        width: 50%;
        padding: 3rem;
    }

    .main-title {
        font-size: 3rem;
    }

    .description {
        font-size: 1.25rem;
        margin-top: 2rem;
        /* Padding superior más grande en pantallas grandes */
        padding-top: 0.75rem;
    }

    .jesus-image {
        max-height: 40vh;
    }
}

/* Media query para pantallas grandes (computadoras de escritorio) */
@media (min-width: 1024px) {
    .jesus-image {
        max-height: 60vh;
        max-width: 95%;
    }

    .left-section {
        display: flex;
        align-items: center;
        justify-content: center;
        /* Eliminar el background-color: #581c87; que estaba aquí */
    }
}

/* Media query para pantallas muy grandes */
@media (min-width: 1440px) {
    .jesus-image {
        max-height: 70vh;
        /* Aún más grande para pantallas muy grandes */
    }
}
</style>