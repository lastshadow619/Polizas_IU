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
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit {
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
    this.servicios.ServicioWebPruebaED().subscribe(polizas=>
      {this.vecPoliza=polizas;});  
      $(function (){
        $('#dt1').DataTable();
      });
  }
  MensajeError() {
    var  item=alert("No se han recibido datos");
   }

   MensajeCorrecto() {
    var  item=alert("Datos Cargados Correctamente");
   }

  ConsumoPoliza(){    
    try {
      this.servicios.ServicioWebPruebaED().subscribe(polizas=>{
    this.vecPoliza=polizas;          
    })   
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
      window.alert('Error en el ingreso!!');
      window.close();
    }
    buscarPoliza() {  
      window.alert('Datos encontrados!!');
      window.close();
    }
  
}
