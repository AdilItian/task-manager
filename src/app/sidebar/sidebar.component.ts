import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../store';
import { TASK_FILTER_SIDEBAR } from '../actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @select((store) => store.sidebarTasks)
  tasks: any;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  public filteredTasks: any = [];

  ngOnInit(): void {
    this.filteredTasks = this.tasks;
  }

  searchTasks(e: any) {
    this.ngRedux.dispatch({
      type: TASK_FILTER_SIDEBAR,
      payload: {
        searchText: e.target.value,
      },
    });
  }
}
