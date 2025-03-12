import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { appIcons, Apps, Column, staticColumns } from './constants-kanban';



@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})

export class KanbanBoardComponent {
  columns: Column[] = staticColumns

  apps = appIcons;
}

