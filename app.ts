import { TaskManager } from "./taskManager";

const taskManager = new TaskManager();

taskManager.addTask("Study TypeScript");
taskManager.addTask("Complete Assignment");
taskManager.listAllTasks();
taskManager.deleteTask("Study TypeScript");
taskManager.listAllTasks();
