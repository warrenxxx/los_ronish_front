import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {MenuItem, MessageService} from '../components/common/api';
import {UserModel} from './modelsApp/userModel';
import {environment} from '../../environments/environment';
import {LoginService} from './login/login.service';

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

    enviroment=environment;
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
    currerntUser:UserModel;

    constructor(private messageService: MessageService,private loginService:LoginService){

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
        if(e){
            this.showMenu();
            this.currerntUser=e as UserModel;
        }
        else {this.hideMenu();}
        this.displayLogin=false;
    }

    ngOnInit() {
        setTimeout(() => this.notification = true, 1000);
        if(localStorage.getItem(environment.currentUser)){
            this.currerntUser= JSON.parse(localStorage.getItem(environment.currentUser)) as UserModel;
            this.showMenu();
        }else{
            this.currerntUser=null;
        }
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
    logOut(){
        this.loginService.logOut();
    }
}
