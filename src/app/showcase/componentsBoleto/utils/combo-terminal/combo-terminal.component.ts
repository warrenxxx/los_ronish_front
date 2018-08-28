import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonService} from '../../../service/person.service';
import {TerminalService} from '../../../service/terminal.service';

@Component({
  selector: 'app-combo-terminal',
  templateUrl: './combo-terminal.component.html',
  styleUrls: ['./combo-terminal.component.css']
})
export class ComboTerminalComponent implements OnInit {

    constructor(private service:TerminalService) { }


    items:any[]=[];

    @Output() enviar = new EventEmitter();

    selected:string[]=[];

    ngOnInit() {
        this.service.find().subscribe(e=>{
            e.forEach(f=>{
                this.items.push({
                    label:f.nombreTerminal,
                    value:f.id
                });
            })
        })
    }
    enviarId(){


        this.enviar.emit(this.selected)
    }

}
