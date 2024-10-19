import { RegistroAutomotor } from './registroautomotor';
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';
import * as readlineSync from 'readline-sync';

const registro = new RegistroAutomotor();

function agregarVehiculo() {
    const tipo = readlineSync.question('Ingrese el tipo de vehiculo (auto, moto, camion): ').toLowerCase();
    const marca = readlineSync.question('Ingrese la marca del vehiculo: ');
    const modelo = readlineSync.question('Ingrese el modelo del vehiculo: ');
    const año = readlineSync.questionInt('Ingrese el anio del vehiculo: ');

    let vehiculo;

    switch (tipo) {
        case 'auto':
            vehiculo = new Auto(marca, modelo, año);
            break;
        case 'moto':
            vehiculo = new Moto(marca, modelo, año);
            break;
        case 'camion':
            vehiculo = new Camion(marca, modelo, año);
            break;
        default:
            console.log('Tipo de vehiculo no reconocido.');
            return;
    }

    registro.agregarVehiculo(vehiculo);
    console.log("vehiculo agregado con exito.");
}

function listarVehiculos() {
    console.log("vehiculos en el registro:");
    registro.listarVehiculos();
}

function modificarVehiculo() {
    const index = readlineSync.questionInt('Ingrese el indice del vehiculo a modificar: ') - 1;
    const marca = readlineSync.question('Ingrese la nueva marca (o deje en blanco para no cambiar): ');
    const modelo = readlineSync.question('Ingrese el nuevo modelo (o deje en blanco para no cambiar): ');
    const año = readlineSync.questionInt('Ingrese el nuevo año (o deje en blanco para no cambiar): ');

    registro.modificarVehiculo(index, marca || undefined, modelo || undefined, año || undefined);
    console.log("vehiculo modificado con exito.");
}

function darDeBaja() {
    const index = readlineSync.questionInt('Ingrese el indice del vehiculo a dar de baja: ') - 1;
    registro.darDeBaja(index);
    console.log("vehiculo dado de baja con exito.");
}

// Ejecucion de las opciones
const opciones = `
Seleccione una opcion:
1. Agregar vehiculo
2. Listar vehiculos
3. Modificar vehiculo
4. Dar de baja vehiculo
5. Salir
`;

let salir = false;

while (!salir) {
    const opcion = readlineSync.questionInt(opciones);

    switch (opcion) {
        case 1:
            agregarVehiculo();
            break;
        case 2:
            listarVehiculos();
            break;
        case 3:
            modificarVehiculo();
            break;
        case 4:
            darDeBaja();
            break;
        case 5:
            salir = true;
            break;
        default:
            console.log('Opcion no valida.');
    }
}
