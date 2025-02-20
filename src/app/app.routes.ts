import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AUTH, HOME } from './core/models/constants-routing';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
    {
    path: HOME.ROOT,
    component: HomeComponent,
  },
  {
    path: AUTH.LOGIN,
    component: LoginComponent,
  },
  {
    path: AUTH.REGISTER,
    component: RegisterComponent,
  },
];
