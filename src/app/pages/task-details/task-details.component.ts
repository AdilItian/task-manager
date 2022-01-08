import { Component, OnInit } from '@angular/core';
import { APP_URLS } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  cancel() {
    return this.router.navigateByUrl(APP_URLS.HOME);
  }

  ngOnInit(): void {}
}

