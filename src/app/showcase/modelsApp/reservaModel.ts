import {EmtpyInterface} from './emtpyInterface';
import {Person} from './userModel';
import {ItinerarioModel} from './itinerarioModel';
import {RefModel} from '../utils/RefModel';

export class ReservaModel {
    id: string;
    idPersonaPasajero: RefModel;
    fechaReserva: Date;
    idItinerario: RefModel;
    stado: boolean;
    numeroAsiento: Number;
    pasajero: Person;
    itinerario: ItinerarioModel;


    constructor(id: string, idPersonaPasajero: RefModel, fechaReserva: Date, idItinerario: RefModel, stado: boolean, numeroAsiento: Number, pasajero: Person, itinerario: ItinerarioModel) {
        this.id = id;
        this.idPersonaPasajero = idPersonaPasajero;
        this.fechaReserva = fechaReserva;
        this.idItinerario = idItinerario;
        this.stado = stado;
        this.numeroAsiento = numeroAsiento;
        this.pasajero = pasajero;
        this.itinerario = itinerario;
    }

    public static empty(): ReservaModel {
        return new ReservaModel('', RefModel.empty(), new Date(), RefModel.empty(), false,-1, Person.empty(), ItinerarioModel.empty());
    }
}
