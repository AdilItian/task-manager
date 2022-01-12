import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import Task from './models/task';
import { INCREMENT, TASK_SET_LIST } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentTasks: Array<Task> = [
  ];

  @select()
  counter: any;
  @select()
  tasks: any;

  constructor(private taskService: TaskService, private ngRedux: NgRedux<IAppState>) {}

  public selectedTask = null;
  public configureConnection: boolean = false;

  title = 'task-manager';
  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  ngOnInit(): void {
    this.getAllTasks();
  }

  async getAllTasks() {
    const data = await this.taskService.getAll();
    this.ngRedux.dispatch({
      type: TASK_SET_LIST,
      payload: {
        tasks: data
      }
    })
    return (this.currentTasks = data as unknown as Array<Task>);
  }

  handleConfigureConnection = (val: boolean): void => {
    this.configureConnection = val;
  };

  handleSelectTask = (task: any): void => {
    this.selectedTask = task;
  };
}
