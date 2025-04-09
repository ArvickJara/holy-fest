<template>
  <div class="eventos-container">
    <h1 class="main-title">{{ nombreDia }} - Eventos</h1>
    <p class="description">
      Aquí puedes ver todos los eventos y celebraciones programados para el {{ nombreDia }} de la Semana Santa en Huánuco.
    </p>

    <div class="eventos-list">
      <div v-for="evento in eventos" :key="evento.id" class="evento-card">
        <div class="evento-info">
          <h2 class="evento-titulo">{{ evento.titulo }}</h2>
          <p class="evento-hora">{{ evento.hora }}</p>
          <p class="evento-descripcion">{{ evento.descripcion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'EventosDelDia',
  data() {
    return {
      nombreDia: '',
      eventos: [],
    };
  },
  methods: {
    // Método para cargar los eventos según el día
    cargarEventos(dia) {
      // Aquí puedes hacer una llamada a una API o cargar eventos de algún lugar
      // Aquí un ejemplo de eventos duros
      const eventosPorDia = {
        'domingo-ramos': [
          { id: 1, titulo: 'Misa de Palmas', hora: '9:00 AM', descripcion: 'Misa de bienvenida con las palmas en la plaza principal.' },
          { id: 2, titulo: 'Procesión de Ramos', hora: '11:00 AM', descripcion: 'Procesión desde la iglesia principal hasta la plaza mayor.' },
        ],
        'lunes-santo': [
          { id: 3, titulo: 'Misa de Lunes Santo', hora: '8:00 AM', descripcion: 'Misa en honor al lunes de la Semana Santa.' },
          { id: 4, titulo: 'Concierto de Semana Santa', hora: '6:00 PM', descripcion: 'Concierto de música sacra en el auditorio de la ciudad.' },
        ],
        // Otros días con sus respectivos eventos
      };

      this.eventos = eventosPorDia[dia] || [];
      this.nombreDia = dia.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
    },
  },
  mounted() {
    // Obtener el día de la ruta y cargar los eventos
    const dia = this.$route.params.dia;
    this.cargarEventos(dia);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;500;600&display=swap');

.eventos-container {
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

.eventos-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.evento-card {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.evento-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.evento-info {
  padding: 1rem;
}

.evento-titulo {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d2d2d;
  margin-bottom: 0.5rem;
}

.evento-hora {
  font-size: 1.125rem;
  color: #4a4a4a;
  margin-bottom: 1rem;
}

.evento-descripcion {
  font-size: 1rem;
  color: #6c6c6c;
}

@media (max-width: 768px) {
  .eventos-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.75rem;
  }

  .description {
    font-size: 1rem;
  }
}
</style>
