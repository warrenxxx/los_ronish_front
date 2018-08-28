import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../modelsApp/userModel';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Terminal} from '../../components/terminal/terminal';
import {TerminalModel} from '../modelsApp/terminalModel';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

    path="/terminales";



    constructor(private http:HttpClient) { }
    save(x:TerminalModel):Observable<TerminalModel>{
        return this.http.post<TerminalModel>(environment.host+this.path,x,environment.headerGLobal)
    }

    delete(id:String):Observable<Boolean>{
        return this.http.delete<Boolean>(environment.host+this.path+"/"+id,environment.headerGLobal)
    }
    find():Observable<TerminalModel[]>{
        return this.http.get<TerminalModel[]>(environment.host+this.path,environment.headerGLobal)
    }
    findById(id:string):Observable<TerminalModel>{
        return this.http.get<TerminalModel>(environment.host+this.path+"/"+id,environment.headerGLobal)
    }
}
