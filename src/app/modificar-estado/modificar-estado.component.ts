import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-estado',
  templateUrl: './modificar-estado.component.html',
  styleUrls: ['./modificar-estado.component.css']
})
export class ModificarEstadoComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
   
  }
  MensajeError() {
    var  item=alert("No se han recibido datos");
   }

   MensajeCorrecto() {
    var  item=alert("Datos Cargados Correctamente");
   }
 
  ingresarEstado() {  
      window.alert('Error en el ingreso!!');
      window.close();
    }
    buscarEstado() {  
      window.alert('Datos encontrados!!');
      window.close();
    }
}
