import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../modelsApp/userModel';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  insert(user:UserModel){
      return this.http.post(environment.host+"/user",user,environment.headerGLobal)
  }
  update(user:UserModel){
      return this.http.post(environment.host+"/user",user,environment.headerGLobal)
  }
  delete(id:String){
        return this.http.get(environment.host+"/user/"+id,environment.headerGLobal)
  }
  find():Observable<UserModel[]>{
      return this.http.get<UserModel[]>(environment.host+"/user",environment.headerGLobal)
  }

}
