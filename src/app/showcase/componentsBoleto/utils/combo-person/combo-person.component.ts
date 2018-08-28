import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonService} from '../../../service/person.service';
import {Person} from '../../../modelsApp/userModel';


@Component({
  selector: 'app-combo-person',
  templateUrl: './combo-person.component.html',
  styleUrls: ['./combo-person.component.css']
})
export class ComboPersonComponent implements OnInit {

  constructor(private personService:PersonService) { }


  items:any[]=[];

    @Output() enviar = new EventEmitter();

  selected:string[]=[];

  ngOnInit() {
    this.personService.find().subscribe(e=>{
        e.forEach(f=>{
            this.items.push({
                label:f.dni+" "+f.nombre,
                value:f.id
            });
        })
    })
  }
  enviarId(){
      this.enviar.emit(this.selected)
  }

}
