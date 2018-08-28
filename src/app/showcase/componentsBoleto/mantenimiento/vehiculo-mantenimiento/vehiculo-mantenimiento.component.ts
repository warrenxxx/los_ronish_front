import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageService} from '../../../../components/common/messageservice';
import {environment} from '../../../../../environments/environment';
import {VehiculoService} from '../../../service/vehiculo.service';
import {VehiculoModel} from '../../../modelsApp/vehiculoModel';
import {PersonService} from '../../../service/person.service';
import {ComBox} from '../../../modelsApp/com-box';
import {Person} from '../../../modelsApp/userModel';

@Component({
  selector: 'app-vehiculo-mantenimiento',
  templateUrl: './vehiculo-mantenimiento.component.html',
  styleUrls: ['./vehiculo-mantenimiento.component.css']
})
export class VehiculoMantenimientoComponent implements OnInit {

    constructor(private service:VehiculoService,private messageService:MessageService,private personService:PersonService) { }
    title="Vehiculo";
    enviroment=environment;
    objetos:VehiculoModel[];

    objetoTerramoza:Person[];
    cols:any[];
    objeto:VehiculoModel=VehiculoModel.empty();
    displayDialog: boolean;

    uploadedFiles=[];

    colsId:ComBox[][]=[];

    dialogAsientos=false;

    ngOnInit() {
        this.objeto=VehiculoModel.empty();
        this.act();
        this.cols = [
                {header: "Modelo",              field: "modelo"         ,type:"string"},
//                {header: "Nro Asientos",        field: "NroAsientos"    ,type:"string"},
                {header: "Tipo",        field: ["tipoVeiculo","tipo"]     ,type:"string2"},
                {header: "Descripcion",        field: ["tipoVeiculo","Descripcion"]    ,type:"string2"},
                {header: "Terramozas",        field: "terramozas"    ,type:"idterramoza" },
            {header: "Choferes",        field: "choferes"    ,type:"idchoferes" },
//            {header: "Asientos",        field: "asientos"    ,type:"asientos" },
            ];

        this.personService.findBox().subscribe(e=>{
            this.colsId.push(e);
        })
    }
    act(){
        this.service.find().subscribe(e=>{
            console.log(e.length);
            this.objetos=e;
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
        console.log(this.objeto)
        this.displayDialog = true;
    }
    showDialogToAdd() {
        this.displayDialog = true;
    }
    save(){
        this.service.insert(this.objeto).subscribe(
            e=>{
                this.messageService.add({severity:'success', summary: 'Success Message', detail:'Exito'});
                this.displayDialog=false;
                this.objeto=VehiculoModel.empty();
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
        });
    }


    /// servicio

    cambioPersonsaTerramoza(x){
        this.objeto.idPersonaTerramozas=[];

        x.forEach(e=>{
            this.objeto.idPersonaTerramozas.push({
                id:e,
                collection:"persona"
            })
        })
    }
    cambioPersonsaChofer(x){
        this.objeto.idPersonaChoferes=[];

        x.forEach(e=>{
            console.log(e)
            this.objeto.idPersonaChoferes.push({
                id:e,
                collection:"persona"
            })
        })

    }
    @Input()
    selectButton:boolean=false;
    selectedButton(){
        this.displayDialog=false;
        console.log("ppp-->>",this.objeto)
        this.enviar.emit(this.objeto)
    }
    @Output() enviar = new EventEmitter();

    cambiarAsientos(x) {
        this.dialogAsientos=false;
        this.objeto.asientos=x.entrada;
        this.objeto.NroPisos=x.pisos;
        console.log(this.objeto);
    }
    getTipos(){
        let k=[];
        this.objeto.asientos.forEach(e=>{
            if(e['type']!='diseable' && e['type']!='inactive')
                k.push(e['type'])
        });
        k.push("inactive");
        return Array.from(new Set(k));
    }
}
