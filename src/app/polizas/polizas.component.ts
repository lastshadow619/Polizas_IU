import { Component, OnInit } from '@angular/core';
import { ServiciosWebConsumo } from '../ServiciosWeb/servicioswebconsumo.service'; //traer las direcciones de los servicios
import { Mensajes } from '../Recursos/Mensajes.services';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit {

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
  constructor(private servicios: ServiciosWebConsumo, private mensaje: Mensajes) { }

  ngOnInit() {
  }

  ingresarPoliza() {
    window.alert("Poliza Ingresada Correctamente!"+ this.idaseguradora);
 
  }
}
