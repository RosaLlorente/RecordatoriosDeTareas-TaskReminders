<script setup>
//Declaración de variables
const emit = defineEmits(['borrado', 'editar', 'marcar', 'actualizarPrioridad']);

//Funcionalidad de las tareas
//Función para definir las propiedades (props) que el componente espera recibir de su componente padre(App).
defineProps(['DescripcionTarea', 'prioridad','prioridadNumerica', 'tiempo', 'completada']);

function BorraTarea()
{
    emit('borrado');
}
function EditarTarea()
{
    emit('editar');
}
function ActualizarPrioridad(nuevaPrioridad) 
{
    emit('actualizarPrioridad', nuevaPrioridad);
}

function MarcarTareaCompletada()
{
    emit('marcar')
}
</script>

<template>
    <main>
        <div class="Tarea">
            <div class="CabeceraNota">
                <h2 class=".tachado">{{ DescripcionTarea }}</h2>
            </div>
            <div class="Datos">
                <div class="Prioridad">
                    <button v-on:click="ActualizarPrioridad('alta')" :class="{alta: prioridad == 'alta'}"><span>Alta </span></button>
                    <button v-on:click="ActualizarPrioridad('normal')" :class="{normal: prioridad == 'normal'}"><span>Normal </span></button>
                    <button v-on:click="ActualizarPrioridad('baja')" :class="{baja: prioridad == 'baja'}"><span> Baja </span></button>
                </div>
                <span>La tarea fue creada hace {{ tiempo }} minutos</span>
                <div class="Opciones">
                    <button class="EstadoCompletado" v-on:click="MarcarTareaCompletada">
                        <svg class="Completo" v-show="!completada" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                            <g fill="#14e408" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-4.56 -1.33972,-8.81067 -3.63672,-12.38867l-1.36914,1.61719c1.895,3.154 3.00586,6.83148 3.00586,10.77148c0,11.579 -9.421,21 -21,21c-11.579,0 -21,-9.421 -21,-21c0,-11.579 9.421,-21 21,-21c5.443,0 10.39391,2.09977 14.12891,5.50977l1.30859,-1.54492c-4.085,-3.705 -9.5025,-5.96484 -15.4375,-5.96484zM43.23633,7.75391l-19.32227,22.80078l-8.13281,-7.58594l-1.36328,1.46289l9.66602,9.01563l20.67969,-24.40039z"></path></g></g>
                        </svg>
                        <svg class="NoComleto" v-show="completada" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                        <g fill="#9a0000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M4.4043,3c-0.647,0 -1.02625,0.72877 -0.65625,1.25977l5.98828,8.55859l-6.01172,7.02734c-0.389,0.454 -0.06675,1.1543 0.53125,1.1543h0.66406c0.293,0 0.57172,-0.12856 0.76172,-0.35156l5.23828,-6.13672l3.94336,5.63477c0.375,0.534 0.98667,0.85352 1.63867,0.85352h3.33398c0.647,0 1.02625,-0.72781 0.65625,-1.25781l-6.31836,-9.04297l5.72656,-6.70898c0.332,-0.39 0.05497,-0.99023 -0.45703,-0.99023h-0.8457c-0.292,0 -0.56977,0.12761 -0.75977,0.34961l-4.8418,5.66016l-3.60156,-5.1543c-0.374,-0.536 -0.98467,-0.85547 -1.63867,-0.85547z"></path></g></g>
                        </svg>
                    </button>
                    <button class="Eliminar" v-on:click="BorraTarea"> 
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                            <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
                        </svg>
                    </button>
                    <button class="Editar" v-on:click="EditarTarea">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                            <g fill="#e47908" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M22.82813,3c-0.51175,0 -1.02356,0.19544 -1.41406,0.58594l-2.41406,2.41406l5,5l2.41406,-2.41406c0.781,-0.781 0.781,-2.04713 0,-2.82812l-2.17187,-2.17187c-0.3905,-0.3905 -0.90231,-0.58594 -1.41406,-0.58594zM17,8l-11.74023,11.74023c0,0 0.91777,-0.08223 1.25977,0.25977c0.342,0.342 0.06047,2.58 0.48047,3c0.42,0.42 2.64389,0.12436 2.96289,0.44336c0.319,0.319 0.29688,1.29688 0.29688,1.29688l11.74023,-11.74023zM4,23l-0.94336,2.67188c-0.03709,0.10544 -0.05623,0.21635 -0.05664,0.32813c0,0.55228 0.44772,1 1,1c0.11177,-0.00041 0.22268,-0.01956 0.32813,-0.05664c0.00326,-0.00128 0.00652,-0.00259 0.00977,-0.00391l0.02539,-0.00781c0.00196,-0.0013 0.00391,-0.0026 0.00586,-0.00391l2.63086,-0.92773l-1.5,-1.5z"></path></g></g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
        padding-bottom: 7em;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .Tarea{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5em;
        width: 70%;
        background-color: var(--color-terciario);
        backdrop-filter: blur(2em);
        }
        .CabeceraNota
        {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 1em;
        padding-right: 1em;
        overflow: hidden;
        }
        h2{
        color: var(--color-cuaternario);
        text-align: start;
        }
    .CabeceraNota div{
        width: 2.5em;
    }
    .EstadoCompletado{
        width: 3em;
        height: 3em;
    }
    .EstadoCompletado,svg{
        transition: all 1.5s;
    }
    .EstadoCompletado:hover, svg:hover {
        transform: scale(1.3);
    }
    .Completo:hover{
        filter: drop-shadow(0 0 0.5rem var(--color-decimo));
    }
    .NoComleto:hover{
        filter: drop-shadow(0 0 0.5rem var(--color-noveno));
    }
    .Datos
    {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .Prioridad
    {
        display: flex;
        flex-direction: row;
        gap: 1em;
    }
    .Prioridad button{
        font-size: 1.2em;
        color: var(--color-cuaternario);
        transition: all 3s;
    }
    .Prioridad button:hover{
        color: var(--color-cuaternario);
        text-shadow: var(--color-secundario) 0.1em 0.1em 1em;
        background-color: var(--color-sextenario);
        box-shadow: var(--color-sextenario) 0.1em 0.1em 0.5em, var(--color-sextenario) -0.1em -0.1em 0.5em;
    }
    span{
        color: var(--color-cuaternario);
    }
    .Opciones{
        display: flex;
        flex-direction: row;
        gap: 1em;
    }
    .Eliminar svg{
        transition: all 1s;
    }
    .Eliminar:hover, svg:hover {
        transform: scale(1.1);
        filter: drop-shadow(0 0 0.2rem var(--color-octavo));
    }
    .Editar svg{
        transition: all 1s;
    }
    .Editar:hover, svg:hover {
        transform: scale(1.1);
        filter: drop-shadow(0 0 0.2rem var(--color-noveno));
    }
    .alta {
    background-color: red;
    color: white;
    }

    .normal {
    background-color: rgb(255, 179, 0);
    color: black;
    }

    .baja {
    background-color: rgb(251, 255, 0);
    color: white;
    }
    .tachado {
        text-decoration: line-through var(--color-decimo);
        font-weight: bold;
    }
    @media (max-width: 768px) {
        .Tarea {
            width: 90%;
        }
        .CabeceraNota {
            flex-direction: row;
            align-items: flex-start;
        }
        .Datos {
            flex-direction: column;
            gap: 1.5em;
        }
        .Prioridad {
            flex-direction: column;
            gap: 0.5em;
        }
        .Opciones {
            flex-direction: row;
            gap: 0.5em;
        }
    }
</style>
