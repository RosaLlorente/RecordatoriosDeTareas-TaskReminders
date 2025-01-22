<script setup>
  
</script>

<template>
    <div>
        <h1>FORMULARIO DE REGISTRO</h1>
        <form action="">
            <label for="nombre">Nombre</label>
            <input type="text">
            <label for="correo">Correo</label>
            <input type="email">
            <label for="contraseña">Contraseña</label>
            <input type="password">
            <label for="contraseña">Verificación de contraseña</label>
            <input type="password">
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
