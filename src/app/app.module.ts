import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { PrivatepageComponent } from './components/privatepage/privatepage.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    RegisterpageComponent,
    LoginpageComponent,
    PrivatepageComponent,
    NotfoundpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
