import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public tasks = [
    { id: 1, title: 'Association  with database' },
    { id: 2, title: 'Databse linking' },
    { id: 3, title: 'Frontend development' },
    { id: 4, title: 'Laptop environment' },
  ];
  public selectedTask = null;

  title = 'task-manager';
  handleSelectTask = (task: any): void => {
    this.selectedTask = task;
  };
}
