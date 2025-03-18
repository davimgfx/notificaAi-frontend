import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AUTH, CALENDAR, DASHBOARD, HOME } from './core/models/constants-routing';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

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
  {
    path: DASHBOARD.ROOT,
    component: DashboardComponent,
  },
   {
    path: CALENDAR.ROOT,
    component: CalendarComponent,
  }
];
