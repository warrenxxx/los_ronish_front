import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../../modelsApp/userModel';
import {environment} from '../../../../environments/environment';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  actualizarUser(user:UserModel){
      return this.http.put(environment.host+"/user",user,httpOptions)
          .pipe(e=>this.http.post(environment.host+"/api/person",user.person,httpOptions))
  }

}
