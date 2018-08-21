import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RegisterDto} from './dto/RegisterDto';
import {RegisterService} from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user:RegisterDto=new RegisterDto("","","","","");
  constructor(private registerService:RegisterService) { }
    @Output() voted = new EventEmitter<boolean>();
  ngOnInit() {
  }

  register(){
      this.registerService.registerUser(this.user).subscribe(e=>{
          this.voted.emit(true)
      },err=>{
          this.voted.emit(false)
      })
  }

}
