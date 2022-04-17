import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UpdateContactComponent } from './pages/update-contact/update-contact.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'update-contact/:contactId', component: UpdateContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
