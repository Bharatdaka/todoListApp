export class Task {
    label: string;
    priority: number;
    status: boolean;
    
    constructor(label, priority, status) {
        this.label = label;
        this.priority = priority;
        this.status = status;
      
    }
}