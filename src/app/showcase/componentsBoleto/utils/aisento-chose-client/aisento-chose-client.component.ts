import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {isDigit} from 'codelyzer/angular/styles/chars';

@Component({
    selector: 'app-aisento-chose-client',
    templateUrl: './aisento-chose-client.component.html',
    styleUrls: ['./aisento-chose-client.component.css']
})
export class AisentoChoseClientComponent implements OnInit, OnChanges {

    gg = '[{"num":0,"type":"cama"},{"num":1,"type":"cama"},{"num":"-","type":"diseable"},{"num":2,"type":"cama"},{"num":3,"type":"cama"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":4,"type":"normal"},{"num":5,"type":"normal"},{"num":6,"type":"normal"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":7,"type":"normal"},{"num":8,"type":"normal"},{"num":9,"type":"normal"},{"num":10,"type":"normal"},{"num":"-","type":"diseable"},{"num":11,"type":"normal"},{"num":12,"type":"normal"},{"num":13,"type":"normal"},{"num":14,"type":"normal"},{"num":"-","type":"diseable"},{"num":15,"type":"normal"},{"num":16,"type":"normal"},{"num":17,"type":"normal"},{"num":18,"type":"normal"},{"num":"-","type":"diseable"},{"num":19,"type":"normal"},{"num":20,"type":"normal"},{"num":21,"type":"normal"},{"num":22,"type":"normal"},{"num":"-","type":"diseable"},{"num":23,"type":"normal"},{"num":24,"type":"normal"},{"num":25,"type":"normal"},{"num":26,"type":"normal"},{"num":"-","type":"diseable"},{"num":27,"type":"normal"},{"num":28,"type":"normal"},{"num":29,"type":"normal"},{"num":30,"type":"normal"},{"num":"-","type":"diseable"},{"num":31,"type":"normal"},{"num":32,"type":"normal"},{"num":33,"type":"normal"},{"num":34,"type":"normal"},{"num":"-","type":"diseable"},{"num":35,"type":"normal"},{"num":36,"type":"normal"},{"num":37,"type":"normal"},{"num":38,"type":"normal"},{"num":"-","type":"diseable"},{"num":39,"type":"normal"},{"num":40,"type":"normal"},{"num":41,"type":"normal"},{"num":42,"type":"normal"},{"num":"-","type":"diseable"},{"num":43,"type":"normal"},{"num":44,"type":"normal"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":45,"type":"ejecutivo"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":46,"type":"ejecutivo"},{"num":47,"type":"ejecutivo"},{"num":48,"type":"ejecutivo"},{"num":49,"type":"ejecutivo"},{"num":"-","type":"diseable"},{"num":50,"type":"ejecutivo"},{"num":51,"type":"ejecutivo"},{"num":52,"type":"ejecutivo"},{"num":53,"type":"ejecutivo"},{"num":"-","type":"diseable"},{"num":54,"type":"cama"},{"num":55,"type":"cama"},{"num":56,"type":"cama"},{"num":57,"type":"cama"},{"num":"-","type":"diseable"},{"num":58,"type":"cama"},{"num":59,"type":"cama"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"}]';


    constructor() {
    }
    titles=[
        "Primero Piso",
        "Segundo Piso",
        "Tercer Piso"
    ];
    @Input()
    entrada: any[] = JSON.parse(this.gg);

    @Input()
    tipos = [
        'normal',
        'cama',
        'ejecutivo'
    ];
    @Input()
    nPisos: number = 2;

    @Output() enviar = new EventEmitter();

    @Input() reservados: any[] = [
        1, 2, 5, 16, 18, 24, 25, 26, 98, 52, 45, 12
    ];


    nlarg: Number;

    details2: any[];

    ngOnInit() {
        this.ACT2();
    }

    isDigit(n) {
        return Boolean([true, true, true, true, true, true, true, true, true, true][n]);
    }

    actReservados() {
        for (let i = 0; i < this.nPisos; i++) {
            for (let j = 0; j < this.nlarg; j++) {
                for (let k = 0; k < 5; k++) {
                    if (k != 2) {
                        let aux = this.details2[i][j][k]['num'];


                            if (this.reservados.indexOf(aux) != -1) {
                                console.log(aux)
                                console.log(this.details2[i][j][k])
                                this.details2[i][j][k]['reserved'] = true;
                            }
                    }
                }
            }
        }

    }


    ACT2() {
        this.nlarg = (this.entrada.length / this.nPisos) / 5;
        let k = 0;

        this.details2 = [];
        let aux = -1;
        for (let i = 0; i < this.nPisos; i++) {
            this.details2.push([]);
            for (let j = 0; j < this.nlarg; j++) {
                this.details2[i].push([]);
                for (let k = 0; k < 5; k++) {
                    aux++;
                    if (k != 2) {
                        if (this.reservados.indexOf(aux) != -1) {
                            this.details2[i][j].push({
                                num: this.entrada[aux]['num'] || '-',
                                type: this.entrada[aux]['type'],
                                reserved: true,
                                porReservar: false,
                            });
                        } else {
                            let aux2 = (this.entrada[aux]['type'] == 'inactive' || this.entrada[aux]['type'] == 'diseable');
                            this.details2[i][j].push({
                                num: this.entrada[aux]['num'] || '-',
                                type: this.entrada[aux]['type'],
                                reserved: aux2,
                                porReservar: false,
                            });

                        }

                    }
                    else
                        this.details2[i][j].push({num: -1, type: 'diseable', style: ''});
                }
            }
        }
        this.actReservados()
    }



    res: any[] = [];
    total:Number;

    handleChange(x) {
        this.res = [];
        for (let i = 0; i < this.nPisos; i++) {
            for (let j = 0; j < this.nlarg; j++) {
                for (let k = 0; k < 5; k++) {
                    if (this.details2[i][j][k]['porReservar'] == true) {
                        this.res.push(this.details2[i][j][k]['num']);
                    }
                }
            }
        }
        this.objects=[];
        this.res.forEach(e=>{
            this.objects.push({
                asiento:e,
                costo:this.precio
            })

        });
        this.total=this.precio*this.res.length;
        this.enviarDatos()
    }

    enviarDatos() {

        this.enviar.emit(this.res);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.actReservados();
        console.log(this.reservados);

    }

    @Input()
    precio:number;


    cols:any[]=[
        { field: 'asiento', header: 'Asiento' },
        {field:'costo',header:'Costo'}
    ];
    objects:Costos[]=[];
    objectsSelected:Costos[];


    cambioUnbotos(x) {

        let id=x.id;
        let isActive=x.isActive;
        console.log("dd",id,isActive);
        if(isActive && this.res.indexOf(id)==-1){
            this.res.push(id);
        }
        if(isActive==false && this.res.indexOf(id)!=-1){
            let aux=this.res.indexOf(id);
            this.res.splice(aux,1);
        }
        this.objects=[];
        this.res.forEach(e=>{
            this.objects.push({
                asiento:e,
                costo:this.precio
            })

        });
        this.total=this.precio*this.res.length;
        this.enviarDatos();
    }
}
interface Costos {
    asiento,costo
}
