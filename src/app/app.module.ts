import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from "@angular/forms";
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HeaderCompanentComponent } from './components/header-companent/header-companent.component';
import { HomeCompanentComponent } from './components/home-companent/home-companent.component';
import {AppRoutingModele} from "./app-routing.modele";

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    FooterComponentComponent,
    HeaderCompanentComponent,
    HomeCompanentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModele
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
