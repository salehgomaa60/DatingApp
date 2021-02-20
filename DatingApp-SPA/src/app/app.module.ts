import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MembersListComponent } from './members-list/members-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent, MembersListComponent, ListsComponent, MessagesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule, BsDropdownModule.forRoot(), RouterModule.forRoot(appRoutes)],
  providers: [AuthService, ErrorInterceptorProvider, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
