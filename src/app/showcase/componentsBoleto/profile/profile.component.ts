import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../modelsApp/userModel';
import {environment} from '../../../../environments/environment';
import {MessageService} from '../../../components/common/messageservice';
import {ProfileService} from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    enviroment=environment;
  constructor( private messageService:MessageService ,private profileService:ProfileService) { }

  sexo=[
      {name:'Hombre'},{name:'Mujer'},{name:'Otro'},{name:'Jhoel'}];
  currentUser:UserModel;
  sexoescogido;

    uploadedFiles: any[] = [];
  ngOnInit() {
      this.currentUser=JSON.parse( localStorage.getItem(environment.currentUser)) as UserModel;
        this.sexoescogido={name:this.currentUser.sexo};
  }
    onUpload(event) {
        for(let file of event.files)
            this.uploadedFiles.push(file);
        this.currentUser.person.idImage=event["xhr"]["response"];
        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

    actualizar(){
//        this.currentUser.sexo=this.currentUser.sexo["name"];
        this.profileService.actualizarUser(this.currentUser).subscribe(e=>{
            localStorage.setItem(environment.currentUser,JSON.stringify(this.currentUser));
            this.messageService.add({severity: 'Info', summary: 'Exito', detail: ''});
            location.reload();
        },err=>{
            this.messageService.add({severity: 'Error', summary: 'No se pudo actualizar', detail: ''});
        })
    }
}

