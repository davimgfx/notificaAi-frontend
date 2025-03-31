import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { appIcons, Column, staticColumns } from './constants-kanban';

@Component({
    selector: 'app-kanban-board',
    imports: [CommonModule],
    templateUrl: './kanban-board.component.html',
    styleUrl: './kanban-board.component.css',
})
export class KanbanBoardComponent {
    columns: Column[] = staticColumns;

    apps = appIcons;
}
