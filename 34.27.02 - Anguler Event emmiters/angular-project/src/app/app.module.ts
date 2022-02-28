import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';
import { ToDoHeaderComponent } from './to-do-header/to-do-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToImageComponent } from './to-image/to-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponentComponent,
    ToDoHeaderComponent,
    ToDoInputComponent,
    ToDoItemComponent,
    ToImageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
