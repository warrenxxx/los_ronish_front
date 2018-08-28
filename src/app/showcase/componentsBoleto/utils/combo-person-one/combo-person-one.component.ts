import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VehiculoService} from '../../../service/vehiculo.service';
import {Person} from '../../../modelsApp/userModel';
import {PersonService} from '../../../service/person.service';

@Component({
  selector: 'app-combo-person-one',
  templateUrl: './combo-person-one.component.html',
  styleUrls: ['./combo-person-one.component.css']
})
export class ComboPersonOneComponent implements OnInit {

    constructor(private service:PersonService) { }

        title="Person"
        items:any[]=[];

        @Output() enviar = new EventEmitter();

        @Input() selected:string;
        display: boolean = false;

        ngOnInit() {
            this.service.find().subscribe(e=>{
                e.forEach(f=>{
                    this.items.push({
                        label:Person.getString(f),
                        value:f.id
                    });
                })
            })
        }
        enviarId(){
            this.enviar.emit(this.selected)
        }

        showDialog() {
            this.display=true;
        }

        enviado(x) {
            this.service.find().subscribe(e=>{
                e.forEach(f=>{
                    this.items.push({
                        label:Person.getString(f),
                        value:f.id
                    });
                })
                this.selected=x.id;
                this.display=false;
                this.enviarId()
            })
        }
}
