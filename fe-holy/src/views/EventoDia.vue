<template>
  <div class="eventos-container" :style="customStyles">
    <!-- Header con imagen -->
    <div class="header-image-container">
      <img :src="obtenerImagenDia()" :alt="nombreDia" class="header-image">
    </div>

    <div class="filter-container">
      <span class="filter-label">Filtrar por tipo:</span>
      <div class="filter-options">
        <button class="filter-button" :class="{ active: tipoFiltro === 'todos' }" @click="filtrarPorTipo('todos')">
          Todos
        </button>
        <button class="filter-button" :class="{ active: tipoFiltro === 'Municipal' }"
          @click="filtrarPorTipo('Municipal')">
          Municipalidad
        </button>
        <button class="filter-button" :class="{ active: tipoFiltro === 'Parroquial' }"
          @click="filtrarPorTipo('Parroquial')">
          Parroquial
        </button>
      </div>

      <!-- Nuevo filtro de organizaciones (visible solo cuando se selecciona un tipo) -->
      <div class="organizacion-filtro" v-if="tipoFiltro !== 'todos' && organizacionesFiltradas.length > 0">
        <span class="filter-label">Organización:</span>
        <select class="organizacion-select" v-model="organizacionFiltro" @change="aplicarFiltroOrganizacion">
          <option value="todas">Todas las organizaciones</option>
          <option v-for="org in organizacionesFiltradas" :key="org.id" :value="org.id">
            {{ org.nombre }}
          </option>
        </select>
      </div>
    </div>

    <!-- Estado de carga -->
    <div v-if="loading" class="loading-state">
      <p>Cargando eventos...</p>
    </div>

    <!-- Estado de error -->
    <div v-else-if="error" class="error-state">
      <p>{{ error }}</p>
    </div>

    <!-- Sin eventos -->
    <div v-else-if="eventos.length === 0" class="empty-state">
      <p>No hay eventos programados para este día.</p>
    </div>



    <!-- Lista de eventos -->
    <div v-else class="eventos-list">
      <div v-for="evento in eventos" :key="evento.id" class="evento-card">
        <div class="evento-info">
          <h2 class="evento-titulo">{{ evento.nombre }}</h2>
          <p class="evento-hora">{{ formatearHora(evento.hora) }} h.</p>
          <p class="evento-organizacion">
            <strong>Organiza:</strong>
            {{ evento.organizacion ? evento.organizacion.nombre : 'Desconocido' }}
            <span class="badge" :class="evento.organizacion ? evento.organizacion.tipo.toLowerCase() : ''">

            </span>
          </p>
          <p class="evento-descripcion">{{ evento.descripcion }}</p>
        </div>

        <!-- Botón del mapa movido aquí, fuera del evento-info -->
        <button v-if="evento.latitud && evento.longitud" class="map-button" @click="abrirMapa(evento)">
          <img src="/mapa.png" alt="Ver ubicación" class="map-icon" />
        </button>
      </div>
    </div>
  </div>
  <!-- Modal del mapa -->
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

        <div class="direccion-info">
          <p>
            <strong>Organiza:</strong> {{ eventoSeleccionado?.organizacion?.nombre || 'Desconocido' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios';


export default {

  computed: {
    colorScheme() {
      // Mapa de colores por día
      const colorMap = {
        'Domingo de Ramos': {
          main: '#095926', // Verde
          text: 'white'
        },
        'Lunes Santo': {
          main: '#660066', // Púrpura
          text: 'white'
        },
        'Martes Santo': {
          main: '#660066', // Púrpura
          text: 'white'
        },
        'Miércoles Santo': {
          main: '#660066', // Púrpura
          text: 'white'
        },
        'Jueves Santo': {
          main: '#A20C18', // Rojo oscuro
          text: 'white'
        },
        'Viernes Santo': {
          main: '#A20C18', // Rojo oscuro
          text: 'white'
        },
        'Sábado Santo': {
          main: '#A20C18', // Rojo oscuro
          text: 'white'
        },
        'Domingo de Resurrección': {
          main: '#FFFFFF', // Blanco
          text: 'black'
        }
      };

      // Devolver colores para el día actual o colores por defecto
      return colorMap[this.nombreDia] || { main: '#713532', text: 'white' };
    },

    customStyles() {
      return {
        '--theme-color': this.colorScheme.main,
        '--theme-text-color': this.colorScheme.text
      };
    }
  },

  name: 'EventoDia',
  data() {
    return {
      nombreDia: '',
      eventos: [],
      eventosSinFiltrar: [],
      loading: false,
      error: null,
      organizaciones: {},
      tipoFiltro: 'todos',
      fechaSeleccionada: '',
      showModal: false,
      eventoSeleccionado: null,
      tipoFiltro: 'todos',
      organizacionFiltro: 'todas',
      organizacionesFiltradas: [],
    };
  },
  methods: {

    abrirMapa(evento) {
      if (!evento.latitud || !evento.longitud) {
        alert('Este evento no tiene coordenadas de ubicación definidas.');
        return;
      }

      this.eventoSeleccionado = evento;
      this.showModal = true;
    },

    cerrarMapa() {
      this.showModal = false;
      this.eventoSeleccionado = null;
    },

    formatearHora(hora) {
      if (!hora) return '';

      try {
        // Si hora ya viene en formato HH:MM:SS
        if (typeof hora === 'string' && hora.includes(':')) {
          // Extraer solo hora y minutos (ignorar segundos)
          const partes = hora.split(':');
          return `${partes[0]}:${partes[1]}`;
        }

        // Si por algún motivo hora es un objeto Date o timestamp
        const horaObj = new Date(hora);
        return horaObj.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch (e) {
        console.error('Error al formatear hora:', e);
        return hora; // Devolver el valor original si hay error
      }
    },

    async cargarOrganizaciones() {
      try {
        console.log('Iniciando carga de organizaciones...');
        const response = await axios.get('https://tusantohcoback.sistemasudh.com/api/organizacion');
        console.log('Respuesta API organizaciones:', response.data);

        // Corregido: accediendo correctamente a response.data.organizaciones
        if (response.data && response.data.organizaciones && Array.isArray(response.data.organizaciones)) {
          const orgs = {};
          response.data.organizaciones.forEach(org => {
            orgs[org.id] = org;
            console.log(`Organización indexada: ID=${org.id}, Nombre=${org.nombre}, Tipo=${org.tipo}`);
          });
          this.organizaciones = orgs;
          console.log('Total organizaciones cargadas:', Object.keys(orgs).length);
        } else {
          console.error('No se encontraron organizaciones o formato incorrecto:', response.data);
        }
      } catch (error) {
        console.error('Error al cargar organizaciones:', error);
      }
    },

    filtrarPorTipo(tipo) {
      this.tipoFiltro = tipo;
      // Resetear el filtro de organización cuando se cambia el tipo
      this.organizacionFiltro = 'todas';

      console.log('Filtrando por tipo:', tipo, 'Eventos antes:', this.eventosSinFiltrar.length);

      // Filtrar eventos por tipo
      if (tipo === 'todos') {
        this.eventos = [...this.eventosSinFiltrar];
        this.organizacionesFiltradas = []; // No mostrar filtro de organizaciones
      } else {
        // Filtrar eventos por tipo
        this.eventos = this.eventosSinFiltrar.filter(evento => {
          const org_id = evento.organizacion_id;
          const organizacion = this.organizaciones[org_id];
          return organizacion && organizacion.tipo === tipo;
        });

        // Generar lista de organizaciones disponibles para este tipo
        const orgIds = new Set(); // Usar Set para evitar duplicados
        this.eventos.forEach(evento => {
          if (evento.organizacion && evento.organizacion.id) {
            orgIds.add(evento.organizacion.id);
          }
        });

        // Convertir a array de objetos de organizaciones
        this.organizacionesFiltradas = Array.from(orgIds).map(id => this.organizaciones[id])
          .filter(Boolean) // Eliminar posibles valores undefined
          .sort((a, b) => a.nombre.localeCompare(b.nombre)); // Ordenar por nombre
      }

      console.log('Eventos filtrados:', this.eventos.length);
      console.log('Organizaciones disponibles:', this.organizacionesFiltradas.length);
    },

    aplicarFiltroOrganizacion() {
      // Si se selecciona "todas", mostrar todos los eventos del tipo actual
      if (this.organizacionFiltro === 'todas') {
        this.filtrarPorTipo(this.tipoFiltro); // Re-aplicar el filtro por tipo
        return;
      }

      // Filtrar eventos por organización específica
      const orgId = parseInt(this.organizacionFiltro, 10); // Convertir a número

      // Empezar con todos los eventos sin filtrar
      const eventosPorTipo = this.eventosSinFiltrar.filter(evento => {
        const organizacion = this.organizaciones[evento.organizacion_id];
        return organizacion && organizacion.tipo === this.tipoFiltro;
      });

      // Aplicar filtro de organización específica
      this.eventos = eventosPorTipo.filter(evento =>
        evento.organizacion_id === orgId
      );

      console.log(`Filtrado por organización ID: ${orgId}. Eventos: ${this.eventos.length}`);
    },

    enriquecerEventos(eventos) {
      return eventos.map(evento => {
        // Identificar el id correcto (podría ser organizacion_id u otro campo)
        const orgId = evento.organizacion_id || evento.id_organizacion;
        const organizacion = this.organizaciones[orgId];

        console.log(`Enriqueciendo evento ${evento.id}: ${evento.nombre}`,
          `Org ID: ${orgId}`,
          `Org encontrada: ${!!organizacion}`);

        // Quitar la URL incorrecta que aparece aquí
        return {
          ...evento,
          organizacion // Agregar la organización completa al evento
        };
      });
    },

    async cargarEventos(fecha) {
      this.loading = true;
      this.error = null;

      try {
        // 1. Primero cargar las organizaciones
        await this.cargarOrganizaciones();
        console.log('Organizaciones cargadas, obteniendo eventos para fecha:', fecha);

        // 2. Obtener eventos
        const response = await axios.get('https://tusantohcoback.sistemasudh.com/api/eventos', {
          params: { fecha: fecha, limit: 1000 }
        });

        console.log('Respuesta de API eventos:', response.data);

        // Verificar que tenemos eventos
        if (response.data && response.data.eventos && Array.isArray(response.data.eventos)) {
          console.log(`Eventos recibidos de la API: ${response.data.eventos.length}`);

          // Filtrar por fecha (extrayendo solo la parte YYYY-MM-DD)
          const eventosFiltradosPorFecha = response.data.eventos.filter(evento => {
            const fechaEvento = evento.fecha.split('T')[0];
            console.log(`Comparando: ${fechaEvento} con ${fecha}`);
            return fechaEvento === fecha;
          });

          console.log(`Eventos filtrados para fecha ${fecha}: ${eventosFiltradosPorFecha.length}`);

          eventosFiltradosPorFecha.sort((a, b) => {
            // Convertir la hora a un formato comparable (horas y minutos)
            const horaA = a.hora ? a.hora.substring(0, 5) : '00:00';
            const horaB = b.hora ? b.hora.substring(0, 5) : '00:00';

            // Ordenar ascendentemente (de temprano a tardío)
            return horaA.localeCompare(horaB);
          });

          console.log('Eventos ordenados por hora:', eventosFiltradosPorFecha.map(e => e.hora));

          this.eventosSinFiltrar = this.enriquecerEventos(eventosFiltradosPorFecha);

          // 3. Aplicar filtro de tipo de organización
          this.filtrarPorTipo(this.tipoFiltro);
        } else {
          this.eventosSinFiltrar = [];
          this.eventos = [];
          console.warn('No se encontraron eventos o formato incorrecto');
        }

        this.nombreDia = this.obtenerNombreDia(fecha);
      } catch (error) {
        console.error('Error al cargar eventos:', error);
        this.error = 'No se pudieron cargar los eventos. Por favor, intente de nuevo.';
        this.eventosSinFiltrar = [];
        this.eventos = [];
      } finally {
        this.loading = false;
      }
    },
    obtenerNombreDia(fecha) {
      const nombresDias = {
        '2025-04-13': 'Domingo de Ramos',
        '2025-04-14': 'Lunes Santo',
        '2025-04-15': 'Martes Santo',
        '2025-04-16': 'Miércoles Santo',
        '2025-04-17': 'Jueves Santo',
        '2025-04-18': 'Viernes Santo',
        '2025-04-19': 'Sábado Santo',
        '2025-04-20': 'Domingo de Resurrección'
      };
      return nombresDias[fecha] || 'Día desconocido';
    },

    obtenerImagenDia() {
      const imagenesMap = {
        'Domingo de Ramos': '/Domingo1.png',
        'Lunes Santo': '/Lunes.png',
        'Martes Santo': '/martes.png',
        'Miércoles Santo': '/miercoles.png',
        'Jueves Santo': '/jueves.png',
        'Viernes Santo': '/viernes.png',
        'Sábado Santo': '/sabado.png',
        'Domingo de Resurrección': '/Domingo2.png'
      };

      return imagenesMap[this.nombreDia]; // Imagen por defecto
    }

  },
  mounted() {
    const route = useRoute();
    const semana = route.params.semanas;

    console.log(`Parámetro de ruta recibido: ${semana}`);

    const fechas = {
      'domingo-ramos': '2025-04-13',
      'lunes-santo': '2025-04-14',
      'martes-santo': '2025-04-15',
      'miercoles-santo': '2025-04-16',
      'jueves-santo': '2025-04-17',
      'viernes-santo': '2025-04-18',
      'sabado-santo': '2025-04-19',
      'domingo-resurreccion': '2025-04-20'
    };

    const fechaSeleccionada = fechas[semana];

    if (fechaSeleccionada) {
      console.log(`Día seleccionado: ${semana}, fecha: ${fechaSeleccionada}`);
      this.cargarEventos(fechaSeleccionada);
    } else {
      this.error = 'Día no válido seleccionado.';
    }
  }
};
</script>



<style scoped>
.organizacion-filtro {
  display: flex;
  align-items: center;
  margin-top: 15px;
  justify-content: center;
  width: 100%;
}

.organizacion-select {
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: white;
  min-width: 220px;
  font-size: 0.95rem;
  cursor: pointer;
  color: #333;
  outline: none;
}

.organizacion-select:focus {
  border-color: var(--theme-color);
  box-shadow: 0 0 0 2px rgba(var(--theme-color-rgb), 0.2);
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
    /* Reduce de -10px a -5px para un rebote más sutil */
  }
}

.filter-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  /* Centrado para mejor apariencia */
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
  margin-right: nowrap;
}



.filter-button {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.filter-button:hover {
  background-color: #e4dfdf;
}

.filter-button.active {
  background-color: var(--theme-color, #713532);
  color: var(--theme-text-color, white);
  border-color: var(--theme-color, #713532);
}


.loading-state,
.error-state,
.empty-state {
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 2rem 0;
  font-size: 1.1rem;
  color: #555;
}

.error-state {
  background-color: #fff2f2;
  color: #d32f2f;
}

.eventos-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.header-image-container {
  margin: 0 auto 2rem;
  text-align: center;
  max-width: 600px;
}

.header-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  animation: bounce 1s ease-in-out infinite;
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
}

.eventos-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
}

.evento-card {
  position: relative;
  background-color: var(--theme-color, #cfbcbc);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  padding: 15px;
}

.evento-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.evento-info {
  padding: 0.5rem;
  margin-bottom: 25px;
  /* Pequeño margen para evitar que el texto llegue al botón */
}

.evento-titulo {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--theme-text-color, inherit);
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.evento-hora {
  font-size: 1rem;
  color: var(--theme-text-color, inherit);
  margin-bottom: 0.3rem;
  font-weight: 500;
}

.evento-organizacion {
  color: var(--theme-text-color, inherit);
}

.evento-descripcion {
  font-size: 1rem;
  color: var(--theme-text-color, inherit);
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

@media (max-width: 768px) {
  .eventos-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 480px) {
  .filter-container {
    justify-content: center;
    /* Centrar en móviles */
  }

  .filter-options {
    flex-direction: row;
    /* Mantener en fila */
    width: 100%;
    justify-content: center;
    gap: 5px;
    /* Reducir espacio entre botones en móviles */
  }

  .filter-button {
    width: auto;
    /* No fijar ancho */
    padding: 6px 10px;
    /* Reducir el padding en móviles */
    font-size: 0.9rem;
    /* Texto más pequeño en móviles */
  }

  .filter-label {
    width: 100%;
    text-align: center;
    margin-bottom: 8px;
  }
}

/* Estilos para el icono del mapa */
.organizacion-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.map-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  animation: bounce 1.2s ease-in-out infinite;
  z-index: 5;
}

/* Estilos para el botón del mapa en línea */
.inline-map-button {
  position: absolute;
  /* Cambiar a posicionamiento absoluto */
  bottom: 10px;
  /* Distancia desde abajo */
  right: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  animation: bounce 1.2s ease-in-out infinite;
  margin-left: 10px;
  flex-shrink: 0;
}

.inline-map-button:hover {
  transform: scale(1.1);
  animation-play-state: paused;
}

.evento-organizacion {
  margin: 0;
  flex-grow: 1;
}

.map-icon-container:hover {
  transform: scale(1.1);
  animation-play-state: paused;
}

.map-icon {
  width: 24px;
  height: 24px;
}

/* Estilos para el modal del mapa */
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
  color: var(--theme-color);
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

.direccion-info {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 4px;
}

.evento-card {
  position: relative;
}

@media (max-width: 480px) {

  /* Estilos existentes para móviles */
  .filter-container {
    justify-content: center;
  }

  .filter-options {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 5px;
  }

  /* NUEVO: Estilos para el filtro de organizaciones en móviles */
  .organizacion-filtro {
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
  }

  .organizacion-select {
    min-width: unset;
    /* Eliminar el ancho mínimo fijo */
    width: 100%;
    /* Ocupar todo el ancho disponible */
    max-width: 280px;
    /* Limitar el ancho máximo */
    font-size: 0.85rem;
    /* Texto ligeramente más pequeño */
    padding: 8px 10px;
    /* Padding más compacto */
  }

  /* Para asegurar que el selector de opciones se ajuste a la pantalla */
  .organizacion-select option {
    white-space: normal;
    /* Permitir que el texto se envuelva */
    padding: 5px;
  }
}
</style>
