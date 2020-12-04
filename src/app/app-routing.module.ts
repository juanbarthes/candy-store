import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CandiesComponent } from './candies/candies.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: CandiesComponent},
  {path: 'candies', component: CandiesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
