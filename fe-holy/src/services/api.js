import axios from 'axios';

const API_URL = 'https://tusantohcoback.sistemasudh.com/api';

// Función genérica para realizar peticiones HTTP con axios
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  console.log(`Realizando petición a: ${url}`, options);

  try {
    // Usando axios para realizar la solicitud
    const response = await axios(url, options);

    // Respuesta de la API
    console.log(`Respuesta de ${endpoint}:`, response.data);
    return response.data;
  } catch (error) {
    // Manejo de errores
    console.error(`Error en petición a ${endpoint}:`, error.response || error);
    throw error.response?.data || error;
  }
}

// Servicios para organizaciones
export const organizacionService = {
  // Obtener todas las organizaciones (paginadas)
  getAll: (page = 1, limit = 10, search = '', tipo = 'todos') => {
    const params = {
      page,
      limit,
      nombre: search || undefined,
      tipo: tipo !== 'todos' ? tipo : undefined,
    };

    return fetchAPI(`/organizacion`, { params });
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
    return fetchAPI('/eventos', { params: filters });
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
    return fetchAPI(`/eventos`, { params: { organizacion_id: organizacionId, page, limit } });
  }
};
  