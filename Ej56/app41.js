const vm = new Vue({
    el: 'main',
    data: {
        laborales: ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'],
        tareas: [{
            nombre: 'Hacer compras',
            prioridad: 'baja'
        }, { nombre: 'Angelly', prioridad: 'alticima' }, { nombre: 'Diana', prioridad: 'Media' }, ],


    },
});