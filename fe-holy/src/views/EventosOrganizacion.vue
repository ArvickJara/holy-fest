<template>
  <div class="eventos-organizacion">
    <div v-if="loading" class="loading">Cargando eventos...</div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="fetchEventos">Reintentar</button>
    </div>

    <div v-else-if="!organizacion" class="no-organizacion">
      <p>No se ha seleccionado ninguna organización.</p>
      <router-link to="/organizaciones" class="back-button">Volver a Organizaciones</router-link>
    </div>

    <div v-else class="organizacion-eventos">
      <div class="organizacion-header">
        <h2>Eventos de: {{ organizacion.nombre }}</h2>
        <router-link to="/organizaciones" class="back-btn">← Volver a organizaciones</router-link>
      </div>

      <div v-if="eventos.length === 0" class="empty-state">
        <p>Esta organización no tiene eventos programados.</p>
      </div>

      <div v-else class="timeline-container">
        <ul class="timeline">
          <li v-for="(evento, index) in eventos" :key="evento.id" :style="`--accent-color:${getColor(index)}`">
            <div class="date">{{ formatDate(evento.fecha_hora) }}</div>
            <div class="title">
              <strong>{{ evento.nombre }}</strong>
              <button v-if="evento.latitud && evento.longitud" class="map-btn" @click.stop="abrirMapa(evento)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                  <circle cx="12" cy="9" r="3"></circle>
                </svg>
              </button>
            </div>
            <div class="descr">{{ evento.descripcion }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="showModal" class="map-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>{{ eventoSeleccionado?.nombre }}</h3>
          <button class="close-modal" @click="showModal = false">&times;</button>
        </div>
        <div class="modal-body">
          <iframe width="100%" height="400" frameborder="0" style="border:0; border-radius: 4px;"
            :src="`https://maps.google.com/maps?q=${eventoSeleccionado?.latitud},${eventoSeleccionado?.longitud}&z=15&output=embed`"
            allowfullscreen></iframe>

          <!-- <div class="direccion-info">
            <p>
              <strong>Coordenadas:</strong> {{ eventoSeleccionado?.latitud }}, {{ eventoSeleccionado?.longitud }}
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div v-if="pagination && pagination.totalPages > 1" class="pagination">
      <button :disabled="pagination.currentPage === 1" @click="changePage(pagination.currentPage - 1)">
        Anterior
      </button>

      <span>Página {{ pagination.currentPage }} de {{ pagination.totalPages }}</span>

      <button :disabled="pagination.currentPage === pagination.totalPages"
        @click="changePage(pagination.currentPage + 1)">
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, onUnmounted, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'EventosOrganizacion',

  setup() {
    const route = useRoute();
    const router = useRouter();

    const organizacionId = computed(() => route.params.id);
    const organizacion = ref(null);
    const eventos = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const pagination = ref(null);
    const currentPage = ref(1);

    const showModal = ref(false);
    const eventoSeleccionado = ref(null);
    let map = null;
    let marker = null;

    // Colores para alternar en la línea de tiempo
    const colors = ['#41516C', '#FBCA3E', '#E24A68', '#1B5F8C', '#4CADAD'];

    const getColor = (index) => {
      return colors[index % colors.length];
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  
  // Check if the time is exactly 00:00
  const hasValidTime = !(hours === 0 && minutes === 0);
  
  const options = hasValidTime
    ? { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }
    : { day: 'numeric', month: 'short' };

      return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    const abrirMapa = (evento) => {
      eventoSeleccionado.value = evento;
      showModal.value = true;

      const lat = parseFloat(evento.latitud);
      const lng = parseFloat(evento.longitud);

      // Validación de coordenadas
      if (isNaN(lat) || isNaN(lng)) {
        console.error('Coordenadas inválidas:', evento.latitud, evento.longitud);
        return;
      }

      // Mostrar mapa en el siguiente ciclo del DOM
      setTimeout(() => {
        if (map) {
          map.remove(); // Limpiar el mapa existente
        }

        // Inicializar el mapa
        map = L.map('evento-mapa').setView([lat, lng], 15);

        // Añadir layer de mapa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Añadir marcador
        marker = L.marker([lat, lng]).addTo(map)
          .bindPopup(evento.nombre)
          .openPopup();

        // Actualizar el mapa (necesario cuando se muestra en un elemento que estaba oculto)
        map.invalidateSize();
      }, 200);
    };

    const fetchEventos = async (page = 1) => {
      loading.value = true;
      error.value = null;

      try {
        // Primero obtenemos la información de la organización
        const orgResponse = await axios.get(`https://tusantohcoback.sistemasudh.com/api/organizacion/${organizacionId.value}`);
        organizacion.value = orgResponse.data;

        // Luego obtenemos los eventos filtrados por organizacion_id
        const eventosResponse = await axios.get('https://tusantohcoback.sistemasudh.com/api/eventos', {
          params: {
            organizacion_id: organizacionId.value,
            page: page,
            limit: 10
          }
        });

        // Ordenamos los eventos por fecha (más reciente primero)
        eventos.value = eventosResponse.data.eventos.sort((a, b) =>
          new Date(b.fecha_hora) - new Date(a.fecha_hora)
        );

        pagination.value = eventosResponse.data.pagination;
        currentPage.value = page;

      } catch (err) {
        console.error('Error al cargar los eventos:', err);
        error.value = 'No se pudieron cargar los eventos. Por favor, intente de nuevo.';
      } finally {
        loading.value = false;
      }
    };

    const changePage = (page) => {
      fetchEventos(page);
    };

    onMounted(() => {

      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
      });

      if (!organizacionId.value) {
        router.push('/organizaciones');
        return;
      }

      fetchEventos(1);
    });

    onUnmounted(() => {
      if (map) {
        map.remove();
        map = null;
      }
    });

    return {
      organizacion,
      eventos,
      loading,
      error,
      getColor,
      formatDate,
      fetchEventos,
      showModal,
      eventoSeleccionado,
      abrirMapa,
      pagination, // Exportar variable de paginación
      changePage
    };
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 15px;
}

