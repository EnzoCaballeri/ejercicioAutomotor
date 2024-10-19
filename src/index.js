"use strict";
var _a, _b, _c;
exports.__esModule = true;
var registroAutomotor_1 = require("./registroAutomotor");
var auto_1 = require("./auto");
var readlineSync = require("readline-sync");
var registro = new registroAutomotor_1.RegistroAutomotor();
// Solicitar datos al usuario
var marca = readlineSync.question('Ingrese la marca del auto: ');
var modelo = readlineSync.question('Ingrese el modelo del auto: ');
var año = readlineSync.questionInt('Ingrese el año del auto: ');
// Crear una instancia de Auto con los datos ingresados
var auto1 = new auto_1.Auto(marca, modelo, año);
registro.agregarVehiculo(auto1);
// Mostrar los vehículos agregados
registro.obtenerVehiculo(0) && console.log("Auto: ".concat((_a = registro.obtenerVehiculo(0)) === null || _a === void 0 ? void 0 : _a.getMarca(), " ").concat((_b = registro.obtenerVehiculo(0)) === null || _b === void 0 ? void 0 : _b.getModelo(), ", A\u00F1o: ").concat((_c = registro.obtenerVehiculo(0)) === null || _c === void 0 ? void 0 : _c.getAño()));
