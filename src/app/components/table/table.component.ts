import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() displayedColumns: string[] = [];
  @Input() data: any[] = [];
  @Input() columnMapping: { [key: string]: string } = {};
}
