import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { PreFooterComponent } from './pre-footer/pre-footer.component';
import { RegisterComponent } from './register/register.component';
import { ChoreographersComponent } from './choreographers/choreographers.component';
import { environment } from '../environments/environment';
import { DancersComponent } from './dancers/dancers.component';
import { SummerProgramsComponent } from './summer-programs/summer-programs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogoutComponent } from './logout/logout.component';
import { ShadowDirective } from './shadow.directive';
import { FancyDirective } from './fancy.directive';
import { DancerDetailComponent } from './dancer-detail/dancer-detail.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent,
    BaseComponent,
    FooterComponent,
    PreFooterComponent,
    RegisterComponent,
    ChoreographersComponent,
    DancersComponent,
    SummerProgramsComponent,
    ContactUsComponent,
    LogoutComponent,
    ShadowDirective,
    FancyDirective,
    DancerDetailComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
