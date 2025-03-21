import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
import { DateTime, Interval } from 'luxon';
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-big-calendar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './big-calendar.component.html',
  styleUrl: './big-calendar.component.css'
})
export class BigCalendarComponent {
    today: Signal<DateTime> = signal(DateTime.local());
    fistDayOfActiveMonth: WritableSignal<DateTime> = signal(this.today().startOf('month'));
      daysOfMonth: Signal<DateTime[][]> = computed(() => {
            const days = Interval.fromDateTimes(
                this.fistDayOfActiveMonth().startOf("week"),
                this.fistDayOfActiveMonth().endOf("month").endOf("week")
            ).splitBy({ days: 1 }).map((day) => {
                if (day.start === null) {
                    throw new Error("Day is null");
                }
                return day.start;
            });
    
            // Divide o array de dias em semanas (grupos de 7)
            const weeks: DateTime[][] = [];
            console.log(weeks)
            for (let i = 0; i < days.length; i += 7) {
                weeks.push(days.slice(i, i + 7));
            }
    
            return weeks;
        });
}
