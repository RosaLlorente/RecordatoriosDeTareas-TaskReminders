<script setup>
import { useRouter } from 'vue-router';
import { getCurrentUser,useCurrentUser,useFirebaseAuth } from 'vuefire';
import { signOut } from 'firebase/auth';
import { ref } from 'vue';


const router = useRouter();
const auth = useFirebaseAuth();
const user = useCurrentUser();
const error = ref(null);

router.beforeEach(async(to, from) => {
  console.log("salta")
  if(to.meta.requiresAuth){
    const user = await getCurrentUser();
    if(!user){
      return false;
    }
    else{
      return true
    }
  }
  else{
    return true;
  }
})

function cerrarSesion() {
  signOut(auth).then(
    () => {
      console.log("validacion correcta");
      router.push("/"); // Redirigir al usuario a la página de inicio después de cerrar sesión
    }
  ).catch((reason) => {
    console.error('Failed sign out', reason)
    error.value = reason
  });
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/recordatorios">Recordatorios</RouterLink>
    </nav>
    <div  v-if="user">
      <p>Bienvenid@  {{ user.displayName }}</p>
      <button v-on:click="cerrarSesion">Cerrar Sesion</button>
    </div>
    <div v-else>
      <RouterLink to="/FormularioInicioSesion">Iniciar Sesión</RouterLink>
      <RouterLink to="/FormularioRecordatorios">Registrarse</RouterLink>
    </div>
  </header>
  <RouterView></RouterView>
</template>

<style scoped>
header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  width: 100%;
}
nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 1em;
  font-size: 1.1em;
  font-weight: bold;
}
div{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 1em;
  font-size: 1.1em;
  font-weight: bold;
}
button{
  padding: 1rem;
  width: 8rem;
}
</style>
