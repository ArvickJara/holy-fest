<template>
  <div class="evento-detalle-container">
    <div class="nav-links">
      <router-link to="/" class="nav-link">« Inicio</router-link>
      <router-link 
        v-if="evento && evento.organizacion_id" 
        :to="`/organizacion/${evento.organizacion_id}`" 
        class="nav-link"
      >
        « Volver a eventos
      </router-link>
    </div>

    <div v-if="loading" class="loading">Cargando detalles del evento...</div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="fetchEvento">Reintentar</button>
    </div>

    <div v-else-if="!evento" class="empty-state">
      No se encontró el evento solicitado.
    </div>

    <div v-else class="evento-content">
      <h1 class="evento-title">{{ evento.nombre }}</h1>
      
      <div class="evento-meta">
        <div class="meta-item">
          <span class="meta-label">Fecha:</span>
          <span class="meta-value">{{ formatFecha(evento.fecha_hora) }}</span>
        </div>
        
        <div class="meta-item" v-if="evento.organizacion_nombre">
          <span class="meta-label">Organizado por:</span>
          <span class="meta-value">{{ evento.organizacion_nombre }}</span>
        </div>
      </div>

      <div class="evento-galeria" v-if="evento.imagenes && evento.imagenes.length > 0">
        <div class="galeria-main">
          <img :src="getImageUrl(imagenActual)" :alt="evento.nombre" class="galeria-imagen-principal">
          
          <div class="galeria-nav">
            <button 
              @click="prevImagen" 
              class="galeria-nav-btn" 
              :disabled="currentImageIndex === 0"
              aria-label="Imagen anterior"
            >
              &#10094;
            </button>
            <span class="galeria-contador">{{ currentImageIndex + 1 }} / {{ evento.imagenes.length }}</span>
            <button 
              @click="nextImagen" 
              class="galeria-nav-btn" 
              :disabled="currentImageIndex === evento.imagenes.length - 1"
              aria-label="Imagen siguiente"
            >
              &#10095;
            </button>
          </div>
        </div>
        
        <div class="galeria-miniaturas" v-if="evento.imagenes.length > 1">
          <div 
            v-for="(imagen, index) in evento.imagenes" 
            :key="index"
            :class="['miniatura', { 'active': index === currentImageIndex }]"
            @click="setImagen(index)"
          >
            <img :src="getImageUrl(imagen)" :alt="`${evento.nombre} - imagen ${index + 1}`">
          </div>
        </div>
      </div>
      
      <div class="evento-info">
        <div class="evento-descripcion">
          <h2>Descripción</h2>
          <p>{{ evento.descripcion }}</p>
        </div>
        
        <div class="evento-ubicacion" v-if="evento.latitud && evento.longitud">
          <h2>Ubicación</h2>
          <p>Coordenadas: {{ evento.latitud }}, {{ evento.longitud }}</p>
          <div id="evento-mapa" ref="mapaContainer" class="mapa-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, onBeforeUnmount, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'EventoDetalle',
  props: {
    id: {
      type: [String, Number],
      required: false
    }
  },
  
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    
    // Extraer el ID directamente de la URL para evitar problemas con Vue Router
    const extractIdFromUrl = () => {
      const pathParts = window.location.pathname.split('/');
      const idPart = pathParts[pathParts.length - 1];
      // Intentar convertir a número si es posible
      const parsedId = parseInt(idPart);
      return isNaN(parsedId) ? idPart : parsedId;
    };
    
    // Obtener el ID del evento de múltiples fuentes
    const eventoId = computed(() => {
      const idFromProps = props.id;
      const idFromRoute = route.params.id;
      const idFromUrl = extractIdFromUrl();
      
      console.log("ID fuentes:", {
        props: idFromProps,
        route: idFromRoute, 
        url: idFromUrl
      });
      
      // Prioridad: props > route > url
      return idFromProps || idFromRoute || idFromUrl;
    });
    
    const mapaContainer = ref(null);
    const evento = ref(null);
    const loading = ref(true); // Empezar con loading true
    const error = ref(null);
    const currentImageIndex = ref(0);
    let map = null;
    
    const imagenActual = computed(() => {
      if (!evento.value || !evento.value.imagenes || evento.value.imagenes.length === 0) return '';
      return evento.value.imagenes[currentImageIndex.value];
    });
    
    const getImageUrl = (path) => {
      if (!path) return '';
      
      // Si la ruta ya es absoluta o comienza con http, usarla directamente
      if (path.startsWith('http') || path.startsWith('//')) {
        return path;
      }
      
      // Asegurar que la ruta comience con / si no lo hace
      if (!path.startsWith('/')) {
        path = '/' + path;
      }
      
      // Construir la URL completa
      return `http://localhost:5000/public${path}`;
    };
    
    const formatFecha = (fechaStr) => {
      if (!fechaStr) return '';
      
      const fecha = new Date(fechaStr);
      return fecha.toLocaleDateString('es-ES', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    
    // Función para navegar entre imágenes
    const nextImagen = () => {
      if (evento.value && evento.value.imagenes && currentImageIndex.value < evento.value.imagenes.length - 1) {
        currentImageIndex.value++;
      }
    };
    
    const prevImagen = () => {
      if (currentImageIndex.value > 0) {
        currentImageIndex.value--;
      }
    };
    
    const setImagen = (index) => {
      currentImageIndex.value = index;
    };
    
    // Función simplificada de fetch usando async/await directamente
    const fetchEvento = async () => {
      loading.value = true;
      error.value = null;
      evento.value = null;
      console.time('fetchEvento');
      
      try {
        const id = eventoId.value;
        console.log(`Iniciando fetch de evento ID: ${id}`);
        
        if (!id) {
          throw new Error("No se pudo determinar el ID del evento");
        }
        
        // Hacer la petición directamente con fetch
        const url = `http://localhost:5000/api/eventos/${id}`;
        console.log(`Enviando petición a: ${url}`);
        
        const response = await fetch(url);
        
        console.log(`Respuesta recibida. Status: ${response.status}`);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Error del servidor: ${response.status}. Respuesta: ${errorText}`);
          
          if (response.status === 404) {
            throw new Error("El evento solicitado no existe");
          } else {
            throw new Error(`Error del servidor (${response.status})`);
          }
        }
        
        // Parsear la respuesta como JSON
        const data = await response.json();
        console.log("Datos del evento recibidos:", data);
        
        // Procesamiento de imágenes si es necesario
        if (data.imagenes) {
          console.log("Procesando imágenes. Tipo:", typeof data.imagenes);
          
          if (typeof data.imagenes === 'string') {
            try {
              data.imagenes = JSON.parse(data.imagenes);
              console.log("Imágenes parseadas como JSON:", data.imagenes);
            } catch (e) {
              console.error("Error al parsear imágenes JSON:", e);
              data.imagenes = [];
            }
          }
          
          // Asegurar que sea un array
          if (!Array.isArray(data.imagenes)) {
            console.warn("Las imágenes no son un array, inicializando como array vacío");
            data.imagenes = [];
          }
        } else {
          data.imagenes = [];
        }
        
        // Guardar los datos procesados
        evento.value = data;
        
        // Inicializar mapa después de cargar datos
        nextTick(() => {
          if (evento.value.latitud && evento.value.longitud && mapaContainer.value) {
            console.log("Iniciando mapa con coordenadas:", evento.value.latitud, evento.value.longitud);
            initMap(evento.value.latitud, evento.value.longitud);
          }
        });
        
      } catch (err) {
        console.error("Error en fetchEvento:", err);
        error.value = err.message || "Error desconocido al cargar el evento";
      } finally {
        loading.value = false;
        console.timeEnd('fetchEvento');
      }
    };
    
    // Inicialización simplificada del mapa
    const initMap = (lat, lng) => {
      if (map) map.remove();
      
      const container = mapaContainer.value;
      if (!container) return;
      
      try {
        // Asegurar dimensiones del contenedor
        container.style.height = '400px';
        container.style.width = '100%';
        
        // Crear el mapa con las coordenadas proporcionadas
        map = L.map(container).setView([parseFloat(lat), parseFloat(lng)], 15);
        
        // Añadir capa de mapa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Añadir marcador
        L.marker([parseFloat(lat), parseFloat(lng)])
          .addTo(map)
          .bindPopup(evento.value.nombre)
          .openPopup();
        
        // Forzar actualización del tamaño del mapa
        setTimeout(() => map.invalidateSize(), 300);
      } catch (error) {
        console.error("Error al inicializar mapa:", error);
      }
    };
    
    // Cargar datos cuando se monte el componente
    onMounted(() => {
      console.log("EventoDetalle montado. URL completa:", window.location.href);
      
      // Forzar una recarga completa si venimos de otra página
      const wasRedirected = sessionStorage.getItem('redirected');
      if (wasRedirected) {
        sessionStorage.removeItem('redirected');
        window.location.reload();
        return;
      }
      
      fetchEvento();
    });
    
    // Limpiar recursos al desmontar
    onBeforeUnmount(() => {
      if (map) map.remove();
    });
    
    return {
      evento,
      loading,
      error,
      currentImageIndex,
      imagenActual,
      fetchEvento,
      formatFecha,
      getImageUrl,
      nextImagen,
      prevImagen,
      setImagen,
      mapaContainer
    };
  }
}
</script>

<style scoped>
.evento-detalle-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.nav-links {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.nav-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}

.evento-content {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.evento-title {
  font-size: 2rem;
  margin: 0;
  padding: 20px;
  background-color: var(--primary-color);
  color: white;
}

.evento-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
}

.meta-item {
  display: flex;
  align-items: center;
}

.meta-label {
  font-weight: bold;
  margin-right: 8px;
  color: #666;
}

.meta-value {
  color: #333;
}

.evento-galeria {
  padding: 20px;
}

.galeria-main {
  position: relative;
  margin-bottom: 20px;
}

.galeria-imagen-principal {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.galeria-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 15px;
}

.galeria-nav-btn {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.galeria-nav-btn:hover:not(:disabled) {
  background-color: rgba(0, 0, 0, 0.7);
}

.galeria-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.galeria-contador {
  font-size: 14px;
  color: #666;
}

.galeria-miniaturas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
}

.miniatura {
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.miniatura img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.miniatura:hover {
  transform: translateY(-3px);
}

.miniatura.active {
  border-color: var(--primary-color);
}

.evento-info {
  padding: 20px;
}

.evento-descripcion, .evento-ubicacion {
  margin-bottom: 30px;
}

.evento-descripcion h2, .evento-ubicacion h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.mapa-container {
  height: 400px !important;
  width: 100% !important;
  border-radius: 8px;
  margin-top: 15px;
  position: relative;
  z-index: 1;
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: #f5f5f5;
}

/* Estilos adicionales para asegurar que el mapa se visualice correctamente */
:deep(.leaflet-container) {
  height: 100% !important;
  width: 100%;
  z-index: 10;
}

:deep(.leaflet-control-container) {
  z-index: 20;
}

:deep(.leaflet-popup-content-wrapper) {
  border-radius: 8px;
}

:deep(.leaflet-popup-content) {
  margin: 8px 12px;
  line-height: 1.4;
}

/* Corrige estilos globales para asegurar que se vea el mapa */
:global(.leaflet-container) {
  height: 100% !important;
  width: 100% !important;
  z-index: 1;
}

:global(.leaflet-control) {
  z-index: 10;
}

:global(.leaflet-pane) {
  z-index: 5;
}

:global(.leaflet-tile-pane) {
  z-index: 2;
}

:global(.leaflet-overlay-pane) {
  z-index: 4;
}

:global(.leaflet-marker-pane) {
  z-index: 6;
}

:global(.leaflet-popup-pane) {
  z-index: 7;
}

/* Responsive */
@media (max-width: 768px) {
  .evento-meta {
    flex-direction: column;
    gap: 10px;
  }
  
  .galeria-imagen-principal {
    height: 300px;
  }
  
  .galeria-miniaturas {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
  
  .miniatura {
    height: 60px;
  }
  
  .mapa-container {
    height: 300px;
  }
}
</style>
