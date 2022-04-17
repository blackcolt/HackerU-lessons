import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UpdateComponent } from './pages/update/update.component';
import { TitleComponent } from './components/title/title.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { ContactsWrapperComponent } from './components/contacts-wrapper/contacts-wrapper.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UpdateComponent,
    TitleComponent,
    UpdateContactComponent,
    ContactsWrapperComponent,
    ContactComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
