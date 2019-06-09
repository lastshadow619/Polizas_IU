import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiciosWebConsumo } from '../ServiciosWeb/servicioswebconsumo.service'; //para servicio
import { Mensajes } from '../Recursos/Mensajes.services';
declare var $;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})



export class ReportesComponent implements OnInit {
  
  public vecPoliza:Array<any>;
  public vecPoliza1:Array<any>;
  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;


  constructor(private servicios: ServiciosWebConsumo, private mensaje: Mensajes) {   
  }
  
  ngOnInit():void {    
    
    this.servicios.ServicioWebPruebaED().subscribe(polizas=>
    {this.vecPoliza=polizas;});   
    this.servicios.ServicioWebPruebaED1().subscribe(polizas1=>
      {this.vecPoliza1=polizas1;});   
      this.dataTable =$(this.table.nativeElement);
    this.dataTable.dataTable();  
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
  ConsumoPoliza1(){    
    try {
      this.servicios.ServicioWebPruebaED1().subscribe(polizas1=>{
    this.vecPoliza1=polizas1;          
    })   
      if(this.vecPoliza1==null)
          this.MensajeError();
          else
          this.MensajeCorrecto();
    }
    catch(error) {
      this.MensajeError();
      console.error(error);
      
    } 
  }
}
