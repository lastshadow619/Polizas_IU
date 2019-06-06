import { Component, OnInit, NgModule } from '@angular/core';
import { ServiciosWebConsumo } from '../ServiciosWeb/servicioswebconsumo.service'; //traer las direcciones de los servicios
import { Mensajes } from '../Recursos/Mensajes.services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
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
    this.servicios.ServicioWebEstado().subscribe(estados=>
      {this.vecEstados=estados;});  

  }
  MensajeError() {
    var  item=alert("No se han recibido datos");
   }

   MensajeCorrecto() {
    var  item=alert("Datos Cargados Correctamente");
   }

   ConsumoEstado(){    
    try {
      this.servicios.ServicioWebEstado().subscribe(estados=>{
    this.vecEstados=estados;          
    })   
      if(this.vecEstados==null)
          this.MensajeError();
          else
          this.MensajeCorrecto();
    }
    catch(error) { 
      this.MensajeError();
      console.error(error);
      
    } 
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
