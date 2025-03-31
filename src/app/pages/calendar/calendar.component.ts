import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { MiniCalendarComponent } from "./mini-calendar/mini-calendar.component";
import { BigCalendarComponent } from "./big-calendar/big-calendar.component";

@Component({
    selector: 'app-calendar',
    imports: [SidebarComponent, MiniCalendarComponent, BigCalendarComponent],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.css'
})
export class CalendarComponent {

}
