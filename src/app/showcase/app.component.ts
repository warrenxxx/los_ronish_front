import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {MenuItem, MessageService} from '../components/common/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('overlayState', [
            state('hidden', style({
                opacity: 0
            })),
            state('visible', style({
                opacity: 1
            })),
            transition('visible => hidden', animate('400ms ease-in')),
            transition('hidden => visible', animate('400ms ease-out'))
        ]),

        trigger('notificationTopbar', [
            state('hidden', style({
                height: '0',
                opacity: 0
            })),
            state('visible', style({
                height: '*',
                opacity: 1
            })),
            transition('visible => hidden', animate('400ms ease-in')),
            transition('hidden => visible', animate('400ms ease-out'))
        ])
    ],
})
export class AppComponent implements OnInit {

    menuActive: boolean=false;

    activeMenuId: string;

    notification: boolean = false;

    items: MenuItem[];

    displayLogin: boolean = false;
    displayRegister: boolean = false;


    disp={
        leftMenuDisplay:'none',
        contentMarginLeft:'0'
    };

    constructor(private messageService: MessageService){

    }

    showMenu(){
        this.disp.contentMarginLeft='300px';
        this.disp.leftMenuDisplay='block';
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Exito'});
    }
    hideMenu(){
        this.disp.contentMarginLeft='0';
        this.disp.leftMenuDisplay='none';
        this.messageService.add({severity:'Error', summary:'Service Message', detail:'No existe Usuario'});
    }
    onlogin(e){
        if(e){this.showMenu();}
        else {this.hideMenu();}
        this.displayLogin=false;
    }

    ngOnInit() {
        setTimeout(() => this.notification = true, 1000);

    }


    showDialogLogin() {
        this.displayLogin=true;
    }
    showDialogRegister(){
        this.displayRegister=true;
    }
    onRegister(e:boolean){
        if(e==true){        this.messageService.add({severity:'success', summary:'Service Message', detail:'Exito'});}
        else {        this.messageService.add({severity:'Error', summary:'Service Message', detail:'No existe Usuario'});}
        this.displayRegister=false;
    }
}
