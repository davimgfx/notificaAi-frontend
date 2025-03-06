import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { KanbanBoardComponent } from "./kanban-board/kanban-board.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, KanbanBoardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
