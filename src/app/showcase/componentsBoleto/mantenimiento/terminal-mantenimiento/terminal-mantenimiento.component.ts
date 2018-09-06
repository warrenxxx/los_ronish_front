import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageService} from '../../../../components/common/messageservice';
import {environment} from '../../../../../environments/environment';
import {TerminalService} from '../../../service/terminal.service';
import {TerminalModel} from '../../../modelsApp/terminalModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-terminal-mantenimiento',
  templateUrl: './terminal-mantenimiento.component.html',
  styleUrls: ['./terminal-mantenimiento.component.css']
})
export class TerminalMantenimientoComponent implements OnInit {

    constructor(private service:TerminalService,private messageService:MessageService,private route:Router) { }
    title="Terminal";
    enviroment=environment;
    objetos:TerminalModel[];
    cols:any[];
    objeto:TerminalModel;
    displayDialog: boolean;

    uploadedFiles=[];

    ngOnInit() {
 //       if(!localStorage.getItem("currentUser") || JSON.parse(localStorage.getItem("currentUser"))['role']!='admin'){this.route.navigate(["/"])}
        this.objeto=TerminalModel.empty();
        this.act();
        this.cols = [
            {header: "Nombre del Terminal",    field: "nombreTerminal"},
        ];
    }

    act(){
        this.service.find().subscribe(e=>{
            console.log("ss");
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
        this.displayDialog = true;
    }
    showDialogToAdd() {
        this.objeto=TerminalModel.empty();
        this.displayDialog = true;
    }


    save(){
        this.service.save(this.objeto).subscribe(
            e=>{
                this.messageService.add({severity:'success', summary: 'Success Message', detail:'Exito'});
                this.displayDialog=false;
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
    @Input()
    selectButton:boolean=false;
    selectedButton(){
        this.displayDialog=false;
        this.enviar.emit(this.objeto)
    }
    @Output() enviar = new EventEmitter();

}
