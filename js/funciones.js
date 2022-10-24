
const container = document.getElementById('container')
const btnGuardar = document.getElementById('btnGuardar')
const inputTarea = document.getElementById('inputTarea')
const selectPrioridad = document.getElementById('selectPrioridad')
let tareas = []

pintarObj = (obj) => {

    const cajaTareas = document.createElement('div')
    cajaTareas.className += 'd-flex'
    cajaTareas.className += ' justify-content-between'
    cajaTareas.className += ' border border-warning'
    cajaTareas.className += ' bg-info'

    const h3Tareas = document.createElement('h3')
    h3Tareas.className += "m-3"
    h3Tareas.innerText = obj.tarea

    const btnEliminar = document.createElement('button')
    btnEliminar.className = "btn btn-danger"
    btnEliminar.innerText = 'Eliminar'

    btnEliminar.addEventListener('click', (event) => {

        if (event.target) {
            eliminarObjeto()
        }



    })

    cajaTareas.append(h3Tareas, btnEliminar)

    return container.append(cajaTareas)

};

btnGuardar.addEventListener('click', () => {

    const objetoTarea = {
        tarea: inputTarea.value,
        prioridad: selectPrioridad.value
    }
    tareas.push(objetoTarea)
    pintarObj(objetoTarea)
})

const pintarLista = (arr) => {
    arr.forEach(obj => pintarObj(obj))

}
const eliminarObjeto = (arr) => {

    arr.splice(i, 1)

    return arr

}


