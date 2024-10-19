import { Vehiculo } from './Vehiculo';

export class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];

    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    public modificarVehiculo(index: number, marca?: string, modelo?: string, año?: number): void {
        if (index >= 0 && index < this.vehiculos.length) {
            const vehiculo = this.vehiculos[index];
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
    }

    public darDeBaja(index: number): void {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos.splice(index, 1);
        }
    }

    public obtenerVehiculo(index: number): Vehiculo | undefined {
        if (index >= 0 && index < this.vehiculos.length) {
            return this.vehiculos[index];
        }
        return undefined;
    }

    public listarVehiculos(): void {
        this.vehiculos.forEach((vehiculo, index) => {
            console.log(`Vehículo ${index + 1}: Marca: ${vehiculo.getMarca()}, Modelo: ${vehiculo.getModelo()}, Año: ${vehiculo.getAño()}`);
        });
    }
}
