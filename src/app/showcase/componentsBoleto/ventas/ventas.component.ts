import {Component, OnInit} from '@angular/core';
import {ItinerarioService} from '../../service/itinerario.service';
import {ItinerarioModel} from '../../modelsApp/itinerarioModel';
import {ReservaModel} from '../../modelsApp/reservaModel';
import {Local} from 'protractor/built/driverProviders';
import {RefModel} from '../../utils/RefModel';
import {ReservaService} from '../../service/reserva.service';
import {MessageService} from '../../../components/common/messageservice';
import {Router} from '@angular/router';
import {UserModel} from '../../modelsApp/userModel';

@Component({
    selector: 'app-ventas',
    templateUrl: './ventas.component.html',
    styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

    constructor(private route:Router,private itinerarioService: ItinerarioService,private reservaService:ReservaService,private messageService:MessageService) {
    }

    cols: any[];
    itinerariosIda: ItinerarioModel[] = [];
    itinerarioIda: ItinerarioModel = ItinerarioModel.empty();

    itinerariosRegreso: ItinerarioModel[] = [];
    itinerarioRegreso: ItinerarioModel = ItinerarioModel.empty();

    origen: string;
    destino: string;

    ida: Date;
    vuelta: Date;

    currntUser:UserModel;

    ngOnInit() {
        this.currntUser=JSON.parse(localStorage.getItem("currentUser"));
        this.cols = [
            {field: 'horario ', header: 'Horario'},
            {field: 'costo', header: 'Costo'},
        ];

    }



    recibirOrigen(x) {
        this.origen = x;
    }

    recibirDestino(x) {
        this.destino = x;
    }

    handleClick(x) {
        this.itinerarioService.findByDetail(this.origen, this.destino, this.ida).subscribe(e => {
            this.itinerariosIda = e;
            this.itinerariosIda.forEach(f => {
                f.fechaSalida = new Date(f.fechaSalida);
                f.fechaLLegada = new Date(f.fechaLLegada);

            });
        },err=>{},()=>{

        });
        this.itinerarioService.findByDetail(this.destino, this.origen, this.vuelta).subscribe(e => {
            this.itinerariosRegreso=e;
            this.itinerariosRegreso.forEach(f => {
                f.fechaSalida = new Date(f.fechaSalida);
                f.fechaLLegada = new Date(f.fechaLLegada);
                console.log("llegada->",f.fechaSalida)
            });

        });
    }

    dateToString(x: Date) {
        return  x.getHours() + ':' + x.getMinutes();
    }

    getDate(x: Date, y: Date) {
        return this.dateToString(x) + ' - ' + this.dateToString(y);
    }
    panelIda=false;
    onRowSelectIda($event: any) {
        if(this.itinerarioIda){
            this.panelIda=true;
        }else{
            this.panelIda=false;
        }
    }
    panelRegreso=false;
    onRowSelectRegreso($event: any) {
        if(this.itinerarioIda){
            this.panelRegreso=true;
        }else{
            this.panelRegreso=false;
        }
    }
    displayVentaIda=false;
    displayVentaRegreso=false;


    realizarVentaIda() {
        let user=JSON.parse(localStorage.getItem('currentUser'));
        if(this.reservadosIda.length>0)
        this.reservadosIda.forEach(e=>{
            let x:ReservaModel=new ReservaModel("",new RefModel(user['idPerson']['id'],'person'),new Date(),new RefModel(this.itinerarioIda.id,"resserva"),true,e,null,null);;
            this.reservaService.save(x).subscribe(e=>{
                this.displayVentaIda=false;
                this.messageService.add({severity:'success', summary:'Service Message', detail:'Exito'});
                setTimeout(()=> {
                    this.route.navigate(['/'])
                },500);
            });
        })

    }
    realizarVentaRegreso() {
        let user=JSON.parse(localStorage.getItem('currentUser'));
        if(this.reservadosRegerso.length>0)
            this.reservadosRegerso.forEach(e=>{
            let x:ReservaModel=new ReservaModel("",new RefModel(user['id'],'person'),new Date(),new RefModel(this.itinerarioRegreso.id,"resserva"),true,e,null,null);;
            this.reservaService.save(x).subscribe(e=>{
                this.messageService.add({severity:'success', summary:'Service Message', detail:'Exito'});
                setTimeout(()=> {
                    this.route.navigate(['/'])
                },500);

            });
        })
    }
    reservadosIda:any[];
    reservadosRegerso:any[];

    enviarRegerso(x) {
        this.reservadosIda=x;
    }

    enviarIda(x) {
        this.reservadosIda=x;
    }
}
