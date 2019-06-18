import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
/****Componente Plantilla */
import { AppHeaderComponent } from './Plantilla/app-header/app-header.component';
import { AppFooterComponent } from './Plantilla/app-footer/app-footer.component';
import { AppContentComponent } from './Plantilla/app-content/app-content.component';
import { AppAsideComponent } from './Plantilla/app-aside/app-aside.component';
import { PlantillaIntegradaComponent } from './Plantilla/plantilla-integrada/plantilla-integrada.component';
//Import Routing
import { routing } from './app.routing';

//Import Paginas


import { IngresoPolizasComponent } from './ingreso-polizas/ingreso-polizas.component';
import { IngresoEstadoComponent } from './ingreso-estado/ingreso-estado.component';
import { IngresoCoberturaComponent } from './ingreso-cobertura/ingreso-cobertura.component';
import { EstadosComponent } from './estados/estados.component';
import { CoberturaComponent } from './cobertura/cobertura.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { PolizasComponent } from './polizas/polizas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ModificarEstadoComponent } from './modificar-estado/modificar-estado.component';
import { ModificarCoberturaComponent } from './modificar-cobertura/modificar-cobertura.component';
//Servicios
import { ConfiguracionesUrl } from './ServiciosWeb/configuracionesUrl.service';
import { ServiciosWebConsumo } from './ServiciosWeb/servicioswebconsumo.service';
import { Mensajes } from './Recursos/Mensajes.services';
import {ToolsService } from './Recursos/Tools.services';








@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppContentComponent,
    AppAsideComponent,
    PlantillaIntegradaComponent,
   

   
    IngresoPolizasComponent,
    IngresoEstadoComponent,
    IngresoCoberturaComponent,
    EstadosComponent,
    CoberturaComponent,
    ControlpanelComponent,
    PolizasComponent,
    ReportesComponent,
    ModificarComponent,
    ModificarEstadoComponent,
    ModificarCoberturaComponent,
  
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [ConfiguracionesUrl,ServiciosWebConsumo,Mensajes,ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
