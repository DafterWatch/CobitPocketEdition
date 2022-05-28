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
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDWrLDx28-SG-4XOx9L_kTQVQyd4WoDjTo",
  authDomain: "cobitpocketedition.firebaseapp.com",
  projectId: "cobitpocketedition",
  storageBucket: "cobitpocketedition.appspot.com",
  messagingSenderId: "20202039173",
  appId: "1:20202039173:web:83a308464c699dee5ec6ec"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagprincipalComponent,
    LoginComponent,
    DominiosComponent,
    ProcesosComponent,
    EvaluacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