.pagination button {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination button:not(:disabled):hover {
  background-color: #e0e0e0;
}

.pagination span {
  color: #666;
}

.map-btn {
  background: none;
  border: none;
  color: var(--accent-color);
  cursor: pointer;
  margin-left: 8px;
  padding: 4px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.map-btn:hover {
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* Estilos para el modal */
.map-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.modal-header {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  margin: 0;
  color: var(--color);
}

.close-modal {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.modal-body {
  padding: 1rem;
}

.mapa-container {
  height: 400px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.direccion-info {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 4px;
}

/* Ajustar título para acomodar el botón de mapa */
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

body {
  --color: rgba(30, 30, 30);
  --bgColor: rgba(245, 245, 245);
  min-height: 100vh;
  display: grid;
  align-content: center;
  gap: 2rem;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  color: var(--color);
  background: var(--bgColor);
}

h1 {
  text-align: center;
}

ul {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
}

/* line */
ul::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgb(225, 225, 225);
  border-radius: calc(var(--line-w) / 2);
}

/* columns*/

/* row gaps */
ul li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* card */
ul li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* date */
ul li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);

  text-align: center;
  background-color: var(--accent-color);

  color: white;
  font-size: 1.25rem;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
}

/* date flap */
ul li .date::before {
  content: "";
  width: var(--inlineP);
  aspect-ratio: 1;
  background: var(--accent-color);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
  position: absolute;
  top: 100%;

  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

/* circle */
ul li .date::after {
  content: "";
  position: absolute;
  width: 2rem;
  aspect-ratio: 1;
  background: var(--bgColor);
  border: 0.3rem solid var(--accent-color);
  border-radius: 50%;
  top: 50%;

  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--line-w) / 2);
}

/* title descr */
ul li .title,
ul li .descr {
  background: var(--bgColor);
  position: relative;
  padding-inline: 0.5rem;
}

ul li .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-weight: 500;
}

ul li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
}

/* shadows */
ul li .title::before,
ul li .descr::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 0.1rem;
  /* Reducido de 0.5rem a 0.25rem */
  background: rgba(1, 1, 1, 5);
  /* Reducido de 0.5 a 0.3 para menor opacidad */
  left: 50%;
  border-radius: 50%;
  filter: blur(0.7px);
  /* Reducido de 4px a 3px */
  transform: translate(-50%, 50%);
}

ul li .title::before {
  bottom: calc(100% + 0.125rem);
}

ul li .descr::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 40rem) {
  ul {
    grid-template-columns: 1fr var(--line-w) 1fr;
  }

  ul::before {
    grid-column: 2;
  }

  ul li:nth-child(odd) {
    grid-column: 1;
  }

  ul li:nth-child(even) {
    grid-column: 3;
  }

  /* start second card */
  ul li:nth-child(2) {
    grid-row: 2/4;
  }

  ul li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  ul li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }

  ul li:nth-child(odd) .date {
    border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
  }
}

.credits {
  margin-top: 1rem;
  text-align: right;
}

.credits a {
  color: var(--color);
}

.eventos-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.organizacion-header {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--bgColor);
  border-radius: 0.5rem;
}

.organizacion-header h2 {
  font-size: 1.75rem;
  color: var(--color);
  margin-bottom: 0.5rem;
}

.back-btn {
  display: inline-block;
  margin-top: 1rem;
  color: var(--accent-color, #41516C);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.back-btn:hover {
  /* Quitado el subrayado */
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.loading,
.error,
.empty-state {
  text-align: center;
  padding: 2rem;
  margin: 1rem 0;
  background-color: var(--bgColor);
  border-radius: 0.5rem;
}

.error {
  color: #e24a68;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.pagination button {
  background-color: var(--bgColor);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.date {
  white-space: pre-line;
  /* Para permitir saltos de línea en la fecha */
}
</style>
