export class UserModel {
    id:String;
    user:String;
    nombre:String;
    email:String;
    sexo:String;
    idImage:String;
    person:Person;

    constructor(id: String, user: String, nombre: String, email: String, sexo: String, idImage: String, person: Person) {
        this.id = id;
        this.user = user;
        this.nombre = nombre;
        this.email = email;
        this.sexo = sexo;
        this.idImage = idImage;
        this.person = person;
    }
    static empty():UserModel{
        return new UserModel("","","","","","",Person.empty());
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
}
