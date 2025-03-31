import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    Signal,
    signal,
    WritableSignal,
} from '@angular/core';
import { DateTime, Info, Interval } from 'luxon';

@Component({
    selector: 'app-mini-calendar',
    imports: [CommonModule],
    templateUrl: './mini-calendar.component.html',
    styleUrl: './mini-calendar.component.css',
})
export class MiniCalendarComponent {
    today: Signal<DateTime> = signal(DateTime.local());
    fistDayOfActiveMonth: WritableSignal<DateTime> = signal(
        this.today().startOf('month')
    );

    weekDays: Signal<string[]> = signal(
        Info.weekdays('narrow').map(date => date.toLowerCase())
    );

    daysOfMonth: Signal<DateTime[][]> = computed(() => {
        const days = Interval.fromDateTimes(
            this.fistDayOfActiveMonth().startOf('week'),
            this.fistDayOfActiveMonth().endOf('month').endOf('week')
        )
            .splitBy({ days: 1 })
            .map(day => {
                if (day.start === null) {
                    throw new Error('Day is null');
                }
                return day.start;
            });

        // Divide o array de dias em semanas (grupos de 7)
        const weeks: DateTime[][] = [];
        console.log(weeks);
        for (let i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7));
        }

        return weeks;
    });

    activeDay: WritableSignal<DateTime> = signal(DateTime.local());
    DATE_MED = DateTime.DATE_MED;

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
        '2025-03-20': ['Use drugs', 'Drink water'],
        '2025-03-21': ['Use drugs', 'Drink water'],
    };

    getEventsForDay(dayOfMonth: DateTime): string[] | null {
        const dayISO = dayOfMonth.toISODate();
        if (dayISO) {
            return this.meetings[dayISO];
        }
        return null;
    }

    onDayClick(dayOfMonth: DateTime): void {
        if (dayOfMonth.month !== this.fistDayOfActiveMonth().month) {
            // Atualiza o mês ativo para o mês do dia clicado
            this.fistDayOfActiveMonth.set(dayOfMonth.startOf('month'));
        }

        // Atualiza o dia ativo
        this.activeDay.set(dayOfMonth);
    }

    goToPreviousMonth(): void {
        this.fistDayOfActiveMonth.set(
            this.fistDayOfActiveMonth().minus({ months: 1 })
        );
    }

    goToNextMonth(): void {
        this.fistDayOfActiveMonth.set(
            this.fistDayOfActiveMonth().plus({ months: 1 })
        );
    }
}
