import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TerminalService} from '../../../service/terminal.service';
import {Person} from '../../../modelsApp/userModel';
import {TerminalModel} from '../../../modelsApp/terminalModel';

@Component({
  selector: 'app-combo-terminal-one',
  templateUrl: './combo-terminal-one.component.html',
  styleUrls: ['./combo-terminal-one.component.css']
})
export class ComboTerminalOneComponent implements OnInit {

    constructor(private service:TerminalService) { }

    title="Terminal"
    @Input()
        placeHold;


    @Input()
        buttonHide:boolean=false;
    items:any[]=[];

    @Output() enviar = new EventEmitter();

    @Input() selected:string;
    display: boolean = false;

    ngOnInit() {
        this.service.find().subscribe(e=>{
            e.forEach(f=>{
                this.items.push({
                    label:TerminalModel.getString(f),
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
                    label:TerminalModel.getString(f),
                    value:f.id
                });
            })
            this.selected=x.id;
            this.display=false;
            this.enviarId();
        })
    }
}
