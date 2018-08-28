import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TerminalModel} from '../modelsApp/terminalModel';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ItinerarioModel} from '../modelsApp/itinerarioModel';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {

    path = "/itinerario";

    constructor(private http: HttpClient) {
    }

    save(x: ItinerarioModel): Observable<ItinerarioModel> {
        return this.http.post<ItinerarioModel>(environment.host + this.path, x, environment.headerGLobal)
    }

    delete(id: String): Observable<Boolean> {
        return this.http.delete<Boolean>(environment.host + this.path + "/" + id, environment.headerGLobal)
    }

    find(): Observable<ItinerarioModel[]> {
        return this.http.get<ItinerarioModel[]>(environment.host + this.path, environment.headerGLobal)
    }

    findById(id: string): Observable<ItinerarioModel> {
        return this.http.get<ItinerarioModel>(environment.host + this.path + "/" + id, environment.headerGLobal)
    }

    findByDetail(origen: string,destino:string,fecha:Date): Observable<ItinerarioModel[]> {
        return this.http.post<ItinerarioModel[]>(environment.host + this.path + "/buscar",
            {
                origen:origen,
                destino:destino,
                fecha:fecha,
            }
            , environment.headerGLobal)
    }

}
