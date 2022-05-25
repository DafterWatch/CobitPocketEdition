import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagprincipalComponent } from './components/pagprincipal/pagprincipal.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DominiosComponent } from './components/dominios/dominios.component';
import { ProcesosComponent } from './components/procesos/procesos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagprincipalComponent,
    LoginComponent,
    DominiosComponent,
    ProcesosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
