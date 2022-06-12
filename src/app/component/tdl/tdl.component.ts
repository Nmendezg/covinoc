import { Component, OnInit } from '@angular/core';
//se importa la clase TareaPendiente
import { TareaPendiente } from 'src/app/tarea-pendiente';
//se importa el servicio TareaServicio
import { TareaServicioService } from 'src/app/services/tarea-servicio.service';

@Component({
  selector: 'app-tdl',
  templateUrl: './tdl.component.html',
  styleUrls: ['./tdl.component.css']
})
export class TdlComponent implements OnInit {

  //se incluye el servicio dentro del contructor para poder utilizar los métodos del servicio
  constructor( private tareasServicio:TareaServicioService) { }
  //se inicializan los atributos que va a tener cada tarea
  nombreTarea="";
  terminada=false;
  //se inicializa el arreglo tareas, del tipo TareaPendiente, la clase importanda
  public tareas : TareaPendiente[] = []

  //metodo para guardar tareas
  guardarTareas(){
    //cada nueva tarea tiene su nombre y su estado (terminada)
    const nuevaTarea = new TareaPendiente(this.nombreTarea,this.terminada);
    //se agrega la nueva tarea al arreglo tareas
    this.tareas.push(nuevaTarea);
    //se llama al metodo del servicio Guardar tareas para que se guarden en el localStorage
    this.tareasServicio.guardarTareas(this.tareas);
    //se llama al metodo obtenerTareas() para que muestre todas las tareas que se tienen guardadas
    this.obtenerTareas();
    //se inicializa el input con un String vacio
    this.nombreTarea="";
  }

  //metodo para eliminar tarea
  eliminarTarea(indice: number){
    //se llama a un "alert" cuando se va a eliminar una tarea
     const confirma = confirm("¿Desea eliminar la tarea?");
     //si no se confirma, no pasa nada
    if(!confirma){
      return ;
    }
    //si se confirma la eliminacion, se elimina 1 elemento desde el indice seleccionado
    this.tareas.splice(indice,1);
    //se llama al metodo guardarTareas del servicio para que guarde los cambios
    this.tareasServicio.guardarTareas(this.tareas);
  }

  //metodo para guardar el cambio de estado de la tarea
  cambiarEstadoDeTarea(){
    this.tareasServicio.guardarTareas(this.tareas)
  }
  //metodo para llamar el metodo del servicio obetenerTareas y poder actualizar los cambios en estas
  obtenerTareas(){
    this.tareas = this.tareasServicio.obtenerTareas();
  }
//apenas se carga la pagina, se llama al metodo obtener tareas
  ngOnInit() {
    this.obtenerTareas();
  }

 
}
