
const container = document.getElementById('container')
const btnGuardar = document.getElementById('btnGuardar')
const inputTarea = document.getElementById('inputTarea')
const selectPrioridad = document.getElementById('selectPrioridad')
const filtrarTarea = document.getElementById('filtrarTarea')


let tareas = []
let i = 0


let tarea = ''
let prioridad = ''





pintarObjetos = (arr) => {

    arr.forEach((obj => {


        obj.id = i
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
                cajaTareas.innerHTML = '';


            }
        })

        cajaTareas.append(h3Tareas, btnEliminar)
        i++
        return container.append(cajaTareas)

    }))

};

btnGuardar.addEventListener('click', (event) => {

    tarea = inputTarea.value
    prioridad = selectPrioridad.value


    const objetoTarea = {
        tarea: tarea,
        prioridad: prioridad
    }



    tareas.push(objetoTarea)
    let nuevaLista = tareas.slice(-1)
    pintarObjetos(nuevaLista)
})


filtrarTarea.addEventListener('input', (event) => {

    const filtro = event.target.value
    pintarObjetos(tarea)

})

