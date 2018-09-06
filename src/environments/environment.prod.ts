import {HttpHeaders} from '@angular/common/http';

export const environment = {
    production: true,
    host:"https://plissprofe.herokuapp.com",
    currentUser:"currentUser",
    headerGLobal:    {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
        })
    }
  };
