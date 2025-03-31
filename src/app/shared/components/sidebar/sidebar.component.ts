import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CALENDAR, DASHBOARD } from '../../../core/models/constants-routing';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  DASHBOARD_ROUTER = '../' + DASHBOARD.ROOT;
  CALENDAR_ROUTER = '../' + CALENDAR.ROOT;
}
