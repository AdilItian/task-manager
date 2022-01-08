import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  public details = [
    {
      Detail1: 'Text',
    },
    {
      Detail2: 'Text',
    },
    {
      Detail3: 'Text',
    },
  ];
  public configs = [
    { Config1: 'Value' },
    { Config2: 'Value' },
    { Config3: 'Value' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
