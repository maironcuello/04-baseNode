const colors = require('colors');
const fs = require('fs');
let listadoporhacer = [];

const guardaDB = () => {

    let data = JSON.stringify(listadoporhacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err('No se puedo grabar');

    });
}

const cargarDB = () => {

    try {
        listadoporhacer = require('../db/data.json');
    } catch (error) {
        listadoporhacer = [];
    }

}

const getListado = () => {

    cargarDB();
    console.log('****************************************'.green);
    listadoporhacer.forEach(element => {
        console.log('Tarea :', element.descripcion, 'Estado :', element.completado);
        //console.log('Estado: ', element.completado);
    });
    console.log('****************************************'.green);

}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoporhacer.push(porHacer);
    guardaDB();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();
    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoporhacer.splice(index, 1);
        guardaDB();
        return true;
    } else {
        return false;
    }




}



module.exports = { crear, getListado, actualizar, borrar };