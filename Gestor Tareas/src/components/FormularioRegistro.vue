<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const register = async () => {
    if (password.value !== confirmPassword.value) {
        errorMessage.value = "Las contraseñas no coinciden";
        return;
    }
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        // Registro exitoso
        console.log('Usuario registrado:', user);
    } catch (error) {
        console.log('error:',errorMessage);
    }
};
</script>

<template>
    <div>
        <h1>FORMULARIO DE REGISTRO</h1>
        <form @submit.prevent="register">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Introduce tu nombre">
            <label for="correo">Correo</label>
            <input type="email" id="correo" v-model="email" placeholder="Introduce tu correo">
            <label for="contraseña">Contraseña</label>
            <input type="password" id="contraseña" v-model="password" placeholder="Introduce tu contraseña">
            <label for="verificacion_contraseña">Verificación de contraseña</label>
            <input type="password" id="verificacion_contraseña" v-model="confirmPassword" placeholder="Repite tu contraseña">
            <input type="submit" value="Iniciar Sesion">
        </form>
    </div>
</template>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    background-color: white;
    width: 100%;
    height: 100vh;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
}
</style>
