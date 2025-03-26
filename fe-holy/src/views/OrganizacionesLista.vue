<template>
  <div class="organizaciones-container">
    <h2>Organizaciones</h2>
    
    <div v-if="loading" class="loading">Cargando organizaciones...</div>
    
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="fetchOrganizaciones">Reintentar</button>
    </div>
    
    <div v-else-if="organizaciones.length === 0" class="empty-state">
      No hay organizaciones disponibles.
    </div>
    
    <div v-else class="organizaciones-grid">
      <div 
        v-for="org in organizaciones" 
        :key="org.id" 
        class="organizacion-card"
        @click="verEventos(org)"
      >
        <h3>{{ org.nombre }}</h3>
        <p v-if="org.descripcion">{{ org.descripcion }}</p>
        <p v-else class="no-description">Sin descripción</p>
        <div class="card-footer">
          <button @click.stop="verEventos(org)">Ver Eventos</button>
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
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { organizacionService } from '../services/api';

export default {
  name: 'OrganizacionesLista',
  
  setup() {
    const router = useRouter();
    const organizaciones = ref([]);
    const pagination = ref(null);
    const loading = ref(false);
    const error = ref(null);
    const currentPage = ref(1);
    
    const fetchOrganizaciones = async (page = 1) => {
      loading.value = true;
      error.value = null;
      
      try {
        const response = await organizacionService.getAll(page);
        organizaciones.value = response.organizaciones;
        pagination.value = response.pagination;
        currentPage.value = page;
      } catch (err) {
        console.error('Error al cargar organizaciones:', err);
        error.value = 'No se pudieron cargar las organizaciones. Por favor, intente de nuevo.';
      } finally {
        loading.value = false;
      }
    };
    
    const changePage = (page) => {
      fetchOrganizaciones(page);
    };
    
    const verEventos = (organizacion) => {
      router.push({
        name: 'eventos-organizacion',
        params: { id: organizacion.id }
      });
    };
    
    onMounted(() => {
      fetchOrganizaciones();
    });
    
    return {
      organizaciones,
      pagination,
      loading,
      error,
      fetchOrganizaciones,
      changePage,
      verEventos
    };
  }
}
</script>

<style scoped>
.organizaciones-container {
  width: 100%;
}

.organizaciones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.organizacion-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.organizacion-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.organizacion-card h3 {
  margin-top: 0;
  color: #333;
  font-size: 1.4rem;
}

.organizacion-card p {
  color: #666;
  margin-bottom: 20px;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
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

.no-description {
  font-style: italic;
  color: #999;
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
