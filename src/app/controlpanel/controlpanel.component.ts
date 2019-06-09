import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $;
@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {
  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;
 

  constructor() { }

  ngOnInit():void {
      this.dataTable =$(this.table.nativeElement);
    this.dataTable.dataTable();  
  }
   

}
