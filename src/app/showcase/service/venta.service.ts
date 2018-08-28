import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ItinerarioModel} from '../modelsApp/itinerarioModel';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {VentaModel} from '../modelsApp/ventaModel';
import {BaseCrud} from './baseCrud';

@Injectable({
  providedIn: 'root'
})
export class VentaService implements BaseCrud<VentaModel>{

    path="/ventas";

    constructor(private http:HttpClient) { }
    save(x:VentaModel):Observable<VentaModel>{
        return this.http.post<VentaModel>(environment.host+this.path,x,environment.headerGLobal)
    }

    delete(id:String):Observable<Boolean>{
        return this.http.delete<Boolean>(environment.host+this.path+"/"+id,environment.headerGLobal)
    }
    find():Observable<VentaModel[]>{
        return this.http.get<VentaModel[]>(environment.host+this.path,environment.headerGLobal)
    }
    findById(id:string):Observable<VentaModel>{
        return this.http.get<VentaModel>(environment.host+this.path+"/"+id,environment.headerGLobal)
    }
}
