import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { RegisterComponent } from './register/register.component';
import { ChoreographersComponent } from './choreographers/choreographers.component';

const routes : Routes = [
  {
    path : 'home',
    component : HomeComponent,
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
    component : ChoreographersComponent
  }
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
