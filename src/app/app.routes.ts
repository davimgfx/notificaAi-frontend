import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AUTH, CALENDAR, DASHBOARD, HOME, NOT_FOUND } from './core/models/constants-routing';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';


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
  },
  {
    path: NOT_FOUND.ROOT,
    component: NotFoundComponent
  },
];
