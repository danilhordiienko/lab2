"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
        console.log("Added task:", task);
        return this.tasks.length;
    }
    listAllTasks() {
        console.log("Tasks:");
        for (let task of this.tasks) {
            console.log(task);
        }
    }
    deleteTask(task) {
        let index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log("Deleted task:", task);
        }
        return this.tasks.length;
    }
}
exports.TaskManager = TaskManager;
