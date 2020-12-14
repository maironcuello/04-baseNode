const colors = require('colors');
const argv = require('./config/yargs').argv;
const registroDB = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = registroDB.crear(argv.descripcion);
        break;
    case 'listar':
        let listado = registroDB.getListado();
        break;
    case 'actualizar':
        let actualizado = registroDB.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = registroDB.borrar(argv.descripcion);
        console.log(borrado);
        break
    default:
        console.log('Comando no reconocido');
        break;

}