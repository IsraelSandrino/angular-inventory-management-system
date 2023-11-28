import { Component, Input } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  size: NzButtonSize = 'default';

  @Input() nameButton: string = 'Default Button';

  @Input() showSearchBar: boolean = true;
  @Input() showAddButton: boolean = true;
  @Input() showExportButton: boolean = true;
}
