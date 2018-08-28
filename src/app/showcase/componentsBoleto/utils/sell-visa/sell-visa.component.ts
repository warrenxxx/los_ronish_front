import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sell-visa',
  templateUrl: './sell-visa.component.html',
  styleUrls: ['./sell-visa.component.css']
})
export class SellVisaComponent implements OnInit {

  constructor() { }

      @Input()
      nombre="Nando";
    @Input()
    apellido="Durex";
    @Input()
    dni="0000147";

    @Input()
    boleta="00001-55-2144";

    @Input()
    total="45";



    @Output() enviar = new EventEmitter();
  ngOnInit() {
  }
  vender(){
      this.enviar.emit(true)
  }

}
