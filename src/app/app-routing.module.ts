import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DominiosComponent } from './components/dominios/dominios.component';
import { LoginComponent } from './components/login/login.component';
import { PagprincipalComponent } from './components/pagprincipal/pagprincipal.component';
import { ProcesosComponent } from './components/procesos/procesos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'pagprincipal', component: PagprincipalComponent },
  { path: 'dominios', component: DominiosComponent },
  { path: 'procesos', component: ProcesosComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
