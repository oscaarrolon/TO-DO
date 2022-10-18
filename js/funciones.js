const form1 = document.querySelector('.form')
const introducirTarea = document.querySelector('.prioridad1')
const selectPrioridad = document.querySelector('#prioridad')
const guardar = document.querySelector('.btnGuardar')
let tareas = []

guardar.addEventListener('click', () => {
    tareas.push(introducirTarea.value)
    const strTareas = JSON.stringify(tareas);
    localStorage.setItem('arrTareas', strTareas)
});