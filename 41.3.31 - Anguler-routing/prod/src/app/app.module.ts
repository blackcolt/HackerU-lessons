import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaamPipe } from './pipes/maam.pipe';
import { SqrtPipe } from './pipes/sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MaamPipe,
    SqrtPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
