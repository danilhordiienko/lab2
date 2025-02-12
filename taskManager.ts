export interface TaskManagerInterface {
    tasks: string[];
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
}

export class TaskManager implements TaskManagerInterface {
    tasks: string[] = [];

    addTask(task: string): number {
        this.tasks.push(task);
        console.log("Added task:", task);
        return this.tasks.length;
    }

    listAllTasks(): void {
        console.log("Tasks:");
        for (let task of this.tasks) {
            console.log(task);
        }
    }

    deleteTask(task: string): number {
        let index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log("Deleted task:", task);
        }
        return this.tasks.length;
    }
}
