import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginDto} from './dto/loginDto';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};
@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {
    }

    login(credentials:LoginDto) {
        return this.http.post(environment.host+"/login",credentials,httpOptions);
    }
}
