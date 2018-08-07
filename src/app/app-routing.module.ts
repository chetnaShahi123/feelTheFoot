import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService as AuthGuard } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { RegisterComponent } from './register/register.component';
import { ChoreographersComponent } from './choreographers/choreographers.component';
import { DancersComponent } from './dancers/dancers.component';
import { SummerProgramsComponent } from './summer-programs/summer-programs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {LogoutComponent } from './logout/logout.component';
import { DetailsComponent } from './details/details.component';

const routes : Routes = [
  {
    path : 'home',
    component : HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
      path : 'feelTheFeet',
      component: HomeComponent
      }
    ]
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '',
    component : BaseComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'choreographers',
    component : ChoreographersComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'dancers',
    component : DancersComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'summerPrograms',
    component : SummerProgramsComponent
  },
  {
    path : 'contactUs',
    component : ContactUsComponent
  },
  {
    path : 'logout',
    component : LogoutComponent
  }
  // {
  //   path : 'details/:id',
  //   component : DetailsComponent
  // }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
