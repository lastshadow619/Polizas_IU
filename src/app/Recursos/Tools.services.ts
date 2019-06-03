import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class ToolsService {

    constructor() { }
    dtOptions: DataTables.Settings = {};
    Tabla(opcion) {
        if (opcion == 1) {
            this.dtOptions[1] = {
                pagingType: 'full_numbers',
                pageLength: 10,
                language: {
                    processing: "Procesando...",
                    search: "Buscar:",
                    lengthMenu: "Mostrar _MENU_ Registro",
                    info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
                    infoEmpty: "Mostrando ningún elemento.",
                    infoFiltered: "(filtrado _MAX_ elementos total)",
                    infoPostFix: "",
                    loadingRecords: "Cargando registros...",
                    zeroRecords: "No se encontraron registros",
                    emptyTable: "No hay datos disponibles en la tabla",
                    paginate: {
                        first: "Primero",
                        previous: "Anterior",
                        next: "Siguiente",
                        last: "Último"
                    },
                    buttons: {
                        copy: 'Copiar',
                        copyTitle: 'Copiar al portapapeles',
                        copySuccess: 'Se han copiado %d filas al portapapeles',
                        copyKeys: 'Pulse <i>ctrl</i> o <i>\u2318</i> + <i>C</i> para copiar datos de la tabla a su portapapeles. <br><br>Para cancelar, haga clic en este mensaje o pulse Esc.',
                        print: 'Imprimir'
                    },
                    aria: {
                        sortAscending: ": Activar para ordenar la tabla en orden ascendente",
                        sortDescending: ": Activar para ordenar la tabla en orden descendente"
                    }
                },
                dom: 'Bfrtip',
                // Configure the buttons
                buttons: [
                    'print',
                    'copy',
                    'excel'
                ]
            }
            return this.dtOptions[1];
        }
    }
}