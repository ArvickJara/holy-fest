import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import OrganizacionesLista from './views/OrganizacionesLista.vue'
import EventosOrganizacion from './views/EventosOrganizacion.vue'
import EventoDetalle from './views/EventoDetalle.vue'
import EventoDia from './views/EventoDia.vue'
import Semanas from './views/Semanas.vue'
import Home from './views/Home.vue'
import './assets/main.css'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dia/:semanas',
    name: 'eventodia',
    component: EventoDia
  },
  {
    path: '/semanas',
    name: 'semanas',
    component: Semanas
  },
  {
    path: '/organizaciones',
    name: 'organizaciones-lista',
    component: OrganizacionesLista
  },
  {
    path: '/organizacion/:id',
    name: 'eventos-organizacion',
    component: EventosOrganizacion,
    props: true
  },
  {
    path: '/evento/:id',
    name: 'evento-detalle',
    component: EventoDetalle,
    props: true // Cambio de la función a true para simplicidad
  },
  // Ruta adicional para manejar recargas directas
  {
    path: '/evento/:id/:extra*',
    redirect: to => {
      return { name: 'evento-detalle', params: { id: to.params.id } };
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Añadir log de navegación para depuración
router.beforeEach((to, from) => {
  console.log(`Navegando de ${from.fullPath} a ${to.fullPath}`);
  console.log("Params:", to.params);
  return true;
});

// Debug para rutas no encontradas
router.onError((error) => {
  console.error('Error de router:', error);
});

// Manejador de carga para depuración
window.addEventListener('load', () => {
  console.log('Página cargada con URL:', window.location.href);
});

const app = createApp(App)
app.use(router)
app.mount('#app')
