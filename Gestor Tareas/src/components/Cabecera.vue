<script setup>
    //Importar componentes Vue
    import {ref} from 'vue';
    //Funcionalidad de la cabecera
    const emit = defineEmits(['NuevaTarea']);
    var textoNuevaTarea = ref('');

    

    /**
     * Función para agregar una nueva nota.
     * 
     * Esta función emite un evento llamado 'NuevaTarea' con el contenido de la nueva tarea.
     * Luego, limpia el valor de la tarea nueva.
     * 
     * @emits NuevaTarea - Emite el evento con el contenido de la nueva tarea.
     */
    function AltaNuevaTarea() 
    { 
        if (textoNuevaTarea.value.trim() === '') 
        {
            alert('La tarea no puede estar vacía');
            return;
        }
        emit('NuevaTarea', textoNuevaTarea.value,'normal');
        textoNuevaTarea.value = '';
    }
</script>

<template>
   <header>
        <h1>Gestor de notas</h1>
        <div>
            <input v-model="textoNuevaTarea" placeholder="Introduce una tarea" v-on:keyup.enter="AltaNuevaTarea"></input>
            <button v-on:click="AltaNuevaTarea">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#00ffee" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M21,14h6v20h-6V14z"></path><path fill="#fff" d="M14,21h20v6H14V21z"></path>
                </svg>
            </button>
        </div>
   </header>
</template>

<style scoped>
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        padding: 0.5rem;
        background-color: var(--color-terciario);
        color: var(--color-cuaternario);
        backdrop-filter: blur(5px);
        border-bottom: var(--color-secundario) groove 0.2em;
    }
    h1{
        margin-top: 0.5em;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 90%;
    }
    input{
        width: 70%;
        font-size: 1.5em;
        padding: 0.3em;
        border-radius: 10%;
        border: var(--color-secundario) groove 0.2em;
        text-align: center;
        background-color: var(--color-primario);
        transition: all 1s;
    }
    input::placeholder{
        color: var(--color-cuaternario);
        text-shadow: var(--color-secundario) 0.1em 0.1em 0.2em;
    }
    input:focus{
        border-color: var(--color-sextenario);
        box-shadow: var(--color-sextenario) 0.1em 0.1em 0.5em;
        font-weight: bold;
    }
    button,svg{
        transition: all 1s;
    }
    button:hover, svg:hover {
        transform: scale(1.1);
        filter: drop-shadow(0 0 0.2rem var(--color-sextenario));
    }
</style>
