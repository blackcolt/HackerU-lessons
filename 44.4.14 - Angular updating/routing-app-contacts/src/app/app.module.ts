import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UpdateContactComponent } from './pages/update-contact/update-contact.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsWrapperComponent } from './components/contacts-wrapper/contacts-wrapper.component';
import { TitleComponent } from './components/title/title.component';
import { ContactFillComponent } from './components/contact-fill/contact-fill.component';
import { TempPipe } from './pipes/temp.pipe';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { FotterComponent } from './components/fotter/fotter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UpdateContactComponent,
    ContactComponent,
    ContactsWrapperComponent,
    TitleComponent,
    ContactFillComponent,
    TempPipe,
    AddContactComponent,
    FotterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
