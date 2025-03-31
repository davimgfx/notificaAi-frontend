export interface Column {
    id_column: number;
    name: string;
    tasks: Task[];
}

export interface Anticipation {
    minBefore: 5 | 10 | 15
}

export interface Apps {
    app: "instagram" | "telegram" | "whatsapp" | "x" | "gmail"
}


export interface Task {
  id_task: number;
  title: string;
  description: string;
  time: string;
  date: string;
  customMessage: string;
  repeater: "day" | "week" | "month" | "year" | "Mensal" | "Semanal" | "Diário" | "Anual" | null; 
  anticipation?: Anticipation[];
  apps: Apps[]; 
}

export const appIcons = {
  instagram: 'instagram.svg',
  telegram: 'telegram.svg',
  whatsapp: 'whatsapp.svg',
  x: 'x.svg',
  gmail: 'email.svg'
};

export const staticColumns: Column[] = [
    {   
        id_column: 1, 
        name: 'Planejado', 
        tasks: [
            { 
              id_task: 1, title: 'Task 1', description: 'Descrição da task 1',
              time: '10:00', date: '2021-10-10', repeater: "Semanal", customMessage: "Mensagem customizada",
              anticipation : [
                { minBefore: 5 },
                { minBefore: 15 },
              ],
              apps: [
                    { app: "instagram" },
                    { app: "x"},
                    { app: "telegram"},
                    { app: "gmail"},
              ]  
            },
            { 
              id_task: 1, title: 'Task 1', description: 'Descrição da task 1',
              time: '15:00', date: '2021-10-10', repeater: "Mensal", customMessage: "Mensagem customizada",
              anticipation: [],  
              apps: [
                { app: "instagram" },
               
              ]  
            },
            { 
              id_task: 1, title: 'Task 1', description: 'Descrição da task 1',
              time: '18:00', date: '2021-10-10', repeater: null, customMessage: "Mensagem customizada",
              anticipation : [
                { minBefore: 5 },
            
              ],
              apps: [
               
                { app: "x"}
              ]  
            },
        ]
    },
     {   
        id_column: 2, 
        name: 'Planejado', 
        tasks: [
            { 
              id_task: 1, title: 'Task 1', description: 'Descrição da task 1',
              time: '10:00', date: '2021-10-10', repeater: "Mensal", customMessage: "Mensagem customizada",
              anticipation : [
                { minBefore: 5 },
                { minBefore: 10 },
                { minBefore: 15 },
              ],
              apps: [
                { app: "instagram" },
                { app: "x"}
              ]  
            },
        ]
    },
     {   
        id_column: 3, 
        name: 'Planejado', 
        tasks: [
           { 
              id_task: 1, title: 'Task 1', description: 'Descrição da task 1',
              time: '10:00', date: '2021-10-10', repeater: "Mensal", customMessage: "Mensagem customizada",
              anticipation : [
                { minBefore: 5 },
                { minBefore: 10 },
                { minBefore: 15 },
              ],
              apps: [
                { app: "instagram" },
                { app: "x"}
              ]  
            },
        ]
    },
     {   
        id_column: 4, 
        name: 'Planejado', 
        tasks: [
            
        ]
    },
     {   
        id_column: 5, 
        name: 'Planejado', 
        tasks: [
            { 
              id_task: 1, title: 'Task 1', description: 'Descrição da task 1',
              time: '10:00', date: '2021-10-10', repeater: "month", customMessage: "Mensagem customizada",
              anticipation : [
                { minBefore: 5 },
                { minBefore: 10 },
                { minBefore: 15 },
              ],
              apps: [
                { app: "instagram" },
                { app: "x"}
              ]  
            },
        ]
    },
     {   
        id_column: 6, 
        name: 'Planejado', 
        tasks: [
            { 
              id_task: 1, title: 'Task 1', description: 'Descrição da task 1',
              time: '10:00', date: '2021-10-10', repeater: "month", customMessage: "Mensagem customizada",
              anticipation : [
                { minBefore: 5 },
                { minBefore: 10 },
                { minBefore: 15 },
              ],
              apps: [
                { app: "instagram" },
                { app: "x"}
              ]  
            },
        ]
    },
     {   
        id_column: 7, 
        name: 'Planejado', 
        tasks: [
            { 
              id_task: 1, title: 'Task 1', description: 'Descrição da task 1',
              time: '10:00', date: '2021-10-10', repeater: "month", customMessage: "Mensagem customizada",
              anticipation : [
                { minBefore: 5 },
                { minBefore: 10 },
                { minBefore: 15 },
              ],
              apps: [
                { app: "instagram" },
                { app: "x"}
              ]  
            },
        ]
    },
  ];

