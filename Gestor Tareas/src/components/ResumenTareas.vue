<script setup>
defineProps(['numeroTareasPendientes']);
const emit = defineEmits(['BorraTareasCompletadas','BorraTodasTareas']);

function BorraTareasCompletadas()
{
    emit('BorraTareasCompletadas');
}
function BorraTodasTareas()
{
    emit('BorraTodasTareas');
}
</script>

<template>
    <section>
        <div>
        <p>Tareas pendientes: {{ numeroTareasPendientes }}</p>
        <button v-on:click="BorraTareasCompletadas">Eliminar tareas completadas</button>
        <button v-on:click="BorraTodasTareas">Eliminar todas las tareas</button>
    </div>
    </section>
</template>
<style scoped>
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        font-size: 1.1em;
        padding: 1em;
        background-color: var(--color-terciario);
        border-bottom: var(--color-quintenario) solid 0.2em;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 90%;
    }
    p{
        color: var(--color-cuaternario);
    }
    button{
        color:  var(--color-cuaternario);
        width: 12em;
        font-size: 1.1em;
        border: var(--color-sextenario) solid 0.1em;
        padding: 0.5em;
        transition: all 3s;

    }
    button:hover{
        color: var(--color-cuaternario);
        text-shadow: var(--color-secundario) 0.1em 0.1em 1em;
        background-color: var(--color-sextenario);
        box-shadow: var(--color-sextenario) 0.1em 0.1em 0.5em, var(--color-sextenario) -0.1em -0.1em 0.5em;
    }
</style>
