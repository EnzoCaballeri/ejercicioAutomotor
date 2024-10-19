import { RegistroAutomotor } from './registroautomotor';
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';
import * as readlineSync from 'readline-sync';

const registro = new RegistroAutomotor();

// Solicitar datos al usuario
const marca = readlineSync.question('Ingrese la marca del auto: ');
const modelo = readlineSync.question('Ingrese el modelo del auto: ');
const año = readlineSync.questionInt('Ingrese el año del auto: ');

// Crear una instancia de Auto con los datos ingresados
const auto1 = new Auto(marca, modelo, año);
registro.agregarVehiculo(auto1);

// Mostrar los vehículos agregados
registro.obtenerVehiculo(0) && console.log(`Auto: ${registro.obtenerVehiculo(0)?.getMarca()} ${registro.obtenerVehiculo(0)?.getModelo()}, Año: ${registro.obtenerVehiculo(0)?.getAño()}`);
