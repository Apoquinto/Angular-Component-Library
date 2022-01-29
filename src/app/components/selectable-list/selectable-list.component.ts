import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.css'],
})
export class SelectableListComponent implements OnInit {
  @Input()
  public items: string[];
  @Input()
  public title: string;
  public isCollapsed: boolean;
  private selectedItems: string[];
  @Output()
  public selectedItemsChange = new EventEmitter<string[]>();

  constructor() {
    this.items = [];
    this.title = '';
    this.selectedItems = [];
    this.isCollapsed = true;
  }

  ngOnInit(): void {}

  toggleSelection(action: any, itemID: string): void {
    if (action.target.checked) {
      this.selectedItems.push(itemID);
    } else {
      let index = this.selectedItems.indexOf(itemID);
      this.selectedItems.splice(index, 1);
    }
    this.selectedItemsChange.emit(this.selectedItems);
  }

  toggleCollapsable(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
