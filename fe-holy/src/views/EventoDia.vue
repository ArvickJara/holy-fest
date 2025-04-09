<template>
  <div class="eventos-container">
    <div class="nav-links">
      <router-link to="/semanas" class="nav-link">« Semana</router-link>
    </div>
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
  name: 'EventoDia',
  data() {
    return {
      nombreDia: '',
      eventos: [],
      eventosTotales: [
  {
    "id": 1,
    "titulo": "Lanzamiento de las actividades de Semana Santa en la Región Huánuco - 2025 Escenificación del Domingo de Ramos a cargo de la Municipalidad distrital de Tomaykichwa",
    "hora": "11:00 AM",
    "descripcion": "Lanzamiento de actividades de Semana Santa.",
    "fecha": "2025-03-25",
    "imagenes": [
      "uploads/eventos/municipal-1.jpg",
      "uploads/eventos/municipal-2.jpg"
    ]
  },
  {
    "id": 2,
    "titulo": "Lanzamiento de las actividades por semana santa de la Municipalidad Distrital de Churubamba en Lima",
    "hora": "10:00 AM",
    "descripcion": "Lanzamiento de actividades por Semana Santa.",
    "fecha": "2025-03-26",
    "imagenes": [
      "uploads/eventos/municipal-1.jpg",
      "uploads/eventos/municipal-2.jpg"
    ]
  },
  {
    "id": 3,
    "titulo": "Lanzamiento de las actividades de Semana Santa en la Región Huánuco - 2025",
    "hora": "10:00 AM",
    "descripcion": "Iniciación de las actividades en la región para Semana Santa.",
    "fecha": "2025-04-04",
    "imagenes": [
      "uploads/eventos/amarilis-1.jpg"
    ]
  },
  {
    "id": 4,
    "titulo": "Visita y promoción a la escenificación de Domingo de Ramos en Conchamarca",
    "hora": "08:00 AM",
    "descripcion": "Visita a la escenificación del Domingo de Ramos.",
    "fecha": "2025-04-13",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 5,
    "titulo": "Se inicia con el Domingo, de Ramos desde la iglesia Santa Cruz hacia las calles principales de Churubamba",
    "hora": "08:00 AM",
    "descripcion": "Iniciación de la procesión del Domingo de Ramos.",
    "fecha": "2025-04-13",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 6,
    "titulo": "* Solemne procesión del Señor del Triunfo de la Parroquia San Sebastián hacia la Catedral-Huánuco.",
    "hora": "08:00 AM",
    "descripcion": "Procesión solemne del Señor del Triunfo.",
    "fecha": "2025-04-13",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 7,
    "titulo": "Misa, procesión y compartir de Challwa (humitas con cachuelos y café) en la capilla de Pacapucro",
    "hora": "07:00 AM",
    "descripcion": "Misa, procesión y compartir gastronómico.",
    "fecha": "2025-04-14",
    "imagenes": [
      "uploads/eventos/concierto-1.jpg"
    ]
  },
  {
    "id": 8,
    "titulo": "Caravana Pesquera Consumamos Pescado organizado por el Gobierno regional de Huánuco",
    "hora": "09:00 AM",
    "descripcion": "Caravana pesquera para promover el consumo de pescado.",
    "fecha": "2025-04-14",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 9,
    "titulo": "Caravana Pesquera Consumamos Pescado organizado por el Gobierno regional de Huánuco",
    "hora": "09:00 AM",
    "descripcion": "Caravana pesquera para promover el consumo de pescado.",
    "fecha": "2025-04-15",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 10,
    "titulo": "Misa, procesión de Cristo y la Virgen Dolorosa en Cascay, y compartir del locro de cushuro y queso",
    "hora": "06:00 PM",
    "descripcion": "Misa y procesión con comida típica.",
    "fecha": "2025-04-15",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 11,
    "titulo": "Caravana Pesquera Consumamos Pescado organizado por el Gobierno regional de Huánuco",
    "hora": "09:00 AM",
    "descripcion": "Caravana pesquera para promover el consumo de pescado.",
    "fecha": "2025-04-16",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 12,
    "titulo": "Misa y procesión de Jesús de Nazareno",
    "hora": "07:00 PM",
    "descripcion": "Misa y procesión en honor a Jesús de Nazareno.",
    "fecha": "2025-04-16",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 13,
    "titulo": "Santa Misa en honor al Señor del Huerto",
    "hora": "07:00 PM",
    "descripcion": "Misa en honor al Señor del Huerto.",
    "fecha": "2025-04-16",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 14,
    "titulo": "Caravana Pesquera Consumamos Pescado organizado por el Gobierno regional de Huánuco",
    "hora": "09:00 AM",
    "descripcion": "Caravana pesquera para promover el consumo de pescado.",
    "fecha": "2025-04-17",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 15,
    "titulo": "Feria turística y artesanal por Semana Santa",
    "hora": "10:00 AM",
    "descripcion": "Feria artesanal y turística por Semana Santa.",
    "fecha": "2025-04-17",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 16,
    "titulo": "Activación y recepción a los turistas en las agencias de viaje y aeropuerto de Huánuco",
    "hora": "08:00 AM",
    "descripcion": "Activación de recepción para los turistas.",
    "fecha": "2025-04-17",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 17,
    "titulo": "Degustación de dulces tradicionales del barrio Iskuchaka - San Sebastián",
    "hora": "05:00 PM",
    "descripcion": "Degustación de dulces tradicionales.",
    "fecha": "2025-04-17",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 18,
    "titulo": "Visita a las 7 iglesias de Huánuco",
    "hora": "05:00 PM",
    "descripcion": "Recorrido por las 7 iglesias de Huánuco.",
    "fecha": "2025-04-17",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
    "id": 19,
    "titulo": "Inauguración de la Feria turística y artesanal por Semana Santa",
    "hora": "07:00 PM",
    "descripcion": "Inauguración de la feria turística.",
    "fecha": "2025-04-17",
    "imagenes": [
      "uploads/eventos/cultura-1.jpg",
      "uploads/eventos/cultura-2.jpg",
      "uploads/eventos/cultura-3.jpg"
    ]
  },
  {
  id: 20, // Cambia este ID según corresponda
  titulo: 'Feria turística y artesanal por Semana Santa',
  hora: '10:00 AM',
  descripcion: 'Feria turística y artesanal por Semana Santa.',
  fecha: '2025-04-18',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 21, // Cambia este ID según corresponda
  titulo: 'Feria turística y artesanal por Semana Santa',
  hora: '10:00 AM',
  descripcion: 'Feria turística y artesanal por Semana Santa.',
  fecha: '2025-04-19',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 22, // Cambia este ID según corresponda
  titulo: 'Feria turística y artesanal por Semana Santa',
  hora: '10:00 AM',
  descripcion: 'Feria turística y artesanal por Semana Santa.',
  fecha: '2025-04-20',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 23, // Cambia este ID según corresponda
  titulo: 'Visita y promoción a la escenificación del viacrucis en la Ermita Las Pampas',
  hora: '08:00 AM',
  descripcion: 'Promoción y visita a la escenificación del viacrucis en la Ermita Las Pampas.',
  fecha: '2025-04-18',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 24, // Cambia este ID según corresponda
  titulo: 'Escenificación de la vida, pasión y muerte de Jesús, haciendo el recorrido por las calles principales y finalizando con la crucifixión en el cerro Yucan',
  hora: '12:00 PM',
  descripcion: 'Escenificación de la vida, pasión y muerte de Jesús, recorriendo calles principales y finalizando en el cerro Yucan.',
  fecha: '2025-04-18',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 25, // Cambia este ID según corresponda
  titulo: 'Vía Crusis en la nueva Capilla "Niño Jesús Héroes del Cenepa" - Pichipampa',
  hora: '10:00 AM',
  descripcion: 'Vía Crusis en la nueva Capilla "Niño Jesús Héroes del Cenepa" - Pichipampa.',
  fecha: '2025-04-18',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 26, // Cambia este ID según corresponda
  titulo: 'La procesión del Cristo de la Agonía en Huánuco',
  hora: '08:00 AM',
  descripcion: 'Procesión del Cristo de la Agonía en Huánuco.',
  fecha: '2025-04-18',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 27, // Cambia este ID según corresponda
  titulo: 'Visita la Ruta Turística de Huánuco y Tingo Maria',
  hora: '12:00 AM',
  descripcion: 'Visita la Ruta Turística de Huánuco y Tingo Maria.',
  fecha: '2025-04-19',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 28, // Cambia este ID según corresponda
  titulo: 'Visita la Ruta Turística de Huánuco y Tingo Maria',
  hora: '12:00 AM',
  descripcion: 'Visita la Ruta Turística de Huánuco y Tingo Maria.',
  fecha: '2025-04-20',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 29, // Cambia este ID según corresponda
  titulo: 'Santa Misa en honor a la Virgen de los Dolores',
  hora: '07:00 AM',
  descripcion: 'Santa Misa en honor a la Virgen de los Dolores.',
  fecha: '2025-04-11',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 30, // Cambia este ID según corresponda
  titulo: 'Vía Crucis por el perímetro de la parroquia',
  hora: '08:00 AM',
  descripcion: 'Vía Crucis por el perímetro de la parroquia.',
  fecha: '2025-04-11',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 31, // Cambia este ID según corresponda
  titulo: 'Bendición de las palmas y Celebración Eucarística',
  hora: '07:00 AM',
  descripcion: 'Bendición de las palmas y Celebración Eucarística.',
  fecha: '2025-04-13',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 32, // Cambia este ID según corresponda
  titulo: 'Solemne procesión del Señor del Triunfo de la Parroquia San Sebastián hacia la Catedral',
  hora: '03:00 PM',
  descripcion: 'Solemne procesión del Señor del Triunfo de la Parroquia San Sebastián hacia la Catedral.',
  fecha: '2025-04-13',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 33, // Cambia este ID según corresponda
  titulo: 'Celebración Eucarística y confesiones',
  hora: '07:00 PM',
  descripcion: 'Celebración Eucarística y confesiones.',
  fecha: '2025-04-14',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 34, // Cambia este ID según corresponda
  titulo: 'Misa Crismal en la Catedral (Clero Diocesano y Religioso) Atención zona rural Capellanía de Chinchavito',
  hora: '10:00 AM',
  descripcion: 'Misa Crismal en la Catedral (Clero Diocesano y Religioso) Atención zona rural Capellanía de Chinchavito.',
  fecha: '2025-04-15',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 35, // Cambia este ID según corresponda
  titulo: 'Santa Misa en honor al Señor del Huerto y confesiones',
  hora: '07:00 PM',
  descripcion: 'Santa Misa en honor al Señor del Huerto y confesiones.',
  fecha: '2025-04-16',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 36, // Cambia este ID según corresponda
  titulo: 'Degustación de dulces tradicionales del barrio Iskuchaka - San Sebastián',
  hora: '04:00 PM',
  descripcion: 'Degustación de dulces tradicionales del barrio Iskuchaka - San Sebastián. (Lugar: Atrio de la parroquia).',
  fecha: '2025-04-17',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 37, // Cambia este ID según corresponda
  titulo: 'Celebración de la Institución Eucarística y lavado de pies de los Apóstoles',
  hora: '06:00 PM',
  descripcion: 'Celebración de la Institución Eucarística y lavado de pies de los Apóstoles.',
  fecha: '2025-04-17',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 38, // Cambia este ID según corresponda
  titulo: 'Adoración al Santísimo Sacramento con participación de toda la feligresía y grupos eclesiales de la parroquia',
  hora: '07:00 PM',
  descripcion: 'Adoración al Santísimo Sacramento con participación de toda la feligresía y grupos eclesiales de la parroquia.',
  fecha: '2025-04-17',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 39, // Cambia este ID según corresponda
  titulo: 'Vía crucis en la nueva Capilla "Niño Jesús Héroes del Cenepa" Pichiwpampa',
  hora: '10:00 AM',
  descripcion: 'Vía crucis en la nueva Capilla "Niño Jesús Héroes del Cenepa" Pichiwpampa.',
  fecha: '2025-04-18',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 40, // Cambia este ID según corresponda
  titulo: 'Celebración de la Pasión del Señor y veneración de la Santísima Cruz en la Parroquia San Sebastián',
  hora: '05:00 PM',
  descripcion: 'Celebración de la Pasión del Señor y veneración de la Santísima Cruz en la Parroquia San Sebastián.',
  fecha: '2025-04-18',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 41, // Cambia este ID según corresponda
  titulo: 'Vigilia Pascual, bendición del fuego y del agua, Misa solemne de Pascua de Resurrección',
  hora: '07:00 PM',
  descripcion: 'Vigilia Pascual, bendición del fuego y del agua, Misa solemne de Pascua de Resurrección.',
  fecha: '2025-04-19',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 42, // Cambia este ID según corresponda
  titulo: 'DOMINGO PASCUA DE RESURRECCIÓN',
  hora: '07:00 AM',
  descripcion: 'DOMINGO PASCUA DE RESURRECCIÓN.',
  fecha: '2025-04-20',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 43, // Cambia este ID según corresponda
  titulo: 'DOMINGO PASCUA DE RESURRECCIÓN',
  hora: '07:00 PM',
  descripcion: 'DOMINGO PASCUA DE RESURRECCIÓN.',
  fecha: '2025-04-20',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
},
{
  id: 44, // Cambia este ID según corresponda
  titulo: 'Escenificación de la vida pasión, y muerte de nuestro señor Jesucristo',
  hora: '09:00 AM',
  descripcion: 'Escenificación de la vida pasión, y muerte de nuestro señor Jesucristo.',
  fecha: '2025-04-18',
  imagenes: [
    'uploads/eventos/cultura-1.jpg',
    'uploads/eventos/cultura-2.jpg',
    'uploads/eventos/cultura-3.jpg'
  ]
}
]

    };
  },
  methods: {
    cargarEventos(fecha) {
      console.log('Fecha seleccionada:', fecha); // Verificar la fecha que estamos recibiendo
      this.eventos = this.eventosTotales.filter(evento => evento.fecha === fecha);
      console.log('Eventos filtrados:', this.eventos); // Verificar los eventos filtrados
      this.nombreDia = this.obtenerNombreDia(fecha);
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
    }
  },
  mounted() {
    const route = useRoute();
    const semana = route.params.semanas; // Capturamos el parámetro `semanas` desde la URL
    console.log('Parametro de la URL (semanas):', semana); // Verificar el parámetro `semanas`

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
    console.log('Fecha seleccionada desde la URL:', fechaSeleccionada); // Verificar la fecha asignada

    if (fechaSeleccionada) {
      this.cargarEventos(fechaSeleccionada);
    }
  }
};
</script>



<style scoped>
/* Estilos personalizados */
.eventos-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
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
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.evento-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.evento-info {
  padding: 1rem;
}

.evento-titulo {
  font-size: 1.5rem;
  font-weight: 600;
}

.evento-hora {
  font-size: 1.125rem;
}

.evento-descripcion {
  font-size: 1rem;
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
</style>
