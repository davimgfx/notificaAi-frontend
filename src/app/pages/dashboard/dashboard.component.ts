import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { KanbanBoardComponent } from "./kanban-board/kanban-board.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, KanbanBoardComponent, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    today_date: Date = new Date();
    formatted_date: string = this.today_date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });

}
