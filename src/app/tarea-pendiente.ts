//clase Tarea Pendiente
export class TareaPendiente {

    //2 atributos para esta clase:
    public nombre : string
    public terminada : boolean

    //se inicializan los atributos en el constructor. se le da un valor por defecto a terminada como FALSE
    constructor (nombre:string, terminada?:boolean){
        this.terminada = terminada ? terminada:false;
        this.nombre = nombre;
    }
}
