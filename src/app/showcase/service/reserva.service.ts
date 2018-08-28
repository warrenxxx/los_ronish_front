import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TerminalModel} from '../modelsApp/terminalModel';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ReservaModel} from '../modelsApp/reservaModel';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

    path="/reserva";

    constructor(private http:HttpClient) { }
    save(x:ReservaModel):Observable<ReservaModel>{
        return this.http.post<ReservaModel>(environment.host+this.path,x,environment.headerGLobal)
    }

    delete(id:String):Observable<Boolean>{
        return this.http.delete<Boolean>(environment.host+this.path+"/"+id,environment.headerGLobal)
    }
    find():Observable<ReservaModel[]>{
        return this.http.get<ReservaModel[]>(environment.host+this.path,environment.headerGLobal)
    }
    findById(id:string):Observable<ReservaModel>{
        return this.http.get<ReservaModel>(environment.host+this.path+"/"+id,environment.headerGLobal)
    }
}
