import {RefModel} from '../utils/RefModel';
import {Observable} from 'rxjs';
import {Person} from './userModel';

export class VehiculoModel {
    id:string;
    modelo:string;
    NroPisos:Number;
    tipoVeiculo:TipoVeiculo;
    idPersonaTerramozas:RefModel[];
    idPersonaChoferes:RefModel[];
    asientos:Asiento[];
    terramozas:Person;
    choferes:Person;


    constructor(id: string, modelo: string, NroPisos: Number, tipoVeiculo: TipoVeiculo, idPersonaTerramozas: RefModel[], idPersonaChoferes: RefModel[], asientos: Asiento[], terramozas: Person, choferes: Person) {
        this.id = id;
        this.modelo = modelo;
        this.NroPisos = NroPisos;
        this.tipoVeiculo = tipoVeiculo;
        this.idPersonaTerramozas = idPersonaTerramozas;
        this.idPersonaChoferes = idPersonaChoferes;
        this.asientos = asientos;
        this.terramozas = terramozas;
        this.choferes = choferes;
    }

    public static empty():VehiculoModel{
        return new VehiculoModel("","",0,TipoVeiculo.empty(),[],[],[],Person.empty(),Person.empty());
    }

    static getString(f: VehiculoModel) {
        return f.modelo;
    }
}
export class TipoVeiculo {
     tipo:string;
     Descripcion:string;

    constructor(tipo: string, Descripcion: string) {
        this.tipo = tipo;
        this.Descripcion = Descripcion;
    }
    public static empty():TipoVeiculo{
        return new TipoVeiculo("","");
    };
    public getString(){
        return this.tipo+" - "+this.Descripcion;
    }
}
export class Asiento {
     num:Number;
     tipo:string;


    constructor(num: Number, tipo: string) {
        this.num = num;
        this.tipo = tipo;
    }

    public static empty():Asiento{
        return new Asiento(0,"");
    }
}

