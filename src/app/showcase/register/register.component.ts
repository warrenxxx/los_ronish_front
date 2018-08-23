import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RegisterDto} from './dto/RegisterDto';
import {RegisterService} from './register.service';
import {MessageService} from '../../components/common/messageservice';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user:RegisterDto=new RegisterDto("","","","","","","","","","","");
    uploadedFiles: any[] = [];
  constructor(private registerService:RegisterService,private messageService:MessageService) { }
    @Output() voted = new EventEmitter<boolean>();

  ngOnInit() {}
  enviroment=environment;

  register(){
      this.registerService.registerUser(this.user).subscribe(e=>{
          this.voted.emit(true)
          this.uploadedFiles=[];
          this.user=new RegisterDto("","","","","","","","","","","");

      },err=>{
          this.voted.emit(false)
      })
  }
    onUpload(event) {
        for(let file of event.files)
            this.uploadedFiles.push(file);
        this.user.idImage=event["xhr"]["response"];
        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}
