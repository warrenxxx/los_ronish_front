import {RefModel} from '../utils/RefModel';

export class VentaModel {
    idVenta: string;
    idPasajero: RefModel;
    idVendedor: RefModel;
    idReserva: RefModel;
    boleta: Boleta;
    encomiendas: Encomienda[];
}

export class Boleta {
    codBoleta: String;
    total: Number;
    fechaEmicion: Number;
    descripcion: String;
}

export class Encomienda {
    id: String;
    idTerminaOrigen: RefModel;
    idTerminaDestino: RefModel;
    idUserRemitente: RefModel;
    idPersonDestinatario: RefModel;
    idVehiculo: RefModel;
    precio: Number;
    descuento: Number;
    fechaRegistro: Date;
}
