import {RefModel} from '../utils/RefModel';
import {EmtpyInterface} from './emtpyInterface';

export class UserModel {
    id:string;
    user:string;
    role:string;
    idPerson:RefModel;
    person:Person;


    constructor(id: string, user: string, role: string, idPerson: RefModel, person: Person) {
        this.id = id;
        this.user = user;
        this.role = role;
        this.idPerson = idPerson;
        this.person = person;
    }

    static empty():UserModel{
        return new UserModel("","","",RefModel.empty(),Person.empty());
    }


    public static getString(x:UserModel):string{
        return x.user;
    }
}
export class Person{
    id:string;
    nombre:string;
    apellido:string;
    direccion:string;
    dni:string;
    telefono:string;
    celular:string;
    email:string;
    idImage:string;

    constructor(id: string, nombre: string, apellido: string, direccion: string, dni: string, telefono: string, celular: string, email: string, idImage: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.dni = dni;
        this.telefono = telefono;
        this.celular = celular;
        this.email = email;
        this.idImage = idImage;
    }
    static empty():Person{
        return new Person("","","","","","","","","");
    }
    static getString(x:Person){
        return x.dni+" "+x.nombre;
    }
}
