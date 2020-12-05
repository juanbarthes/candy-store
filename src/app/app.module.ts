import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandyListComponent } from './candy-list/candy-list.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { CandiesComponent } from './candies/candies.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { QuantityInputComponent } from './quantity-input/quantity-input.component'

@NgModule({
  declarations: [
    AppComponent,
    CandyListComponent,
    ContactComponent,
    CandiesComponent,
    AboutComponent,
    CartComponent,
    QuantityInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
