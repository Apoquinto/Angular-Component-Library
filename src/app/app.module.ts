import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectableListComponent } from './components/selectable-list/selectable-list.component';
import { EditableTableComponent } from './components/editable-table/editable-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectableListComponent,
    EditableTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
