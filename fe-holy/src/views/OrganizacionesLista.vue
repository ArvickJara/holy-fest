<template>
  <div class="organizaciones-container">
    <div class="section-header">
      <h2 class="title-special">Organizadores de Semana Santa</h2>
      <p class="subtitle">Descubre las entidades que celebran la Semana Santa con eventos especiales</p>
    </div>

    <!-- Filtro por tipo -->
    <div class="filter-container">
      <span class="filter-label">Filtrar por tipo:</span>
      <div class="filter-options">
        <button class="filter-button" :class="{ active: tipoFiltro === 'todos' }" @click="filtrarPorTipo('todos')">
          Todos
        </button>
        <button class="filter-button" :class="{ active: tipoFiltro === 'Municipal' }"
          @click="filtrarPorTipo('Municipal')">
          Municipal
        </button>
        <button class="filter-button" :class="{ active: tipoFiltro === 'Parroquial' }"
          @click="filtrarPorTipo('Parroquial')">
          Parroquial
        </button>
      </div>
    </div>

    <!-- Componente de búsqueda -->
    <div class="search-container">
      <input type="text" v-model="searchTerm" placeholder="Buscar organizaciones..." class="search-input"
        @input="handleSearch" />
      <button class="search-button" @click="handleSearch">
        Buscar
      </button>
    </div>

    <div v-if="loading" class="loading">Cargando organizaciones...</div>

    <div v-else-if="error" class="error">

      <p>{{ error }}</p>
      <button @click="fetchOrganizaciones">Reintentar</button>
    </div>

    <div v-else-if="organizaciones.length === 0" class="empty-state">
      <p v-if="searchTerm">No se encontraron organizaciones con el término "{{ searchTerm }}".</p>
      <p v-else>No hay organizaciones disponibles.</p>
    </div>

    <div v-else class="organizaciones-grid">
      <div v-for="org in organizaciones" :key="org.id" class="organizacion-card" @click="verEventos(org)">
        <h3>{{ org.nombre }}</h3>
        <p v-if="org.descripcion">{{ org.descripcion }}</p>
        <p v-else class="no-description">Sin descripción</p>
        <div class="card-footer">
          <button @click.stop="verEventos(org)">Ver Eventos</button>
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
    const searchTerm = ref('');
    const searchTimeout = ref(null);
    const tipoFiltro = ref('todos');

    const fetchOrganizaciones = async (page = 1, search = '', tipo = 'todos') => {
      loading.value = true;
      error.value = null;

      try {
        const response = await organizacionService.getAll(page, 10, search, tipo);
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

    const handleSearch = () => {
      // Debounce para no hacer muchas solicitudes mientras el usuario escribe
      if (searchTimeout.value) {
        clearTimeout(searchTimeout.value);
      }

      searchTimeout.value = setTimeout(() => {
        fetchOrganizaciones(1, searchTerm.value);
      }, 300);
    };

    const filtrarPorTipo = (tipo) => {
      tipoFiltro.value = tipo;
      fetchOrganizaciones(1, searchTerm.value, tipo);
    };

    const changePage = (page) => {
      fetchOrganizaciones(page, searchTerm.value);
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
      searchTerm,
      tipoFiltro,
      fetchOrganizaciones,
      handleSearch,
      filtrarPorTipo,
      changePage,
      verEventos
    };
  }
}
</script>



<style scoped>
@font-face {
  font-family: 'lostaMasta';
  src: url('/fonts/lostamasta.woff2') format('woff2'),
    url('/fonts/lostamasta.woff') format('woff'),
    url('/fonts/lostamasta.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.section-header {
  margin-bottom: 2rem;
  text-align: center;
}

.title-special {
  color: #8A527B;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  font-family: 'lostaMasta', 'Playfair Display', serif;
  letter-spacing: 0.02em;
  display: inline-block;
  position: relative;
}

.title-special::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  height: 3px;
  width: 60px;
  background-color: #76AC85;
  border-radius: 2px;
}

.subtitle {
  color: #777;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 1rem auto 1.5rem;
}

.section-header h2 {
  color: #4a4a4a;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
}

.section-header h2::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  height: 3px;
  width: 60px;
  background-color: #76AC85;
  border-radius: 2px;
}

.subtitle {
  color: #777;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0.5rem auto 1.5rem;
}

/* Estilos para el filtro por tipo */
.filter-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-label {
  font-weight: 500;
  color: #555;
  margin-right: 10px;
}

.filter-options {
  display: flex;
  gap: 8px;
}

.filter-button {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-button:hover {
  background-color: #e0e0e0;
}

.filter-button.active {
  background-color: #76AC85;
  color: white;
  border-color: #76AC85;
}

.organizaciones-container {
  width: 100%;
}

.search-container {
  display: flex;
  margin-bottom: 20px;
  max-width: 600px;
}

.search-input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

.search-button {
  background-color: #76AC85;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-weight: bold;
}

.search-button:hover {
  background-color: #45a049;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.organizacion-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  background-color: #76AC85;
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

.loading,
.error,
.empty-state {
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