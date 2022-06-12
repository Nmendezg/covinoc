import { Injectable } from '@angular/core';
//Se importa la calse TareaPendiente
import { TareaPendiente } from '../tarea-pendiente';
@Injectable({
  providedIn: 'root'
})
export class TareaServicioService {

  //se inicializa una clave para poder acceder al localStorage
    CLAVE_LOCAL_STORAGE = "TDL"

  constructor() { }

  //metodo para obener las tareas guadadas en el localStorage
  obtenerTareas():TareaPendiente[]{
    //Se retorna una formato JSON de los elementos del localStorage. si no hay nada, se retorna un arreglo vacio
    return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || "[]")
  }
    //metodo para guardar las tareas en el localStorage
  guardarTareas(tareas: TareaPendiente[]){
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(tareas))
  }
}
