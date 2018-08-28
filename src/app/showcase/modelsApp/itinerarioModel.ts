import {RefModel} from '../utils/RefModel';
import {EmtpyInterface} from './emtpyInterface';
import {VehiculoModel} from './vehiculoModel';
import {TerminalModel} from './terminalModel';

export class ItinerarioModel {
    id:string;
        idVeiculo:RefModel;
        idterminalOrigen:RefModel;
        idterminalDestino:RefModel;
        fechaSalida:Date;
        fechaLLegada:Date;
        costo:Number;
        reservados:Number[];

        vehiculo:VehiculoModel;
        origen:TerminalModel;
        destino:TerminalModel;


    constructor(id: string, idVeiculo: RefModel, idterminalOrigen: RefModel, idterminalDestino: RefModel, fechaSalida: Date, fechaLLegada: Date, costo: Number, reservados: Number[], vehiculo: VehiculoModel, origen: TerminalModel, destino: TerminalModel) {
        this.id = id;
        this.idVeiculo = idVeiculo;
        this.idterminalOrigen = idterminalOrigen;
        this.idterminalDestino = idterminalDestino;
        this.fechaSalida = fechaSalida;
        this.fechaLLegada = fechaLLegada;
        this.costo = costo;
        this.reservados = reservados;
        this.vehiculo = vehiculo;
        this.origen = origen;
        this.destino = destino;
    }

    public static empty():ItinerarioModel{
        return new ItinerarioModel("",RefModel.empty(),RefModel.empty(),RefModel.empty(),new Date(),new Date(),0,[],VehiculoModel.empty(),TerminalModel.empty(),TerminalModel.empty());
    }
    public static getString(x:ItinerarioModel):string{
        return x.origen.nombreTerminal+"-"+x.destino.nombreTerminal+" "+x.fechaSalida.getDate()+"/"+x.fechaSalida.getMonth();
    }

}
