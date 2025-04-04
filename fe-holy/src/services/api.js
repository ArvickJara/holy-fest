import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Función genérica para realizar peticiones HTTP
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  console.log(`Realizando petición a: ${url}`, options);

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        error: `Error HTTP: ${response.status}`
      }));
      throw new Error(errorData.error || errorData.message || 'Error desconocido');
    }

    const data = await response.json();
    console.log(`Respuesta de ${endpoint}:`, data);
    return data;
  } catch (error) {
    console.error(`Error en petición a ${endpoint}:`, error);
    throw error;
  }
}

// Servicios para organizaciones
export const organizacionService = {
  // Obtener todas las organizaciones (paginadas)
  getAll: (page = 1, limit = 10, search = '', tipo = 'todos') => {
    const params = new URLSearchParams();
    params.append('page', page);
    params.append('limit', limit);
    if (search) {
      params.append('nombre', search);
    }

    if (tipo && tipo !== 'todos') {
      params.append('tipo', tipo);
    }

    return fetchAPI(`/organizacion?${params.toString()}`);
  },

  // Obtener una organización por ID
  getById: (id) => {
    return fetchAPI(`/organizacion/${id}`);
  },

  // Obtener lista simple de organizaciones (para selects, etc)
  getList: () => {
    return fetchAPI('/organizacion/list');
  }
};

// Servicios para eventos
export const eventoService = {
  // Obtener todos los eventos (con filtros opcionales)
  getAll: (filters = {}) => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    return fetchAPI(`/eventos?${params.toString()}`);
  },

  // Obtener un evento por ID
  getById: (id) => {
    if (!id) {
      throw new Error('ID de evento no proporcionado');
    }
    return fetchAPI(`/eventos/${id}`);
  },

  // Obtener eventos de una organización específica
  getByOrganizacion: (organizacionId, page = 1, limit = 10) => {
    return fetchAPI(`/eventos?organizacion_id=${organizacionId}&page=${page}&limit=${limit}`);
  }
};