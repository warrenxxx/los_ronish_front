import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../../../modelsApp/userModel';
import {PersonService} from '../../../service/person.service';
import {environment} from '../../../../../environments/environment';
import {MessageService} from '../../../../components/common/messageservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private service:PersonService,private messageService:MessageService,private route:Router) { }
  title="Person";
  enviroment=environment;
  objetos:Person[];
  cols:any[];
  objeto:Person;
  displayDialog: boolean;
    uploadedFiles=[];

  ngOnInit() {
      if(!localStorage.getItem("currentUser") || JSON.parse(localStorage.getItem("currentUser"))['role']!='admin'){this.route.navigate(["/"])}
      this.objeto=Person.empty();
      this.act();
      this.cols = [
          {header: "Nombre",    field: "nombre"},
          {header: "Apellido",  field: "apellido"},
          {header: "Direccion", field: "direccion"},
          {header: "Dni",       field: "dni"},
          {header: "Telefono",  field: "telefono"},
          {header: "Celular",   field: "celular"},
          {header: "Email",     field: "email"},
          {header: "idImage",   field: "idImage"},
      ];
  }

  act(){
      this.service.find().subscribe(e=>{
          this.objetos=e;
      },e=>{

      })
  }
    onUpload(event) {
        for(let file of event.files)
            this.uploadedFiles.push(file);
        this.objeto.idImage=event["xhr"]["response"];
        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
    onRowSelect(event) {
      console.log(event.data);
        this.objeto=event.data;
        this.displayDialog = true;
    }
    showDialogToAdd() {
      this.objeto=Person.empty();
        this.displayDialog = true;
    }


    save(){
      this.service.insert(this.objeto).subscribe(
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
          console.log(this.selectButton);
          this.displayDialog=false;
          this.enviar.emit(this.objeto)
      }
    @Output() enviar = new EventEmitter();


}
