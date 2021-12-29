import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public tasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
    { id: 4, title: 'Task 4' },
  ];
  
  public selectedTask = null;
  public configureConnection: boolean = false;

  title = 'task-manager';

  ngOnInit(): void {
  }


  handleConfigureConnection = (val: boolean): void => {
    this.configureConnection = val;
  }

  handleSelectTask = (task: any): void => {
    this.selectedTask = task;
  };

}
