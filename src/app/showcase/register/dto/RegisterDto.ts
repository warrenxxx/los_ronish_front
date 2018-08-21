export class RegisterDto {
     user:string;
     password:string;
     nombre:string;
     email:string;
     sexo:string;

    constructor(user: string, password: string, nombre: string, email: string, sexo: string) {
        this.user = user;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
        this.sexo = sexo;
    }
}
