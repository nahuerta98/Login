import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Login Component
import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
//Pages
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'recoverPassword', component: RecoverPasswordComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', component: LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
