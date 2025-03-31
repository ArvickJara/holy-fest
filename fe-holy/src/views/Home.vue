<template>
    <div class="home-container">
        <!-- Lado izquierdo con la imagen -->
        <div class="left-section">
            <div class="image-container">
                <img src="/icon-jesus2.png" alt="Jesús de Semana Santa" class="jesus-image" />
            </div>
        </div>

        <div class="right-section">
            <h1 class="main-title">
                Semana Santa en Huánuco
            </h1>

            <p class="description">
                Una tradición centenaria que une fe, cultura y devoción.
                Descubre los eventos y actividades organizados por las diferentes
                instituciones de nuestra hermosa ciudad.
            </p>
            <router-link to="/organizaciones">
                <button class="action-button">
                    Ver todos los eventos
                </button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;500;600&display=swap');

.home-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f3f4f6;
    font-family: 'Lora', serif;
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
    border-radius: 0.5rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    /* shadow-2xl equivalente */
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
    color: #581c87;
    margin-bottom: 1.5rem;
    font-family: 'Playfair Display', serif;
    /* Tipografía elegante para títulos */
    letter-spacing: -0.02em;
    /* Espaciado de letras ligeramente condensado */
}

.description {
    font-size: 1.125rem;
    color: #374151;
    margin-bottom: 2rem;
    font-family: 'Lora', serif;
    /* Tipografía serif legible para párrafos */
    line-height: 1.6;
    /* Mejor espaciado entre líneas */
}

.action-button {
    background-color: #6b21a8;
    color: white;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: background-color 0.3s, transform 0.3s;
    border: none;
    cursor: pointer;
    font-family: 'Lora', serif;
    /* Mantener consistencia con el resto */
    letter-spacing: 0.03em;
    /* Ligero espaciado para mejor legibilidad */
}

.action-button:hover {
    background-color: #7e22ce;
    /* purple-700 equivalente */
    transform: scale(1.05);
}

@media (min-width: 768px) {
    .home-container {
        flex-direction: row;
    }

    .left-section {
        width: 50%;
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