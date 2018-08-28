import {ItinerarioModel} from '../modelsApp/itinerarioModel';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

export interface BaseCrud<T> {
    save(x:T):Observable<T>
    delete(id:String):Observable<Boolean>
    find():Observable<T[]>
    findById(id:string):Observable<T>
}
