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
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  public vecPoliza:Array<any>;
  public idaseguradora: Int32Array;
  public idcobertura: Int32Array;
  public idcontrato: String;
  public numpoliza: String;
  public idestado: Int32Array;
  public finicob: Date;
  public fpagoant: Date;
  public vencini: Date;
  public vencfin: Date;
  public observaciones: String;
  public numrenov: Int32Array;
  public valini: String;
  public valfin: String; 
  public polpdf: File; 
  

  constructor(private servicios: ServiciosWebConsumo, private mensaje: Mensajes, ) { }

  ngOnInit() {

  }
  MensajeError() {
    var  item=alert("No se han recibido datos");
   }

   MensajeCorrecto() {
    var  item=alert("Datos Cargados Correctamente");
   }

  ConsumoPoliza(){    
    try {
      if(this.vecPoliza==null)
          this.MensajeError();
          else
          this.MensajeCorrecto();
    }
    catch(error) {
      this.MensajeError();
      console.error(error);
      
    } 
  }
 
  ingresarPoliza() {  
      window.alert('Error en la Actualización!!');
      window.close();
    }
    
  
}

