"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (index, marca, modelo, año) {
        if (index >= 0 && index < this.vehiculos.length) {
            var vehiculo = this.vehiculos[index];
            if (marca) {
                vehiculo.setMarca(marca);
            }
            if (modelo) {
                vehiculo.setModelo(modelo);
            }
            if (año) {
                vehiculo.setAño(año);
            }
        }
    };
    RegistroAutomotor.prototype.darDeBaja = function (index) {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos.splice(index, 1);
        }
    };
    RegistroAutomotor.prototype.obtenerVehiculo = function (index) {
        if (index >= 0 && index < this.vehiculos.length) {
            return this.vehiculos[index];
        }
        return undefined;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
