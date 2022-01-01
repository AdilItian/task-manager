import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import Task from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  currentTasks: Array<Task> = [
    // { id: 1, taskName: 'Task 1', connectionId: 1, taskId: 1, description: 'asdf', type: 'asdf' },
  ];
  
  constructor(private taskService: TaskService) {}

  public selectedTask = null;
  public configureConnection: boolean = false;

  title = 'task-manager';

  ngOnInit(): void {
    this.getAllTasks();
  }


  async getAllTasks() {
    const data = await this.taskService.getAll();
    return this.currentTasks = data as unknown as Array<Task>;
  }

  handleConfigureConnection = (val: boolean): void => {
    this.configureConnection = val;
  }

  handleSelectTask = (task: any): void => {
    this.selectedTask = task;
  };

}
