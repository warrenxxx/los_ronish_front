import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TerminalService} from '../../../service/terminal.service';
import {VehiculoService} from '../../../service/vehiculo.service';
import {Person} from '../../../modelsApp/userModel';
import {VehiculoModel} from '../../../modelsApp/vehiculoModel';

@Component({
  selector: 'app-combo-vehiculo-one',
  templateUrl: './combo-vehiculo-one.component.html',
  styleUrls: ['./combo-vehiculo-one.component.css']
})
export class ComboVehiculoOneComponent implements OnInit {

    constructor(private service:VehiculoService) { }


    title="Vehiculo"
    items:any[]=[];

    @Output() enviar = new EventEmitter();

    @Input() selected:string;
    display: boolean = false;

    ngOnInit() {
        this.service.find().subscribe(e=>{
            e.forEach(f=>{
                this.items.push({
                    label:VehiculoModel.getString(f),
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
                    label:VehiculoModel.getString(f),
                    value:f.id
                });
            });
            this.selected=x.id;
            this.display=false;
            this.enviarId();
        })
    }
}
