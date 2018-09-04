import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../modelsApp/userModel';
import {UserServiceService} from '../../../service/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-mantenimiento',
  templateUrl: './user-mantenimiento.component.html',
  styleUrls: ['./user-mantenimiento.component.css']
})
export class UserMantenimientoComponent implements OnInit {

    displayDialog: boolean;

    user: UserModel;

    selectedUserModel: UserModel;

    newUserModel: boolean;

    users: UserModel[];

    cols: any[];

    constructor(private service: UserServiceService,private route:Router) { }

    ngOnInit() {
        if(!localStorage.getItem("currentUser") || JSON.parse(localStorage.getItem("currentUser"))['role']!='admin'){this.route.navigate(["/"])}
        this.service.find().subscribe(e=>{
            this.users=e;
        },err=>{});

        this.cols = [
            { field: 'user', header: 'Vin' },
            { field: 'role', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

    showDialogToAdd() {

    }

    save() {

    }

    delete() {

    }

    onRowSelect(event) {

    }

    cloneUserModel(c: UserModel): UserModel {
        return UserModel.empty();
    }

}
