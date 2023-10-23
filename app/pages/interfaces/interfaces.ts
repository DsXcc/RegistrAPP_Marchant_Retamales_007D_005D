
export interface Users{
    id:number;
    username: String;
    password: String;
    role: String;
    nombre_asignatura: String;
    ano_asignatura: String;
    semestre_asignatura: String;
    horas_asignatura: String;
    isactive: boolean;

}
export interface User{
    username: String;
    password: String;
    role: String;
    nombre_asignatura: String;
    ano_asignatura: String;
    semestre_asignatura: String;
    horas_asignatura: String;
    isactive: boolean;

}



export interface Anime{
    nombre: String;
    temporada: String;
    fecha: Date;
}