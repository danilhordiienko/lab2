"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskManager_1 = require("./taskManager");
const taskManager = new taskManager_1.TaskManager();
taskManager.addTask("Study TypeScript");
taskManager.addTask("Complete Assignment");
taskManager.listAllTasks();
taskManager.deleteTask("Study TypeScript");
taskManager.listAllTasks();
