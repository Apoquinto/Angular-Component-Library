import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public carModels: string[];
  public carModelsSelected: string[];

  constructor() {
    this.carModels = ['Mazda', 'Toyota', 'VW', 'Chevrolet'];
    this.carModelsSelected = [];
  }

  selectCarModels(event: any): void {
    this.carModelsSelected = event;
  }
}
