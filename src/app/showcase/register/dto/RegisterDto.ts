export class RegisterDto {
     user:string;
     password:string;

    dni:string;
    nombre:string;
    apellido:string;
    email:string;
    direccion:string;
    sexo:string;
     idImage:string;
    telefono:string;
    celular:string;


    constructor(user: string, password: string, dni: string, nombre: string, apellido: string, email: string, direccion: string, sexo: string, idImage: string, telefono: string, celular: string) {
        this.user = user;
        this.password = password;
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
        this.sexo = sexo;
        this.idImage = idImage;
        this.telefono = telefono;
        this.celular = celular;
    }
}
