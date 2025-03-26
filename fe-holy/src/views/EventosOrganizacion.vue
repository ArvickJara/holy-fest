<template>
  <div class="eventos-container">
    <div class="header-container">
      <router-link to="/" class="back-link">« Volver a organizaciones</router-link>
      <h2 v-if="organizacion">Eventos de {{ organizacion.nombre }}</h2>
      <h2 v-else>Eventos de la organización</h2>
    </div>
    
    <div v-if="organizacion && organizacion.descripcion" class="org-description">
      <h3>Sobre la organización</h3>
      <p>{{ organizacion.descripcion }}</p>
    </div>
    
    <div v-if="loadingOrg || loadingEventos" class="loading">
      Cargando datos...
    </div>
    
    <div v-else-if="errorOrg || errorEventos" class="error">
      <p>{{ errorOrg || errorEventos }}</p>
      <button @click="init">Reintentar</button>
    </div>
    
    <div v-else-if="eventos.length === 0" class="empty-state">
      No hay eventos disponibles para esta organización.
    </div>
    
    <div v-else class="eventos-grid">
      <div 
        v-for="evento in eventos" 
        :key="evento.id" 
        class="evento-card"
      >
        <div class="evento-image" v-if="evento.imagenes && evento.imagenes.length > 0">
          <img :src="getImageUrl(evento.imagenes[0])" :alt="evento.nombre">
        </div>
        <div class="evento-details">
          <h3>{{ evento.nombre }}</h3>
          <p class="evento-fecha">{{ formatFecha(evento.fecha_hora) }}</p>
          <p class="evento-descripcion">{{ evento.descripcion }}</p>
          <div class="card-footer">
            <button @click="verDetalleEvento(evento)">Ver detalle</button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="pagination && pagination.totalPages > 1" class="pagination">
      <button 
        :disabled="pagination.currentPage === 1" 
        @click="changePage(pagination.currentPage - 1)"
      >
        Anterior
      </button>
      
      <span>Página {{ pagination.currentPage }} de {{ pagination.totalPages }}</span>
      
      <button 
        :disabled="pagination.currentPage === pagination.totalPages" 
        @click="changePage(pagination.currentPage + 1)"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { organizacionService, eventoService } from '../services/api';

export default {
  name: 'EventosOrganizacion',
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const organizacionId = computed(() => props.id || route.params.id);
    
    const organizacion = ref(null);
    const eventos = ref([]);
    const pagination = ref(null);
    
    const loadingOrg = ref(false);
    const loadingEventos = ref(false);
    const errorOrg = ref(null);
    const errorEventos = ref(null);
    
    const currentPage = ref(1);
    
    const fetchOrganizacion = async () => {
      loadingOrg.value = true;
      errorOrg.value = null;
      
      try {
        organizacion.value = await organizacionService.getById(organizacionId.value);
      } catch (err) {
        console.error('Error al cargar organización:', err);
        errorOrg.value = 'No se pudo cargar la información de la organización.';
      } finally {
        loadingOrg.value = false;
      }
    };
    
    const fetchEventos = async (page = 1) => {
      loadingEventos.value = true;
      errorEventos.value = null;
      
      try {
        const response = await eventoService.getByOrganizacion(organizacionId.value, page);
        eventos.value = response.eventos;
        pagination.value = response.pagination;
        currentPage.value = page;
      } catch (err) {
        console.error('Error al cargar eventos:', err);
        errorEventos.value = 'No se pudieron cargar los eventos. Por favor, intente de nuevo.';
      } finally {
        loadingEventos.value = false;
      }
    };
    
    const changePage = (page) => {
      fetchEventos(page);
    };
    
    const formatFecha = (fechaStr) => {
      if (!fechaStr) return '';
      
      const fecha = new Date(fechaStr);
      return fecha.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    
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
    
    const verDetalleEvento = (evento) => {
      console.log('Navegando al detalle del evento:', evento.id);
      
      // Usar navegación directa con location.href para forzar recarga de página
      sessionStorage.setItem('redirected', 'true');
      window.location.href = `/evento/${evento.id}`;
    };
    
    const init = () => {
      fetchOrganizacion();
      fetchEventos();
    };
    
    onMounted(init);
    
    return {
      organizacion,
      eventos,
      pagination,
      loadingOrg,
      loadingEventos,
      errorOrg,
      errorEventos,
      changePage,
      formatFecha,
      getImageUrl,
      verDetalleEvento,
      init
    };
  }
}
</script>

<style scoped>
.eventos-container {
  width: 100%;
}

.header-container {
  margin-bottom: 20px;
}

.back-link {
  display: block;
  margin-bottom: 10px;
  color: #4caf50;
  text-decoration: none;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline;
}

.org-description {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 30px;
}

.org-description h3 {
  margin-top: 0;
  font-size: 1.2rem;
  color: #333;
}

.eventos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

.evento-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.evento-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.evento-image {
  height: 200px;
  overflow: hidden;
}

.evento-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.evento-card:hover .evento-image img {
  transform: scale(1.05);
}

.evento-details {
  padding: 20px;
}

.evento-details h3 {
  margin-top: 0;
  color: #333;
  font-size: 1.4rem;
}

.evento-fecha {
  color: #4caf50;
  font-weight: bold;
  margin-bottom: 10px;
}

.evento-descripcion {
  color: #666;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
}

.card-footer button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.card-footer button:hover {
  background-color: #45a049;
}

.loading, .error, .empty-state {
  text-align: center;
  padding: 30px;
  color: #666;
}

.error {
  color: #d32f2f;
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
</style>
