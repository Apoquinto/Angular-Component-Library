import { Component } from '@angular/core';
import { TableConfig } from './models/editableTable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public tableConfig: TableConfig;

  constructor() {
    this.tableConfig = {
      columns: ['Estudiantes', 'Calificación'],
      data: [[]],
    };
  }
}
