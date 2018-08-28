import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonService} from '../../../service/person.service';
import {VehiculoService} from '../../../service/vehiculo.service';

@Component({
  selector: 'app-combo-vehiculo',
  templateUrl: './combo-vehiculo.component.html',
  styleUrls: ['./combo-vehiculo.component.css']
})
export class ComboVehiculoComponent implements OnInit {

    constructor(private vehiculoService:VehiculoService) { }


    items:any[]=[];

    @Output() enviar = new EventEmitter();

    selected:string[]=[];

    ngOnInit() {
        this.vehiculoService.find().subscribe(e=>{
            e.forEach(f=>{
                this.items.push({
                    label:f.modelo,
                    value:f.id
                });
            })
        })
    }
    enviarId(){
        this.enviar.emit(this.selected)
    }

}
