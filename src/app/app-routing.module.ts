import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { PrivatepageComponent } from './components/privatepage/privatepage.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'registrer', component: RegisterpageComponent},
  {path: 'privado', component: PrivatepageComponent},
  {path: '**', component: NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
