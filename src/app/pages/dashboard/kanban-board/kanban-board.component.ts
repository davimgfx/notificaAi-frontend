import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Column {
    id_column: number;
    name: string;
    tasks: Task[];
}

interface Task {
  id_task: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})

export class KanbanBoardComponent {
  columns: Column[] =[
    {   
        id_column: 1, 
        name: 'Planejado', 
        tasks: [
            { id_task: 1, title: 'Task 1', description: 'Descrição da task 1' },
            { id_task: 2, title: 'Task 2', description: 'Descrição da task 2' },
            { id_task: 3, title: 'Task 3', description: 'Descrição da task 3' }, 
            { id_task: 4, title: 'Task 4', description: 'Descrição da task 4' }
        ]
    },
    {
        id_column: 2, 
        name: 'A fazer', 
        tasks: [{ id_task: 5, title: 'Task 5', description: 'Descrição da task 5' }] 
    },
    {
        id_column: 3, 
        name: 'Pronto', 
        tasks: [{ id_task: 6, title: 'Task 6', description: 'Descrição da task 6' }]
    },
    {
        id_column: 4, 
        name: 'Pronto', 
        tasks: [{ id_task: 6, title: 'Task 6', description: 'Descrição da task 6' }]
    },
    {
        id_column: 5, 
        name: 'Pronto', 
        tasks: [{ id_task: 6, title: 'Task 6', description: 'Descrição da task 6' }]
    },
    {
        id_column: 6, 
        name: 'Pronto', 
        tasks: [{ id_task: 6, title: 'Task 6', description: 'Descrição da task 6' }]
    },
    {
        id_column: 7, 
        name: 'Pronto', 
        tasks: [{ id_task: 6, title: 'Task 6', description: 'Descrição da task 6' }]
    },
  ];



}

