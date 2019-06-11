import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { ServiciosWebConsumo } from '../ServiciosWeb/servicioswebconsumo.service'; //traer las direcciones de los servicios
import { Mensajes } from '../Recursos/Mensajes.services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
declare var $;
@Component({
  selector: 'app-cobertura',
  templateUrl: './cobertura.component.html',
  styleUrls: ['./cobertura.component.css']
})
export class CoberturaComponent implements OnInit {
  public vecCobertura:Array<any>;
  public descripcion: String;
  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;
  constructor(private servicios: ServiciosWebConsumo, private mensaje: Mensajes) { }

  ngOnInit() {
    $(function (){
      $('#dt').DataTable();
    });
    this.servicios.ServicioWebCobertura().subscribe(coberturas=>
      {this.vecCobertura=coberturas;});  
  }
  MensajeError() {
    var  item=alert("No se han recibido datos");
   }

   MensajeCorrecto() {
    var  item=alert("Datos Cargados Correctamente");
   }
 
  ingresarCobertura() {  
      window.alert('Error en el ingreso!!');
      window.close();
    }
    buscarCobertura() {  
      window.alert('Datos encontrados!!');
      window.close();
    }


}
