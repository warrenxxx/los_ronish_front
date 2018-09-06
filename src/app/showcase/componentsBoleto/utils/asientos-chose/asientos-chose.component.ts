import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from '../../../../components/common/menuitem';

@Component({
    selector: 'app-asientos-chose',
    templateUrl: './asientos-chose.component.html',
    styleUrls: ['./asientos-chose.component.css']
})
export class AsientosChoseComponent implements OnInit {
    gg = '[{"num":0,"type":"cama"},{"num":1,"type":"cama"},{"num":"-","type":"diseable"},{"num":2,"type":"cama"},{"num":3,"type":"cama"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":4,"type":"normal"},{"num":5,"type":"normal"},{"num":6,"type":"normal"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":7,"type":"normal"},{"num":8,"type":"normal"},{"num":9,"type":"normal"},{"num":10,"type":"normal"},{"num":"-","type":"diseable"},{"num":11,"type":"normal"},{"num":12,"type":"normal"},{"num":13,"type":"normal"},{"num":14,"type":"normal"},{"num":"-","type":"diseable"},{"num":15,"type":"normal"},{"num":16,"type":"normal"},{"num":17,"type":"normal"},{"num":18,"type":"normal"},{"num":"-","type":"diseable"},{"num":19,"type":"normal"},{"num":20,"type":"normal"},{"num":21,"type":"normal"},{"num":22,"type":"normal"},{"num":"-","type":"diseable"},{"num":23,"type":"normal"},{"num":24,"type":"normal"},{"num":25,"type":"normal"},{"num":26,"type":"normal"},{"num":"-","type":"diseable"},{"num":27,"type":"normal"},{"num":28,"type":"normal"},{"num":29,"type":"normal"},{"num":30,"type":"normal"},{"num":"-","type":"diseable"},{"num":31,"type":"normal"},{"num":32,"type":"normal"},{"num":33,"type":"normal"},{"num":34,"type":"normal"},{"num":"-","type":"diseable"},{"num":35,"type":"normal"},{"num":36,"type":"normal"},{"num":37,"type":"normal"},{"num":38,"type":"normal"},{"num":"-","type":"diseable"},{"num":39,"type":"normal"},{"num":40,"type":"normal"},{"num":41,"type":"normal"},{"num":42,"type":"normal"},{"num":"-","type":"diseable"},{"num":43,"type":"normal"},{"num":44,"type":"normal"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":45,"type":"ejecutivo"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":46,"type":"ejecutivo"},{"num":47,"type":"ejecutivo"},{"num":48,"type":"ejecutivo"},{"num":49,"type":"ejecutivo"},{"num":"-","type":"diseable"},{"num":50,"type":"ejecutivo"},{"num":51,"type":"ejecutivo"},{"num":52,"type":"ejecutivo"},{"num":53,"type":"ejecutivo"},{"num":"-","type":"diseable"},{"num":54,"type":"cama"},{"num":55,"type":"cama"},{"num":56,"type":"cama"},{"num":57,"type":"cama"},{"num":"-","type":"diseable"},{"num":58,"type":"cama"},{"num":59,"type":"cama"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"","type":"inactive"},{"num":"-","type":"diseable"},{"num":"","type":"inactive"},{"num":"","type":"inactive"}]';

    constructor() {
    }

    @Input()
    entrada :any[]= JSON.parse(this.gg);

    @Input()
    tipos = [
        'normal',
        'cama',
        'ejecutivo',
        'inactivo'
    ];
    @Input()
    nPisos: number = 2;

    @Output() enviar = new EventEmitter();

    nlarg: Number;

    details2: any[];
    titles=[
        "Primero Piso",
        "Segundo Piso",
        "Tercer Piso"
    ];
    ngOnInit() {
        this.nlarg=(this.entrada.length/this.nPisos)/5;
        this.ACT2();
    }

    colors = [
        'ui-button-secondary',
        'ui-button-success',
        'ui-button-info',
        'ui-button-warning',
        'ui-button-danger'
    ];

    colorTypo = {};

    ACT2() {
        let k = 0;
//        this.tipos.push('inactive');
        this.tipos.forEach(e => {
            this.colorTypo[e] = this.colors[k++];
        });
        this.details2 = [];
        let aux = -1;
        for (let i = 0; i < this.nPisos; i++) {
            this.details2.push([]);
            for (let j = 0; j < this.nlarg; j++) {
                this.details2[i].push([]);
                for (let k = 0; k < 5; k++) {
                    aux++;
                    if (k != 2) {

                        let mitem = [];
                        for (let tipo of this.tipos) {
                            let ii = i, jj = j, kk = k;

                            let tipot = tipo;
                            mitem.push(
                                {
                                    label: tipot + '', color: this.colorTypo[tipo], command: () => {
                                        this.details2[ii][jj][kk]['style'] = this.colorTypo[tipot];
                                        this.details2[ii][jj][kk]['type'] = tipot;
                                        this.details2[ii][jj][kk]['num'] = '';

                                        this.act2();
                                    }
                                }
                            );
                        }

                        this.details2[i][j].push(
                            {
                                num: this.entrada[aux]['num'],
                                type: this.entrada[aux]['type'],
                                style: this.colorTypo[this.entrada[aux]['type']],
                                menuItem: mitem
                            }
                        );
                    }
                    else
                        this.details2[i][j].push({num: -1, type: 'diseable', style: ''});
                }
            }
        }

    }


    finalItems = [];

    act2() {
        this.finalItems = [];
        let aux = 0;
        for (let i = 0; i < this.nPisos; i++) {
            for (let j = 0; j < this.nlarg; j++) {
                for (let k = 0; k < 5; k++) {
                    if (this.details2[i][j][k].type != 'inactive' && this.details2[i][j][k].type != 'diseable')
                        this.details2[i][j][k].num = aux++;
                    this.finalItems.push(
                        {
                            num: this.details2[i][j][k].num,
                            type: this.details2[i][j][k].type
                        }
                    );
                }
            }
        }
    }

    enviarDatos() {
        this.act2();
        this.enviar.emit({
            entrada:this.finalItems,
            pisos:this.nPisos,
        })
    }
}

