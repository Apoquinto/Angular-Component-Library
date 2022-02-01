import { Component, Input, OnInit } from '@angular/core';
import { TableConfig } from 'src/app/models/editableTable';

@Component({
  selector: 'editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css'],
})
export class EditableTableComponent implements OnInit {
  @Input() tableConfig: TableConfig;

  constructor() {
    this.tableConfig = {
      columns: ['', ''],
      data: [
        ['', ''],
        ['', ''],
      ],
    };
  }

  ngOnInit(): void {}

  addRow(): void {
    this.tableConfig.data.push(['', '']);
  }
}
