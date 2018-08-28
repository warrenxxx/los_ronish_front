import { Injectable } from '@angular/core';
import {BaseCrud} from './baseCrud';
import {Observable} from 'rxjs';

export interface Animal {
    nombre:String;
    edad:Number;
}

@Injectable({
  providedIn: 'root'
})
export class AuxServiceService implements BaseCrud<Animal>{

    x={
        0:{nombre:"warren",edad:5},
        1:{nombre:"warren",edad:5},
        2:{nombre:"warren",edad:5},
        3:{nombre:"warren",edad:5}

    };
  constructor() { }

    delete(id: string): Observable<Boolean> {
      this.x[id]=undefined;
        return Observable.create(this.x);
    }

    find(): Observable<Animal[]> {
      let g:Animal[]=[];
        for(let aux in this.x){
            g.push(this.x[aux])
        }

        return Observable.create(g);
    }

    findById(id: string): Observable<Animal> {
        return Observable.create(this.x[id]);
    }

    k=4;
    save(x: Animal): Observable<Animal> {
      this.x[this.k++]=x;
        return Observable.create(x);
    }
}
