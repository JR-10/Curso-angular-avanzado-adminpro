import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [

  // determinar rutas protegidas con rutas hijas 
  {path: '', component:PagesComponent, children: [
    // rutas hijas
    {path:'dashboard', component: DashboardComponent},
    {path:'progress', component: ProgressComponent},
    {path:'grafica1', component: Grafica1Component},
    {path:'', redirectTo: '/dashboard', pathMatch:'full'}, // cuando el path es vacio redirecciona al dashboard+

  ]},
  
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},

  {path:'**', component: NopagefoundComponent}, // cuando ninguna ruta corresponda se envia la notpagefound

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
