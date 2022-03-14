import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';

import { SearchTodoComponent } from './components/search-todo/search-todo.component';
import { BPipPipe } from './pipes/b-pip.pipe';
import { SearchToDoPipe } from './pipes/search/search-to-do.pipe';
import { GetDoneToDoPipe } from './pipes/search/get-done-to-do.pipe';
import { AboveXLettersPipe } from './pipes/search/above-xletters.pipe';
import { MosheFyPipe } from './pipes/search/moshe-fy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    ToDoComponent,
    SearchTodoComponent,
    BPipPipe,
    SearchToDoPipe,
    GetDoneToDoPipe,
    AboveXLettersPipe,
    MosheFyPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
