import { Component, OnInit, Input, NgModule, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ServiciosWebConsumo } from '../ServiciosWeb/servicioswebconsumo.service'; //traer las direcciones de los servicios
import { Mensajes } from '../Recursos/Mensajes.services';
import { NgbModule, NgbModal, NgbActiveModal, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

//import {Navcontroler, NavParam} from "@angular";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
declare var $;
@NgModule({
  imports:[
 BrowserModule,
 NgbAlertModule,
 FormsModule,
 NgbModule.forRoot()
  ],
    
})



@Component({
  selector: 'app-cobertura',
  templateUrl: './cobertura.component.html',
  styleUrls: ['./cobertura.component.css'],
  
})

export class CoberturaComponent implements OnInit {
  public vecCobertura:Array<any>;
  public descripcion: String;
  public bandera: boolean=false;
 
  public parametroService: string="";
  public idcobertura: number=0;
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

    
  async eliminarCobertura(objDatos){      
      var r = confirm("¿Está seguro que desea eliminar esta Cobertura?");
  if (r == true) {
      const Auditoria = await new Promise<any>(resolve =>
      this.servicios.ServicioWebEliminarCobertura(objDatos)
        .subscribe(translated => {
          resolve(translated)
        }));
        this.servicios.ServicioWebCobertura().subscribe(coberturas=>
        {this.vecCobertura=coberturas;});  
        $(function (){
          $('#dt').DataTable();
        });
  } else {
    window.alert('No se ha eliminado Nada');
  }
  }

  async ingresarCobertura(descripcion){    
    if ((descripcion.length>=20)||(descripcion.length<4))  {
      window.alert('Error! Descripción no Válida');
    } else{ 
      const Auditoria = await new Promise<any>(resolve =>
        this.servicios.ServicioWebIngresarCobertura(descripcion)
          .subscribe(translated => {
            resolve(translated)
          }));
          this.servicios.ServicioWebCobertura().subscribe(coberturas=>
            {this.vecCobertura=coberturas;}); 
            $(function (){
              $('#dt').DataTable();
            }); 
            window.alert('Cobertura Ingresada Correctamente');
     
    }
  }
  
}
