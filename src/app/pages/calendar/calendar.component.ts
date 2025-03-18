import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [SidebarComponent, ButtonComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

}
