import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageService} from '../../../../components/common/messageservice';
import {environment} from '../../../../../environments/environment';
import {PersonService} from '../../../service/person.service';
import {Person} from '../../../modelsApp/userModel';
import {ComBox} from '../../../modelsApp/com-box';
import {ItinerarioService} from '../../../service/itinerario.service';
import {ItinerarioModel} from '../../../modelsApp/itinerarioModel';
import {RefModel} from '../../../utils/RefModel';
import {TerminalModel} from '../../../modelsApp/terminalModel';
import {VehiculoModel} from '../../../modelsApp/vehiculoModel';
import {Router} from '@angular/router';
interface ColInt {
    header;
    field;
    type;
}
@Component({
  selector: 'app-itinerario-mantenimiento',
  templateUrl: './itinerario-mantenimiento.component.html',
  styleUrls: ['./itinerario-mantenimiento.component.css']
})
export class ItinerarioMantenimientoComponent implements OnInit {

    constructor(private service:ItinerarioService,private messageService:MessageService,private personService:PersonService,private route:Router) { }
    title="Itinerario";
    enviroment=environment;
    objetos:ItinerarioModel[];

    objetoTerramoza:Person[];
    cols:any[];
    objeto:ItinerarioModel=ItinerarioModel.empty();
    displayDialog: boolean;

    uploadedFiles=[];

    colsId:ComBox[][]=[];

    ngOnInit() {
        if(!localStorage.getItem("currentUser") || JSON.parse(localStorage.getItem("currentUser"))['role']!='admin'){this.route.navigate(["/"])}

        this.objeto=ItinerarioModel.empty();
        this.act();
        this.cols = [
            {header: "Vehiculo",              field: "vehiculo"           ,type:"idVehiculo"},
            {header: "Terminal Origen",        field: "origen"    ,type:"idOrigen"},
            {header: "Terminal Destino",        field: "destino"    ,type:"idDestino"},

            {header: "Fecha Salida",        field: "fechaSalida"    ,type:"date" },
            {header: "Fecha LLegada",        field: "fechaLLegada"    ,type:"date" },
            {header: "Costo",        field: "costo"    ,type:"string" },
        ];

        this.personService.findBox().subscribe(e=>{
            this.colsId.push(e);
            let X:Date=new  Date();
        })
    }


    act(){
        this.service.find().subscribe(e=>{
            console.log(e.length);
            this.objetos=e;
            this.objetos.forEach(f=>{
                f.fechaSalida=new Date(f.fechaSalida);
                f.fechaLLegada=new Date(f.fechaLLegada);
            })

        },e=>{

        })
    }
    onUpload(event) {
        for(let file of event.files)
            this.uploadedFiles.push(file);

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
    onRowSelect(event) {
        this.objeto=event.data;
        this.displayDialog = true;

    }
    showDialogToAdd() {

        this.displayDialog = true;
    }
    save(){
        this.service.save(this.objeto).subscribe(
            e=>{
                this.messageService.add({severity:'success', summary: 'Success Message', detail:'Exito'});
                this.displayDialog=false;
                this.objeto=ItinerarioModel.empty();
                this.act()
            },
            err=>{
                this.messageService.add({severity:'error', summary: 'Error Message', detail:' o shit'});
            }
        );
    }
    delete(){
        this.service.delete(this.objeto.id).subscribe(e=>{
            this.displayDialog=false;
            this.act()
        },err=>{

        });
    }


    /// servicio

    cambioPersonsaTerramoza(x){
        // this.objeto.idPersonaTerramozas=[];
        //
        // x.forEach(e=>{
        //     this.objeto.idPersonaTerramozas.push({
        //         id:e,
        //         collection:"persona"
        //     })
        // })
        // console.log(this.objeto);
    }
    cambioPersonsaChofer(x){
        // this.objeto.idPersonaChoferes=[];
        //
        // x.forEach(e=>{
        //     console.log(e)
        //     this.objeto.idPersonaChoferes.push({
        //         id:e,
        //         collection:"persona"
        //     })
        // })
        // console.log(this.objeto);
    }
    getDateToString(y){
        let x:Date=new  Date(y);
        return x.getDate()+"/"+x.getMonth()+"/"+x.getFullYear()+" "+x.getHours()+":"+x.getMinutes();
    }
    cambioVechiculo(x){
        console.log(x);
        this.objeto.idVeiculo=new RefModel(x,"vehiculo");
    }
    cambioTerminalOrigen(x){
        this.objeto.idterminalOrigen=new RefModel(x,"terminal");
    }
    cambioTerminalDestino(x){
        this.objeto.idterminalDestino=new RefModel(x,"terminal");
    }

    @Input()
    selectButton:boolean=false;
    selectedButton(){
        this.displayDialog=false;
        this.enviar.emit(this.objeto)
    }
    @Output() enviar = new EventEmitter();

    selectTerminalOrigen() {
        return TerminalModel.getString(this.objeto.origen);
    }

    selectVehiculo() {
        return VehiculoModel.getString(this.objeto.vehiculo)
    }

    selectTerminalDestino() {
        return TerminalModel.getString(this.objeto.destino)
    }
}
