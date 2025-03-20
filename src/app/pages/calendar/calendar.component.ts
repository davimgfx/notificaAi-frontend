import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { MiniCalendarComponent } from "./mini-calendar/mini-calendar.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [SidebarComponent, ButtonComponent, MiniCalendarComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

}
