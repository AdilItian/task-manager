import { Component, OnInit, Input } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ActivatedRoute, Router } from '@angular/router';
import { IAppState } from '../../store';
import { SELECT_TASK } from '../../actions';
import { APP_URLS } from 'src/app/app-routing.module';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input()
  data: any = {
    id: '',
    title: '',
  };
  @Input()
  onSelect!: (args: any) => void;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router
  ) {}

  onSelectTask(task: any) {
    this.ngRedux.dispatch({
      type: SELECT_TASK,
      payload: {
        task,
      },
    });
    this.router.navigateByUrl(APP_URLS.TASK_DETAILS);
  }

  ngOnInit(): void {}
}
