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
  getAll: (page = 1, limit = 10) => {
    return fetchAPI(`/organizacion?page=${page}&limit=${limit}`);
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
  getById: async (id) => {
    if (!id) {
      throw new Error('ID de evento no proporcionado');
    }
    
    // Convertir el ID a String para asegurar compatibilidad
    const idString = String(id);
    console.log(`Solicitando evento con ID: ${idString} (tipo: ${typeof id})`);
    
    try {
      // Usar solicitud fetch directa para diagnóstico
      const url = `${API_URL}/eventos/${idString}`;
      console.log(`Realizando petición a: ${url}`);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        console.error(`Error HTTP: ${response.status}`);
        const errorText = await response.text();
        console.error(`Respuesta de error: ${errorText}`);
        throw new Error(`Error de servidor (${response.status}): ${errorText}`);
      }
      
      const data = await response.json();
      console.log('Respuesta completa del servidor:', data);
      return data;
    } catch (error) {
      console.error(`Error obteniendo evento ID ${idString}:`, error);
      throw error;
    }
  },
  
  // Obtener eventos de una organización específica
  getByOrganizacion: (organizacionId, page = 1, limit = 10) => {
    return fetchAPI(`/eventos?organizacion_id=${organizacionId}&page=${page}&limit=${limit}`);
  }
};
