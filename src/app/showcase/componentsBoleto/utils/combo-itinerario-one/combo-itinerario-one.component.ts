import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PersonService} from '../../../service/person.service';
import {ItinerarioService} from '../../../service/itinerario.service';
import {ItinerarioModel} from '../../../modelsApp/itinerarioModel';
import {Person} from '../../../modelsApp/userModel';

@Component({
  selector: 'app-combo-itinerario-one',
  templateUrl: './combo-itinerario-one.component.html',
  styleUrls: ['./combo-itinerario-one.component.css']
})
export class ComboItinerarioOneComponent implements OnInit {
    constructor(private service:ItinerarioService) { }

    title="Itinerario"
    items:any[]=[];

    @Output() enviar = new EventEmitter();

    @Input() selected:string;
    display: boolean = false;

    ngOnInit() {
        this.service.find().subscribe(e=>{
            e.forEach(f=>{
                f.fechaSalida=new Date(f.fechaSalida);
                f.fechaLLegada=new Date(f.fechaLLegada);
            })
            e.forEach(f=>{
                this.items.push({
                    label:ItinerarioModel.getString(f),
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
                f.fechaSalida=new Date(f.fechaSalida);
                f.fechaLLegada=new Date(f.fechaLLegada);
            })
            e.forEach(f=>{
                this.items.push({
                    label:ItinerarioModel.getString(f),
                    value:f.id
                });
            })
            this.selected=x.id;
            this.display=false;
            this.enviarId()
        })

    }

}
