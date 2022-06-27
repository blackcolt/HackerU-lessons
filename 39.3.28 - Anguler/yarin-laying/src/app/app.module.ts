import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';
import { ActorsContainerComponent } from './components/actors-container/actors-container.component';
import { ActorComponent } from './components/actor/actor.component';
import { UpperactorPipe } from './pipes/upperactor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesContainerComponent,
    ActorsContainerComponent,
    ActorComponent,
    UpperactorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
