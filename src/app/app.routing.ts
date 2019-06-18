
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';

// Import Containers
import { PlantillaIntegradaComponent } from './Plantilla/plantilla-integrada/plantilla-integrada.component';
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
const appRoutes: Routes = [

    {
        path: 'template',
        component: PlantillaIntegradaComponent,
        children: [
            {
                path: 'modificarEstado',
                component: ModificarEstadoComponent
            },
            {
                path: 'modificarCobertura',
                component: ModificarCoberturaComponent
            },
            {
                path: 'modificar',
                component: ModificarComponent
            },
            {
                path: 'ingresoPol',
                component: IngresoPolizasComponent
            },  
            {
                path: 'polizas',
                component: PolizasComponent
            },  
            {
                path: 'estados',
                component: EstadosComponent
            },
            {
                path: 'controlpanel',
                component: ControlpanelComponent
            },
            {
                path: 'reportes',
                component: ReportesComponent
            },
            {
                path: 'cobertura',
                component:  CoberturaComponent
            },                
            {
                path: 'ingresoEstado',
                component: IngresoEstadoComponent
            },
            {
                path: 'ingresoCobertura',
                component: IngresoCoberturaComponent
            },
            
        ]
    }

];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

