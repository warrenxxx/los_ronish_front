import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person, UserModel} from '../modelsApp/userModel';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

    path="/api/person";

  constructor(private http:HttpClient) { }
    insert(x:Person){
        return this.http.post(environment.host+this.path,x,environment.headerGLobal)
    }
    update(x:Person){
        return this.http.post(environment.host+this.path,x,environment.headerGLobal)
    }
    delete(id:String){
        return this.http.delete(environment.host+this.path+"/"+id,environment.headerGLobal)
    }
    find():Observable<Person[]>{
        return this.http.get<Person[]>(environment.host+this.path,environment.headerGLobal)
    }
}
