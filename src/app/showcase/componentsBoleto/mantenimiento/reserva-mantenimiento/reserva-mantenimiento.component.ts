import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../../components/common/messageservice';
import {PersonService} from '../../../service/person.service';
import {environment} from '../../../../../environments/environment';
import {ComBox} from '../../../modelsApp/com-box';
import {RefModel} from '../../../utils/RefModel';
import {ReservaService} from '../../../service/reserva.service';
import {ReservaModel} from '../../../modelsApp/reservaModel';
import {ItinerarioModel} from '../../../modelsApp/itinerarioModel';
import {Person} from '../../../modelsApp/userModel';

@Component({
  selector: 'app-reserva-mantenimiento',
  templateUrl: './reserva-mantenimiento.component.html',
  styleUrls: ['./reserva-mantenimiento.component.css']
})
export class ReservaMantenimientoComponent implements OnInit {

    constructor(private service:ReservaService,private messageService:MessageService,private personService:PersonService) { }
    title="Reserva";
    enviroment=environment;
    objetos:ReservaModel[];

    cols:any[];
    objeto:ReservaModel=ReservaModel.empty();
    displayDialog: boolean;

    uploadedFiles=[];

    colsId:ComBox[][]=[];

    ngOnInit() {
        this.objeto=ReservaModel.empty();
        this.act();
        this.cols = [
            {header: "Pasajero",              field: "pasajero"           ,type:"pasajero"},
            {header: "Fecha Reserva",         field: "fechaReserva"    ,type:"date" ,value:new Date()},
            {header: "Itinerario",            field: "itinerario"    ,type:"itinerario"},
            {header: "Estado",                field: "stado"    ,type:"boolean" },
            {header: "Numero Asiento",                field: "numeroAsiento"    ,type:"string" }
        ];
        this.personService.findBox().subscribe(e=>{
            this.colsId.push(e);
        })
    }
    act(){
        this.service.find().subscribe(e=>{
            this.objetos=e;
            e.forEach(f=>{
                f.fechaReserva=new Date(f.fechaReserva);
            })
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
                this.objeto=ReservaModel.empty();
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

    getDateToString(y){
        let x:Date=new  Date(y);
        return x.getDate()+"/"+x.getMonth()+"/"+x.getFullYear()+" "+x.getHours()+":"+x.getMinutes();
    }

    cambiarPasajero(x){
        this.objeto.idPersonaPasajero=new RefModel(x,"person");
    }

    getPasajeroSelected(){
        return Person.getString(this.objeto.pasajero);
    }

    cambiarItinerario(x){

        this.objeto.idItinerario=new RefModel(x,"person");
    }
    getItinerarioSelected(){
        return ItinerarioModel.getString(this.objeto.itinerario);
    }
}
