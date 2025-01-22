<script setup>
  //Importar componentes
  import Cabecera from '../components/Cabecera.vue'
  import ResumenTareas from '../components/ResumenTareas.vue'
  import Tareas from '../components/Tareas.vue';
  import Pie from '../components/Pie.vue';

  //Importar componentes Vue
  import { onMounted, onBeforeUnmount, computed, watch, ref  } from 'vue';

  //Importar componentes firebase
  import { useCollection,useFirestore  } from 'vuefire'
  import { collection,addDoc, query, orderBy, deleteDoc,doc,updateDoc  } from 'firebase/firestore'

  //VARIABLES
  const db = useFirestore();
  const numeroTareasPendientes = computed(() =>
  {
    return ListaTareas.value.filter(tarea => !tarea.completada).length;
  });
  
  //Funcionalidad
  var ListaTareas = useCollection(query(collection(db, 'Tareas'), orderBy('prioridadNumerica', 'asc')));
  onMounted(() => {});

  function AgregarTarea(texto,prioridad) {
    let prioridadNumerica;
  
    if (prioridad === 'alta') {
      prioridadNumerica = 1;
    } else if (prioridad === 'normal') {
      prioridadNumerica = 2;
    } else if (prioridad === 'baja') {
      prioridadNumerica = 3;
    }

    let NuevaTarea ={
    DescripcionTarea: texto,
    prioridad: prioridad,
    prioridadNumerica: prioridadNumerica,
    tiempo: 0,
    completada: false
  }


  addDoc(collection(db, "Tareas"),NuevaTarea)
  .then( (docRef) =>{
    console.log("Error" + docRef.is)
  })
  .catch(error =>{
    console.log("Error" + error);
  });
}

  function BorraTareasCompletadas() {
    ListaTareas.value.forEach(tarea => 
    {
      if (tarea.completada) 
      {
        deleteDoc(doc(db, "Tareas", tarea.id))
          .then(() => {
            console.log("Tareas eliminadas correctamente.");
          })
          .catch(error => {
            console.log("Error" + error);
          });
      }
    });
  }
  function BorraTodasTareas()
  {
    ListaTareas.value.forEach(tarea => 
    {
      deleteDoc(doc(db, "Tareas", tarea.id))
        .then(() => {
          console.log("Tareas eliminadas correctamente.");
        })
        .catch(error => {
          console.log("Error" + error);
        });
    });
  }

  function BorrarTarea(indice)
  {
    deleteDoc(doc(db, "Tareas",ListaTareas.value[indice].id))
    .then( (docRef) =>{
      console.log("Tarea eliminada correctamente.");
    })
    .catch(error =>{
      console.log("Error" + error);
    });
  }
  function EditarTarea(indice)
  {
    const nuevoTexto = prompt("Introduzca la modificación:", ListaTareas.value[indice].DescripcionTarea);
    if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
      updateDoc(doc(db, "Tareas", ListaTareas.value[indice].id), {
      DescripcionTarea: nuevoTexto.trim()
      })
      .then(() => {
      console.log("Tarea editada correctamente.");
      })
      .catch(error => {
      console.log("Error" + error);
      });
    }
  }
  function MarcarTareaCompletada(indice) {
    updateDoc(doc(db, "Tareas", ListaTareas.value[indice].id), {
      completada: !ListaTareas.value[indice].completada
      })
      .then(() => {
      console.log("Tarea editada correctamente.");
      })
      .catch(error => {
      console.log("Error" + error);
      });
  }

  // Incrementa el tiempo de las tareas cada minuto
  let intervaloTiempo = null

  onMounted(() => {
    intervaloTiempo = setInterval(() => {
      ListaTareas.value.forEach((tarea) => {
          tarea.tiempo++
      })
    }, 60000)
  })

  onBeforeUnmount(() => {
    clearInterval(intervaloTiempo)
  })

  function ActualizarPrioridad(indice, nuevaPrioridad) {
      let prioridadNumerica;

      if (nuevaPrioridad === 'alta') {
        prioridadNumerica = 1;
      } else if (nuevaPrioridad === 'normal') {
        prioridadNumerica = 2;
      } else if (nuevaPrioridad === 'baja') {
        prioridadNumerica = 3;
      }

    updateDoc(doc(db, "Tareas", ListaTareas.value[indice].id), {
      prioridad: nuevaPrioridad,
      prioridadNumerica: prioridadNumerica
      })
      .then(() => {
      console.log("Tarea editada correctamente.");
      })
      .catch(error => {
      console.log("Error" + error);
      });
  }
</script>

<template>
  <Cabecera v-on:NuevaTarea="AgregarTarea"></Cabecera>
  <ResumenTareas :numeroTareasPendientes="numeroTareasPendientes" v-on:BorraTareasCompletadas="BorraTareasCompletadas" v-on:BorraTodasTareas="BorraTodasTareas"></ResumenTareas>
  <Tareas v-for="(tarea,indice) in ListaTareas " :key="indice" v-bind:class="{tachado: tarea.completada}"
    :DescripcionTarea="tarea.DescripcionTarea" :prioridad="tarea.prioridad"  :prioridadNumerica="tarea.prioridadNumerica"
    :tiempo="tarea.tiempo" :completada="tarea.completada" v-on:borrado="BorrarTarea(indice)" 
    v-on:editar="EditarTarea(indice)" v-on:actualizarPrioridad="ActualizarPrioridad(indice, $event)"
    v-on:marcar="MarcarTareaCompletada(indice)"></Tareas>
  <Pie></Pie>
</template>

<style scoped>

</style>
