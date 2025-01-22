import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from '../firebase.js'
import { createWebHistory, createRouter } from 'vue-router'

import landing from './components/landing.vue'
import recordatorios from './components/recordatorios.vue'
import FormularioRegistro from './components/FormularioRegistro.vue'
import FormularioInicioSesion from './components/FormularioInicioSesion.vue'
const routes = [
  { path: '/', component: landing,meta:{requiresAuth: false}  },
  { path: '/recordatorios', component: recordatorios,meta:{requiresAuth: true}},
  { path: '/FormularioRecordatorios', component: FormularioRegistro,meta:{requiresAuth: false}},
  { path: '/FormularioInicioSesion', component: FormularioInicioSesion,meta:{requiresAuth: false}}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
    VueFireAuth(),
],
})

app.use(router)
app.mount('#app')
