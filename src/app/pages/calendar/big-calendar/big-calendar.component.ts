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
    activeDay: WritableSignal<DateTime> = signal(DateTime.local());
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

     activeDayMeetings: Signal<string[]> = computed(() => {
        const activeDay = this.activeDay();
        if (activeDay === null) {
            return [];
        }
        const activeDayISO = activeDay.toISODate();

        if (!activeDayISO) {
            return [];
        }
        return this.meetings[activeDayISO] || [];
    });

    meetings: Record<string, string[]> = {
        '2025-03-20': ["Use drugs", "Drink water"],
        '2025-03-21': ["Use drugs", "Drink water"],
    };

    getEventsForDay(dayOfMonth: DateTime): string[] | null {
        const dayISO = dayOfMonth.toISODate();
        if (dayISO) {
            return this.meetings[dayISO];
        }
        return null;
    }
}
