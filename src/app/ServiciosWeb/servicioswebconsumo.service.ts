import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ConfiguracionesUrl } from '../ServiciosWeb/configuracionesUrl.service';
import { map } from "rxjs/operators";
import { Observable, Subject, throwError } from 'rxjs';
import { Body } from '@angular/http/src/body';
@Injectable()

export class ServiciosWebConsumo {
    private urlservicio: String;
    private urlcentralizada: String;
    private urlingresopol: String;
    private urlPruebaEd: String;

    constructor(private http: Http, server: ConfiguracionesUrl, private hpptclient: HttpClient) {
        this.urlservicio = server.url1;
        this.urlcentralizada = server.url2;
        this.urlingresopol = server.url3;
        this.urlPruebaEd = server.url4;
    }


    //Servicio Web Prueba 
    ServicioWebPrueba(strEstablecimiento) {
        let headers = new Headers();
        var parametros = strEstablecimiento;
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlservicio + 'ServicioWebComprobantes/ServiciosComprobantes/ListadoEstablecimiento/' + parametros)
            .pipe(map(res => res.json()))
    }
 

    //Servicios Web Prueba 2
    ServicioWebPrueba2(Parametro1, Parametro2, Parametro3) {
        let headers = new Headers();
        var content = JSON.stringify({
            parametro1: Parametro1,
            parametro2: Parametro2,
            parametro3: Parametro3
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.urlservicio + 'ServicioWebComprobantes/ServiciosComprobantes/AnulacionFactura', content, { headers: headers })
            .pipe(map(res => res.json()))
    }
    //Servicio Ingreso Poliza
    ServicioWebIngresoPoliza(Parametro1, Parametro2, Parametro3, Parametro4, Parametro5, Parametro6, Parametro7, Parametro8, Parametro9, Parametro10, Parametro11, Parametro12, Parametro13, Parametro14,Parametro15) {
        let headers = new Headers();
        var content = JSON.stringify({
            parametro1: Parametro1,
            parametro2: Parametro2,
            parametro3: Parametro3,
            parametro4: Parametro4,
            parametro5: Parametro5,
            parametro6: Parametro6,
            parametro7: Parametro7,
            parametro8: Parametro8,
            parametro9: Parametro9,
            parametro10: Parametro10,
            parametro11: Parametro11,
            parametro12: Parametro12,
            parametro13: Parametro13,
            parametro14: Parametro14,
            parametro15: Parametro15
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.urlingresopol + 'ingresarPoliza/', content, { headers: headers })
            .pipe(map(res => res.json()))
    }
    //Servicio web listar todos los estados
    ServicioWebEstado(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.tipoestado/listarEstadosPolizas')
            .pipe(map(res => res.json()))
    }
     //Servicio web listar todos las coberturas http://localhost:8080/AD_Polizas/webresources/entidades.tipocobertura
     ServicioWebCobertura(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.tipocobertura/')
            .pipe(map(res => res.json()))
    }
    //Servicio web listar todas las polizas
    ServicioWebPruebaED(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.poliza/obtenertodos')
            .pipe(map(res => res.json()))
    }
    //Servicio web listar todas las polizas por vencer
    ServicioWebPruebaED1(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.poliza/vencimiento/2019-07-05')
            .pipe(map(res => res.json()))
    }
    //Servicio web listar todas las polizas vencidas
    ServicioWebPruebaED2(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.poliza/obtenervencidas')
            .pipe(map(res => res.json()))
    }

    //Servicio Web para Eliminar Cobertura
 ServicioWebEliminarCobertura(idcobertura) {
    let headers = new Headers();
    var parametros = idcobertura;
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.tipocobertura/eliminarTipoCobertura/' + parametros)
        .pipe(map(res => res.text))
}

   //Servicio Web para Eliminar un Estado
   ServicioWebEliminarEstado(idestado) {
    let headers = new Headers();
    var parametros = idestado;
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.tipoestado/eliminarTipoEstado/' + parametros)
        .pipe(map(res => res.text))
}

//Servicio Web para Ingresar un Estado
ServicioWebIngresarEstado(descripcionestado) {
    let headers = new Headers();
    var parametros = descripcionestado;
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.urlPruebaEd+'AD_Polizas/webresources/entidades.tipoestado/ingresarestado/'+parametros,parametros)
        .pipe(map(res => res.text))
}

//Servicio Web para Ingresar una Cobertura
ServicioWebIngresarCobertura(descripcioncobertura) {
    let headers = new Headers();
    var parametros = descripcioncobertura;
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.urlPruebaEd+'AD_Polizas/webresources/entidades.tipocobertura/ingresarcobertura/'+parametros,parametros)
        .pipe(map(res => res.text))
}
   

}