import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { ServiciosWebConsumo } from '../ServiciosWeb/servicioswebconsumo.service'; //traer las direcciones de los servicios
import { Mensajes } from '../Recursos/Mensajes.services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
declare var $;
@NgModule({
  imports: [ 
   ReactiveFormsModule,FormBuilder,FormGroup, Validators,FormControl
  ],
})

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})

export class EstadosComponent implements OnInit {
  public vecEstados:Array<any>;
  public descripcion: String;
  constructor(private servicios: ServiciosWebConsumo, private mensaje: Mensajes,) { }

  ngOnInit() {
    $(function (){
      $('#dt').DataTable();
    });
    this.servicios.ServicioWebEstado().subscribe(estados=>
      {this.vecEstados=estados;});  

  }
  

  MensajeError() {
    var  item=alert("No se han recibido datos");
   }

   MensajeCorrecto() {
    var  item=alert("Datos Cargados Correctamente");
   }
   async eliminarEstado(objDatos){      
    var r = confirm("¿Está seguro que desea eliminar este Estado?");
    if (r == true) {
    const Auditoria = await new Promise<any>(resolve =>
    this.servicios.ServicioWebEliminarEstado(objDatos)
      .subscribe(translated => {
        resolve(translated)
      }));
      this.servicios.ServicioWebEstado().subscribe(estados=>
        {this.vecEstados=estados;}); 
        $(function (){
          $('#dt').DataTable();
        });
} else {
  window.alert('No se ha eliminado Nada');
}
}

async ingresarEstado(descripcion){    
  if ((descripcion.length>=20)||(descripcion.length<4))  {
    window.alert('Error! Estado no Válido');
  } else{ 
    const Auditoria = await new Promise<any>(resolve =>
      this.servicios.ServicioWebIngresarEstado(descripcion)
        .subscribe(translated => {
          resolve(translated)
        }));
        this.servicios.ServicioWebEstado().subscribe(estados=>
          {this.vecEstados=estados;}); 
          $(function (){
            $('#dt').DataTable();
          }); 
          window.alert('Estado Ingresado Correctamente');
   
  }
}

 }
