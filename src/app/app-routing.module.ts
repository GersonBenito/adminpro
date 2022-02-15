import { NgModule } from '@angular/core';
import { RouterModule, Routes }from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Chart1Component } from './pages/chart1/chart1.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const router: Routes = [
  {
    path:'', 
    component:PagesComponent,
    children:[// rutas protegidas
      {path:'dashboard', component: DashboardComponent},
      {path:'progress', component: ProgressComponent},
      {path:'', redirectTo:'/dashboard', pathMatch: 'full'},
    ]
  },
  
  // rutas publicas
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'char1', component: Chart1Component},

  {path:'**', component: NotfoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(router),
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
