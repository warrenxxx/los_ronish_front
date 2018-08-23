import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginDto} from './dto/loginDto';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
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

    constructor(private http: HttpClient,private router:Router) {
    }

    login(credentials:LoginDto) {
        return this.http.post(environment.host+"/login",credentials,httpOptions).pipe(
            map(user=>{
                if(user){
                    localStorage.setItem(environment.currentUser,JSON.stringify(user))
                    console.log("login exsitoso")
                }else{
                    console.log("gg con el login")
                }
                return user;
            })
        );
    }

    uploadImage(file){

        let formData=new FormData();
        formData.append('projectFile', file);
        console.log("dd");
        return this.http.post(environment.host+'/api/image/save', formData, {
            responseType: 'text'
        });
    }
    logOut(){
        localStorage.removeItem(environment.currentUser);
        this.router.navigate(['/']);
        location.reload();
    }
}
