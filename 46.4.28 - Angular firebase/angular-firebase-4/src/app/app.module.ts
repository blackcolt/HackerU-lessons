import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { WeatherContainerComponent } from './componenets/weather-container/weather-container.component';
import { WeatherCompnentComponent } from './componenets/weather-compnent/weather-compnent.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherContainerComponent,
    WeatherCompnentComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
