import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person, UserModel} from '../modelsApp/userModel';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {VehiculoModel} from '../modelsApp/vehiculoModel';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

    path="/vehiculo";

    constructor(private http:HttpClient) { }

    insert(x:VehiculoModel):Observable<VehiculoModel>{
        return this.http.post<VehiculoModel>(environment.host+this.path,x,environment.headerGLobal)
    }
    update(x:VehiculoModel){
        return this.http.post(environment.host+this.path,x,environment.headerGLobal)
    }
    delete(id:String){
        return this.http.delete(environment.host+this.path+"/"+id,environment.headerGLobal)
    }
    find():Observable<VehiculoModel[]>{
        return this.http.get<VehiculoModel[]>(environment.host+this.path,environment.headerGLobal)
    }
}
